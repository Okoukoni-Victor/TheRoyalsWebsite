import { Icon } from "@iconify/react";
import Image from "next/image";

export default function WorkCard({
  icon,
  title,
  description,
  bgColor,
  textColor = "text-grey-900",
  patternSvg,
  patternClassName = "",
}) {
  return (
    <div
      className={`relative ${bgColor} rounded-2xl p-8 lg:p-10 flex flex-col min-h-[350px] overflow-hidden group`}
    >
      {/* Icon Badge - Octagon Shape */}
      <div className="">
        <div 
        className="relative  z-10 w-12 h-12 bg-white shadow-sm mb-16 flex items-center justify-center"
        style={{ clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)" }}
      >
        {icon && <Icon icon={icon} className="w-6 h-6 text-grey-900" />}
      </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 mt-auto ${textColor}`}>
        <h4 className="mb-4">{title}</h4>
        <p className="">{description}</p>
      </div>

      {/* Background Pattern */}
      {patternSvg && (
        <div
          className={`absolute top-0 right-0 pointer-events-none ${patternClassName}`}
        >
          <Image
            src={patternSvg}
            alt=""
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}
