import type { Metadata } from "next";
import { Logos } from "@/components/Logos";
import { logoImages } from "@/lib/content";

export const metadata: Metadata = { title: "Icons" };

export default function LogosPage() {
  return <Logos images={logoImages} />;
}
