import type { Metadata } from "next";
import { Frame } from "@/components/Frame";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pre-brand.com"),
  title: {
    default: "Pre-Brand Store",
    template: "%s — Pre-Brand Store",
  },
  description: "Fast startups need fast brands. Pre-Brand store is ready now.",
  openGraph: {
    title: "Pre-Brand Store",
    description: "Fast startups need fast brands. Pre-Brand store is ready now.",
    url: "https://pre-brand.com",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Frame>{children}</Frame>
      </body>
    </html>
  );
}
