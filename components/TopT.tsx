"use client"
import { useState, useEffect, useRef } from "react";
import { FaRegHeart, FaHeart, FaStar, FaGlobe, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const baseTours = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    location: "Kilimanjaro, Tanzania",
    rating: 4.8,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    location: "Nungwi, Zanzibar",
    rating: 4.4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    location: "Serengeti, Tanzania",
    rating: 4.6,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

const tours = Array.from({ length: 10 }, (_, i) => ({
  ...baseTours[i % baseTours.length],
  location: `${baseTours[i % baseTours.length].location} ${i + 1}`,
}));

const CARDS_VISIBLE = 3;
const CARD_WIDTH = 400;
const CARD_GAP = 24;

export default function TopT() {
  const [liked, setLiked] = useState<boolean[]>(Array(10).fill(false));
  const [startIdx, setStartIdx] = useState(CARDS_VISIBLE); // Start at first real card
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Prepare looped data: [last 3] + [all] + [first 3]
  const loopedTours = [
    ...tours.slice(-CARDS_VISIBLE),
    ...tours,
    ...tours.slice(0, CARDS_VISIBLE),
  ];

  // Auto-slide every 3s (right to left)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  });

  // Handle transition end for seamless looping
  useEffect(() => {
    const handleTransitionEnd = () => {
      if (startIdx === 0) {
        setIsTransitioning(false);
        setStartIdx(tours.length);
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          trackRef.current.style.transform = `translateX(-${(CARD_WIDTH + CARD_GAP) * tours.length}px)`;
          // Force reflow to apply the style
          void trackRef.current.offsetWidth;
          trackRef.current.style.transition = "";
        }
      } else if (startIdx === tours.length + CARDS_VISIBLE) {
        setIsTransitioning(false);
        setStartIdx(CARDS_VISIBLE);
        if (trackRef.current) {
          trackRef.current.style.transition = "none";
          trackRef.current.style.transform = `translateX(-${(CARD_WIDTH + CARD_GAP) * CARDS_VISIBLE}px)`;
          void trackRef.current.offsetWidth;
          trackRef.current.style.transition = "";
        }
      } else {
        setIsTransitioning(false);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener("transitionend", handleTransitionEnd);
      return () => track.removeEventListener("transitionend", handleTransitionEnd);
    }
  }, [startIdx, tours.length]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setStartIdx((prev) => prev - 1);
  };
  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setStartIdx((prev) => prev + 1);
  };

  const toggleLike = (idx: number) => {
    setLiked((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  // Calculate the real index for like button
  const getRealIdx = (idx: number) => (idx - CARDS_VISIBLE + tours.length) % tours.length;

  return (
    <section id="experiences" className="bg-[#003A56] py-12 w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#E1C5A0]">Top Tours</h2>
      <div className="relative w-full flex justify-center">
        <button
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-[#E1C5A0] text-[#003A56] rounded-full p-3 hover:bg-[#d1b48a] transition"
          onClick={handlePrev}
        >
          <FaChevronLeft size={22} />
        </button>
        <button
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-[#E1C5A0] text-[#003A56] rounded-full p-3 hover:bg-[#d1b48a] transition"
          onClick={handleNext}
        >
          <FaChevronRight size={22} />
        </button>
        <div className="carousel-cards-outer">
          <div
            ref={trackRef}
            className="carousel-track"
            style={{
              transform: `translateX(-${(CARD_WIDTH + CARD_GAP) * startIdx}px)`,
              gap: `${CARD_GAP}px`,
              transition: isTransitioning ? "transform 0.6s cubic-bezier(.77,0,.18,1)" : "none",
            }}
          >
            {loopedTours.map((tour, idx) => (
              <div
                key={tour.location + idx}
                className="relative rounded-2xl w-[400px] flex-shrink-0 p-4 flex flex-col bg-transparent"
              >
                {/* Image and favorite icon */}
                <div className="relative mb-4">
                  <img
                    src={tour.image}
                    alt={tour.location}
                    className="rounded-xl w-full h-60 object-cover"
                  />
                  <button
                    className={`absolute top-3 right-3 bg-white/80 rounded-full p-2 transition ${liked[getRealIdx(idx)] ? "text-[#c2003a]" : "text-[#003A56]"} hover:scale-125 focus:scale-125`}
                    onClick={() => toggleLike(getRealIdx(idx))}
                  >
                    {liked[getRealIdx(idx)] ? <FaHeart size={22} /> : <FaRegHeart size={22} />}
                  </button>
                </div>
                {/* Location */}
                <div className="flex items-center gap-2 text-[#7A8A99] mb-2">
                  <FaGlobe size={16} />
                  <span className="font-medium">{tour.location}</span>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-2 text-[#E1C5A0] font-semibold mb-2">
                  <FaStar size={18} className="text-[#E1C5A0]" />
                  <span>{tour.rating}</span>
                </div>
                {/* Description */}
                <div className="text-[#7A8A99] font-bold text-lg leading-snug">
                  {tour.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS (e.g., app/globals.css):
// .animate-fade-in { animation: fadeIn 0.6s; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
