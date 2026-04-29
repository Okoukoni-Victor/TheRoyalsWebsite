import Image from "next/image";
import TextReveal from "../../ui/TextReveal";

export default function SDGsSection() {
  return (
    <section className="section pt-0 bg-white">
      <div className="flex flex-col gap-10 md:gap-17 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-center text-blue-300">{"// Our SDGs"}</h3>

          <TextReveal className="max-w-xl text-center font-bold">
            Our work is shaped by global goals, driving us to create impact in
            education, equality, and community development.
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-21 w-fit mx-auto">
          <Image
            src="/assets/no-poverty.webp"
            alt="no poverty"
            width={202}
            height={213}
            className="rounded-[20px]"
          />

          <Image
            src="/assets/quality-education.webp"
            alt="quality education"
            width={201.78}
            height={197.68}
            className="rounded-[20px]"
          />

          <Image
            src="/assets/partnerships-for-the-goals.webp"
            alt="partnerships for the goals"
            width={210.19}
            height={206}
            className="rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
}
