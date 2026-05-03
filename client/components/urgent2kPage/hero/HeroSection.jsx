import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section !pt-50 !pb-0 !px-0 bg-white">
      <div className="relative overflow-hidden">
        <div className="flex flex-col gap-[19px] mb-10 px-4 md:px-[3rem]">
          <span className="inline-block w-fit rounded-[40px] border border-grey-900 px-[26px] py-[9px] leading-[150%] tracking-[0.2%] text-[15px] text-grey-900">
            Education
          </span>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
            <h1 className="flex flex-col gap-[10px] md:gap-[30px]">
              <span className="leading-[105%] !tracking-[-4%] !text-[52px] md:!text-[80px] text-grey-900">
                We fund urgent
              </span>{" "}
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex justify-center items-center w-[52px] h-[52px] rounded-full bg-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="23"
                    viewBox="0 0 17 23"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M5.38211 22.5015C5.25645 22.5016 5.13229 22.4742 5.01835 22.4212C4.90442 22.3682 4.80347 22.2909 4.72261 22.1947C4.64175 22.0985 4.58293 21.9858 4.55029 21.8645C4.51765 21.7431 4.51197 21.6161 4.53367 21.4923V21.4872L5.85133 14.2515H0.74992C0.60832 14.2515 0.469617 14.2114 0.349855 14.1359C0.230092 14.0603 0.134163 13.9524 0.0731628 13.8246C0.0121625 13.6968 -0.0114166 13.5544 0.00515303 13.4138C0.0217227 13.2731 0.0777639 13.1401 0.166795 13.03L10.4404 0.329657C10.5573 0.181215 10.7197 0.0751596 10.9026 0.027709C11.0855 -0.0197416 11.2789 -0.00597574 11.4533 0.0669015C11.6276 0.139779 11.7733 0.267756 11.8681 0.431263C11.9628 0.59477 12.0014 0.784807 11.9779 0.972313C11.9779 0.986376 11.9741 0.999969 11.9718 1.01403L10.6495 8.25153H15.7499C15.8915 8.25155 16.0302 8.29165 16.15 8.3672C16.2697 8.44274 16.3657 8.55065 16.4267 8.67844C16.4877 8.80622 16.5113 8.94867 16.4947 9.0893C16.4781 9.22992 16.4221 9.36299 16.333 9.47309L6.05805 22.1734C5.97731 22.2754 5.8746 22.3579 5.75757 22.4147C5.64054 22.4715 5.5122 22.5012 5.38211 22.5015Z"
                      fill="white"
                    />
                  </svg>
                </span>

                <span className="inline-block mt-[-10px] md:mt-[-17.5px] !leading-[123%] md:!leading-[105%] !tracking-[-4%] !text-[52px] md:!text-[80px] text-grey-900">
                  community{" "}
                  <span className="hidden md:inline-block pe-2 pb-2 text-white bg-green-600">
                    needs.
                  </span>
                </span>
              </span>{" "}
              <span className="md:hidden w-fit pe-2 pb-2 !leading-[123%] !text-[52px] text-white bg-green-600">
                needs.
              </span>
            </h1>

            <p className="md:max-w-[658px] lg:max-w-[404px] !leading-[150%] !tracking-[0.2%] !text-[16px] md:!text-[19px] lg:!text-[17px] text-grey-500">
              In moments of urgent need, we act fast, where even the smallest
              contribution can create a powerful impact.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden w-[445px] md:w-[calc(100vw_-_24px)] h-[518px] md:h-[553px] lg:h-[618px] mx-auto md:rounded-[14px]">
          <Image
            src="/assets/u2k-hero-image.jpg"
            alt="Teacher with pupils in class"
            fill
            className="object-cover"
          />

          <Image
            src="/assets/logo-urgent.png"
            alt=""
            aria-hidden="true"
            width={173}
            height={64.14}
            className="absolute left-[10px] md:left-[24px] lg:left-[27px] bottom-[10px] md:bottom-[24px] lg:bottom-[27px] w-[173px] md:w-[205px] h-[64.14px] m:h-[76px] rounded-[7.6px] md:rounded-[9px] border-[2.53px] md:border-[3px] border-grey-50"
          />
        </div>
      </div>
    </section>
  );
}
