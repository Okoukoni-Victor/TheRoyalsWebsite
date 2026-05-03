import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section !pt-50 !pb-0 !px-0 bg-white">
      <div className="relative overflow-hidden">
        <div className="flex flex-col gap-[19px] mb-10 !px-[1rem] md:!px-[3rem]">
          <span className="inline-block w-fit mb-[19px] rounded-[40px] border border-grey-900 px-[26px] py-[9px] !leading-[150%] !tracking-[0.2%] !text-[15px] text-grey-900">
            Community Support & Empowerment
          </span>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5">
            <h1 className="flex flex-col gap-[10px] md:gap-[30px]">
              <span className="hidden md:inline !leading-[105%] !tracking-[-4%] !text-[80px] text-grey-900">
                We remove barriers
              </span>{" "}
              <span className="md:hidden !leading-[105%] !tracking-[-4%] !text-[52px] text-grey-900">
                We remove
              </span>{" "}
              <span className="inline-flex items-center gap-3">
                <span className="inline-block md:hidden mt-[-10px] !leading-[105%] !tracking-[-4%] !text-[52px] text-grey-900">
                  barriers
                </span>
                <span className="inline-flex justify-center items-center w-[52px] h-[52px] rounded-full bg-purple-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M10.2798 0.0210938C10.4251 -0.00703125 10.5751 -0.00703125 10.7204 0.0210938L20.0954 1.89609C20.6204 1.99922 21.0001 2.46328 21.0001 2.99766C21.0001 3.53203 20.6204 3.99609 20.0954 4.09922L16.5001 4.82109V7.49766C16.5001 10.8117 13.8142 13.4977 10.5001 13.4977C7.18607 13.4977 4.50013 10.8117 4.50013 7.49766V4.82109L2.25013 4.37109V7.42266L2.98607 11.0977C3.02826 11.318 2.97201 11.5477 2.83138 11.7211C2.69076 11.8945 2.47513 11.9977 2.25013 11.9977H0.750134C0.525134 11.9977 0.314196 11.8992 0.168884 11.7211C0.023571 11.543 -0.032679 11.318 0.014196 11.0977L0.750134 7.42266V4.05703C0.304821 3.90234 0.000133533 3.48047 0.000133533 2.99766C0.000133533 2.46328 0.379821 1.99922 0.904821 1.89609L10.2798 0.0210938ZM5.24545 15.3586C5.73763 15.1992 6.26732 15.3773 6.62357 15.757L9.9517 19.2961C10.247 19.6102 10.7486 19.6102 11.0439 19.2961L14.372 15.757C14.7283 15.3773 15.2579 15.1992 15.7501 15.3586C18.797 16.3383 21.0001 19.1883 21.0001 22.5586C21.0001 23.3555 20.3533 23.9977 19.5611 23.9977H1.4392C0.647009 23.9977 0.000133533 23.3508 0.000133533 22.5586C0.000133533 19.1883 2.20326 16.3383 5.24545 15.3586Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="inline-block md:hidden mt-[-10px] !leading-[105%] !tracking-[-4%] !text-[52px] text-grey-900">
                  to
                </span>

                <span className="hidden md:inline-block mt-[-17.5px] !leading-[105%] !tracking-[-4%] !text-[80px] text-grey-900">
                  to education for{" "}
                  <span className="hidden lg:inline pe-2 pb-2 text-white bg-purple-700">
                    boys.
                  </span>
                </span>
              </span>{" "}
              <span className="md:hidden !leading-[123%] !text-[52px] text-grey-900">
                education for
              </span>
              <span className="lg:hidden w-fit pe-2 pb-2 !leading-[123%] !text-[52px] md:!text-[80px] text-white bg-purple-700">
                boys.
              </span>
            </h1>

            <p className="md:max-w-[630.31px] lg:max-w-[387px] !leading-[150%] !tracking-[0.2%] !text-[16px] md:!text-[19px] lg:!text-[17px] text-grey-500">
              By providing school uniforms, learning materials, and the support
              underprivileged boys need to stay in school and thrive.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden w-[445px] md:w-[calc(100vw_-_24px)] h-[518px] md:h-[553px] lg:h-[618px] mx-auto md:rounded-[14px]">
          <Image
            src="/assets/cabi-hero-image.jpg"
            alt="Clothe a boy child initiative"
            fill
            className="object-cover"
          />

          <Image
            src="/assets/logo-cabi.png"
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
