import Image from "next/image";
import HeroContent from "./HeroContent";
import CurvedMarquee from "./CurvedMarquee";
import HeroBackground from "../../ui/HeroBackground";

export default function Hero() {
  return (
    <section className="relative py-8 md:py-16 w-full min-h-screen bg-gray-900 overflow-hidden flex flex-col justify-between">
      {/* Reusable Background */}
      <HeroBackground />
      {/* Content */}
      <HeroContent />

      {/* Marquee */}
      <CurvedMarquee />
    </section>
  );
}
