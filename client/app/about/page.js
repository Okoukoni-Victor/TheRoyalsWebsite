import StorySection from "@/components/aboutPage/story/StorySection";
import HeroSection from "@/components/aboutPage/hero/HeroSection";
import SDGsSection from "@/components/aboutPage/SDGs/SDGsSection";
import CoreValuesSection from "@/components/aboutPage/coreValues/CoreValuesSection";
import MilestonesSection from "@/components/aboutPage/milestones/MilestonesSection";
import Founders from "@/components/aboutPage/founders/Founders";

export const metadata = {
  title: "About",
  description:
    "Discover the story behind The Royals, our mission, core values, and the visionary leaders driving community empowerment across Africa.",
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
