import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-2 pb-3 sm:px-2.5">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
