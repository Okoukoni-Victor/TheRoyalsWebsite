"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function GalleryCarousel({ 
  media, 
  selectedMedia, 
  onMediaSelect 
}) {
  const swiperRef = useRef(null);

  // Sync carousel with active image if changed via the main image controls
  useEffect(() => {
    if (swiperRef.current && selectedMedia) {
      const index = media.findIndex((m) => m.id === selectedMedia.id);
      if (index !== -1) {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  }, [selectedMedia, media]);

  return (
    <div className="w-full bg-[#434343] py-4 relative group/carousel overflow-hidden">
      {/* Thumbnail strip */}
      <div className="px-12">
        <Swiper
          ref={swiperRef}
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
              className="max-w-30!"
            >
              <div
                onClick={() => onMediaSelect(item)}
                className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  (selectedMedia?.id || media[0]?.id) === item.id
                    ? "opacity-100 border-2 border-white scale-95"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title || "Gallery thumbnail"}
                  width={200}
                  height={200}
                  className="object-cover h-full w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows - High Visibility */}
      <button
        className="swiper-prev-btn-custom absolute left-1 top-1/2 -translate-y-1/2 z-30 outline-none transition-all duration-300 [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed"
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white">
          <Icon icon="lucide:chevron-left" width={24} />
        </div>
      </button>
      
      <button
        className="swiper-next-btn-custom absolute right-1 top-1/2 -translate-y-1/2 z-30 outline-none transition-all duration-300 [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-white">
          <Icon icon="lucide:chevron-right" width={24} />
        </div>
      </button>
    </div>
  );
}
