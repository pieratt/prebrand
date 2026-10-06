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
    <div className="sticky top-0 z-40 -mx-3 bg-[#22232f]/95 px-3 pb-3 pt-3 backdrop-blur sm:-mx-4 sm:px-4 sm:pb-4 sm:pt-4">
      <nav className="grid grid-cols-3 gap-2 sm:gap-3" aria-label="Primary">
        {tabs.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-label={"icon" in tab ? "Home" : undefined}
              aria-current={active ? "page" : undefined}
              className={`${tab.bg} ${tab.radius} flex min-h-14 items-center justify-center text-[1.1rem] font-bold tracking-[-0.02em] text-black transition-[opacity,box-shadow] hover:opacity-85 sm:min-h-16 sm:text-[1.25rem] ${
                active ? "shadow-[inset_0_0_0_3px_rgba(0,0,0,0.85)]" : ""
              }`}
            >
              {"icon" in tab ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" aria-hidden>
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
