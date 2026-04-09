"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "./heroSlides";

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 22,
  });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Photo gallery"
      className="relative z-10 w-full px-4 pb-2 pt-2 sm:px-6 sm:pb-4 sm:pt-4 lg:px-10"
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(5,60,40,0.35)] ring-1 ring-black/5 sm:rounded-3xl"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.src}
                className="min-w-0 shrink-0 grow-0 basis-full"
                aria-hidden={i !== selected}
              >
                <div className="relative aspect-[16/9] min-h-[220px] w-full sm:aspect-[2.4/1] sm:min-h-[280px] md:min-h-[320px]">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, min(1152px, 100vw)"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:justify-between">
          <p className="order-2 w-full text-center text-xs text-emerald-800/55 sm:order-1 sm:w-auto sm:text-left">
            {selected + 1} / {heroSlides.length}
          </p>
          <div className="order-1 flex items-center gap-2 sm:order-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-800/15 bg-white/90 text-emerald-900 shadow-sm backdrop-blur-sm transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              aria-label="Previous photo"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-800/15 bg-white/90 text-emerald-900 shadow-sm backdrop-blur-sm transition hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              aria-label="Next photo"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="mt-2 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Choose photo"
        >
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Photo ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === selected
                  ? "w-6 bg-emerald-600"
                  : "w-2 bg-emerald-800/25 hover:bg-emerald-800/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
