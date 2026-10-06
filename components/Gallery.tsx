"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stepTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const desktop = columns <= 1 ? "md:grid-cols-1" : "md:grid-cols-3";

  const close = useCallback(() => {
    setVisible(false);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 240);
  }, []);

  const step = useCallback(
    (direction: number) => {
      setVisible(false);
      if (stepTimer.current) clearTimeout(stepTimer.current);
      stepTimer.current = setTimeout(() => {
        setOpen((current) =>
          current === null ? current : (current + direction + images.length) % images.length,
        );
      }, 130);
    },
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const frame = requestAnimationFrame(() => setVisible(true));
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [close, open, step]);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (stepTimer.current) clearTimeout(stepTimer.current);
    },
    [],
  );

  return (
    <>
      <div className={`grid grid-cols-2 gap-2 ${desktop}`}>
        {images.map((image, index) => (
          <button
            key={`${image.file}-${index}`}
            type="button"
            className="group block aspect-square cursor-zoom-in overflow-hidden rounded-[4px] bg-white/5"
            onClick={() => {
              if (closeTimer.current) clearTimeout(closeTimer.current);
              setVisible(false);
              setOpen(index);
            }}
            aria-label={`Open ${alt} image ${index + 1} of ${images.length}`}
          >
            <img
              src={media(image.file)}
              alt={`${alt} ${index + 1}`}
              width={image.w}
              height={image.h}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transition-none"
            />
          </button>
        ))}
      </div>
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} image viewer`}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#171821]/95 p-3 transition-[opacity,backdrop-filter] duration-300 ease-out motion-reduce:transition-none sm:p-8 ${
            visible ? "opacity-100 backdrop-blur-xl" : "opacity-0 backdrop-blur-none"
          }`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl leading-none text-black transition-transform hover:scale-105 sm:right-5 sm:top-5"
            aria-label="Close image viewer"
          >
            ×
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-black transition-transform hover:scale-105 sm:left-5"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-black transition-transform hover:scale-105 sm:right-5"
                aria-label="Next image"
              >
                →
              </button>
            </>
          )}
          <div
            className={`flex max-h-full max-w-full flex-col items-center gap-3 transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
              visible ? "scale-100 opacity-100" : "scale-[0.985] opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={media(images[open].file)}
              alt={`${alt} ${open + 1}`}
              className="max-h-[calc(100vh-6rem)] max-w-full object-contain sm:max-h-[calc(100vh-8rem)]"
            />
            <p className="text-sm tabular-nums text-white/60">
              {open + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
