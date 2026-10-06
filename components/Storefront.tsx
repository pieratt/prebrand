import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { media } from "@/lib/content";
import { archive, forSale, inDevelopment, type StoreCard } from "@/lib/home";

const dmSans = DM_Sans({ subsets: ["latin"], weight: "700" });

function Meta({ card }: { card: StoreCard }) {
  if (card.inquire) return <p className="text-[#929292] italic">Inquire</p>;
  if (card.sold) {
    return (
      <p className="text-[#995eb7]">
        <span className="line-through">{card.price}</span>
        <br />
        Sold
      </p>
    );
  }
  return <p className="text-[#5990bf]">{card.price}</p>;
}

function Card({ card, overlay = false }: { card: StoreCard; overlay?: boolean }) {
  return (
    <Link href={card.href} className="group relative block overflow-hidden">
      <img
        src={media(card.image)}
        alt={card.title}
        width={1200}
        height={800}
        className={`h-auto w-full ${overlay ? "" : "transition-opacity group-hover:opacity-80"}`}
      />
      {overlay ? (
        <div className="pointer-events-none absolute bottom-7 left-7 sm:bottom-8 sm:left-8 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:opacity-100">
          <h2 className="text-[1.35rem] font-bold leading-none tracking-[-0.03em] text-white">
            {card.title}
          </h2>
          <div className="mt-1 text-[1.05rem] leading-tight text-white [&_p]:text-white">
            <Meta card={card} />
          </div>
        </div>
      ) : (
        <>
          <h2 className="mt-1 text-[1.15rem] font-bold leading-tight tracking-tight text-[#da72ea] group-hover:opacity-80">
            {card.title}
          </h2>
          <Meta card={card} />
        </>
      )}
    </Link>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 text-[1.35rem] font-bold tracking-tight text-[#da72ea]">{children}</h2>
  );
}

export function Catalog() {
  return (
    <>
      <hr className="my-4 border-0 border-t border-white/30" />
      <Heading>Archive</Heading>
      <div className="grid grid-cols-2 gap-x-1.5 gap-y-3 md:grid-cols-4">
        {archive.map((card) => (
          <Card key={card.href} card={card} />
        ))}
      </div>

      <hr className="my-4 border-0 border-t border-white/30" />
      <Heading>In Development</Heading>
      <div className="grid grid-cols-2 gap-x-1.5 gap-y-3 md:grid-cols-4">
        {inDevelopment.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    </>
  );
}

export function Storefront() {
  return (
    <div>
      <div className="rounded-[30px] bg-[#eee] px-6 py-16 text-center sm:py-24">
        <h1 className={`${dmSans.className} text-[2rem] font-bold leading-[0.95] tracking-[-0.035em] text-[#341212] sm:text-[3.4rem]`}>
          You don’t need a brand,
          <br />
          you need to launch.
        </h1>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {forSale.map((card) => (
          <Card key={card.href} card={card} overlay />
        ))}
      </div>
    </div>
  );
}
