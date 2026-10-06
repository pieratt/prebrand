import Link from "next/link";
import { Gallery } from "./Gallery";
import {
  inquireHref,
  media,
  orderedSections,
  type Product,
} from "@/lib/content";

function Price({
  price,
  compareAt,
  sold,
}: {
  price: string | null;
  compareAt: string | null;
  sold: boolean;
}) {
  return (
    <p className="text-[1.35rem] font-bold leading-tight text-white">
      {price}
      {compareAt && (
        <span className="ml-3 text-[1.05rem] font-medium text-[#515151] line-through">
          {compareAt}
        </span>
      )}
      {sold && <span className="mt-1 block text-[#995eb7]">Sold</span>}
    </p>
  );
}

function CartButton({ name }: { name: string }) {
  return (
    <a
      href={inquireHref(`Pre-Brand — ${name}`)}
      className="mt-4 inline-block rounded-full bg-[#3bff48] px-5 py-2.5 text-[1.05rem] font-medium text-black transition-colors hover:bg-[#7e4a95] hover:text-white"
    >
      Add to Cart →
    </a>
  );
}

export function ProductView({ product }: { product: Product }) {
  const sections = orderedSections(product);

  return (
    <article>
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
        <div className={product.hero ? "md:col-span-8" : "md:col-span-12"}>
          {product.headlines.map((line) => (
            <h1 key={line} className="text-[1.8rem] font-bold leading-tight tracking-tight text-white">
              {line}
            </h1>
          ))}
          <div className="mt-3">
            <Price price={product.price} compareAt={product.compareAt} sold={product.sold} />
          </div>
          {!product.sold && <CartButton name={product.name} />}
        </div>
      </div>

      {product.gallery.length > 0 && (
        <div className="mt-8">
          <Gallery
            images={product.gallery}
            columns={product.galleryColumns}
            alt={product.name}
          />
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
        <div className={product.icon ? "md:col-span-10" : "md:col-span-12"}>
          <h2 className="text-[1.8rem] font-bold tracking-tight text-white">{product.name}</h2>
          <div className="mt-2">
            <Price price={product.price} compareAt={product.compareAt} sold={product.sold} />
          </div>
          {!product.sold && <CartButton name={product.name} />}

          <hr className="my-6 border-0 border-t border-[#aaa]" />
          <p className="max-w-3xl text-[1.15rem] leading-relaxed text-[#e7e7e7]">
            {product.description}
          </p>

          {product.website && (
            <a
              href={product.website.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block rounded-full bg-[#3bff48] px-4 py-2 text-black hover:bg-[#7e4a95] hover:text-white"
            >
              Visit Website
            </a>
          )}

          <div className="mt-6 max-w-3xl space-y-5">
            {sections.map((section) => (
              <section key={section.title}>
                <h3 className="text-[1.05rem] text-white">{section.title}</h3>
                <ul className="mt-1 space-y-1 text-[1.05rem] text-[#e7e7e7]">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {product.notes.length > 0 && (
            <ul className="mt-6 max-w-3xl space-y-2 text-[1.02rem] text-white/70">
              {product.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          )}

          <p className="mt-6 text-[1.02rem] text-white/70">
            <Link href="/terms" className="text-[#858585] hover:text-white">
              Read the Sale Terms & Conditions
            </Link>
          </p>
          {product.maker && (
            <p className="mt-3 text-[1.02rem] text-white/80">
              {(product.made ?? "Made by").replace(product.maker.name, "").trim()}{" "}
              <a href={product.maker.href} className="underline underline-offset-2 hover:text-white">
                {product.maker.name}
              </a>
            </p>
          )}
          <p className="mt-3 text-[1.02rem]">
            Part of{" "}
            <Link href="/join" className="underline underline-offset-2 hover:text-white">
              Pre-Brand Market
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
