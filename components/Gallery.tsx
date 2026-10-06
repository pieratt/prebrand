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
  const desktop =
    columns >= 6
      ? "grid-cols-3 sm:grid-cols-4 lg:grid-cols-6"
      : columns === 5
        ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        : columns === 4
          ? "grid-cols-2 md:grid-cols-4"
          : columns <= 1
            ? "grid-cols-1"
            : "grid-cols-2 md:grid-cols-3";

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
      <div className={`grid gap-1.5 ${desktop}`}>
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
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#171821]/95 p-16 transition-[opacity,backdrop-filter] duration-300 ease-out motion-reduce:transition-none sm:p-24 md:p-28 ${
            visible ? "opacity-100 backdrop-blur-xl" : "opacity-0 backdrop-blur-none"
          }`}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 z-10 text-white/70 transition-colors hover:text-white sm:right-7 sm:top-7"
            aria-label="Close image viewer"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white sm:left-6"
                aria-label="Previous image"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M14.5 5.5 8 12l6.5 6.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/70 transition-colors hover:text-white sm:right-6"
                aria-label="Next image"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d="M9.5 5.5 16 12l-6.5 6.5" />
                </svg>
              </button>
            </>
          )}
          <img
            src={media(images[open].file)}
            alt={`${alt} ${open + 1}`}
            className={`max-h-[58vh] max-w-[62vw] object-contain transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none ${
              visible ? "scale-100 opacity-100" : "scale-[0.985] opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
