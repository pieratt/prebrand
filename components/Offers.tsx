import { BuyButton } from "./BuyButton";
import { Gallery } from "./Gallery";
import { type ImageRef } from "@/lib/content";
import { customExamples, type Offer } from "@/lib/offers";

export function Offers({
  title,
  offers,
  images,
  examples = customExamples,
}: {
  title: string;
  offers: Offer[];
  images: ImageRef[];
  examples?: string;
}) {
  return (
    <article className="text-[1.2rem] leading-[1.2] text-[#e7e7e7]">
      <h1 className="text-[2.6rem] font-bold leading-[0.85] tracking-[-0.03em] text-white sm:text-[3.6rem]">
        {title}
      </h1>

      <div className="mt-1.5 grid grid-cols-3 gap-1.5">
        {offers.map((offer) => (
          <section
            key={offer.name}
            className="flex flex-col rounded-2xl bg-black px-2.5 py-3 text-[0.72rem] leading-[1.15] sm:px-4 sm:py-5 sm:text-[0.95rem] md:px-8 md:py-9 md:text-[1.2rem] md:leading-[1.2]"
          >
            <h2 className="text-[1.15rem] font-bold leading-[0.85] tracking-[-0.03em] text-white sm:text-[1.7rem] md:text-[3rem]">
              {offer.name}
            </h2>
            <p className="mt-2 md:mt-4">{offer.summary}</p>
            <p className="mt-2 text-[1rem] font-normal leading-none tracking-[-0.02em] text-white sm:text-[1.45rem] md:mt-4 md:text-[2.6rem]">
              {offer.price}
              {offer.compareAt && (
                <span className="ml-3 text-[0.55em] text-[#515151] line-through">
                  {offer.compareAt}
                </span>
              )}
            </p>
            <ul className="mt-3 space-y-0.5 md:mt-5">
              {offer.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="w-5 shrink-0 text-white/60">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-3 md:pt-6">
              <BuyButton
                topic={`${offer.name} custom brand`}
                className="!gap-1 !px-2 !py-2 !text-[0.68rem] sm:!text-[0.85rem] md:!gap-2.5 md:!px-5 md:!py-3 md:!text-[1.35rem]"
              />
            </div>
          </section>
        ))}
      </div>

      <p className="mt-4">{examples}</p>

      {images.length > 0 && (
        <div className="mt-1.5">
          <Gallery images={images} columns={6} alt="Custom work" />
        </div>
      )}

      <p className="mt-4">
        Now booking 2023. Orders are scheduled in the order they are purchased.{" "}
        <a href="mailto:ben@pieratt.com" className="text-white hover:underline">
          Email if you don’t see your project described here.
        </a>
      </p>
    </article>
  );
}
