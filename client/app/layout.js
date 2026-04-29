import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const helixa = localFont({
  src: [
    { path: "./fonts/Helixa-Thin.ttf", weight: "100", style: "normal" },
    { path: "./fonts/Helixa-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./fonts/Helixa-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Helixa-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/Helixa-Book.ttf", weight: "350", style: "normal" },
    { path: "./fonts/Helixa-BookItalic.ttf", weight: "350", style: "italic" },
    { path: "./fonts/Helixa-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Helixa-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Helixa-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Helixa-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./fonts/Helixa-Black.ttf", weight: "900", style: "normal" },
    { path: "./fonts/Helixa-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-helixa",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s | The Royals",
    default: "Empowering Communities, Transforming Lives | The Royals",
  },
  description:
    "The Royals is an NGO dedicated to community empowerment, leadership education, and children's development across Africa. Join us in making a lasting impact through our various initiatives and programs.",
  keywords: ["NGO", "Africa", "Community Empowerment", "Leadership Education", "Children Development", "The Royals", "Social Impact"],
  authors: [{ name: "The Royals" }],
  openGraph: {
    title: "The Royals | Empowering Communities, Transforming Lives",
    description: "Empowering underserved communities and inspiring hope through leadership and education.",
    url: "https://theroyals.org", // Placeholder URL
    siteName: "The Royals",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Royals | Empowering Communities, Transforming Lives",
    description: "Empowering underserved communities and inspiring hope through leadership and education.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${helixa.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
