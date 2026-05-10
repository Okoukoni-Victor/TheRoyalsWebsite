import HeroSection from "@/components/urgent2kPage/hero/HeroSection";
import AboutSection from "@/components/urgent2kPage/about/AboutSection";
import HowItWorksSection from "@/components/urgent2kPage/howItWorks/HowItWorksSection";
import JoinMovementSection from "@/components/urgent2kPage/joinMovement/JoinMovementSection";
import PartnersSection from "@/components/urgent2kPage/partners/PartnersSection";
import MomentsOfImpactSection from "@/components/urgent2kPage/momentsOfImpact/MomentsOfImpactSection";
import NewsletterSection from "@/components/ui/NewsletterSection";

export const metadata = {
  title: "Urgent 2K Campaign | The Royals",
  description:
    "Learn about the Urgent 2K Campaign and how it is impacting lives.",
};

export default function Urgent2KPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <JoinMovementSection />
      <PartnersSection />
      <MomentsOfImpactSection />
      <NewsletterSection bgVariant="urgent" />
    </main>
  );
}
