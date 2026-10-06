"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function BuyButton({
  label = "Add to Cart",
  topic = "Pre-Brand",
  className = "",
}: {
  label?: string;
  topic?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group flex w-full cursor-pointer items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-0 bg-[#3bff48] px-5 py-2.5 text-[1.15rem] font-bold leading-none tracking-[-0.03em] text-black transition-colors duration-200 hover:bg-[#7e4a95] hover:text-white sm:py-3 sm:text-[1.35rem] ${className}`}
      >
        <span className="grid">
          <span className="transition-[opacity,transform] duration-200 [grid-area:1/1] group-hover:-translate-y-1 group-hover:opacity-0">
            {label}
          </span>
          <span className="translate-y-1 opacity-0 transition-[opacity,transform] duration-200 [grid-area:1/1] group-hover:translate-y-0 group-hover:opacity-100">
            Contact
          </span>
        </span>
        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </button>
      {open && <ContactDialog topic={topic} onClose={() => setOpen(false)} />}
    </>
  );
}

function ContactDialog({ topic, onClose }: { topic: string; onClose: () => void }) {
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"form" | "sending" | "thanks" | "error">("form");

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const data = new FormData(event.currentTarget);
    setStatus("sending");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        topic,
        page: pathname,
        company: String(data.get("company") ?? ""),
      }),
    });
    setStatus(response.ok ? "thanks" : "error");
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#171821]/80 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-black px-6 py-7 sm:px-8 sm:py-9"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="contact-title"
            className="text-[2rem] font-bold leading-none tracking-[-0.03em] text-white"
          >
            {status === "thanks" ? "Thank you." : "Contact"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white/70 transition-colors hover:text-white"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {status === "thanks" ? (
          <p className="mt-4 text-[1.2rem] leading-[1.2] text-[#e7e7e7]">I’ll follow up.</p>
        ) : (
          <form onSubmit={submit} className="mt-5">
            <p className="text-[1.2rem] leading-[1.2] text-[#e7e7e7]">Leave your email. About {topic}.</p>
            <label className="mt-5 block text-[1.05rem] text-white/70" htmlFor="contact-email">
              Email
            </label>
            <input
              ref={inputRef}
              id="contact-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-[1.15rem] text-white outline-none ring-0 placeholder:text-white/30 focus:bg-white/15"
            />
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            {status === "error" && (
              <p className="mt-3 text-[1.05rem] text-[#e154fa]">That didn’t send. Try again in a moment.</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 w-full cursor-pointer rounded-full border-0 bg-[#3bff48] px-5 py-3 text-[1.15rem] font-bold leading-none tracking-[-0.03em] text-black transition-colors hover:bg-[#7e4a95] hover:text-white disabled:opacity-60"
            >
              {status === "sending" ? "Sending" : "Send"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function SoldPill() {
  return (
    <p className="block w-full rounded-full border-[3px] border-[#875798] px-5 py-2 text-center text-[1.15rem] font-bold leading-none tracking-[-0.03em] text-[#e154fa] sm:py-2.5 sm:text-[1.35rem]">
      Sold
    </p>
  );
}
