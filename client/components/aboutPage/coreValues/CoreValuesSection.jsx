import CoreValueCard from "./CoreValueCard";

const cards = [
  {
    icon: "lucide:heart",
    title: "Compassion",
    description:
      "We lead with empathy and genuine care for the communities we serve.",
    bgColor: "bg-blue-50",
    patternSvg: "/patterns/compassion-pattern.svg",
  },
  {
    icon: "lucide:shield",
    title: "Integrity",
    description: "Transparency and accountability guide every action we take.",
    bgColor: "bg-gold-300",
    patternSvg: "/patterns/integrity-pattern.svg",
  },
  {
    icon: "lucide:lightbulb",
    title: "Innovation",
    description:
      "We embrace creative solutions to address community challenges.",
    bgColor: "bg-blue-50",
    patternSvg: "/patterns/innovation-pattern.svg",
  },
  {
    icon: "lucide:trending-up",
    title: "Excellence",
    description:
      "We strive for the highest standards in all our programs and initiatives.",
    bgColor: "bg-purple-300",
    textColor: "text-white",
    patternSvg: "/patterns/excellence-pattern.svg",
  },
  {
    icon: "lucide:users",
    title: "Collaboration",
    description:
      "We believe in the power of partnerships to amplify our impact.",
    bgColor: "bg-blue-50",
    patternSvg: "/patterns/collaboration-pattern.svg",
  },
  {
    icon: "lucide:globe",
    title: "Sustainability",
    description:
      "We focus on creating lasting change that benefits future generations.",
    bgColor: "bg-green-300",
    textColor: "text-white",
    patternSvg: "/patterns/sustainability-pattern.svg",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="section !pt-0 bg-white">
      <div className="flex flex-col gap-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-center">Our Core Values</h3>

          <p className="max-w-md text-center text-grey-300">
            Our journey is guided by a set of principles that shape how we act
            and define the impact we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <CoreValueCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
