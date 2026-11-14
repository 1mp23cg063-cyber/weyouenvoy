import { useState } from "react";
import { submitContact } from "@/lib/envoy-client";
import { SITE } from "@/lib/site";

const CODES = [
  "+91",
  "+1",
  "+7",
  "+20",
  "+27",
  "+30",
  "+31",
  "+32",
  "+33",
  "+34",
  "+36",
  "+39",
  "+40",
  "+41",
  "+43",
  "+44",
  "+45",
  "+46",
  "+47",
  "+48",
  "+49",
  "+51",
  "+52",
  "+54",
  "+55",
  "+56",
  "+57",
  "+58",
  "+60",
  "+61",
  "+62",
  "+63",
  "+64",
  "+65",
  "+66",
  "+81",
  "+82",
  "+84",
  "+86",
  "+90",
  "+92",
  "+94",
  "+95",
  "+98",
  "+212",
  "+230",
  "+233",
  "+234",
  "+254",
  "+255",
  "+256",
  "+351",
  "+352",
  "+353",
  "+358",
  "+380",
  "+420",
  "+421",
  "+852",
  "+853",
  "+855",
  "+856",
  "+880",
  "+886",
  "+960",
  "+961",
  "+962",
  "+964",
  "+965",
  "+966",
  "+967",
  "+968",
  "+971",
  "+972",
  "+973",
  "+974",
  "+975",
  "+976",
  "+977",
  "+994",
  "+995",
  "+996",
  "+998",
];
const INDUSTRY_OPTS = [
  "Healthcare / Hospital",
  "Clinic / Diagnostics",
  "Schools & Colleges",
  "Spas & Wellness",
  "Real Estate",
  "Resorts & Hotels",
  "Other Business",
];
const EMAIL =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const field =
  "h-12 w-full rounded-xl border border-input bg-background px-4 text-foreground outline-none transition focus:ring-2 focus:ring-ring";

export function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<null | {
    type: "error" | "success" | "offline";
    text: string;
    name?: string;
    wa?: string;
  }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const form = e.currentTarget;
    const f = new FormData(form);
    const g = (k: string) => String(f.get(k) ?? "").trim();
    if (g("bot-field")) return;
    const name = g("name"),
      cc = g("cc") || "+91",
      num = g("phone"),
      email = g("email"),
      company = g("company"),
      industry = g("industry"),
      channel = g("channel") || "WhatsApp",
      message = g("message");
    const consent = f.get("consent") === "on";
    const digits = num.replace(/\D/g, "");
    const err = (text: string, id: string) => {
      setStatus({ type: "error", text });
      document.getElementById(id)?.focus();
    };
    if (!name || name.length < 2 || /[<>]/.test(name))
      return err("Please enter your full name (minimum 2 characters).", "cfName");
    if (digits.length < 7 || digits.length > 15)
      return err("Please enter a valid phone number (7 to 15 digits).", "cfNum");
    if (!EMAIL.test(email))
      return err("Please enter a valid work or personal email address.", "cfMail");
    if (!consent) return err("Please check the consent box to proceed.", "cfConsent");

    setBusy(true);
    setStatus(null);
    const payload = {
      name,
      country_code: cc,
      phone: `${cc} ${digits}`,
      email,
      company,
      industry,
      preferred_channel: channel,
      message,
      consent,
      source: "weyouenvoy.com/contact",
    };
    const wa = `${SITE.whatsappLink}?text=${encodeURIComponent(`Hi enVoy team, I am ${company || name} (${email}). ${message}`)}`;
    let ok = false;
    for (let attempt = 0; attempt < 2 && !ok; attempt++) {
      try {
        const r = await submitContact(payload);
        ok = r.ok;
        if (!ok && r.status >= 400 && r.status < 500) break;
      } catch {
        /* retry once */
      }
    }
    setBusy(false);
    if (ok) {
      form.reset();
      setStatus({
        type: "success",
        text: `Thank you, ${name}! Your inquiry has been received. Our team will contact you within 24 hours, or chat with us instantly on `,
        wa,
      });
    } else {
      setStatus({
        type: "offline",
        text: "We couldn't send your message just now. Please reach us directly on ",
        wa,
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10"
      aria-label="Write to enVoy"
    >
      <p className="sr-only">
        <label>
          Do not fill this field: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div>
        <label htmlFor="cfName" className="mb-1.5 block text-sm font-medium">
          Your name
        </label>
        <input id="cfName" name="name" autoComplete="name" required className={field} />
      </div>
      <div className="grid grid-cols-[110px_1fr] gap-3">
        <div>
          <label htmlFor="cfCC" className="mb-1.5 block text-sm font-medium">
            Country code
          </label>
          <select id="cfCC" name="cc" defaultValue="+91" className={field}>
            {CODES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cfNum" className="mb-1.5 block text-sm font-medium">
            Phone number
          </label>
          <input
            id="cfNum"
            name="phone"
            type="tel"
            autoComplete="tel-national"
            required
            className={field}
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="cfMail" className="mb-1.5 block text-sm font-medium">
            Work Email
          </label>
          <input
            id="cfMail"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={field}
          />
        </div>
        <div>
          <label htmlFor="cfBiz" className="mb-1.5 block text-sm font-medium">
            Company or hospital
          </label>
          <input id="cfBiz" name="company" autoComplete="organization" className={field} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="cfIndustry" className="mb-1.5 block text-sm font-medium">
            Industry
          </label>
          <select id="cfIndustry" name="industry" defaultValue="" className={field}>
            <option value="">Select Industry</option>
            {INDUSTRY_OPTS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cfChannel" className="mb-1.5 block text-sm font-medium">
            Preferred Channel
          </label>
          <select id="cfChannel" name="channel" defaultValue="WhatsApp" className={field}>
            <option value="WhatsApp">Preferred Reply Channel: WhatsApp</option>
            <option value="Email">Preferred Reply Channel: Email</option>
            <option value="Phone">Preferred Reply Channel: Phone call</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cfMsg" className="mb-1.5 block text-sm font-medium">
          Tell us about your requirements
        </label>
        <textarea
          id="cfMsg"
          name="message"
          rows={4}
          maxLength={4000}
          className="w-full rounded-xl border border-input bg-background p-4 text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          id="cfConsent"
          name="consent"
          type="checkbox"
          className="mt-1 h-4 w-4 accent-[var(--accent)]"
        />
        I consent to be contacted via WhatsApp and email regarding this inquiry in accordance with
        DPDPA 2023 guidelines.
      </label>
      <button
        type="submit"
        disabled={busy}
        className="mt-2 h-12 rounded-full bg-primary font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
      >
        {busy ? "Sending..." : "Write to us"}
      </button>
      {status && (
        <div
          role="status"
          aria-live="polite"
          className={
            status.type === "error"
              ? "text-sm text-destructive"
              : "rounded-xl bg-accent-soft p-4 text-sm text-foreground"
          }
        >
          {status.text}
          {status.wa && (
            <>
              <a
                href={status.wa}
                target="_blank"
                rel="noopener"
                className="font-semibold underline"
              >
                WhatsApp ({SITE.whatsapp})
              </a>
              {status.type === "offline" ? (
                <>
                  {" "}
                  or{" "}
                  <a className="font-semibold underline" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                  .
                </>
              ) : (
                "."
              )}
            </>
          )}
        </div>
      )}
    </form>
  );
}
