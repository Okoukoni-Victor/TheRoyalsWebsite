import React from "react";
import Image from "next/image";

export default function HeroBackground({ className = "" }) {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
      
      {/* Light Ray Overlay */}
      <div className="absolute -right-18 inset-y-0 w-full md:w-[900px]">
        <Image
          src="/assets/hero-light-ray.svg"
          alt="Light ray background"
          width={900}
          height={900}
          className="object-cover w-full md:object-right"
          priority
        />
      </div>

      {/* Subtle Glow/Blur Element */}
      <div className="absolute bottom-0 left-0 opacity-40 w-72 h-72 bg-blue-50 rounded-tr-full blur-3xl" />
      
      {/* Additional ambient gradients
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900/20" />
       */}
    </div>
  );
}
