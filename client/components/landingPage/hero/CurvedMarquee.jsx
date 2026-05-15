"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SOURCE_IMAGES = [
  "https://res.cloudinary.com/diluabuwv/image/upload/v1778416952/Urgent_2k_Impact_and_Gallery_Hero_section_and_Privacy_Policy_ug0cbl.jpg",
  "https://res.cloudinary.com/diluabuwv/image/upload/v1778416883/Hero_Section_and_Gallery_preview_r1d6oo.jpg",
  "https://res.cloudinary.com/diluabuwv/image/upload/v1778416878/Hero_section_hsxe7f.jpg",
  "https://res.cloudinary.com/diluabuwv/image/upload/v1778415842/Hero_Section_and_CABI_Moment_of_Impact_section_and_Gallery_Preview_tz52tr.jpg",
  "https://res.cloudinary.com/diluabuwv/image/upload/v1778415838/Hero_Section_and_CABI_Hero_section_and_CABI_Moment_of_Impact_section_and_Gallery_Preview_hmkrtn.jpg",
];

// Duplicate for seamless loop
const IMAGES = [...SOURCE_IMAGES, ...SOURCE_IMAGES];

export default function CurvedMarquee() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const cards = cardsRef.current;
      
      // --- EDIT THESE VARIABLES TO CHANGE SIZING --- //
      const cardWidth = 250; // The physical width of the polaroid card
      const gap = 40;        // <-- CHANGE THIS to increase/decrease the space!
      // --------------------------------------------- //

      const spacing = cardWidth + gap;
      const totalWidth = spacing * IMAGES.length;

      let currentX = 0;
      const speed = 1.2;

      const updateCards = () => {
        currentX -= speed;
        
        // Prevent JS precision issues with infinitely growing negative numbers
        if (currentX <= -totalWidth) {
          currentX += totalWidth;
        }

        cards.forEach((card, i) => {
          let rawX = (i * spacing) + currentX;
          
          // Standard positive modulo to wrap coordinates smoothly
          let wrappedX = ((rawX % totalWidth) + totalWidth) % totalWidth;

          // If the card is partially scrolling off the left edge (e.g. at x = -100),
          // wrappedX will natively jump to a high positive number.
          // We subtract totalWidth to force it back to the left edge until it's fully hidden.
          if (wrappedX > totalWidth - cardWidth) {
            wrappedX -= totalWidth;
          }

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
      className="relative mt-8 w-full h-[320px]  flex items-center"
      ref={containerRef}
    >
      {/* Horizontal Hanger Line */}
      <div className="absolute top-2 left-0 w-full h-[1.5px] bg-white/40 pointer-events-none z-0" />

      <div className="relative w-full h-full">
        {IMAGES.map((src, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="absolute top-1/2 -translate-y-1/2 left-0 w-[250px] h-[250px] will-change-transform"
          >
            {/* The Polaroid Card */}
            <div className="relative w-full h-full bg-white rounded-4xl p-2 shadow-4xl flex flex-col items-center">
              
              {/* Tape/Pin element at the top */}
              <div className="absolute -top-9 bg-white/90 backdrop-blur-sm w-10 h-12 rounded-sm shadow-sm flex justify-center z-10 border border-grey-50">
                <div className="w-2 h-2 mt-2 rounded-full bg-grey-300 "></div>
              </div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-grey-100">
                <Image
                  src={src}
                  alt={`Impact story ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 300px, 300px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
