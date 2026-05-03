"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { galleryData } from '@/components/gallery/GalleryData'; //

export default function GalleryContent() {
  const [activeCampaign, setActiveCampaign] = useState('CABI');
  const [activeMediaType, setActiveMediaType] = useState('images');
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Helper to get items
  const currentItems = galleryData[activeCampaign] || {};
  const mediaList = currentItems[activeMediaType.toLowerCase()] || [];
  

  return (
    <div className="bg-foreground min-h-screen">
     <section className='relative w-full bg-black flex flex-col items-center pt-20 pb-32 overflow-hidden px-10 min-h-screen py-10'>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-900/40 to-black pointer-events-none" />

      {/* 1. Header - Tightened margin to 'hug' the images */}
      <div className='flex flex-col gap-4 justify-center items-center z-40 relative mb-4 px-4'>
        <button className='text-[10px] text-white border border-gray-600 rounded-full py-1.5 px-5 bg-white/5 uppercase tracking-[0.2em]'>
          Our Gallery
        </button>
        <h2 className='max-w-4xl text-white text-center font-bold text-5xl md:text-7xl tracking-tight leading-[1.05]'>
          Moments That Tell <br /> Our Story
        </h2>
      </div>

      {/* 2. Dotted Line */}
      <div className="absolute top-[55%] left-0 w-full border-t border-dotted border-blue-400/20 z-0 pointer-events-none" />

      {/* 3. Images Wrapper - Negative margin pulls images up to the text */}
      <div className='relative w-full max-w-7xl mx-auto h-[600px] md:h-[700px] z-10 -mt-10 md:-mt-16'>
        
        {/* LEFT CARD */}
        <div className='absolute left-[2%] lg:left-[5%] top-10 flex flex-col bg-white shadow-2xl p-1.5 pb-8 rotate-[-8deg] w-[260px] md:w-[310px] z-10 transition-all'>
          <div className="relative h-[280px] md:h-[350px]">
            <Image
              src='/gallery/top-left.svg'
              alt='Left Frame'
              fill
              sizes="(max-width: 768px) 260px, 310px"
              className='object-cover'
            />
            {/* Inset Frame */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-20 border-4 border-white shadow-xl z-20 overflow-hidden">
              <Image 
                src='/gallery/smaller-left.svg' 
                alt='Detail' 
                fill 
                sizes="80px"
                className="object-cover" 
              />
            </div>
          </div>
          <p className='mt-5 text-left text-zinc-800 text-[10px] leading-relaxed px-3 font-medium'>
            We delivered school essentials to this classroom, ensuring every student is better prepared.
          </p>
        </div>

        {/* CENTER CARD */}
        <div className='absolute left-1/2 -translate-x-1/2 top-28 flex flex-col bg-white shadow-3xl p-2 pb-12 w-[300px] md:w-[410px] z-30'>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src='/gallery/center.svg'
              alt='Center Frame'
              fill
              sizes="(max-width: 768px) 300px, 410px"
              className='object-cover'
            />
          </div>
          <p className='mt-6 text-left text-zinc-800 text-xs font-semibold px-5 leading-relaxed'>
            Clothing essentials provided to children in Mafoluku, supporting their wellbeing.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className='absolute right-[2%] lg:right-[5%] top-16 flex flex-col bg-white shadow-2xl p-1.5 pb-8 rotate-[8deg] w-[240px] md:w-[300px] z-10 transition-all'>
          <div className="relative h-[250px] md:h-[320px]">
            <Image
              src='/gallery/top-right.svg'
              alt='Right Frame'
              fill
              sizes="(max-width: 768px) 240px, 300px"
              className='object-cover'
            />
             {/* Inset Frame */}
             <div className="absolute -right-4 -top-6 w-16 h-16 border-4 border-white shadow-xl z-20 overflow-hidden">
              <Image 
                src='/gallery/smaller-right.svg' 
                alt='Detail' 
                fill 
                sizes="64px"
                className="object-cover" 
              />
            </div>


            
          </div>
          <p className='mt-5 text-left text-zinc-800 text-[10px] leading-relaxed px-3 font-medium'>
            We provided essential school materials to these students to help them show up ready.
          </p>
        </div>
      </div>

      {/* 4. Bottom Text */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-20 mt-5 z-30">
        <p className="text-gray-500 text-[13px] max-w-[320px] leading-relaxed text-left">
          A glimpse into the lives we've touched, the communities we serve, and the meaningful impact we continue to create.
        </p>
      </div>
        </section>
        {/* Media Section */}
      <section className="w-full  mx-auto py-20 px-6 bg-white pl-25 -mt-10">
      
      {/* 3. CAMPAIGN BUTTONS (The "Top Pills") */}
      <div className="flex justify-start mb-12">
        <div className="flex bg-[#F8F9FA] border border-gray-100 p-1.5 rounded-full shadow-sm">

          {/* Generate buttons based on Data Object keys */}
          {Object.keys(galleryData).map((name) => (
            <button 
              key={name}
              onClick={() => {
                setActiveCampaign(name);
                setSelectedMedia(null); 
              }}
              className={`px-10 py-3 rounded-full transition-all duration-300 font-semibold ${
                activeCampaign === name 
                ? 'bg-[#5D75D4] text-white shadow-md' 
                : 'text-black hover:bg-gray-100'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* 4. MEDIA TABS (Images / Videos) */}
      <div className="flex gap-8 mb-10 border-b border-gray-100 px-4">
        {['Images', 'Videos'].map((type) => (
          <button
            key={type}
            onClick={() => setActiveMediaType(type)}
            className={`pb-4 text-lg font-bold transition-all duration-200 relative ${
              activeMediaType === type ? 'text-[#2D3748]' : 'text-gray-400'
            }`}
          >
            {type}
            {/* Active Tab Underline */}
            {activeMediaType === type && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4A5568]" />
            )}
          </button>
        ))}
      </div>

      {/* 5. THE DYNAMIC GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaList.length > 0 ? (
          mediaList.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
              onClick={() => setSelectedMedia(item)}
            >
              {/* Thumbnail Area */}
              <div className="h-72 relative bg-gray-100">
                <Image 
                  src={item.thumbnail || item.src} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Play Overlay */}
                {activeMediaType === 'Videos' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Image Info Panel */}
              <div className="bg-[#8E9EE2] p-6 text-white relative">
                <h5 className="text-sm mb-3">{item.title}</h5>
                <div className="flex items-start gap-2 opacity-90 text-sm">
                  {/* Location Icon */}
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="leading-snug">{item.location}</p>
                </div>
                
                {/* Floating yellow 'S' Badge */}
                <div className="absolute -top-6 right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[#FFC107] font-bold text-xl">S</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-gray-400">
            No {activeMediaType.toLowerCase()} found for this campaign.
          </div>
        )}
      </div>

      {/* 6. LIGHTBOX MODAL (Full View) */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={e => e.stopPropagation()}>
             {activeMediaType === 'Images' ? (
               <div className="relative h-[80vh] w-full">
                 <Image src={selectedMedia.src} alt="Full view" fill className="object-contain" />
               </div>
             ) : (
               <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
                  <iframe 
                    src={selectedMedia.src} 
                    className="w-full h-full" 
                    allowFullScreen 
                  />
               </div>
             )}
             <button 
                className="absolute -top-10 right-0 text-white text-3xl"
                onClick={() => setSelectedMedia(null)}
             >
               &times;
             </button>
          </div>
        </div>
      )}
    </section>
    </div>
  );
};