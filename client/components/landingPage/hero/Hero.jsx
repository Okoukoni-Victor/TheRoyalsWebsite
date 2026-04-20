import Image from "next/image";
import HeroContent from "./HeroContent";
import CurvedMarquee from "./CurvedMarquee";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-foreground overflow-hidden flex flex-col justify-between">
      {/* Background Elements */}
      <div className="absolute w-full inset-0 mx-auto z-0 pointer-events-none">
        <Image
          src="/assets/hero-light-ray.svg"
          alt="Light ray background"
          fill
          className="object-cover opacity-80 mix-blend-multiply"
          priority
        />
      </div>
      <div className="absolute w-96 h-96 bottom-0 left-0 bg-white rounded-tr-full blur-2xl opacity-20">

      </div>
      {/* Content */}
      <HeroContent />

      {/* Marquee */}
      <CurvedMarquee />
    </section>
  );
}
