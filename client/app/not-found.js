import Image from 'next/image';
import { Icon } from '@iconify/react';
import Button from '@/components/ui/Button';
export default function NotFound() {
    return(
            <section className='flex flex-col md:flex-row justify-between items-center 
            w-full section mt-24 md:mt-0 gap-10 md:gap-16 lg:gap-0 '>
                <div className='text-center md:text-left flex flex-col items-center lg:items-start lg:order lg:max-w-md'> 
                    <div className='flex flex-col gap-2'>
                         <h2 className='text-grey-900 '>Oops....</h2>
                        <h4 className='mt-2'>Page not found</h4>
                         <p className='text-grey-400 mb-5 max-w-xs sm:max-w-none'>This page {"doesn't"} exist or was removed! 
                            <br className='hidden sm:block'/>
                         We suggest you go back to home. </p>
                        

                    </div>
                    <Button 
                        label="Back to Home" 
                        href="/" 
                        variant="primary" 
                        icon="tabler:arrow-left"
                        reversed={true}
                    />

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