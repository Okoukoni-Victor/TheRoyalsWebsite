import Hero from "../components/landingPage/hero/Hero";
import ImpactSection from "../components/landingPage/impact/ImpactSection";
import WorkSection from "../components/landingPage/work/WorkSection";
import StatsSection from "../components/landingPage/stats/StatsSection";
import PartnersSection from "../components/landingPage/partners/PartnersSection";
import MomentOfImpact from "../components/landingPage/moment/MomentOfImpact";
import NewsletterSection from "../components/landingPage/newsletter/NewsletterSection";

export const metadata = {
  title: "Home",
  description:
    "Welcome to The Royals. We are committed to transforming lives and empowering communities across Africa through leadership and education.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <ImpactSection />
      <StatsSection />
      <PartnersSection />
      <MomentOfImpact />
      <NewsletterSection />
    </main>
  );
}
