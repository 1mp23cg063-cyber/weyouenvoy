type YashErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type YashEvents = {
  track?: (event: string, properties?: Record<string, unknown>) => string | null;
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: YashErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __yashEvents?: YashEvents;
    __yashReportRuntimeError?: (payload: {
      message: string;
      stack?: string;
      filename?: string;
    }) => void;
  }
}

export function reportYashError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__yashEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  // Forward to runtime reporting hook
  const stack = error instanceof Error ? error.stack : undefined;
  window.__yashReportRuntimeError?.({
    message: describeThrown(error),
    ...(stack !== undefined && { stack }),
    filename: window.location.pathname,
  });
}

function describeThrown(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}
