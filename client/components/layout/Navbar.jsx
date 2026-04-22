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
                <Image src='/assets/navLogo-blue.svg'
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
                        <div className='absolute top-full left-0 mt-4 w-[320px] bg-white 
                        border border-gray-100 shadow-2xl rounded-2xl p-6 z-50'>

                            <div className='space-y-3'>
                                <h4 className='text-5xl font-bold text-gray-400 uppercase tracking-[0.1em] '>
                                    Community Support & Empowerment
                                </h4>
                                <Link href="/initiatives/cabi" className='block px-1
                                py-2 hover:bg-blue-50 text-sm'>
                                Clothe A BoyChild Initiative (CABI)
                                </Link>
                            </div>
                            <div className='space-y-3'>
                                <h4 className='text-[9px] font-bold text-gray-400 uppercase tracking-[0.1em] '>
                                    Education
                                </h4>
                                <Link href="/initiatives/urgent-2k" className='block px-1
                                py-2 hover:bg-blue-50 text-sm'>
                                Urgent 2k Campaign
                                </Link>
                            </div>
                            <div className='space-y-3'>
                                <h4 className='text-[9px] font-bold text-gray-400 uppercase tracking-[0.1em] '>
                                    Leadership Pathway
                                </h4>
                                <div className='inline-block px-2.5 py-0.5 bg-gray-50 border border-gray-100 rounded-md'>
                                    <span className='text-[12px] font-bold text-gray-300 uppercase tracking-tight'>
                                        Coming Soon
                                    </span>
                                
                                </div>
                            </div>
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
                 bg-blue-400 h-[55px] w-[206px] pl-6 pr-2 rounded-full '>
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