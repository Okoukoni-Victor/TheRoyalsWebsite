"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import GalleryCarousel from "./GalleryCarousel";

export default function FolderDetail({ 
  folder, 
  activeMediaType, 
  selectedMedia, 
  onMediaSelect, 
  onBack 
}) {
  const isVideo = activeMediaType === "Videos";
  
  // Logic for controlling the active main image
  const currentIndex = folder.media.findIndex(
    (m) => m.id === (selectedMedia?.id || folder.media[0]?.id)
  );

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : folder.media.length - 1;
    onMediaSelect(folder.media[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < folder.media.length - 1 ? currentIndex + 1 : 0;
    onMediaSelect(folder.media[newIndex]);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Premium Back Button */}
      <button
        onClick={onBack}
        className="flex items-center font-semibold gap-3 text-grey-500 hover:text-blue-300 transition-colors mb-6 group text-sm"
      >
        <div className="flex items-center justify-center">
          <Icon icon="lucide:chevron-left" width="24" className="group-hover:-translate-x-1 transition-transform" />
        </div>
        <span>Back to folder</span>
      </button>

      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h5 className=" text-grey-900 mb-4">
            {folder.title}
          </h5>
          <div className="flex items-center gap-2 text-grey-500">
            <Icon icon="lucide:map-pin" width="18" />
            <p className="">{folder.location}</p>
          </div>
        </div>
      </div>

      {/* Featured Media + Thumbnails */}
      <div className={`relative mb-20 ${isVideo ? "max-w-4xl" : "max-w-2xl"} mx-auto`}>
        {/* Main Featured Content */}
        <div className={`relative w-full aspect-video md:aspect-21/9 lg:aspect-16/8 bg-grey-100 overflow-hidden ${isVideo ? "rounded-3xl" : ""}`}>
          {!isVideo ? (
            <>
              <Image
                src={selectedMedia?.src || folder.media[0]?.src}
                alt="Featured"
                fill
                className="object-cover"
                priority
              />
              
              {/* Image Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                <button 
                  onClick={handlePrev}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm pointer-events-auto hover:bg-black/60 transition-colors"
                >
                  <Icon icon="lucide:chevron-left" width="24" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm pointer-events-auto hover:bg-black/60 transition-colors"
                >
                  <Icon icon="lucide:chevron-right" width="24" />
                </button>
              </div>
            </>
          ) : (
            <iframe
              src={selectedMedia?.src || folder.media[0]?.src}
              className="w-full h-full border-none"
              allowFullScreen
            />
          )}
        </div>

        {/* Thumbnails (Grid for Video, Carousel for Images) */}
        <div className={isVideo ? "mt-8" : ""}>
          {isVideo ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {folder.media.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => onMediaSelect(item)}
                  className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                    (selectedMedia?.id || folder.media[0]?.id) === item.id 
                      ? "border-blue-500 shadow-lg scale-100" 
                      : "border-transparent hover:border-grey-200 opacity-60 hover:opacity-100 scale-95 hover:scale-100"
                  }`}
                >
                  <Image
                    src={folder.thumbnail}
                    alt={item.title || "Video thumbnail"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <Icon icon="ph:play-fill" className="text-white" width="14" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <GalleryCarousel 
              media={folder.media}
              selectedMedia={selectedMedia}
              onMediaSelect={onMediaSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
}
