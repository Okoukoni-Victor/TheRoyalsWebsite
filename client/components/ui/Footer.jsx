import Link from 'next/link';
import Image from 'next/image';
import { Icon } from "@iconify/react";

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

const INITIATIVES = [
  { label: 'Clothe A BoyChild Initiative (CABI)', href: '/initiatives/cabi' },
  { label: 'Urgent 2K Campaign', href: '/initiatives/urgent-2k' },
];

const CONTACT_INFO = [
  { 
    icon: 'formkit:email', 
    content: 'hello.theroyals@gmail.com', 
    href: 'mailto:hello.theroyals@gmail.com' 
  },
  { 
    icon: 'proicons:call', 
    content: '+234 701 099 0908', 
    href: 'tel:+2347010990908',
    isSmall: true
  },
  { 
    icon: 'ic:outline-whatsapp', 
    content: '+234 816 652 7163', 
    href: 'https://wa.me/2348166527163',
    isExternal: true,
    isSmall: true
  },
  { 
    icon: 'boxicons:location', 
    content: (
      <span>
        19, Olanrewaju Street, Off <br />
        Orile Road, Tabon-Tabon, <br /> Agege, Lagos, Nigeria.
      </span>
    ),
    isAddress: true
  },
];

const SOCIAL_LINKS = [
  { icon: 'mynaui:youtube-solid', href: '#' },
  { icon: 'mdi:linkedin', href: '#' },
  { icon: 'prime:twitter', href: '#' },
  { icon: 'ri:instagram-fill', href: '#' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return(
        <footer className='section bg-grey-900 text-white'>
            <div className='flex justify-end mb-32 max-w-7xl mx-auto'>
                 <h1 className='text-6xl md:text-8xl font-medium flex items-baseline gap-2'>
                      Get Involved
                     <span className='block w-3 h-3 bg-blue-300 rounded-full translate-y-[-2px]'></span>
                 </h1>
            </div>

            {/* Main Grid */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 md:gap-24 mb-24'>

                 {/* Logo Section */}
                 <div className='col-span-1 md:col-span-2 lg:col-span-1 space-y-6 '>
                    <div className='relative w-[180px] h-[60px]'>
                        <Image 
                            src='/assets/footerLogo-white.svg'
                            alt='The Royal Logo'
                            fill
                            sizes="180px"
                            className='object-contain font-helixa brightness-0 invert'
                        />
                    </div>
                    <p className='text-grey-50'>
                        Empowering communities through education, mentorship, and sustainable development initiatives.
                    </p>
                 </div>

                {/* Footer Quick Links */}
                <div className='flex flex-col'>
                    <h5 className='mb-6'>Quick Links</h5>
                    <ul className='space-y-3'>
                        {QUICK_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className='hover:text-blue-300 text-[0.938rem] text-grey-50 transition'>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Initiatives */}
                <div className='flex flex-col'>
                    <h5 className='mb-6'>Our initiatives</h5>
                    <ul className='space-y-4'>
                        {INITIATIVES.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className='hover:text-blue-300 text-[0.938rem] text-grey-50 transition'>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact channels*/}
                <div className='col-span-1 md:col-span-2 lg:col-span-1 flex flex-col'>
                    <h5 className='mb-6'>Get in Touch</h5>
                    <ul className='space-y-4 text-grey-50'>
                        {CONTACT_INFO.map((info, idx) => (
                            <li key={idx} className='flex items-start gap-3 mt-1'>
                                <Icon 
                                    icon={info.icon} 
                                    className={`text-grey-50 ${info.isAddress ? 'mb-5' : ''}`} 
                                    width="20" 
                                />
                                {info.href ? (
                                    <a 
                                        href={info.href} 
                                        target={info.isExternal ? "_blank" : undefined}
                                        rel={info.isExternal ? "noopener noreferrer" : undefined}
                                        className={`hover:text-blue-300 transition ${info.isSmall ? 'text-[0.938rem]' : ''}`}
                                    >
                                        {info.content}
                                    </a>
                                ) : (
                                    <span className={info.isSmall ? 'text-[0.938rem]' : ''}>
                                        {info.content}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Horizontal Icons */}
                    <div className='flex flex-row justify-start mt-8 gap-3.5'>
                        {SOCIAL_LINKS.map((social, idx) => (
                            <Link key={idx} href={social.href} className="hover:text-blue-500 transition">
                                <Icon icon={social.icon} width="20" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copy rights */}
            <p className='text-grey-50 mt-16 text-center'>@ {currentYear} The Royals. All rights reserved</p>
            
            <div className='w-full flex justify-start mt-10'>
                {/* Colorful shapes at the footer bottom  */}
                <div className='flex justify-left w-full'>
                    <div className='relative w-[450px] h-[60px] max-w-full'>
                        <Image
                            src="/assets/footer-image.png"
                            alt='Decorative Shapes'
                            fill
                            sizes="(max-width: 768px) 100vw, 450px"
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>            
        </footer>
    );
}