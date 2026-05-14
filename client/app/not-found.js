import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
export default function NotFound() {
    return(
            <section className='flex flex-col md:flex-row justify-between items-center 
            w-full max-w[1440px] mx-auto lg:min-h-[calc(100vh-80px)] px-6 sm:px-12 md:px-24 lg:px-32 
            pt-32 pb-12 md:pt-40 lg:py-10 gap-10 md:gap-16 lg:gap-0'>
                <div className='text-center md:text-left flex flex-col items-center lg:items-start lg:order lg:max-w-md'> 
                    <div className='flex flex-col gap-2'>
                         <h2 className='text-grey-900 text-3xl sm:text-5xl tracking-tight'>Oops....</h2>
                        <h4 className='mt-2'>Page not found</h4>
                         <p className='text-grey-900 mb-5 max-w-xs sm:max-w-none'>This page doesn't exist or was removed! 
                            <br className='hidden sm:block'/>
                         We suggest you go back to home. </p>
                        

                    </div>
                    <div>
                        <Link href="/">
                            <button className='w-52 h-12 rounded-full bg-blue-300 flex items-center gap-3 py-2 px-4 
                                transition-all duration-300 hover:bg-blue-400 cursor-pointer text-white shadow-md'>
                             <span className='h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center'>
                               
                                 <Icon 
                                 icon="tabler:arrow-left" 
                                 className="text-white" width="18"
                                 />
                              </span> 
                              <span className='text-white font-medium'>
                                  Back to Home
                              </span>
                        
                            </button>
                        </Link>

                    </div>

                </div>

            <div className='w-full max-w-[220px] sm:max-w-[300px] 
            md:max-w-[45%] lg:max-w-xl'>
                <Image 
                src="/assets/error.svg" 
                alt="Not Found" 
                width={600}
                height={500} 
                className='w-full h-auto object-contain' />
            </div>

            </section>
    )
}