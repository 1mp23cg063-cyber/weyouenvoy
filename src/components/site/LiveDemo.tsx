import { useEffect, useRef, useState } from "react";
import { ENVOY_API } from "@/lib/site";
import { crawlDemo, validateSafeCrawlUrl } from "@/lib/envoy-client";
import { Reveal } from "./primitives";

const STEPS = [
  "Estimated progress: Scanning your website...",
  "Estimated progress: Reading your services & pricing...",
  "Estimated progress: Training your assistant...",
];
const SAFE_ID = /^[a-zA-Z0-9_\-.]+$/;

function removeWidget() {
  document.getElementById("envoy-demo-script")?.remove();
  document.getElementById("weyoux-root")?.remove();
}

/** Live demo: real POST /api/demo/crawl, then loads the production widget with the returned tenant. */
export function LiveDemo() {
  const [state, setState] = useState<"idle" | "scan" | "ready" | "error">("idle");
  const [url, setUrl] = useState("");
  const [step, setStep] = useState(0);
  const [msg, setMsg] = useState("");
  const [biz, setBiz] = useState("");
  const ctrl = useRef<AbortController | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const cleanup = () => {
    if (timer.current) clearInterval(timer.current);
    ctrl.current?.abort();
    ctrl.current = null;
  };
  useEffect(() => () => cleanup(), []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "scan") return;
    const check = validateSafeCrawlUrl(url);
    if (!check.valid) {
      setState("error");
      setMsg(check.error);
      return;
    }
    cleanup();
    setState("scan");
    setStep(0);
    timer.current = setInterval(() => setStep((s) => Math.min(s + 1, STEPS.length - 1)), 3500);
    ctrl.current = new AbortController();
    try {
      const r = await crawlDemo(check.url, ctrl.current.signal);
      cleanup();
      const d = r.data;
      if (!r.ok)
        throw new Error(
          d.detail || d.message || "We could not read that website. Please try another URL.",
        );
      const id = d.demo_id;
      if (typeof id !== "string" || !id)
        throw new Error("Received an invalid demo response from server (missing demo_id).");
      if (!SAFE_ID.test(id))
        throw new Error("Security check failed: malformed demo tenant identifier.");
      if (d.api_key && (typeof d.api_key !== "string" || !SAFE_ID.test(d.api_key)))
        throw new Error("Security check failed: malformed API key.");
      removeWidget();
      const s = document.createElement("script");
      s.id = "envoy-demo-script";
      s.crossOrigin = "anonymous";
      s.src = `${ENVOY_API}/widget.js?v=${Date.now()}`;
      s.setAttribute("data-tenant", id);
      if (d.api_key) s.setAttribute("data-key", d.api_key);
      s.onerror = () => {
        removeWidget();
        setState("error");
        setMsg(
          "Failed to load the demo assistant widget. Please check your network connection or try again.",
        );
      };
      document.body.appendChild(s);
      setBiz(d.business_name ?? "");
      setState("ready");
      setTimeout(() => {
        const root = document.getElementById("weyoux-root");
        (root?.shadowRoot?.getElementById("weyoux-btn") as HTMLButtonElement | null)?.click();
      }, 900);
    } catch (err) {
      cleanup();
      const m = err instanceof Error ? err.message : "";
      setState(m === "cancel" ? "idle" : "error");
      setMsg(
        m === "timeout"
          ? "The request timed out. Your site may be slow to respond or blocking automated crawlers."
          : m || "Something went wrong. Please try another URL.",
      );
    }
  }

  return (
    <section id="demo" className="scroll-mt-20 py-24 md:py-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-border bg-paper p-5 sm:p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 w-full min-w-0">
            <div className="w-full min-w-0">
              <p className="eyebrow">Live demo · No signup</p>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display leading-tight text-foreground break-words">
                Experience your own AI chatbot in 30 seconds.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground break-words leading-relaxed">
                Test with your website URL. enVoy reads your public website and builds your
                assistant instantly.
              </p>
            </div>
            <div
              className="w-full min-w-0 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-soft"
              aria-live="polite"
            >
              {(state === "idle" || state === "error") && (
                <form onSubmit={submit} noValidate className="w-full min-w-0">
                  <label
                    htmlFor="demoUrl"
                    className="block text-sm font-semibold tracking-tight text-foreground"
                  >
                    Your website
                  </label>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row w-full min-w-0">
                    <input
                      id="demoUrl"
                      type="url"
                      inputMode="url"
                      autoComplete="url"
                      placeholder="yourbusiness.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="h-12 sm:h-14 w-full min-w-0 sm:flex-1 rounded-2xl border border-input/80 bg-background px-4 sm:px-5 text-base text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15 leading-normal"
                    />
                    <button
                      type="submit"
                      className="h-12 sm:h-14 w-full sm:w-auto shrink-0 rounded-2xl bg-primary px-6 sm:px-7 text-sm sm:text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      See it live →
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Instant preview · No signup required
                  </p>
                  {state === "error" && (
                    <p role="alert" className="mt-3 text-sm font-medium text-destructive">
                      {msg}
                    </p>
                  )}
                </form>
              )}
              {state === "scan" && (
                <div className="py-2 w-full min-w-0">
                  <p className="text-sm font-semibold text-foreground mb-3">Analyzing website</p>
                  <div className="h-2 overflow-hidden rounded-full bg-muted w-full">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-[3500ms]"
                      style={{ width: `${30 + step * 30}%` }}
                    />
                  </div>
                  <p className="mt-4 text-sm text-foreground break-words">{STEPS[step]}</p>
                  <button
                    onClick={() => {
                      cleanup();
                      setState("idle");
                    }}
                    className="mt-4 text-xs text-muted-foreground hover:text-foreground underline transition-colors cursor-pointer"
                  >
                    Cancel crawl
                  </button>
                </div>
              )}
              {state === "ready" && (
                <div className="py-2 w-full min-w-0">
                  <p className="text-2xl font-display font-semibold text-foreground">
                    Your AI is ready.
                  </p>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground break-words">
                    {biz
                      ? `${biz}'s assistant is open on this page: ask it anything.`
                      : "Your assistant is open on this page: ask it anything."}
                  </p>
                  <button
                    onClick={() => {
                      removeWidget();
                      setUrl("");
                      setState("idle");
                    }}
                    className="mt-5 rounded-2xl border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent/10 transition-colors cursor-pointer"
                  >
                    Try another
                  </button>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
