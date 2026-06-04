"use client";
/* eslint-disable @next/next/no-img-element */
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { type ImageProps } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

type CardData = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  imageClassName?: string;
};

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const updateDesktopState = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDesktopState();
    mediaQuery.addEventListener("change", updateDesktopState);

    return () => mediaQuery.removeEventListener("change", updateDesktopState);
  }, []);

  function checkScrollability() {
    if (!viewportRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = viewportRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  }

  useEffect(() => {
    if (!isDesktop && viewportRef.current) {
      viewportRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll, isDesktop]);

  useLayoutEffect(() => {
    if (!isDesktop) return;

    const container = containerRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!container || !viewport || !track) return;

    const ctx = gsap.context(() => {
      gsap.set(track, { x: 0 });
      gsap.to(track, {
        x: () => -Math.max(0, track.scrollWidth - viewport.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () =>
            `+=${Math.max(0, track.scrollWidth - viewport.clientWidth)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
      gsap.set(track, { clearProps: "transform" });
    };
  }, [isDesktop, items.length]);

  const scrollLeft = () => {
    if (!viewportRef.current) return;
    viewportRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!viewportRef.current) return;
    viewportRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const direction = event.deltaY !== 0 ? event.deltaY : event.deltaX;
    if (direction === 0) return;

    if (isDesktop) {
      const track = trackRef.current;
      if (!track) return;
      return;
    }

    const carousel = viewportRef.current;
    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const nextScrollLeft = carousel.scrollLeft + direction;
    const canMoveLeft = direction < 0 && carousel.scrollLeft > 0;
    const canMoveRight = direction > 0 && carousel.scrollLeft < maxScrollLeft;

    if (canMoveLeft || canMoveRight) {
      event.preventDefault();
      carousel.scrollBy({
        left: direction,
        behavior: "smooth",
      });
    } else if (nextScrollLeft > 0 && nextScrollLeft < maxScrollLeft) {
      event.preventDefault();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        ref={viewportRef}
        className={cn(
          "flex w-full py-10 [scrollbar-width:none] md:py-20",
          isDesktop
            ? "overflow-hidden"
            : "overflow-x-scroll overscroll-x-auto scroll-smooth",
        )}
        onScroll={isDesktop ? undefined : checkScrollability}
        onWheel={handleWheel}
      >
        <div className="absolute right-0 z-[30] h-auto w-[5%] overflow-hidden bg-gradient-to-l" />

        <div
          ref={trackRef}
          className={cn(
            "flex flex-row justify-start gap-6 pl-4 md:gap-8",
            isDesktop
              ? "w-max px-[max(1rem,calc((100vw-80rem)/2))]"
              : "mx-auto max-w-7xl",
          )}
        >
          {items.map((item, index) => (
            <motion.div
              key={`card${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {!isDesktop && (
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-30 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-30 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export const Card = ({
  card,
}: {
  card: CardData;
  index: number;
}) => {
  return (
    <div className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="relative z-40 p-8">
        <motion.p className="text-left font-sans text-sm font-medium text-white md:text-base">
          {card.category}
        </motion.p>
        <motion.p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
          {card.title}
        </motion.p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className={cn("absolute inset-0 z-10 object-cover", card.imageClassName)}
      />
    </div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  return (
    <img
      className={cn("h-full w-full object-cover", className)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
