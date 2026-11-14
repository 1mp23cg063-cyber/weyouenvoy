import { ENVOY_API } from "./site";
import { proxyContact, proxyDemoCrawl, type ApiData } from "./envoy-api.functions";

type Result = { ok: boolean; status: number; data: ApiData };

// Direct browser call first (as on the original site); if the browser blocks it
// (CORS/network), retry once through the server pass-through.
async function call(
  path: string,
  body: unknown,
  timeoutMs: number,
  signal?: AbortSignal,
): Promise<Result> {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort("timeout"), timeoutMs);
  signal?.addEventListener("abort", () => ctrl.abort("cancel"));
  try {
    const res = await fetch(ENVOY_API + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    const data = (await res.json().catch(() => ({}))) as ApiData;
    return { ok: res.ok, status: res.status, data };
  } catch (e) {
    if (ctrl.signal.aborted)
      throw new Error(ctrl.signal.reason === "timeout" ? "timeout" : "cancel");
    void e;
    if (path === "/api/demo/crawl") return proxyDemoCrawl({ data: body as { url: string } });
    return proxyContact({ data: body as Record<string, unknown> });
  } finally {
    clearTimeout(t);
  }
}

export function validateSafeCrawlUrl(
  raw: string,
): { valid: true; url: string } | { valid: false; error: string } {
  let v = raw.trim();
  if (!v) return { valid: false, error: "Please enter your website address." };
  if (!/^https?:\/\//i.test(v)) v = "https://" + v;
  let u: URL;
  try {
    u = new URL(v);
  } catch {
    return { valid: false, error: "That doesn't look like a valid website address." };
  }
  const h = u.hostname.toLowerCase();
  if (!["http:", "https:"].includes(u.protocol))
    return { valid: false, error: "Only http and https websites are supported." };
  if (
    h === "localhost" ||
    h.endsWith(".local") ||
    h.endsWith(".internal") ||
    /^(\d{1,3}\.){3}\d{1,3}$/.test(h) ||
    h.includes(":") ||
    !h.includes(".")
  )
    return {
      valid: false,
      error: "Please enter a public website domain (not an IP address or local host).",
    };
  return { valid: true, url: u.toString() };
}

export const crawlDemo = (url: string, signal?: AbortSignal) =>
  call("/api/demo/crawl", { url }, 45000, signal);
export const submitContact = (payload: Record<string, unknown>) =>
  call("/api/contact", payload, 20000);
