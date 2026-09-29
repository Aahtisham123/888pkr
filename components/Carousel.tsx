"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/Icon";

type CarouselProps = {
  label: string;
  className?: string;
  children: ReactNode;
};

/** Scroll-snap carousel. Slides must use the `carousel-slide` class; swiping works without JS. */
export function Carousel({ label, className, children }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      setAtStart(track.scrollLeft <= 4);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector<HTMLElement>(".carousel-slide");
    const step = slide ? slide.offsetWidth + 16 : track.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: step * direction, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div
      className={`carousel${className ? ` ${className}` : ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div ref={trackRef} className="carousel-track" tabIndex={0}>
        {children}
      </div>
      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-button"
          aria-label="Previous"
          onClick={() => scroll(-1)}
          disabled={atStart}
        >
          <Icon name="chevronRight" size={20} className="carousel-prev-icon" />
        </button>
        <button
          type="button"
          className="carousel-button"
          aria-label="Next"
          onClick={() => scroll(1)}
          disabled={atEnd}
        >
          <Icon name="chevronRight" size={20} />
        </button>
      </div>
    </div>
  );
}
