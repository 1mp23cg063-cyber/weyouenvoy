import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ChatMsg } from "@/lib/site";
import { cn } from "@/lib/utils";

/** WhatsApp-style phone that plays a scripted conversation when scrolled into view. */
export function ChatMockup({
  contact,
  messages,
  label = "Sample simulation",
  className,
  loop = true,
}: {
  contact: string;
  messages: ChatMsg[];
  label?: string;
  className?: string;
  loop?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduce) {
      setCount(messages.length);
      setTyping(false);
      return;
    }
    if (!inView) return;
    if (count >= messages.length) {
      if (!loop) return;
      const t = setTimeout(() => setCount(0), 4500);
      return () => clearTimeout(t);
    }
    const next = messages[count];
    if (!next) return;
    if (next.from === "out") setTyping(true);
    const t = setTimeout(
      () => {
        setTyping(false);
        setCount((c) => c + 1);
      },
      next.from === "out" ? 1300 : 900,
    );
    return () => clearTimeout(t);
  }, [count, inView, reduce, messages, loop]);

  return (
    <div ref={ref} className={cn("relative mx-auto w-full max-w-[320px]", className)}>
      <div className="rounded-[2.6rem] border border-ink/80 bg-ink p-2.5 shadow-lift">
        <div className="overflow-hidden rounded-[2.1rem] bg-chat">
          <div className="flex items-center gap-3 bg-chat-head px-4 pb-3 pt-6 text-ink-foreground">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-ink-foreground/20 text-xs font-bold">
              {contact[0]}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{contact}</p>
              <p className="text-[11px] opacity-80">Business Account · powered by enVoy</p>
            </div>
          </div>
          <div
            className="flex h-[400px] flex-col justify-end gap-2 overflow-hidden px-3 py-4"
            aria-live="polite"
          >
            <AnimatePresence initial={false}>
              {messages.slice(0, count).map((m, i) => (
                <motion.div
                  key={i + m.text}
                  layout
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    "max-w-[82%] rounded-xl px-3 py-2 text-[13px] leading-snug text-foreground shadow-sm",
                    m.from === "out"
                      ? "self-end rounded-tr-sm bg-chat-out"
                      : "self-start rounded-tl-sm bg-chat-in",
                  )}
                >
                  {m.text}
                  {m.meta && (
                    <span className="mt-1 block text-right text-[10px] text-muted-foreground">
                      {m.meta}
                      {m.from === "out" && " ✓✓"}
                    </span>
                  )}
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-1 self-end rounded-xl bg-chat-out px-3 py-3"
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="typing-dot h-1.5 w-1.5 rounded-full bg-muted-foreground"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2 border-t border-border/60 bg-card px-3 py-2.5 text-xs text-muted-foreground">
            <span className="flex-1 rounded-full bg-muted px-3 py-1.5">Type a message</span>
          </div>
        </div>
      </div>
      {label && (
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
      )}
    </div>
  );
}
