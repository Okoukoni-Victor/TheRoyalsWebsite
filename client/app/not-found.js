import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
export default function NotFound() {
    return(
            <section className='min-h-screen flex flex-col md:flex-row md:gap-16 justify-center items-center 
            gap-20 px-4 sm:px-6 lg:px-8 py-10'>
                <div> 
                    <div className='flex flex-col gap-4'>
                         <h1>Oops....</h1>
                        <h4 className='mt-2'>Page not found</h4>
                         <p className='text-grey-200 mb-5'>This page doesn't exist or was removed! <br/>
                         We suggest you go back to home </p>
                        

                    </div>
                    <div>
                        <button className='w-52 h-12 rounded-full bg-blue-400 flex items-center gap-3 py-2 px-4 
                        transition-all duration-300 hover:bg-blue-500 '>
                            <Link href="/">
                             <span className='h-8 w-8 rounded-full bg-blue-700 flex items-center justify-center'>
                               
                                 <Icon 
                                 icon="lucide:arrow-left" 
                                 className="text-white" width="18"
                                 />
                              </span> 
                                 </Link>
                              <span className='text-white font-medium'>
                                  Back to Home
                              </span>
                        
                        </button>

                    </div>

                </div>

            <div>
                <Image 
                src="/assets/error.svg" 
                alt="Not Found" 
                width={600}
                height={500} 
                className='mx-auto object-contain' />
            </div>

            </section>
    )
}