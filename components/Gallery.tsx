"use client";

import { useEffect, useState } from "react";
import { media, type ImageRef } from "@/lib/content";

export function Gallery({
  images,
  columns,
  alt,
}: {
  images: ImageRef[];
  columns: number;
  alt: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const desktop =
    columns <= 1 ? "md:grid-cols-1" : "md:grid-cols-3";

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % images.length));
      if (event.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  return (
    <>
      <div className={`grid grid-cols-2 gap-3 ${desktop}`}>
        {images.map((image, index) => (
          <button
            key={`${image.file}-${index}`}
            type="button"
            className="block cursor-zoom-in"
            onClick={() => setOpen(index)}
          >
            <img
              src={media(image.file)}
              alt={`${alt} ${index + 1}`}
              width={image.w}
              height={image.h}
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(null)}
        >
          <img
            src={media(images[open].file)}
            alt={`${alt} ${open + 1}`}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
}
