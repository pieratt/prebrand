import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-3 py-3 sm:px-4 sm:py-4">
      <Nav />
      <main className="mt-4">{children}</main>
      <Footer />
    </div>
  );
}
