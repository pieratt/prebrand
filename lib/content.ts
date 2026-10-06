import content from "@/data/content.json";

export type ImageRef = { file: string; w: number; h: number };

export type ProductSection = { title: string; items: string[] };

export type Product = {
  slug: string;
  name: string;
  headlines: string[];
  price: string | null;
  compareAt: string | null;
  sold: boolean;
  hero: ImageRef | null;
  gallery: ImageRef[];
  galleryColumns: number;
  icon: ImageRef | null;
  description: string;
  sections: ProductSection[];
  website: { href: string; label: string } | null;
  maker: { name: string; href: string } | null;
  made: string | null;
  notes: string[];
};

export const products = content.products as Product[];
export const customImages = content.customImages as ImageRef[];
export const customOldImages = content.customOldImages as ImageRef[];
export const logoImages = content.logoImages as ImageRef[];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function media(file: string) {
  return `/media/${encodeURIComponent(file)}`;
}

const sectionOrder = [
  "Domains",
  "Genres",
  "Formats",
  "Purchase Includes",
  "Digital Delivery Details",
];

export function orderedSections(product: Product) {
  return [...product.sections].sort(
    (a, b) => sectionOrder.indexOf(a.title) - sectionOrder.indexOf(b.title),
  );
}
