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

export default function CurvedMarquee() {
  const containerRef = useRef(null);
  const marqueeRef = useRef(null);

  useGSAP(
    () => {
      // Animate the entire flex container seamlessly.
      // We have 4 identical groups inside. Moving left by exactly 25% of the total width 
      // ensures that group 2 perfectly replaces group 1 before it repeats, creating an infinite loop.
      gsap.to(marqueeRef.current, {
        xPercent: -25,
        ease: "none",
        duration: 20, // Adjust speed by changing duration (lower is faster)
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      className="relative mt-8 w-full h-[320px] flex items-center overflow-hidden"
      ref={containerRef}
    >
      {/* Horizontal Hanger Line */}
      <div className="absolute top-2 left-0 w-full h-[1.5px] bg-white/40 pointer-events-none z-0" />

      {/* The scrolling track */}
      <div ref={marqueeRef} className="flex w-max">
        {/* Render 4 groups to ensure it covers even ultra-wide 4K+ screens smoothly */}
        {[1, 2, 3, 4].map((groupIndex) => (
          <div key={groupIndex} className="flex gap-10 pr-10">
            {SOURCE_IMAGES.map((src, i) => (
              <div
                key={`${groupIndex}-${i}`}
                className="relative w-[250px] h-[250px] flex-shrink-0 will-change-transform"
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
        ))}
      </div>
    </div>
  );
}
