import { Icon } from "@iconify/react";
import Image from "next/image";

export default function CoreValueCard({
  icon,
  title,
  description,
  bgColor,
  textColor = "text-grey-900",
  patternSvg,
}) {
  return (
    <div
      className={`relative ${bgColor} rounded-2xl p-4 flex flex-col justify-center min-h-[300px] overflow-hidden group`}
    >
      {/* Icon Badge - Octagon Shape - Top Right */}
      <div className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center">
        <Image
          src="/assets/octagon.svg"
          alt=""
          aria-hidden="true"
          fill
          className="object-contain"
        />
        {icon && <Icon icon={icon} className="relative z-1 w-6 h-6 text-grey-900" />}
      </div>

      {/* Content - Centered */}
      <div className={`relative z-10 ${textColor} max-w-[260px]`}>
        <h4 className="mb-4">{title}</h4>
        <p className="text-grey-400">{description}</p>
      </div>

      {/* Background Pattern - Bottom Right */}
      {patternSvg && (
        <div className="absolute bottom-0 right-0 pointer-events-none translate-x-4 translate-y-4">
          <Image
            src={patternSvg}
            alt={title}
            width={180}
            height={180}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}
