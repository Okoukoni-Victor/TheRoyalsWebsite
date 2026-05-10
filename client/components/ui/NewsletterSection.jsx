"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { subscribeToNewsletter } from "@/app/actions";

export default function NewsletterSection({ bgVariant = "blue" }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, success, error

  const bgClasses = {
    blue: "bg-blue-300",
    purple: "bg-purple-700",
    urgent: "bg-green-700", // Based on urgent 2k theme if applicable
  };

  const buttonTextClasses = {
    blue: "text-blue-300",
    purple: "text-purple-700",
    urgent: "text-green-700",
  };

  const buttonIconBgClasses = {
    blue: "bg-blue-800",
    purple: "bg-purple-900",
    urgent: "bg-green-700",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) return;

    setIsSubmitting(true);
    try {
      const result = await subscribeToNewsletter({ fullName, email });
      if (result.success) {
        setStatus("success");
        setFullName("");
        setEmail("");
        setConsent(false);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section !py-0 md:!py-6 lg:!py-[1.5rem] !px-0 md:!px-3 lg:!px-[3rem] bg-white">
      <div className={`flex flex-col gap-[44.2px] px-[23.4px] py-[74px] md:rounded-[26px] ${bgClasses[bgVariant] || bgClasses.blue}`}>
        <div className="flex flex-col items-center gap-[19px]">
          <h2 className="!leading-[120%] !tracking-[-5%] text-center !text-[41px] md:!text-[51px] !font-black text-white">
            Stay Connected
          </h2>

          <p className="max-w-[413px] !leading-[150%] !tracking-[0.2%] text-center !text-[15px] text-grey-50">
            {status === "success" 
              ? "Thank you for subscribing! Check your inbox for a welcome message."
              : "Subscribe to our newsletter for updates on our programs, impact stories, and how you can get involved."}
          </p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8">
            <CheckCircle2 className="w-16 h-16 text-white animate-in zoom-in duration-300" />
            <button 
              onClick={() => setStatus("idle")}
              className="text-white underline text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-[44.2px]">
            <div className="flex flex-col gap-[20px] w-full items-center">
              <div className="flex flex-col items-center gap-[13px] w-full">
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full md:max-w-[581.1px] lg:max-w-[771px] outline-none rounded-[7.8px] p-[13px] !leading-[150%] !tracking-[0.2%] !text-[15px] text-gray-900 placeholder:text-grey-50 bg-white/10 border border-white/5 focus:bg-white/20 transition-all duration-300"
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full md:max-w-[581.1px] lg:max-w-[771px] outline-none rounded-[7.8px] p-[13px] !leading-[150%] !tracking-[0.2%] !text-[15px] text-gray-900 placeholder:text-grey-50 bg-white/10 border border-white/5 focus:bg-white/20 transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-2 max-w-[771px] w-full px-2">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    required
                    id="privacy-policy"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/5 transition-all checked:bg-white/20"
                  />

                  <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <label
                  htmlFor="privacy-policy"
                  className="!leading-[150%] !tracking-[0.2%] !text-[13px] md:!text-[15px] text-grey-50"
                >
                  I have read the{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and consent to receive email updates from The Royals.
                </label>
              </div>
            </div>

            {status === "error" && (
              <p className="text-red-200 text-sm">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !consent}
              className="cursor-pointer bg-white disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-[45px] w-fit py-[9px] ps-[25px] pe-[10px] rounded-full bg-white group transition-all duration-300"
            >
              <span className={`!leading-[150%] !tracking-[0.2%] !text-[15px] ${buttonTextClasses[bgVariant] || buttonTextClasses.blue}`}>
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </span>

              <span className={`p-[8.85px] rounded-full ${buttonIconBgClasses[bgVariant] || buttonIconBgClasses.blue} group-hover:opacity-80 transition-opacity`}>
                {isSubmitting ? (
                  <Loader2 className="w-[19.3px] h-[19.3px] text-white animate-spin" />
                ) : (
                  <ArrowRight className="w-[19.3px] h-[19.3px] text-white" />
                )}
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
