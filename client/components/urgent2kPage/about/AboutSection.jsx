const stats = [
  { number: 250, title: "Lives Impacted" },
  { number: 1, title: "Communities Reached" },
  { number: 1, title: "Successful Programs" },
  { number: 18, title: "Volunteers Engaged" },
];

export default function AboutSection() {
  return (
    <section className="section !pb-0 bg-white">
      <div className="flex flex-col md:flex-row md:justify-between gap-[112px] lg:gap-[0px]">
        <h2 className="!leading-[150%] !text-[20px] text-grey-300">
          About This Campaign
        </h2>

        <div className="md:max-w-[368px] lg:max-w-[824px]">
          <h3 className="mb-[33px] !leading-[120%] !tracking-[-5%] !text-[32px] md:!text-[38px] !font-black text-grey-900">
            The Urgent 2K Campaign was launched in 2025 as a flexible,
            rapid-response initiative designed to address immediate needs in our
            communities.
          </h3>

          <p className="mb-[64px] !leading-[150%] !text-[16px] text-grey-300">
            When urgent needs arise, we act fast, mobilizing our network to
            contribute from ₦2,000 and above.
            <br />
            <br />
            It's simple, accessible, and powerful: ₦2,000 is just the starting
            point, but together, every contribution builds real, immediate
            impact.
            <br />
            <br />
            <strong className="font-bold text-grey-400">
              Urgent 2K Campaign
            </strong>{" "}
            focuses on pupils and students from indigent homes who are unable to
            afford quality education. This is in alignment with the SDG 4 -
            Quality Education.
          </p>

          <div
            aria-label="stats grid"
            className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[54px]"
          >
            {stats.map((stat) => (
              <div key={stat.title}>
                <h4 className="mb-4 !leading-[120%] !tracking-[-5%] !text-[41px] !font-black text-green-600">
                  {stat.number}
                </h4>

                <p className="!leading-[150%] !text-[17px] text-grey-300">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
