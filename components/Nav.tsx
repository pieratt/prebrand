import Link from "next/link";

const tabs = [
  {
    href: "/logos",
    label: "Icons",
    className: "rounded-[5px] bg-[#b497e4]",
  },
  {
    href: "/",
    label: "Home",
    className: "rounded-[20px] bg-[#86fcff]",
    icon: true,
  },
  {
    href: "/custom",
    label: "Custom",
    className: "rounded-[10px] bg-[#3aff47]",
  },
] as const;

export function Nav() {
  return (
    <nav className="grid grid-cols-3 gap-2 sm:gap-3" aria-label="Primary">
      {tabs.map((tab) => (
        <Link
          key={tab.href + tab.label}
          href={tab.href}
          aria-label={"icon" in tab ? "Home" : undefined}
          className={`${tab.className} block py-5 text-center text-[1.05rem] font-bold tracking-tight text-black transition-opacity hover:opacity-80`}
        >
          {"icon" in tab ? (
            <span className="inline-flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                <path d="M12 3.1 2.8 11h2.1v9.2h5.2v-5.6h3.8v5.6h5.2V11h2.1L12 3.1Z" />
              </svg>
            </span>
          ) : (
            tab.label
          )}
        </Link>
      ))}
    </nav>
  );
}
