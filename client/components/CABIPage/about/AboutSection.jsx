const stats = [
  { number: "1,000", title: "Lives Impacted" },
  { number: 6, title: "Communities Reached" },
  { number: 6, title: "Successful Programs" },
  { number: 20, title: "Volunteers Engaged" },
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
            To clothe underserved boy children with dignity, restoring
            confidence and affirming that every child matters.
          </h3>

          <p className="mb-[64px] !leading-[150%] !text-[16px] text-grey-300">
            We create safe, uplifting touchpoints today through clothing
            outreaches, and we build toward sustainable empowerment, equipping
            boys with practical skills, mentorship, and opportunities to grow
            into self-reliant, value-driven men.
            <br />
            <br />A future where no boy child is invisible, overlooked, or left
            behind. We see generations of boys clothed with dignity today,
            empowered with skills and purpose tomorrow; men of character and
            capacity who strengthen families, communities, and nations.
          </p>

          <div
            aria-label="stats grid"
            className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[54px]"
          >
            {stats.map((stat) => (
              <div key={stat.title}>
                <h4 className="mb-4 !leading-[120%] !tracking-[-5%] !text-[41px] !font-black text-purple-700">
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
