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
  const pathRef = useRef(null);

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
        transformOrigin: "center top",
      });

      let currentX = 0;
      const speed = 1.5;

      const updateCards = () => {
        currentX -= speed;

        // Reset position to create infinite loop
        if (Math.abs(currentX) >= totalWidth) {
          currentX = 0;
        }

        const width = window.innerWidth;
        const screenCenter = width / 2;
        
        // Responsive curve parameters
        let curveFactor, baseHeight, svgPath;
        
        if (width < 640) { // Mobile
          curveFactor = 0.0004; // Much deeper curve
          baseHeight = 100;
          svgPath = "M -100 10 Q 500 100 1100 10";
        } else if (width < 1024) { // Tablet
          curveFactor = 0.0006;
          baseHeight = 140;
          svgPath = "M -100 30 Q 500 350 1100 30";
        } else { // Desktop
          curveFactor = 0.00015;
          baseHeight = 150;
          svgPath = "M -100 50 Q 500 350 1100 50";
        }

        // Update SVG path to match the curve intensity
        if (pathRef.current && pathRef.current.getAttribute("d") !== svgPath) {
          pathRef.current.setAttribute("d", svgPath);
        }

        cards.forEach((card, i) => {
          let cardX = i * cardWidth + currentX;

          if (cardX < -cardWidth) {
            cardX += totalWidth * 2;
          }

          const wrappedX =
            (((cardX % (totalWidth * 2)) + totalWidth * 2) % (totalWidth * 2)) -
            cardWidth;

          const distanceFromCenter = wrappedX + cardWidth / 2 - screenCenter;

          const yOffset =
            baseHeight - Math.pow(distanceFromCenter, 2) * curveFactor;

          const slope = -2 * curveFactor * distanceFromCenter;
          const rotation = Math.atan(slope) * (180 / Math.PI);

          gsap.set(card, {
            x: wrappedX,
            y: yOffset,
            rotation: rotation,
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
      className="relative w-full h-[500px] overflow-hidden "
      ref={containerRef}
    >
      {/* SVG Path - Concave (Smile) */}
      <svg
        className="absolute top-8 md:-top-15 left-0 w-full h-full pointer-events-none opacity-60"
        preserveAspectRatio="none"
        viewBox="0 0 1000 500"
      >
        <path
          ref={pathRef}
          d="M -100 50 Q 500 350 1100 50"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>

      <div className="relative w-full h-full">
        {IMAGES.map((src, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute top-0 left-0 w-[300px] h-[220px] will-change-transform"
          >
            {/* The Polaroid Card */}
            <div className="relative w-full h-full bg-white rounded-xl p-3 shadow-2xl flex flex-col items-center">
              {/* Tape/Pin element at the top */}
              <div className="absolute -top-4 bg-white/90 backdrop-blur-sm w-8 h-10 rounded-sm shadow-sm flex items-start justify-center pt-2 z-10 border border-grey-50">
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
