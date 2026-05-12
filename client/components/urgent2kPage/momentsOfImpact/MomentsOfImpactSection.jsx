import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MomentsOfImpactSection() {
  return (
    <section className="section !px-0 lg:px-[3rem] bg-white">
      <div className="flex flex-col gap-[50px] max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-[19px]">
          <h2 className="!leading-[120%] !tracking-[-5%] text-center !text-[41px] md:!text-[51px] !font-black text-grey-900">
            Moments of Impact
          </h2>

          <p className="max-w-[559px] px-[1rem] lg:px-[3rem] !leading-[150%] !tracking-[0.2%] text-center !text-[15px] text-grey-300">
            Explore highlights from our initiatives, community outreach, and the
            lives we are touching.
          </p>
        </div>

        <div className="relative overflow-hidden flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="order-2 md:order-1 relative overflow-hidden w-[501px] md:w-[585.42px] lg:w-[694px] h-[388px] md:h-[442.86px] lg:h-[525px] rounded-[15px] md:rounded-[20.25px] lg:rounded-[24px]">
              <Image
                src="/assets/u2k-moment-1.jpg"
                alt="Teacher with students in classroom"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2 self-end md:self-start relative overflow-hidden w-[268px] md:w-[422.62px] lg:w-[501px] h-[203px] md:h-[327.3px] lg:h-[388px] rounded-[12.45px] md:rounded-[12.65px] lg:rounded-[15px]">
              <Image
                src="/assets/u2k-moment-2.jpg"
                alt="Students lined up outside school"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative overflow-hidden w-[551px] md:w-[760.04px] lg:w-[901px] h-[415.85px] md:h-[573.61px] lg:h-[680px] rounded-[14.68px] md:rounded-[20.25px] lg:rounded-[24px]">
            <Image
              src="/assets/u2k-moment-3.jpg"
              alt="Students holding up school bags"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="order-2 md:order-1 relative overflow-hidden w-[501px] md:w-[585.42px] lg:w-[694px] h-[388px] md:h-[442.86px] lg:h-[525px] rounded-[15px] md:rounded-[20.25px] lg:rounded-[24px]">
              <Image
                src="/assets/u2k-moment-4.jpg"
                alt="Students with bags in classroom"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 md:order-2 self-end md:self-start relative overflow-hidden w-[268px] md:w-[422.62px] lg:w-[501px] h-[203px] md:h-[327.3px] lg:h-[388px] rounded-[12.45px] md:rounded-[12.65px] lg:rounded-[15px]">
              <Image
                src="/assets/u2k-moment-5.jpg"
                alt="Group of students holding bags"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <Link
          href="/gallery"
          className="self-center inline-flex items-center gap-[45px] w-fit py-[9px] ps-[25px] pe-[10px] rounded-full bg-green-600"
        >
          <span className="!leading-[150%] !tracking-[0.2%] !text-[15px] text-white">
            Explore Gallery
          </span>

          <span className="p-[8.85px] rounded-full bg-green-300">
            <ArrowRight className="w-[19.3px] h-[19.3px] text-white" />
          </span>
        </Link>
      </div>
    </section>
  );
}
