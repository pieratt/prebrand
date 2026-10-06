import Link from "next/link";
import { media } from "@/lib/content";
import { archive, forSale, inDevelopment, type StoreCard } from "@/lib/home";

function Card({ card }: { card: StoreCard }) {
  return (
    <Link href={card.href} className="group block">
      <img
        src={media(card.image)}
        alt={card.title}
        width={1200}
        height={800}
        className="h-auto w-full transition-opacity group-hover:opacity-80"
      />
      <h2 className="mt-2 text-[1.15rem] font-bold leading-tight tracking-tight text-[#da72ea] group-hover:opacity-80">
        {card.title}
      </h2>
      {card.inquire ? (
        <p className="text-[#929292] italic">Inquire</p>
      ) : card.sold ? (
        <p className="text-[#995eb7]">
          <span className="line-through">{card.price}</span>
          <br />
          Sold
        </p>
      ) : (
        <p className="text-[#5990bf]">{card.price}</p>
      )}
    </Link>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-[1.35rem] font-bold tracking-tight text-[#da72ea]">{children}</h2>
  );
}

export function Storefront() {
  return (
    <div>
      <div className="rounded-[30px] bg-[#eee] px-6 py-16 text-center sm:py-24">
        <h1 className="text-[2rem] font-bold leading-[1.1] tracking-tight text-[#341212] sm:text-[3.4rem]">
          You don’t need a brand,
          <br />
          you need to launch.
        </h1>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6">
        {forSale.map((card) => (
          <Card key={card.href} card={card} />
        ))}
      </div>

      <hr className="my-10 border-0 border-t border-white/30" />
      <Heading>Archive</Heading>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
        {archive.map((card) => (
          <Card key={card.href} card={card} />
        ))}
      </div>

      <hr className="my-10 border-0 border-t border-white/30" />
      <Heading>In Development</Heading>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
        {inDevelopment.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}
