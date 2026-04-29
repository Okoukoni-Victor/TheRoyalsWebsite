import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Button({ 
  label, 
  href, 
  variant = 'primary', 
  icon = 'lucide:arrow-right',
  className = '',
  onClick,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-between gap-4 rounded-full transition-all duration-300 active:scale-[0.98] group";
  
  const variants = {
    primary: "bg-blue-300 hover:bg-blue-400 text-white pl-8 pr-2 py-2 ",
    secondary: "bg-white hover:bg-grey-50 text-grey-900 pl-8 pr-2 py-2 ",
  };

  const iconCircleVariants = {
    primary: "bg-blue-800", // Dark blue
    secondary: "bg-blue-800",
  };

  const content = (
    <>
      <span className="">{label}</span>
      <div className={`${iconCircleVariants[variant]} w-11 h-11 rounded-full flex items-center justify-center transition-transform`}>
        <Icon icon={icon} width="22" className="text-white" />
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
