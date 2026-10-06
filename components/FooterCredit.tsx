"use client";

import { useEffect, useState } from "react";

export function FooterCredit() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const update = () => {
      const remaining = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      setAtBottom(remaining < 48);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`pointer-events-auto fixed bottom-4 left-3 z-[31] max-w-md text-sm leading-none text-white transition-opacity duration-300 hover:opacity-100 sm:bottom-5 sm:left-5 ${
        atBottom ? "opacity-80" : "opacity-20"
      }`}
    >
      <p className="-ml-[0.45em] opacity-80">“Relaxed is Fast”</p>
      <p className="mt-1">
        Pre-Brand Store is paused. Contact{" "}
        <a
          href="https://twitter.com/pieratttt"
          className="underline decoration-white/40 underline-offset-2 hover:decoration-white"
        >
          @pieratt
        </a>{" "}
        with questions.
      </p>
    </div>
  );
}
