import { Icon } from "@iconify/react";
import WorkCard from "./WorkCard";
import Button from "../../ui/Button";

export default function WorkSection() {
  const cards = [
    {
      icon: "lucide:target",
      title: "Mission",
      description: "To empower individuals and communities through sustainable development, education, and mentorship programs that create lasting positive change.",
      bgColor: "bg-gold-50",
      patternSvg: "/patterns/mission-pattern.svg",
      patternClassName: "translate-x-4 -translate-y-4"
    },
    {
      icon: "lucide:heart",
      title: "Vision",
      description: "To empower individuals and communities through sustainable development, education, and mentorship programs that create lasting positive change.",
      bgColor: "bg-blue-300",
      textColor: "text-white",
      patternSvg: "/patterns/vision-pattern.svg",
      patternClassName: "translate-x-2 -translate-y-2"
    },
    {
      icon: "lucide:users",
      title: "Focus",
      description: "Youth empowerment, education support, community health, sustainable development, and building strong partnerships for greater impact.",
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
          <p className=" max-w-2xl mx-auto font-medium">
            Built on principles that drive meaningful change in communities across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
