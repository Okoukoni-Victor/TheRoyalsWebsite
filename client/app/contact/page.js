import IntroSection from "@/components/contactPage/intro/IntroSection";
import ContactSection from "@/components/contactPage/contact/ContactSection";
import NewsletterSection from "@/components/ui/NewsletterSection";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with The Royals. Reach out to us for partnerships, volunteering opportunities, or to learn more about our work in African communities.",
};

export default function ContactPage() {
  return (
    <main>
      <IntroSection />
      <ContactSection />
      <NewsletterSection bgVariant="blue" />
    </main>
  );
}
