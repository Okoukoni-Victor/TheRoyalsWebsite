"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function GalleryCarousel({ 
  media, 
  activeMediaType, 
  selectedMedia, 
  onMediaSelect, 
  folderThumbnail 
}) {
  const isVideo = activeMediaType === "Videos";

  return (
    <div className={`w-full ${isVideo ? "bg-white" : "bg-[#434343]"} py-10 relative group/carousel overflow-hidden`}>
      {/* Thumbnail strip */}
      <div className="px-14 md:px-24">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView="auto"
          navigation={{
            prevEl: ".swiper-prev-btn-custom",
            nextEl: ".swiper-next-btn-custom",
          }}
          centerInsufficientSlides={true}
          className="thumbnail-swiper"
        >
          {media.map((item) => (
            <SwiperSlide 
              key={item.id} 
              className={isVideo ? "w-[240px]! md:w-[320px]!" : "w-[120px]! md:w-[160px]!"}
            >
              <div
                onClick={() => onMediaSelect(item)}
                className={`relative ${isVideo ? "aspect-video" : "aspect-square"} rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  selectedMedia?.id === item.id
                    ? " opacity-100 scale-90"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={
                    activeMediaType === "Images"
                      ? item.src
                      : folderThumbnail
                  }
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                
                {/* Play Icon for Videos */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon icon="ph:play-fill" className="text-white" width="16" />
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows - High Visibility */}
      <button
        className="swiper-prev-btn-custom absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 outline-none transition-all duration-300 [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed"
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isVideo ? "bg-grey-50 text-grey-900" : "text-white"}`}>
          <Icon icon="lucide:chevron-left" width={24} />
        </div>
      </button>
      
      <button
        className="swiper-next-btn-custom absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 outline-none transition-all duration-300 [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed"
      >
        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${isVideo ? "bg-grey-50 text-grey-900" : "text-white"}`}>
          <Icon icon="lucide:chevron-right" width={24} />
        </div>
      </button>
    </div>
  );
}
