
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from "@iconify/react";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return(
        <footer className='pt-8 md:pt-16 pb-4 px-4 md:px-8 bg-grey-900 text-white'>
            <div className='flex justify-end mb-24 max-w-7xl mx-auto'>
                 <h1 className='text-6xl md:text-8xl font-medium flex items-baseline gap-2'>
                      Get Involved
                     <span className='block w-3 h-3 bg-blue-600 rounded-full translate-y-[-2px]'></span>
                 </h1>

            </div>
            {/* Main Grid */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>

                 {/* Logo Section */}
                 <div className='space-y-6'>
                  <div className='relative w-[180px] h-[60px]'>
                    <Image src='/assets/footerLogo-white.svg'
                     alt='The Royal Logo'
                     fill
                     sizes="180px"
                    className='object-contain brightness-0 invert'
                    />
                  </div>
                <p className=' text-sm leading-relaxed max-w-[280px]'>
                    Empowering Communities through  education, mentoring,
                    and sustainable development initiatives
                </p>

                 </div>

    
                {/* Footer Quick Links */}
                <div className='flex flex-col'>
                    <h5 className=' mb-6'>
                        Quick Links
                    </h5>
                    <ul className='space-y-3'>
                        <li><Link href='/' className='hover:text-blue-500 transition'>Home</Link></li>
                        <li><Link href='/about' className=' hover:text-blue-500 transition'>About Us</Link></li>
                        <li><Link href='/gallery' className=' hover:text-blue-500 transition'>Gallery</Link></li>
                        <li><Link href='/contact' className=' hover:text-blue-500 transition'>Contact</Link></li>
                        <li><Link href='/privacy-policy' className=' hover:text-blue-500 transition'>Privacy Policy</Link></li>
                    </ul>
                    
                </div>

                {/* Initiatives */}
                <div className='flex flex-col'>
                    <h5 className='mb-6'>Our initiatives</h5>
                    <ul className='space-y-4 '>
                        <li>Clothe A BoyChild Initiative (CABI)</li>
                        <li>Urgent 2K Campaign</li>
                    </ul>
                </div>

                {/* Contact channels*/}
                <div className='flex flex-col'>
                    <h5 className='mb-6'>
                        Get in Touch.
                    </h5>
                    <ul>
                        <li className='flex items-center gap-4 mt-1'>
                            <Icon icon="solar:letter-bold" className='text-white' width="18" />
                            <a href="mailto:hello.theroyals@gmail.com" className="hover:text-blue-500 transition">hello.theroyals@gmail.com</a>
                        </li>
                        <li className='flex items-center gap-3 mt-1'>
                            <Icon icon="solar:phone-bold" className='text-white' width="18" />
                            <a href="tel:+2347010990908" className='text-sm hover:text-blue-500 transition'>+234 701 099 0908</a>
                        </li>
                        <li className='flex items-center gap-3 mt-1'>
                            <Icon icon="tabler:brand-whatsapp" className='text-white' width="18" />
                            <a href="https://wa.me/2348166527163" target="_blank" rel="noopener noreferrer" className='text-sm hover:text-blue-500 transition'>+234 816 652 7163</a>
                        </li>
                        <li className='flex items-center gap-3 mt-1'>
                            <Icon icon="solar:map-point-bold" className='text-white mb-5' width="18" />
                            <span className='text-sm'>19, Olanrewaju Street, Off <br />
                            Orile Road, Tabon-Tabon, <br /> Agege, Lagos, Nigeria</span>
                        </li>
                    </ul>
                    {/* Horizontal Icons */}
                    <div className='flex flex-row justify-start mt-5 gap-3.5'>
                        <Link href="#" className="hover:text-blue-500 transition">
                          <Icon icon="tabler:brand-youtube" width="22" /> 
                        </Link> 
                        <Link href="#" className="hover:text-blue-500 transition">
                          <Icon icon="tabler:brand-linkedin" width="22" /> 
                        </Link>
                        <Link href="#" className="hover:text-blue-500 transition">
                          <Icon icon="tabler:brand-x" width="22" /> 
                        </Link>
                        <Link href="#" className="hover:text-blue-500 transition">
                          <Icon icon="tabler:brand-instagram" width="22" /> 
                        </Link>
                    </div>
                </div>
                
            </div>
                {/* Copy rights */}
                <p className='text-sm text-center'>@ {currentYear} The Royals. All rights reserved</p>
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
    )
}