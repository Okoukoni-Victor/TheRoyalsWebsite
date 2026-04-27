import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center px-4 py-16 md:py-20 lg:py-24 bg-foreground">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/hero-light-ray.svg"
          alt="ight ray background"
          fill
          className="object-cover opacity-80 mix-blend-multiply"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center mt-14 text-center">
        <h1 className="mb-[-2%] text-center font-black text-white">
          About The Royals
        </h1>

        <div className="relative overflow-hidden z-1 w-[272px] h-[342px]">
          <Image
            src="/assets/about-hero-img.webp"
            alt="Children smiling together"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground to-transparent" />
        </div>

        <p className="z-2 max-w-xs md:max-w-lg mt-[-6%] uppercase text-center font-helixa font-black text-white">
          Building a legacy of empowerment, one community at a time.
        </p>
      </div>
    </section>
  );
}
