"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/logos", label: "Icons", bg: "bg-[#b497e4]", radius: "rounded-[6px]" },
  { href: "/", label: "Home", bg: "bg-[#86fcff]", radius: "rounded-[22px]", icon: true },
  { href: "/custom", label: "Custom", bg: "bg-[#3aff47]", radius: "rounded-[12px]" },
] as const;

export function Nav() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none sticky top-0 z-40 py-2 sm:py-3">
      <nav className="pointer-events-auto grid grid-cols-3 gap-2" aria-label="Primary">
        {tabs.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-label={"icon" in tab ? "Home" : undefined}
              aria-current={active ? "page" : undefined}
              className={`${tab.bg} ${tab.radius} flex min-h-20 items-center justify-center text-[1.15rem] font-bold tracking-[-0.025em] text-black shadow-[0_3px_0_rgba(0,0,0,0.45)] transition-[transform,opacity,box-shadow] duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_5px_0_rgba(0,0,0,0.35)] sm:min-h-24 sm:text-[1.35rem] ${
                active
                  ? "shadow-[inset_0_0_0_3px_rgba(0,0,0,0.8),0_3px_0_rgba(0,0,0,0.45)]"
                  : ""
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
