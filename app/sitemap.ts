import type { MetadataRoute } from "next";
import { products } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pre-brand.com";
  const paths = ["", "/logos", "/custom", "/custom_old", "/join", "/terms", ...products.map((p) => `/${p.slug}`)];
  return paths.map((path) => ({ url: `${base}${path}` }));
}
