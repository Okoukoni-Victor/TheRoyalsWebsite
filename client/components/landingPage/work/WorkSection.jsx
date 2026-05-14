import { Icon } from "@iconify/react";
import WorkCard from "./WorkCard";
import Button from "../../ui/Button";

export default function WorkSection() {
  const cards = [
    {
      icon: "material-symbols:target",
      title: "Mission",
      description: "To reach underserved children and create opportunities that improve their lives and future outcomes.",
      bgColor: "bg-gold-100",
      patternSvg: "/patterns/mission-pattern.svg",
      patternClassName: "translate-x-4 -translate-y-4"
    },
    {
      icon: "solar:heart-outline",
      title: "Vision",
      description: "To redefine the standard of living for children across Africa by expanding access to opportunities that unlock their untapped potential.",
      bgColor: "bg-blue-300",
      textColor: "text-white",
      patternSvg: "/patterns/vision-pattern.svg",
      patternClassName: "translate-x-2 -translate-y-2"
    },
    {
      icon: "formkit:people",
      title: "Focus",
      description: "Supporting access to education, empowering young minds, equipping the boy child, reducing inequality, and building pathways for lasting impact.",
      bgColor: "bg-purple-100",
      patternSvg: "/patterns/focus-pattern.svg",
      patternClassName: "translate-x-6 -translate-y-6"
    }
  ];

  return (
    <section className="section relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className=" text-grey-900 mb-6">
            The Heart of Our Work
          </h2>
          <p className=" max-w-lg mx-auto">
Built on principles that drive meaningful change in communities.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <WorkCard key={index} {...card} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            label="Inside The Royals" 
            href="/about" 
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
