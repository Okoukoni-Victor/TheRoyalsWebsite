"use client";

import React from "react";
import Image from "next/image";
import Button from "../../ui/Button";

const images = [
  {
    src: "/assets/cabi-moment-1.jpg",
    alt: "CABI Outreach Moment",
    className: "col-span-2 md:col-span-1 h-[400px] md:h-[500px]"
  },
  {
    src: "/assets/cabi-moment-2.jpg",
    alt: "Supporting children",
    className: "col-span-2 md:col-span-1 h-[300px] md:h-[350px]"
  },
  {
    src: "/assets/u2k-moment-1.jpg",
    alt: "Urgent 2K Distribution",
    className: "col-span-2 max-w-3xl mx-auto w-full h-[400px] md:h-[600px]"
  },
  {
    src: "/assets/cabi-moment-3.jpg",
    alt: "Community Impact",
    className: "col-span-2 md:col-span-1 h-[400px] md:h-[500px]"
  },
  {
    src: "/assets/u2k-moment-2.jpg",
    alt: "Health and Support",
    className: "col-span-2 md:col-span-1 h-[300px] md:h-[350px]"
  }
];

export default function MomentOfImpact() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-grey-900 mb-6">Moments of Impact</h2>
          <p className="text-grey-400 max-w-xl mx-auto">
            Explore highlights from our initiatives, community outreach, and the lives we are touching.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-24">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center">
          <Button 
            label="Explore Gallery" 
            href="/gallery" 
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}