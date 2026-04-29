import Image from "next/image";

const founders = [
  {
    id: "solomonemakwu",
    name: "Solomon Emakwu",
    role: "Founder",
    image: ["/assets/solomon-emakwu-sm.jpg", "/assets/solomon-emakwu-md.jpg"],
    avatar: "/assets/solomon-emakwu-avatar.webp",
    bio: (
      <p className="max-w-xl text-grey-300">
        <strong className="font-bold text-grey-600">Solomon Emakwu</strong> is a
        leadership enthusiast, writer, and an educator. He is passionate about
        leadership, education, and children development. He holds a Bachelor's
        degree in English from the prestigious University of Lagos. <br />
        <br /> Driven by his passion for children, he recently launched{" "}
        <strong className="font-bold text-grey-600">Urgent 2K Campaign</strong>,
        through which over 250 pupils have been supported with essential school
        materials.
        <br />
        <br /> A positive and goal-oriented individual, Solomon intends to
        pursue his Master's in Leadership and Education, also in Childhood
        Education where he is confident of learning all he needs to not only
        change the course of education in his Africa but also impact the lives
        of children.
      </p>
    ),
  },
  {
    id: "mariaugboojoideemakwu",
    name: "Maria Ugboojoide Emakwu",
    role: "Co-founder",
    image: [
      "/assets/maria-ugboojoide-emakwu-sm.png",
      "/assets/maria-ugboojoide-emakwu-md.png",
    ],
    avatar: "/assets/maria-ugboojoide-emakwu-avatar.webp",
    bio: (
      <p className="max-w-xl text-grey-300">
        <strong className="font-bold text-grey-600">
          Maria Ugboojoide Emakwu
        </strong>{" "}
        is the founder and convener of Clothe A BoyChild Initiative, an NGO
        committed to clothing underserved boys with dignity while instilling the
        belief that every child matters.
        <br />
        <br />
        Driven by the conviction that no child should be left out, she leads
        outreaches that restore confidence, inspire hope, and replace limiting
        mindsets with purpose.
        <br />
        <br />
        The initiative is expanding into skills development and empowerment
        programs, equipping boys today to become self-reliant, value-driven men
        shaping stronger communities.
      </p>
    ),
  },
];

export default function Founders() {
  return (
    <section className="section !pt-0 bg-white">
      <div className="flex flex-col gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-center">Meet Our Founders</h3>

          <p className="max-w-lg text-center text-grey-300">
            Behind every impact are visionary leaders, committed to transforming
            communities and inspiring lasting change.
          </p>
        </div>

        <div className="flex flex-col gap-13 md:gap-26">
          {founders.map((founder, index) => (
            <div
              key={founder.id}
              className={`flex flex-col ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-18 lg:gap-26`}
            >
              <div className="relative shrink-0 w-full md:w-1/2">
                <Image
                  src={founder.image[0]}
                  alt={founder.name}
                  width={373}
                  height={485}
                  className="md:hidden w-full h-auto object-cover rounded-[20px]"
                />

                <Image
                  src={founder.image[1]}
                  alt={founder.name}
                  width={373}
                  height={485}
                  className="hidden md:inline w-full h-auto object-cover rounded-[20px]"
                />

                {/* Name Card */}
                <div className="absolute bottom-5 left-5 right-5 flex justify-between p-5 rounded-[10px] bg-white">
                  <div className="flex items-center gap-3">
                    <div className="relative overflow-hidden shrink-0 w-10 h-10 rounded-full">
                      <Image
                        src={founder.avatar}
                        alt={founder.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="font-bold text-grey-900">{founder.name}</p>

                      <p className="text-grey-400">{founder.role}</p>
                    </div>
                  </div>

                  <div className="w-[49px] h-[7px] mt-[7px] rounded-[30px] bg-grey-50" />
                </div>
              </div>

              <p className="max-w-xl">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
