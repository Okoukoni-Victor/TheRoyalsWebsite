import StorySection from "@/components/aboutPage/story/StorySection";
import HeroSection from "@/components/aboutPage/hero/HeroSection";
import SDGsSection from "@/components/aboutPage/SDGs/SDGsSection";
import CoreValuesSection from "@/components/aboutPage/coreValues/CoreValuesSection";
import MilestonesSection from "@/components/aboutPage/milestones/MilestonesSection";
import Founders from "@/components/aboutPage/founders/Founders";

export const metadata = {
  title: "About | The Royals",
  description:
    "Learn about The Royals and our mission to empower communities across Africa.",
};

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <SDGsSection />
      <CoreValuesSection />
      <MilestonesSection />
      <Founders />
    </main>
  );
}
