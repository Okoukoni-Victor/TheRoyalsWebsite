"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Gallery",
  description: "Explore the visual story of our impact. See The Royals in action across various African communities through our gallery of programs and initiatives.",
};

const Gallery = () => {
  const [activeType, setActiveType] = useState(null);
  const [activeYear, setActiveYear] = useState(null);

  return (
    <main className='relative w-full min-h-screen bg-gray-900 pt-24 overflow-x-hidden'>
      <section className='relative w-full min-h-[60vh] flex flex-col items-center justify-center bg-gray-900 text-center px-4'>
        <div className='flex flex-col gap-5 justify-center items-center '>
          <button className='text-sm text-[#FFFFFF] border rounded-full
           border-amber-50 mt-10 text-center py-2 px-4'>
            Our Gallery
          </button>
          <h2 className='max-w-2xl text-amber-50 text-center font-semibold'>
            Moments That Tell <br /> Our Story
          </h2>
        </div>

        {/* Gallery Images wrapper */}
        <div className='relative h-[750px] max-w-7xl mx-auto w-[90%] -mt-10'> 
          {/* Left Image */}
          <div className='absolute left-0 top-347px left-108px flex flex-col bg-white shadow-3xl p-1 pb-10 rotate-[-7deg] w-[300px] z-10'>
          <Image
            src='https://images.unsplash.com/photo-1558979107-a58878ab837b?w=500&auto=format&fit=crop'
            alt='Gallery Image 1'
            width={278}
            height={390}
            className='w-auto h-90 object-cover'
          />
          <span className=' mt-3 text-center text-zinc-700 text-sm font-medium leading-relaxed'>
            We delivered school essentials to this classroom, 
            ensuring every student is better prepared to learn
            and participate
          </span>

          </div>
          {/* Center Image */}
          <div className='absolute left-1/2 -translate-x-1/2 top-346px left-108px gap-9 flex flex-col bg-white shadow-3xl pt-7 pr-7 pb-124px pl-7 w-[390] z-30 border-8'>
          <Image
            src='https://images.unsplash.com/photo-1681745207463-d51c8f8d24e2?w=500&auto=format&fit=crop'
            alt='Gallery Image 2'
            width={278}
            height={390}
            className='w-full h-90 object-cover'
          />
          <span className=' mt-3 text-center text-zinc-700 text-sm font-medium leading-relaxed'>
            Clothing essentials provided to children in Mafoluku, helping meet a basic need and support their well being
          </span>
          </div>
          {/* Right Image */}
          <div className='absolute right-4 top-346px left-1011px flex flex-col gap-9px bg-white shadow-2xl p-1 pb-10 rotate-7 w-[310px] z-10'>
          <Image
            src='https://images.unsplash.com/photo-1681745206981-c027f0dc2575?w=500&auto=format&fit=crop'
            alt='Gallery Image 3'
            width={400}
            height={300}
            className='w-full h-90 object-cover'
          />
          <span className=' mt-3 text-center text-zinc-700 text-sm font-medium px-2'> 
            We provided school essentials to this classroom, ensuring every student helping them show up prepared and ready to learn
          </span>
          </div>
          </div>
      </section>

      <section className="w-full bg-gray-100 py-16">

          {/* Media section */}
          <div className='max-h-5xl mx-auto'>
            {/* Type Button */}
            <div className='flex justify center gap-4 mb-10'>
              <button
              onClick={() => {
                setActiveType("media");
                setSelectedYear(null);
              }}
              className={`px-6 py-2 rounded-full transaction ${activeType === "media" ? 
                "bg-blue-600 text-white" 
                : "bg-white border"
              }`}>
                Media
              </button>

              <button
              onClick={()=> {
                setActiveType("video");
                setSelectedYear(null);
              }}
              className={`px-6 py-2 rounded-full transaction ${activeType === "media" ? 
                "bg-blue-600 text-white" : "bg-white border"
              }`}>
                Video
              </button>
            </div>

              {/* Year Selector */}
              {activeType && (
                <div className='flex gap-3 overflow-x-auto pb-4 md-6 justify-center'>
                  {Object.keys(galleryData[activeType]).map(year =>(
                    <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition 
                    ${selectedYear === year ? "bg-green-600 text-white" : "bg-white border" }`}
                    >
                      {year}
                    </button>
                   ))}
                </div>
              )}
                {/* // Content grid */}
                {activeYear && (
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
                  {galleryData[activeType] [activeYear].map((item, index) => (
                    <div
                    key={index}
                    className='rounded-2xl overflow-hidden shadow hover:scale-105 transition'>
                      {activeType === "media" ? (
                        <Image 
                        src={item}
                        alt='"gallery'
                        width={400}
                        height={300} 
                        className='w-full h-48 object-cover'
                        />
                      ) : (
                        <iframe
                        src={item} 
                        title='video'
                        className='w-full h-48 object-cover'
                          allowFullScreen
                          />  
                      )}
                    </div>
                  ))}
                  </div>
                )}
                {/* // Empty State */}
                {!activeType && (
                  <p className='text-center text-gray-500 mt-10'>
                  Select media or Video to begin
                  </p>
                )}
          </div>
             
      </section>
        
    </main>
  )
}

export default Gallery