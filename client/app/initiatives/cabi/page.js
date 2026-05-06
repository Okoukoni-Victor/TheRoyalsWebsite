import HeroSection from "@/components/CABIPage/hero/HeroSection";
import AboutSection from "@/components/CABIPage/about/AboutSection";
import HowItWorksSection from "@/components/CABIPage/howItWorks/HowItWorksSection";
import JoinMovementSection from "@/components/CABIPage/joinMovement/JoinMovementSection";
import PartnersSection from "@/components/CABIPage/partners/PartnersSection";
import MomentsOfImpactSection from "@/components/CABIPage/momentsOfImpact/MomentsOfImpactSection";
import NewsletterSection from "@/components/CABIPage/newsletter/NewsletterSection";

export const metadata = {
  title: "Clothe A BoyChild Initiative | The Royals",
  description:
    "Learn about the Clothe A BoyChild Initiative and how it is impacting lives.",
};

export default function CABIPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <JoinMovementSection />
      <PartnersSection />
      <MomentsOfImpactSection />
      <NewsletterSection />
    </main>
  );
}
