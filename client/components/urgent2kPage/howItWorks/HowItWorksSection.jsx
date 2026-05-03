const steps = [
  {
    number: "01",
    title: "Need Identified",
    description:
      "We identify an urgent community need requiring immediate action.",
  },
  {
    number: "02",
    title: "Campaign Launched",
    description:
      "We share the need with our network via social media and WhatsApp.",
  },
  {
    number: "03",
    title: "Community Responds",
    description:
      "Supporters contribute ₦2,000 or more toward the urgent cause.",
  },
  {
    number: "04",
    title: "Impact Created",
    description:
      "Funds are quickly deployed and impact updates shared with all contributors.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section !pb-0 bg-white">
      <div className="flex flex-col gap-[50px] max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-[19px]">
          <h2
            id="how-it-works-heading"
            className="!leading-[120%] !tracking-[-5%] text-center !text-[41px] md:!text-[51px] !font-black text-grey-900"
          >
            How It Works
          </h2>

          <p className="max-w-[704px] !leading-[150%] !tracking-[0.2%] text-center !text-[15px] text-grey-300">
            A thoughtfully designed process that simplifies giving, enabling
            rapid response and meaningful impact when communities need it most.
          </p>
        </div>

        <ol
          aria-labelledby="how-it-works-heading"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {steps.map((step, index) => (
            <li
              key={step.number}
              className={`flex flex-col justify-between h-[326.07px] lg:h-[349.07px] px-[23.69px] py-[24.94px] rounded-[18.7px] ${
                index % 2 === 0 ? "bg-green-50" : "bg-green-400"
              }`}
            >
              <h3
                className={`!leading-[120%] !tracking-[-5%] !text-[51px] !font-black ${
                  index % 2 === 0 ? "text-grey-900" : "text-white"
                }`}
              >
                {step.number}
              </h3>

              <div className="flex flex-col gap-[21.2px]">
                <h4
                  className={`!leading-[120%] !tracking-[-5%] !text-[24px] ${
                    index % 2 === 0 ? "text-grey-700" : "text-white"
                  }`}
                >
                  {step.title}
                </h4>

                <p
                  className={`!leading-[150%] !tracking-[0.2%] !text-[15px] ${
                    index % 2 === 0 ? "text-grey-400" : "text-white"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
