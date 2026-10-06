import type { Metadata } from "next";
import { Offers } from "@/components/Offers";
import { customImages } from "@/lib/content";
import { customOffers } from "@/lib/offers";

export const metadata: Metadata = { title: "Custom" };

export default function CustomPage() {
  return <Offers title="Custom brands." offers={customOffers} images={customImages} />;
}
