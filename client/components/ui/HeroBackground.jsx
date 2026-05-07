import React from "react";
import Image from "next/image";

export default function HeroBackground({ children, className = "" }) {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Light Ray Overlay */}
      <div className="absolute w-full inset-0 mx-auto">
        <Image
          src="/assets/hero-light-ray.svg"
          alt="Light ray background"
          fill
          className="object-cover opacity-80 mix-blend-multiply"
          priority
        />
      </div>

      {/* Subtle Glow/Blur Element */}
      <div className="absolute w-96 h-96 bottom-0 left-0 bg-white rounded-tr-full blur-3xl opacity-20" />
      
      {/* Additional ambient gradients could go here */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-black/20" />
      
      {children}
    </div>
  );
}
