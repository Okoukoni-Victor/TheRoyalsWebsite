"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const IMAGES = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600",
  "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=600",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=600",
  // Duplicate for seamless loop
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600",
  "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?q=80&w=600",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600",
  "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600",
  "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=600",
];

export default function CurvedMarquee() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const cardWidth = 320; // 300px width + 20px gap
      const totalWidth = cardWidth * (IMAGES.length / 2);

      // Initial setup
      gsap.set(cards, {
        x: (i) => i * cardWidth,
        y: 0,
        rotation: 0,
      });

      let currentX = 0;
      const speed = 1.2; // Slightly slower for smoother straight marquee

      const updateCards = () => {
        currentX -= speed;

        // Reset position to create infinite loop
        if (Math.abs(currentX) >= totalWidth) {
          currentX = 0;
        }

        cards.forEach((card, i) => {
          let cardX = i * cardWidth + currentX;

          // Wrap around logic for seamless loop
          const wrappedX =
            (((cardX % (totalWidth * 2)) + totalWidth * 2) % (totalWidth * 2)) -
            cardWidth;

          gsap.set(card, {
            x: wrappedX,
            y: 0,
            rotation: 0,
          });
        });
      };

      gsap.ticker.add(updateCards);

      return () => {
        gsap.ticker.remove(updateCards);
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      className="relative w-full h-[300px] overflow-hidden flex items-center"
      ref={containerRef}
    >
      {/* Horizontal Hanger Line */}
      <div className="absolute top-4 left-0 w-full h-[1.5px] bg-white/40 pointer-events-none z-0" />

      <div className="relative w-full h-full">
        {IMAGES.map((src, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-[300px] h-[220px] will-change-transform"
          >
            {/* The Polaroid Card */}
            <div className="relative w-full h-full bg-white rounded-xl p-3 shadow-xl flex flex-col items-center">
              {/* Tape/Pin element at the top */}
              <div className="absolute -top-9 bg-white/90 backdrop-blur-sm w-8 h-13 rounded-sm shadow-sm flex items-start justify-center pt-2 z-10 border border-grey-50">
                <div className="w-2 h-2 rounded-full bg-grey-300"></div>
              </div>
              
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt="NGO impact"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
