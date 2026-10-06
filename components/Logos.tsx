import Link from "next/link";
import { media, type ImageRef } from "@/lib/content";

export function Logos({ images }: { images: ImageRef[] }) {
  return (
    <article>
      <p className="text-sm text-white/50">
        <Link href="/" className="hover:text-white">
          Store
        </Link>
      </p>
      <h1 className="mt-3 text-[2.2rem] font-bold tracking-tight text-white sm:text-[3rem]">
        Ready logos. $1,111 ea
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((image) => (
          <a key={image.file} href="mailto:ben@pieratt.com?subject=Pre-Brand%20logo">
            <img
              src={media(image.file)}
              alt="Logo for sale"
              width={image.w}
              height={image.h}
              className="h-auto w-full transition-opacity hover:opacity-80"
            />
          </a>
        ))}
      </div>
      <div className="mt-10">
        <a
          href="mailto:ben@pieratt.com?subject=Pre-Brand%20logo"
          className="inline-block rounded-full bg-[#3bff48] px-5 py-2.5 text-black hover:bg-[#7e4a95] hover:text-white"
        >
          Email
        </a>
        <h2 className="mt-6 text-[1.8rem] font-bold text-white">Check Back for New Inventory</h2>
      </div>
    </article>
  );
}
