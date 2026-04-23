
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return(
        <footer className='bg-black text-white w-1440px h-851px pt-16 pb-8 px-md:px-12'>
            <div className='flex justify-end mb-24 max-w-7xl mx-auto'>
                 <h1 className='text-6xl md:text-8xl font-medium flex items-baseline gap-2'>
                      Get Involved
                     <span className='block w-3 h-3 bg-blue-600 rounded-full translate-y-[-2px]'></span>
                 </h1>

            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20'>

                 {/* Logo Section */}
                 <div className='space-y-6'>
                <Image src='/assets/footerLogo-white.svg'
                 alt='The Royal Logo'
                 width={160}
                 height={48}
                className='object-contain brightness-0 invert'
                />
                <p className='text-gray-400 text-sm leading-relaxed max-w-[280px]'>
                    Empowering Communities through  education, mentoring,
                    and sustainable development initiatives
                </p>

                 </div>

    
                {/* Footer Quick Links */}
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold mb-6'>
                        Quick Links
                    </h3>
                    <ul className='space-y-3 text-gray-400'>
                        <li><Link href='/' className='hover:text-blue-500 transition'>Home</Link></li>
                        <li><Link href='/about' className=' hover:text-blue-500 transition'>About Us</Link></li>
                        <li><Link href='/gallery' className=' hover:text-blue-500 transition'>Gallery</Link></li>
                        <li><Link href='/contact' className=' hover:text-blue-500 transition'>Contact</Link></li>
                        <li><Link href='/policy' className=' hover:text-blue-500 transition'>Privacy Policy</Link></li>
                    </ul>
                    
                </div>

                {/* Initiatives */}
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold mb-6'>Our initiatives</h3>
                    <ul className='space-y-4 text-gray-400'>
                        <li>Clothe A BoyChild Initiative (CABI)</li>
                        <li>Urgent 2K Campaign</li>
                    </ul>
                </div>
                {/* Contact channels*/}
                <div className='flex flex-col'>
                    <h3 className='text-xl font-bold mb-6'>
                        Get Intouch.
                    </h3>
                    <ul>
                        <li className='flex items-center gap-4 mt-1 text-gray-400'><FaEnvelope className='text-white' /><span>hellothe royals@gmail.com</span></li>
                        <li className='flex items-center gap-3 mt-1 text-gray-400'><FaPhone className='text-white' /><span className='text-sm'>+2347010990908</span></li>
                        <li className='flex items-center gap-3 mt-1 text-gray-400'><FaWhatsapp className='text-white' /><span className='text-sm'>+2348166527163</span></li>
                        <li className='flex items-center gap-3 mt-1 text-gray-400'><FaMapMarkerAlt className='text-white mb-5' /><span className='text-sm'>19, Olanrewaju Street, Off <br />
                            Orile Road, Tabon-Tabon, <br /> Agege, Lagos, Nigeria</span></li>
                    </ul>
                    {/* Horizontal Icons */}
                    <div className='flex flex-row justify-start mt-5 gap-3.5'>
                        <a href="#" className="hover:text-blue-500 transition">
                        <FaYoutube size={20} /> 
                        </a>
                        <a href="#" className="hover:text-blue-500 transition">
                        <FaLinkedin size={20} /> 
                        </a>
                        <a href="#" className="hover:text-blue-500 transition">
                        <FaXTwitter size={20} /> 
                        </a>
                        <a href="#" className="hover:text-blue-500 transition">
                        <FaInstagram size={20} /> 
                        </a>
                    </div>
                </div>
                
            </div>
                {/* Copy rights */}
                <div className='flex flex-col items-center gap-6'>
                <p className='text-gray-500 text-sm'>@ {currentYear} The Royals. All rights reserved</p>
                {/* Colorful shapes at the footer bottom  */}

                <Image
                    src="/assets/footer-image.png"
                    alt='Decorative Shapes'
                    width={450}
                    height={60}
                    className='object-contain'
                 />
                </div>
                


                
            </footer>
    )
}