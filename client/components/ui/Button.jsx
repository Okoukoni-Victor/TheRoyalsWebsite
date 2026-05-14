import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Button({
  label,
  href,
  variant = "primary",
  icon = "tabler:arrow-right",
  className = "",
  onClick,
  reversed = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-between gap-8 rounded-full whitespace-nowrap transition-all duration-300 active:scale-[0.98] group";

  const variants = {
    primary: "bg-blue-300 hover:bg-blue-400 text-white",
    secondary: "bg-white hover:bg-grey-50 text-grey-900",
    secondaryBlue: "bg-white hover:bg-grey-50 text-blue-300",
    secondaryGreen: "bg-white hover:bg-grey-50 text-green-600",
    secondaryPurple: "bg-white hover:bg-grey-50 text-purple-700",
    green: "bg-green-600 hover:bg-green-700 text-white",
    purple: "bg-purple-700 hover:bg-purple-800 text-white",
    hero: "bg-blue-300 hover:bg-blue-400 text-white",
  };

  const iconCircleVariants = {
    primary: "bg-blue-800", // Dark blue
    secondary: "bg-blue-800",
    secondaryBlue: "bg-blue-800",
    secondaryGreen: "bg-green-600",
    secondaryPurple: "bg-purple-900",
    green: "bg-green-300",
    purple: "bg-purple-200",
    hero: "bg-grey-800",
  };

  const paddingStyles = reversed ? "pl-2 pr-8 py-2" : "pl-8 pr-2 py-2";

  const content = (
    <>
      {reversed ? (
        <>
          <div
            className={`${iconCircleVariants[variant]} w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-transform`}
          >
            <Icon icon={icon} width="18" className="text-white" />
          </div>
          <span className="">{label}</span>
        </>
      ) : (
        <>
          <span className="">{label}</span>
          <div
            className={`${iconCircleVariants[variant]} w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-transform`}
          >
            <Icon icon={icon} width="18" className="text-white" />
          </div>
        </>
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${paddingStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
