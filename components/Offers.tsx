import { inquireHref, media, type ImageRef } from "@/lib/content";
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
    <article>
      <h1 className="text-[2.4rem] font-bold tracking-tight text-white sm:text-[3rem]">{title}</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {offers.map((offer) => (
          <section key={offer.name} className="rounded-2xl bg-white/5 p-5">
            <h2 className="text-[1.6rem] font-bold text-white">{offer.name}</h2>
            <p className="mt-2 min-h-16 text-[1.05rem] leading-snug text-[#e7e7e7]">{offer.summary}</p>
            <p className="mt-4 text-[1.45rem] font-bold text-white">
              {offer.price}
              {offer.compareAt && (
                <span className="ml-2 text-base font-medium text-[#515151] line-through">
                  {offer.compareAt}
                </span>
              )}
            </p>
            <ul className="mt-4 space-y-1 text-[1rem] text-[#e7e7e7]">
              {offer.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a
              href={inquireHref(`Pre-Brand Custom — ${offer.name}`)}
              className="mt-5 inline-block rounded-full bg-[#3bff48] px-4 py-2 text-black hover:bg-[#7e4a95] hover:text-white"
            >
              Add to Cart →
            </a>
          </section>
        ))}
      </div>

      <p className="mt-12 max-w-3xl text-[1.1rem] leading-relaxed text-white/80">{examples}</p>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <img
            key={`${image.file}-${index}`}
            src={media(image.file)}
            alt=""
            width={image.w}
            height={image.h}
            className="h-auto w-full"
          />
        ))}
      </div>
      <p className="mt-10 max-w-2xl text-[1.05rem] leading-relaxed text-white/75">
        Now booking 2023. Orders are scheduled in the order they are purchased.{" "}
        <a href="mailto:ben@pieratt.com" className="underline underline-offset-2 hover:text-white">
          Email if you don’t see your project described here.
        </a>
      </p>
    </article>
  );
}
