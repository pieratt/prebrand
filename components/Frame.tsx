import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-3 pb-3 sm:px-4 sm:pb-4">
      <Nav />
      <main className="mt-2">{children}</main>
      <Footer />
    </div>
  );
}
