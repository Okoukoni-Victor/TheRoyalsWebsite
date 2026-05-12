import ImpactCard from "./ImpactCard";

export default function ImpactSection() {
  const impacts = [
    {
      tagSvg: "/patterns/education-empowerment.svg",
      title: "Clothe A BoyChild Initiative (CABI)",
      description: "Providing school uniforms, materials, and support to underprivileged boys to ensure they have equal access to education without the barrier of inadequate resources.",
      bgColor: "bg-purple-100",
      patternSvg: "/patterns/crown.svg"
    },
    {
      tagSvg: "/patterns/community-support.svg",
      title: "Urgent 2K Campaign",
      description: "A rapid response fundraising campaign to address immediate community needs, from medical emergencies to educational support, one contribution at a time.",
      bgColor: "bg-green-100",
      patternSvg: "/assets/rainbow.svg"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-grey-900 mb-6">How We&rsquo;re Changing Lives</h2>
          <p className="text-grey-400 max-w-xl mx-auto">
            Targeted programs designed to create sustainable impact in communities.
          </p>
        </div>

        <div className="flex flex-col flex-wrap md:flex-row max-w-6xl justify-center items-stretch mx-auto gap-8 ">
          {impacts.map((impact, index) => (
            <ImpactCard key={index} {...impact} />
          ))}
        </div>
      </div>
    </section>
  );
}
