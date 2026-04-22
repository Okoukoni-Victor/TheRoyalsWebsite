import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Hero from "../components/landingPage/hero/Hero";
import ImpactSection from "../components/landingPage/impact/ImpactSection";
import WorkSection from "../components/landingPage/work/WorkSection";
import StatsSection from "../components/landingPage/stats/StatsSection";
import PartnersSection from "../components/landingPage/partners/PartnersSection";
import NewsletterSection from "../components/landingPage/newsletter/NewsletterSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <h1>Home</h1>
      <Hero />
      <WorkSection />
      <StatsSection />
      <PartnersSection />
      <NewsletterSection />
      <Footer/>
    </main>
  );
}