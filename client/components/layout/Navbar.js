import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
    return(
        <nav className='w-full flex justify-center items-center border-b bg-white'>
            <div className='w-[1440px] h-[93px] flex items-center justify-between px-[95px]'>
              
                {/* Logo Section */}
                <Link href='/' className='flex items-center'>
                <Image src='https://drive.google.com/uc?export=download&id=1uFRGinEPaBLDVBsiy6uC17aFmYJj3Hy5'
                 alt='The Royallogo'
                 width={40}
                 height={40}
                className='object-contain'
                />
                </Link>
            
                    <ul className='flex item-center gap-8 mx-auto'>
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
                        <li>
                        <Link href='/initiative' className='cursor-pointer hover:text-blue-700 transition'>
                        Initiative
                        </Link>
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