import Link from "next/link";
import { BuyButton, SoldPill } from "./BuyButton";
import { Gallery } from "./Gallery";
import { media, orderedSections, type Product } from "@/lib/content";

function Price({
  price,
  compareAt,
  size = "lg",
}: {
  price: string | null;
  compareAt: string | null;
  size?: "lg" | "md";
}) {
  const main = size === "lg" ? "text-[2.4rem] sm:text-[3.3rem]" : "text-[2rem] sm:text-[2.6rem]";
  return (
    <p className={`${main} font-normal leading-none tracking-[-0.02em] text-white`}>
      {price}
      {compareAt && (
        <span className="ml-3 text-[0.55em] text-[#515151] line-through">{compareAt}</span>
      )}
    </p>
  );
}

function Headline({ children, as: Tag = "h1" }: { children: React.ReactNode; as?: "h1" | "h2" }) {
  return (
    <Tag className="text-[2.6rem] font-bold leading-[0.85] tracking-[-0.03em] text-white sm:text-[3.6rem]">
      {children}
    </Tag>
  );
}

function Rule() {
  return <hr className="my-5 border-0 border-t border-[#aaa]" />;
}

const inline = new Set(["Genres", "Formats"]);
const glyph: Record<string, string> = {
  Domains: "→",
  "Purchase Includes": "✓",
  "Digital Delivery Details": "→",
};

export function ProductView({ product }: { product: Product }) {
  const sections = orderedSections(product);
  const action = product.sold ? <SoldPill /> : <BuyButton />;

  return (
    <article className="text-[1.2rem] leading-[1.2] text-[#e7e7e7]">
      <div className="grid items-center gap-6 md:grid-cols-12 md:gap-10">
        {product.hero && (
          <img
            src={media(product.hero.file)}
            alt={product.name}
            width={product.hero.w}
            height={product.hero.h}
            className="h-auto w-full md:col-span-4"
          />
        )}
        <div className={`space-y-5 ${product.hero ? "md:col-span-8" : "md:col-span-12"}`}>
          <div className="space-y-2">
            {product.headlines.map((line) => (
              <Headline key={line}>{line}</Headline>
            ))}
          </div>
          <Price price={product.price} compareAt={product.compareAt} />
          {action}
        </div>
      </div>

      {product.gallery.length > 0 && (
        <div className="mt-8">
          <Gallery images={product.gallery} columns={product.galleryColumns} alt={product.name} />
        </div>
      )}

      <div className="mt-12 grid gap-6 md:grid-cols-12">
        {product.icon && (
          <img
            src={media(product.icon.file)}
            alt=""
            width={product.icon.w}
            height={product.icon.h}
            className="h-auto w-28 md:col-span-2 md:w-full"
          />
        )}
        <div className={`max-w-3xl ${product.icon ? "md:col-span-10" : "md:col-span-12"}`}>
          <div className="space-y-4">
            <Headline as="h2">{product.name}</Headline>
            <Price price={product.price} compareAt={product.compareAt} size="md" />
            {action}
          </div>

          <Rule />
          <p>{product.description}</p>

          {sections.map((section) => (
            <section key={section.title}>
              <Rule />
              {inline.has(section.title) ? (
                <p>
                  <span className="text-white">{section.title}:</span> {section.items.join(" ")}
                </p>
              ) : (
                <>
                  <p className="text-white">{section.title}:</p>
                  <ul className="mt-1 space-y-0.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="w-5 shrink-0 text-white/60">{glyph[section.title] ?? "→"}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {section.title === "Domains" && product.website && (
                <a
                  href={product.website.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block rounded-full border border-[#3bff48] bg-[#3bff48] px-5 py-2 text-center text-black transition-colors hover:border-[#7e4a95] hover:bg-[#7e4a95] hover:text-white"
                >
                  Visit Website
                </a>
              )}
            </section>
          ))}

          {product.notes.map((note) => (
            <div key={note}>
              <Rule />
              <p className="flex gap-2">
                <span className="w-5 shrink-0 text-white/60">{note.startsWith("A USA") ? "™" : "✓"}</span>
                <span>{note}</span>
              </p>
            </div>
          ))}

          <Rule />
          <p>
            <Link href="/terms" className="text-[#858585] hover:text-white">
              Read the Sale Terms & Conditions
            </Link>
          </p>
          <Rule />
          <p>
            {product.maker ? (
              <>
                {(product.made ?? "Made by").replace(product.maker.name, "").trim()}{" "}
                <a href={product.maker.href} className="text-white hover:underline">
                  {product.maker.name}
                </a>
                <br />
              </>
            ) : null}
            Part of{" "}
            <Link href="/join" className="text-white hover:underline">
              Pre-Brand Market
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
