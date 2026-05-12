import Button from "../../ui/Button";
import Image from "next/image";

export default function ImpactCard({ 
  tagSvg, 
  title, 
  description, 
  bgColor, 
  patternSvg 
}) {
  return (
    <div className={`relative w-full flex-1 ${bgColor} max-w-[500px] rounded-2xl p-8 flex flex-col min-h-[400px] overflow-hidden`}>
      {/* Hanging Tag SVG */}
      <div className="absolute top-0 w-2/3 left-1/2 -translate-x-1/2 pointer-events-none">
        <Image 
          src={tagSvg} 
          width={700}
          height={500}
          alt="Category" 
          className="object-contain "
        />
      </div>

      {/* Content */}
      <div className="mt-40 relative text-grey-700 space-y-4 z-10 max-w-[90%] md:max-w-[80%] flex-1 flex flex-col">
        <h5 className=" ">
          {title}
        </h5>
        <p className="mb-6 text-grey-600 flex-1">
          {description}
        </p>

        <div className="mt-auto pt-4">
          <Button 
            label="Learn More" 
            variant="secondary"
            className="text-base"
          />
        </div>
      </div>

      {/* Background Graphic Pattern */}
      {patternSvg && (
        <div className="absolute bottom-0 right-0 w-30 h-30  md:w-40 md:h-40 pointer-events-none">
          <Image 
            src={patternSvg}
            width={200}
            height={200}
            alt="" 
            className=" w-full"
          />
        </div>
      )}
    </div>
  );
}
