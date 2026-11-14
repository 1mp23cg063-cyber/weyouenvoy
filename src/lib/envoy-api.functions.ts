import { createServerFn } from "@tanstack/react-start";

// Thin pass-through to the existing production API (envoy.weyoux.com).
// Used only when a direct browser call is blocked (e.g. CORS on preview hosts).
// Endpoints and payloads are forwarded unchanged.
const API = "https://envoy.weyoux.com";

export type ApiData = {
  detail?: string;
  message?: string;
  demo_id?: string;
  api_key?: string;
  business_name?: string;
};

function pick(raw: unknown): ApiData {
  const o = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const out: ApiData = {};
  for (const k of ["detail", "message", "demo_id", "api_key", "business_name"] as const) {
    const v = o[k];
    if (typeof v === "string") out[k] = v;
    else if (v != null && k === "detail") out[k] = JSON.stringify(v);
  }
  return out;
}

async function forward(path: string, body: unknown, timeoutMs: number) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(API + path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    const text = await res.text();
    let data: unknown = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = {};
    }
    return { ok: res.ok, status: res.status, data: pick(data) };
  } catch (e) {
    return {
      ok: false,
      status: 0,
      data: { detail: ctrl.signal.aborted ? "timeout" : String(e) } as ApiData,
    };
  } finally {
    clearTimeout(t);
  }
}

export const proxyDemoCrawl = createServerFn({ method: "POST" })
  .inputValidator((d: { url: string }) => {
    if (!d || typeof d.url !== "string" || d.url.length > 500) throw new Error("Invalid url");
    return { url: d.url };
  })
  .handler(async ({ data }) => forward("/api/demo/crawl", data, 45000));

export const proxyContact = createServerFn({ method: "POST" })
  .inputValidator((d: Record<string, unknown>) => {
    if (!d || typeof d !== "object") throw new Error("Invalid payload");
    const s = (v: unknown, max = 2000) => (typeof v === "string" ? v.slice(0, max) : "");
    return {
      name: s(d["name"], 120),
      country_code: s(d["country_code"], 8),
      phone: s(d["phone"], 40),
      email: s(d["email"], 200),
      company: s(d["company"], 200),
      industry: s(d["industry"], 100),
      preferred_channel: s(d["preferred_channel"], 40),
      message: s(d["message"], 4000),
      consent: d["consent"] === true,
      source: s(d["source"], 100),
    };
  })
  .handler(async ({ data }) => forward("/api/contact", data, 20000));
