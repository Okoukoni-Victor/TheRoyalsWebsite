import PrivacyPolicySection from "./PrivacyPolicySection";

const sections = [
  {
    title: "Introduction",
    content: (
      <p className="text-grey-500 ">
        The Royals (“we,” “our,” or “us”) is committed to protecting the privacy
        of individuals who visit our website and engage with our initiatives.
        This Privacy Policy explains how we collect, use, and safeguard your
        information when you interact with our platform.
      </p>
    ),
  },
  {
    title: "Information We Collect",
    content: (
      <div className="space-y-10">
        <div>
          <h6 className="mb-2 text-grey-400">A. Personal Information</h6>
          <p className="text-grey-500">
            When you fill out forms on our website, such as the Contact Form or
            Newsletter Subscription Form, we may collect personal information
            including your full name, email address, phone number, message, and
            contact intent.
          </p>
        </div>

        <div>
          <h6 className="mb-2 text-grey-400">B. Usage Data</h6>
          <p className="text-grey-500">
            We may automatically collect certain information about how users
            interact with our website, such as pages visited, time spent on
            pages, device type, browser type, and IP address for analytics
            purposes.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-2 text-grey-400">
          We use the information collected to:
        </p>
        <ul className="list-disc list-inside space-y-2 ps-4 text-grey-500">
          <li>Respond to enquiries and communication requests.</li>
          <li>Process volunteer, partnership, or sponsorship interests.</li>
          <li>Improve website functionality and user experience.</li>
          <li>Monitor and analyze usage patterns.</li>
          <li>Communicate updates related to The Royals&apos; initiatives.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Sharing and Disclosure",
    content: (
      <>
        <p className="mb-4 text-grey-400">
          We do not sell, trade, or rent your personal information to third
          parties.
        </p>
        <p className="mb-2 text-grey-400">We may share information:</p>
        <ul className="list-disc list-inside space-y-2 ps-4 text-grey-500">
          <li>
            With trusted team members or partners strictly for operational
            purposes.
          </li>
          <li>When required by law or to comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Storage and Security",
    content: (
      <>
        <p className="mb-4 text-grey-400">
          We use appropriate technical and organizational security measures to
          protect your personal information from unauthorized access, misuse, or
          disclosure, including:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 ps-4 text-grey-500">
          <li>SSL encryption.</li>
          <li>Secure data storage.</li>
          <li>Access control and monitoring.</li>
          <li>Regular security audits.</li>
        </ul>
        <p className="text-grey-400">
          However, no method of transmission over the internet is completely
          secure. We encourage users to take appropriate precautions when using
          public or shared networks.
        </p>
      </>
    ),
  },
  {
    title: "Your Rights",
    content: (
      <>
        <p className="mb-4 text-grey-400">You have the right to:</p>
        <ul className="list-disc list-inside space-y-2 mb-4 ps-4 text-grey-500">
          <li>Request access to the personal information we hold about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Withdraw consent for communication at any time.</li>
        </ul>
        <p className="text-grey-400">
          To exercise these rights, please contact us using the details provided
          below.
        </p>
      </>
    ),
  },
  {
    title: "Cookies and Other Tracking Technologies",
    content: (
      <div className="space-y-10">
        <div className="text-grey-500">
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance user
            experience and understand how visitors interact with our website.
          </p>
          <p className="">
            A cookie is a small data file stored on your device that helps us
            recognize your browser and improve site functionality.
          </p>
        </div>

        <div>
          <h6 className="mb-2 text-grey-400">A. How We Use Cookies</h6>
          <p className="mb-2 text-grey-400">
            We use cookies and tracking technologies to:
          </p>
          <ul className="list-disc list-inside space-y-2 ps-4 text-grey-500">
            <li>Analyze website traffic and user behavior.</li>
            <li>Improve website performance and usability.</li>
            <li>Understand how users navigate our pages.</li>
            <li>Support communication and engagement efforts.</li>
          </ul>
        </div>

        <div>
          <h6 className="mb-2 text-grey-400">B. Analytics Tools</h6>
          <p className="mb-4 text-grey-400">
            We may use third-party analytics services such as Google Analytics
            to collect information about how users interact with our website.
          </p>
          <p className="mb-2 text-grey-400">
            These tools may collect information such as:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-2 ps-4 text-grey-500">
            <li>Pages visited.</li>
            <li>Time spent on pages.</li>
            <li>Device and browser type.</li>
            <li>IP address (non-personally identifiable in this context).</li>
          </ul>
          <p className="text-grey-400">
            We do not combine analytics data with personally identifiable
            information submitted through the website forms.
          </p>
        </div>

        <div>
          <h6 className="mb-2 text-grey-400">C. Third-Party Services</h6>
          <p className="mb-4 text-grey-500">
            We may use third-party services, such as communication tools or
            integrations like WhatsApp, that may also use cookies or similar
            technologies.
          </p>
          <p className="text-grey-500">
            These third parties operate under their own privacy policies, and we
            encourage users to review them where applicable.
          </p>
        </div>

        <div>
          <h6 className="mb-2 text-grey-400">D. Managing Cookies</h6>
          <p className="text-grey-500">
            You can choose to disable or manage cookies through your browser
            settings. Please note that disabling cookies may affect certain
            functionalities of the website.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Updates to This Policy",
    content: (
      <>
        <p className="mb-4 text-grey-500">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with a revised effective date.
        </p>
        <p className="text-grey-500">
          Your continued use of The Royals after any change indicates your
          acceptance of the updated Privacy Policy.
        </p>
      </>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p className="mb-2 text-grey-400">
          If you have any questions about this Privacy Policy or your
          interactions with this website, please contact us at:
        </p>

        <ul className="list-disc list-inside space-y-4 ps-4 text-grey-500">
          <li>Email: hello.theroyals@gmail.com</li>
          <li>Phone: +2347010990908</li>
          <li>
            Website:{" "}
            <a href="https://the-royals.vercel.app/" className="text-blue-300">
              https://the-royals.vercel.app/
            </a>
          </li>
          <li>
            Contact Page:{" "}
            <a
              href="https://the-royals.vercel.app/contact"
              className="text-blue-300"
            >
              https://the-royals.vercel.app/contact
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Acknowledgement",
    content: (
      <>
        <p className="text-grey-500">
          By using this website and submitting your information, you consent to
          the terms outlined in this Privacy Policy.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyContent() {
  return (
    <section className="px-4 pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <PrivacyPolicySection
            key={section.title}
            title={section.title}
            isLast={index === sections.length - 1}
          >
            {section.content}
          </PrivacyPolicySection>
        ))}
      </div>
    </section>
  );
}
