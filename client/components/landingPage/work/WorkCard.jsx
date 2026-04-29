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
      className={`relative ${bgColor} rounded-2xl p-8 lg:p-10 flex flex-col min-h-[420px] overflow-hidden group`}
    >
      {/* Icon Badge */}
      <div className="relative z-10 w-14 h-14 bg-white rounded-full shadow-sm mb-16 flex items-center justify-center">
        {icon && <Icon icon={icon} className="w-7 h-7 text-grey-900" />}
      </div>

      {/* Content */}
      <div className={`relative z-10 mt-auto ${textColor}`}>
        <h4 className="mb-4">{title}</h4>
        <p className="">{description}</p>
      </div>

      {/* Background Pattern */}
      {patternSvg && (
        <div
          className={`absolute top-0 right-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500 ${patternClassName}`}
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
