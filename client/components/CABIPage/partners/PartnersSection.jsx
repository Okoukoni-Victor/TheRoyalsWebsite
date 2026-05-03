import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PartnersSection() {
  const partners = [
    {
      name: "Urgent 2K",
      logo: { path: "/assets/logo-urgent.png", width: 173, height: 76 },
      radius:
        "rounded-tl-[20px] rounded-tr-[20px] md:rounded-tr-none md:rounded-bl-[20px]",
    },
    {
      name: "Ebonyi State",
      logo: { path: "/assets/logo-lux.png", width: 173, height: 76 },
      radius:
        "rounded-bl-[20px] rounded-br-[20px] md:rounded-bl-none md:rounded-tr-[20px]",
    },
  ];

  return (
    <section className="section !pb-0 bg-white">
      <div className="flex flex-col gap-[50px] max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-[19px]">
          <h2
            id="partners-heading"
            className="!leading-[120%] !tracking-[-5%] text-center !text-[41px] md:!text-[51px] !font-black text-grey-900"
          >
            Our Partners
          </h2>

          <p className="max-w-[413px] !leading-[150%] !tracking-[0.2%] text-center !text-[15px] text-grey-300">
            Collaborating with organizations that share our vision for community
            empowerment.
          </p>
        </div>

        <ul
          aria-labelledby="partners-heading"
          className="grid grid-cols-1 md:grid-cols-2 gap-[10px]"
        >
          {partners.map((partner) => (
            <li
              key={partner.name}
              className={`flex justify-center items-center h-[136px] ${partner.radius} border border-blue-50 bg-white`}
            >
              <Image
                src={partner.logo.path}
                alt={partner.name}
                width={partner.logo.width}
                height={partner.logo.height}
              />
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="self-center inline-flex items-center gap-[45px] w-fit py-[9px] ps-[25px] pe-[10px] rounded-full bg-purple-700"
        >
          <span className="!leading-[150%] !tracking-[0.2%] !text-[15px] text-white">
            Support Our Mission
          </span>

          <span className="p-[8.85px] rounded-full bg-purple-200">
            <ArrowRight className="w-[19.3px] h-[19.3px] text-white" />
          </span>
        </Link>
      </div>
    </section>
  );
}
