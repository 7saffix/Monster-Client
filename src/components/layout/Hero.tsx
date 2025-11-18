// src/components/HeroCarousel.jsx
import { useEffect, useRef, useState, type SetStateAction } from "react";

const hero1 =
  "https://fabriclore.com/cdn/shop/articles/Blog-Banner-for-regular-blog_11.jpg?v=1657273299&width=1000";
const hero2 =
  "https://fabriclore.com/cdn/shop/articles/Blog-Banner-for-regular-blog_10.jpg?v=1657271598&width=1000";
const hero3 =
  "https://cdn.shopify.com/s/files/1/1150/2764/files/Masaba-Gupta_1024x1024.jpg?v=1657273126";
const hero4 =
  "https://cdn.shopify.com/s/files/1/1150/2764/files/Rohit-Bal_1024x1024.jpg?v=1657273101";

const images = [hero1, hero2, hero3, hero4];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const delay = 2000; // 2 seconds

  useEffect(() => {
    start();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused]);

  const start = () => {
    if (intervalRef.current) return;
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, delay);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const goTo = (i: SetStateAction<number>) => {
    setIndex(i);
    stop();
    setTimeout(() => start(), 50);
  };

  return (
    <section
      className="relative w-full h-full md:h-[500px] overflow-hidden"
      onMouseEnter={() => {
        setPaused(true);
        stop();
      }}
      onMouseLeave={() => {
        setPaused(false);
        start();
      }}
      aria-roledescription="carousel"
    >
      {/* Background images */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Hero ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 " : "opacity-0"
          }`}
          style={{ willChange: "opacity, transform" }}
          aria-hidden={i === index ? "false" : "true"}
        />
      ))}

      {/* Dark overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/30" />

      {/* Centered content */}
      <div className="relative z-20 flex items-center justify-center text-center px-6 py-28">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            Timeless Fashion, Delivered Fast
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-100/90">
            Discover curated collections — clothes, shoes, and accessories to
            refresh your wardrobe.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/collections"
              className="inline-block border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition"
            >
              Explore Collections
            </a>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "w-10 bg-white/90 rounded-full" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Next/Prev buttons */}
      <div className="hidden md:flex absolute inset-y-0 left-4 right-4 items-center justify-between z-30 pointer-events-none">
        <button
          onClick={() => {
            setIndex((i) => (i - 1 + images.length) % images.length);
            stop();
            setTimeout(() => start(), 50);
          }}
          className="pointer-events-auto bg-gray-400 hover:bg-gray-600 text-white p-3 rounded-full transition"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => {
            setIndex((i) => (i + 1) % images.length);
            stop();
            setTimeout(() => start(), 50);
          }}
          className="pointer-events-auto bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
