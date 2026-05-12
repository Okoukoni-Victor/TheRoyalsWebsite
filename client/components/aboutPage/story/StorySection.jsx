import Image from "next/image";
import WorkCard from "../../landingPage/work/WorkCard";
import TextReveal from "../../ui/TextReveal";

const cards = [
// ... (omitted cards for brevity)
  {
    icon: "solar:target-bold",
    title: "Mission",
    description:
      "To reach underserved children and create opportunities that improve their lives and future outcomes.",
    bgColor: "bg-gold-100",
    patternSvg: "/patterns/mission-pattern.svg",
    patternClassName: "translate-x-4 -translate-y-4",
  },
  {
    icon: "solar:heart-bold",
    title: "Vision",
    description:
      "To redefine the standard of living for children across Africa by expanding access to opportunities that unlock their untapped potential.",
    bgColor: "bg-blue-300",
    textColor: "text-white",
    patternSvg: "/patterns/vision-pattern.svg",
    patternClassName: "translate-x-2 -translate-y-2",
  },
  {
    icon: "solar:users-group-rounded-bold",
    title: "Focus",
    description:
      "Supporting access to education, empowering young minds, equipping the boy child, reducing inequality, and building pathways for lasting impact.",
    bgColor: "bg-purple-100",
    patternSvg: "/patterns/focus-pattern.svg",
    patternClassName: "translate-x-6 -translate-y-6",
  },
];

export default function StorySection() {
  return (
    <section className="section bg-white">
      <div className="flex flex-col gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <h3 className="mb-5 text-center text-blue-300">{"// Our Story"}</h3>

          <TextReveal className="max-w-3xl text-center font-bold">
            The Royals was founded from a deep understanding of human need and
            the universal desire for a better life. At its heart is a commitment
            to improving the standard of living for children whose parents 
            or guardians are unable to provide adequately due to economic
            hardship.
          </TextReveal>

          <Image
            src="/assets/happy-african-children.webp"
            alt="happy african children"
            width={304}
            height={229.97}
            className="md:w-[574] lg:w-[694] md:h-[434] lg:h-[525] my-10 rounded-[10.51px] md:rounded-3xl"
          />

          <p className="md:max-w-sm lg:max-w-2xl text-center text-grey-300">
            Through intentional programmes and community-driven support, the
            organisation strives to restore hope, create opportunities, and
            build a brighter future for every child it reaches.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:justify-between gap-5">
            <p className="text-grey-400">Where Purpose Begins</p>

            <TextReveal className="md:max-w-sm lg:max-w-xl font-bold">
              At the core of everything we do is a foundation rooted in purpose,
              guiding our journey to create meaningful, 
              lasting transformation across communities through every action
              we take.
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
            {cards.map((card, index) => (
              <WorkCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
