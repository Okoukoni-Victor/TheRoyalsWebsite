import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="section !pb-0 md:!pb-6 lg:!pb-[1.5rem] !px-0 md:!px-3 lg:!px-[3rem] bg-white">
      <div className="flex flex-col gap-[44.2px] px-[23.4px] py-[74px] md:rounded-[26px] bg-green-600">
        <div className="flex flex-col items-center gap-[19px]">
          <h2 className="!leading-[120%] !tracking-[-5%] text-center !text-[41px] md:!text-[51px] !font-black text-white">
            Stay Connected
          </h2>

          <p className="max-w-[413px] !leading-[150%] !tracking-[0.2%] text-center !text-[15px] text-grey-50">
            Subscribe to our newsletter for updates on our programs, impact
            stories, and how you can get involved.
          </p>
        </div>

        <form className="flex flex-col items-center gap-[44.2px]">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col items-center gap-[13px]">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full md:max-w-[581.1px] lg:max-w-[771px] outline-none rounded-[7.8px] p-[13px] !leading-[150%] !tracking-[0.2%] !text-[15px] text-grey-800 placeholder:text-grey-800 bg-green-200 focus:bg-white/20 transition-all duration-300"
              />

              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full md:max-w-[581.1px] lg:max-w-[771px] outline-none rounded-[7.8px] p-[13px] !leading-[150%] !tracking-[0.2%] !text-[15px] text-grey-800 placeholder:text-grey-800 bg-green-200 focus:bg-white/20 transition-all duration-300"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-white/20 bg-white/5 transition-all checked:bg-green-800 checked:border-green-800"
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
                className="md:max-w-[536.6px] lg:max-w-[714px] !leading-[150%] !tracking-[0.2%] !text-[15px] text-grey-50"
              >
                I have read the{" "}
                <Link
                  href="/privacy-policy"
                  className="underline hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receive email updates from The Royals and
                understand I can unsubscribe at any time.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="cursor-pointer inline-flex items-center gap-[45px] w-fit py-[9px] ps-[25px] pe-[10px] rounded-full bg-white"
          >
            <span className="!leading-[150%] !tracking-[0.2%] !text-[15px] text-green-500">
              Subscribe Now
            </span>

            <span className="p-[8.85px] rounded-full bg-green-600">
              <ArrowRight className="w-[19.3px] h-[19.3px] text-white" />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
