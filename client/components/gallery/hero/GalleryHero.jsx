"use client";

import React from "react";
import Image from "next/image";
import HeroBackground from "../../ui/HeroBackground";

export default function GalleryHero() {
  return (
    <section className="section relative w-full bg-foreground overflow-hidden min-h-screen flex flex-col justify-between pt-24 md:pt-32 pb-16 md:pb-20">
      {/* Reusable Background */}
      <HeroBackground />

      {/* Hero Content */}
      <div className="relative z-10 mt-16 flex flex-col items-center text-center px-6">
        <div className="inline-block px-6 py-2 rounded-full border border-white mb-8">
          <span className="text-white">
            Our Gallery
          </span>
        </div>
        <h1 className="text-white mb-12">
          Moments That Tell <br /> Our Story
        </h1>
      </div>

      <div className="relative z-10 w-full hidden md:block">
        <Image src="/gallery/gallery-desktop-and-tablet-hero-image.png" alt="Gallery Hero Background" width={1080} height={600} className="object-cover w-full" />
      </div>
      <div className="relative z-10 w-full block md:hidden">
        <Image src="/gallery/gallery-mobile-hero-image.png" alt="Gallery Hero Background" width={1880} height={2600} className="object-cover w-full" />
      </div>

      {/* Hero Footer */}
      <div className="relative z-10">
        <p className="text-white/80 max-w-md">
          A glimpse into the lives we&apos;ve touched, the communities we serve, and the meaningful impact we continue to create through our initiatives.
        </p>
      </div>
    </section>
  );
}
