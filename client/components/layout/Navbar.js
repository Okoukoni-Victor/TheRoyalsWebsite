'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className='w-full flex justify-center items-center border-b bg-white'>
            <div className='w-[1440px] h-[93px] flex items-center justify-between px-[95px]'>
              
                {/* Logo Section */}
                <Link href='/' className='flex items-center'>
                <Image src='https://drive.google.com/uc?export=download&id=1uFRGinEPaBLDVBsiy6uC17aFmYJj3Hy5'
                 alt='The RoyalLogo'
                 width={160}
                 height={40}
                className='object-contain'
                />
                </Link>
            
                    <ul className='flex items-center justify-center gap-20 mx-auto'>
                        <li>
                        <Link href='/' className='cursor-pointer hover:text-blue-700 transition'>
                        Home
                        </Link>
                        </li>

                        <li>
                        <Link href='/about' className='cursor-pointer hover:text-blue-700 transition'>
                        About
                        </Link>
                        </li>

                        <li className='relative'>
                        <button onClick={() => setIsOpen(!isOpen)}
                         className='flex items-center gap-1 hover:text-blue-700 cursor-pointer transition font-medium'>
                        Initiative
                        <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                        </button>
                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div>
                                <Link href="/clothe A BoyChild Initiative (CABI)" className='block px-4
                                py-2 hover:bg-blue-50 text-sm'>
                                Clothe A BoyChild
                                </Link>

                                <Link href="/Urgent 2k Campaign" className='block px-4
                                py-2 hover:bg-blue-50 text-sm'>
                                Urgent 2k Campaign
                                </Link>
                            </div>
                        )}
                        </li>

                        <li>
                        <Link href='/gallery' className='cursor-pointer hover:text-blue-700 transition'>
                        Gallery
                        </Link>
                        </li>

                        <li>
                        <Link href='/contact' className='cursor-pointer hover:text-blue-700 transition'>
                        Contact
                        </Link>
                        </li>
                        
                    </ul>
            

                <button className='flex items-center justify-between
                 bg-blue-700 h-[55px] w-[206px] pl-6 pr-2 rounded-full '>
                    <p className='text-white text-sm font-medium'>Get Involved</p>
                    <span className='flex items-center justify-center
                     w-10 h-10 bg-blue-950 rounded-full text-white'>
                     → 
                     </span>
                </button>

            </div>
        </nav>
    );
}