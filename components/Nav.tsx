"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Home", bg: "bg-[#86fcff]", icon: true },
  { href: "/custom", label: "Custom", bg: "bg-[#3aff47]" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const onCustom = pathname.startsWith("/custom");
  const activeHref = onCustom ? "/custom" : "/";
  const pill = hovered ?? activeHref;

  return (
    <div className="pointer-events-none sticky top-0 z-40 py-1.5">
      <nav className="pointer-events-auto grid grid-cols-2 gap-1.5" aria-label="Primary">
        {tabs.map((tab) => {
          const active = tab.href === activeHref;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-label={"icon" in tab ? "Home" : undefined}
              aria-current={active ? "page" : undefined}
              onMouseEnter={() => setHovered(tab.href)}
              onMouseLeave={() => setHovered(null)}
              className={`${tab.bg} flex min-h-20 items-center justify-center text-[1.15rem] font-bold tracking-[-0.025em] text-black transition-[border-radius,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:opacity-80 sm:min-h-24 sm:text-[1.35rem] ${
                tab.href === pill ? "rounded-[48px]" : "rounded-[12px]"
              }`}
            >
              {"icon" in tab ? (
                <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden>
                  <path d="M12 3.1 2.8 11h2.1v9.2h5.2v-5.6h3.8v5.6h5.2V11h2.1L12 3.1Z" />
                </svg>
              ) : (
                tab.label
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
