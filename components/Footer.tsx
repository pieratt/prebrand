import { FooterCredit } from "./FooterCredit";
import { Catalog } from "./Storefront";

export function Footer() {
  return (
    <footer className="mt-2 pb-[300px]">
      <Catalog />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-30 h-[250px] bg-[linear-gradient(to_top,#EC13FA_0%,rgba(236,19,250,0.72)_36%,rgba(236,19,250,0.28)_64%,transparent_100%)]"
      />
      <FooterCredit />
    </footer>
  );
}
