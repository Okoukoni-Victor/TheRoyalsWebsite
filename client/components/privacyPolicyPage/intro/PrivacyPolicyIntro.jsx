import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrivacyPolicyIntro() {
  return (
    <section className="section !pt-30 md:!pt-40 !pb-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10 lg:gap-16 mb-16">
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden relative w-[263.22px] h-[251px] rounded-[10px]">
              <Image
                src="/assets/privacy-policy-intro-img.jpg"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover"
              />
            </div>

            <p className="max-w-[280px] !leading-[150%] !tracking-[0.2%] !text-[15px] md:!text-[16px] text-grey-500">
              For those who expect clarity, privacy, and transparency.
            </p>
          </div>

          <div className="flex flex-col gap-[26px]">
            <p className="md:max-w-[450px] lg:max-w-[529px] !leading-[150%] !tracking-[0.2%] uppercase !text-[15px] md:!text-[16px] text-grey-500">
              The Royals is committed to protecting your privacy and handling
              your data responsibly. This policy explains what we collect, how
              we use it, and your rights.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-[6px] w-fit border-b-2 border-black pb-px !leading-[150%] !tracking-[0.2%] !text-[15px] font-semibold text-grey-900"
            >
              Get In Touch
              <ArrowRight className="w-[19.3px] h-[19.3px] text-grey-800" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <h1 className="md:order-2 self-center text-center !leading-[100%] !tracking-[-4%] uppercase !text-[45px] md:!text-[60px] lg:!text-[137px] text-grey-900">
            Privacy Policy
          </h1>

          <div className="flex flex-col gap-2 text-grey-500">
            <p>
              <strong className="me-[7px] !leading-[150%] !tracking-[0.2%] !text-[15px] font-semibold text-grey-900">
                Last Updated:
              </strong>

              <span className="!leading-[150%] !tracking-[0.2%] !text-[14.13px] text-grey-500">
                16th May, 2026
              </span>
            </p>

            <p>
              <strong className="me-[7px] !leading-[150%] !tracking-[0.2%] !text-[15px] font-semibold text-grey-900">
                Effective Date:
              </strong>

              <span className="!leading-[150%] !tracking-[0.2%] !text-[14.13px] text-grey-500">
                16th May, 2026
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
