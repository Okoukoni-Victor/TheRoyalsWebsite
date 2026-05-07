import Image from "next/image";
import HeroContent from "./HeroContent";
import CurvedMarquee from "./CurvedMarquee";
import HeroBackground from "../../ui/HeroBackground";

export default function Hero() {
  return (
    <section className="relative section w-full min-h-screen bg-foreground overflow-hidden flex flex-col justify-between">
      {/* Reusable Background */}
      <HeroBackground />
      {/* Content */}
      <HeroContent />

      {/* Marquee */}
      <CurvedMarquee />
    </section>
  );
}
