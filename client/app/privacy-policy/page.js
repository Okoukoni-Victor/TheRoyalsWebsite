import PrivacyPolicyIntro from "../../components/privacyPolicyPage/intro/PrivacyPolicyIntro";
import PrivacyPolicyContent from "../../components/privacyPolicyPage/content/PrivacyPolicyContent";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Review The Royals' privacy policy to understand how we collect, use, and safeguard your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicyIntro />
      <PrivacyPolicyContent />
    </main>
  );
}
