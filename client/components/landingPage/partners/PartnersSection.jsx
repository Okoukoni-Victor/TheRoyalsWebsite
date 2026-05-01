import Image from "next/image";
import Button from "../../ui/Button";

export default function PartnersSection() {
  const partners = [
    { name: "Urgent 2K Campaign", logo: "/assets/logo-urgent.png", bgColor: "bg-grey-900" },
    { name: "CABI", logo: "/assets/logo-cabi.png", bgColor: "bg-purple-900" },
    { name: "NYSC", logo: "/assets/logo-nysc.png", bgColor: "bg-white" },
    { name: "Salt of the Nation", logo: "/assets/logo-ebonyi.png", bgColor: "bg-white" },
    { name: "LUX O'BEI", logo: "/assets/logo-lux.png", bgColor: "bg-white" },
  ];

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-grey-900 mb-6 font-helixa">Our Partners</h2>
          <p className="text-grey-400 max-w-xl mx-auto text-lg">
            Collaborating with organizations that share our vision for community empowerment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center p-4 justify-center rounded-2xl border border-grey-50 h-40 shadow-sm w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <div className={`relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden ${partner.bgColor === "bg-white" ? "" : partner.bgColor}`}>
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain" 
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button 
            label="Support Our Mission" 
            href="/support" 
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
