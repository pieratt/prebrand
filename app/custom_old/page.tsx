import type { Metadata } from "next";
import { Offers } from "@/components/Offers";
import { customOldImages } from "@/lib/content";
import { customOldOffers } from "@/lib/offers";

export const metadata: Metadata = { title: "Custom" };

export default function CustomOldPage() {
  return (
    <Offers
      title="Quick collaborations for unique solutions."
      offers={customOldOffers}
      images={customOldImages}
      examples="S, M, L examples: Zora.co, Mirror.xyz, Subconscious Network."
    />
  );
}
