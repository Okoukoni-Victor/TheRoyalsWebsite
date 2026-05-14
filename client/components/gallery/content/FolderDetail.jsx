"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import GalleryCarousel from "./GalleryCarousel";

/**
 * ImageGalleryView handles the display of images within a folder,
 * including the featured image with navigation and the thumbnail carousel.
 */
function ImageGalleryView({ folder, currentIndex, onMediaSelect, selectedMedia }) {
  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : folder.media.length - 1;
    onMediaSelect(folder.media[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < folder.media.length - 1 ? currentIndex + 1 : 0;
    onMediaSelect(folder.media[newIndex]);
  };

  return (
    <div className="max-w-2xl mx-auto relative mb-20">
      {/* Featured Image */}
      <div className="relative w-full aspect-video md:aspect-21/9 lg:aspect-16/8 bg-grey-100 overflow-hidden">
        <Image
          src={selectedMedia?.src || folder.media[0]?.src}
          alt="Featured"
          fill
          className="object-cover"
          priority
        />
        
        {/* Navigation Overlay */}
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
          <button 
            onClick={handlePrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm pointer-events-auto hover:bg-black/60 transition-colors"
          >
            <Icon icon="tabler:chevron-left" width="24" />
          </button>
          <button 
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-white flex items-center justify-center backdrop-blur-sm pointer-events-auto hover:bg-black/60 transition-colors"
          >
            <Icon icon="tabler:chevron-right" width="24" />
          </button>
        </div>
      </div>

      {/* Thumbnails Carousel */}
      <div>
        <GalleryCarousel 
          media={folder.media}
          selectedMedia={selectedMedia}
          onMediaSelect={onMediaSelect}
        />
      </div>
    </div>
  );
}

/**
 * VideoGalleryView handles the display of videos within a folder,
 * including the embedded player and the thumbnail grid.
 */
function VideoGalleryView({ folder, selectedMedia, onMediaSelect }) {
  const activeVideo = selectedMedia || folder.media[0];

  return (
    <div className="max-w-4xl mx-auto relative mb-20">
      {/* Embedded Player */}
      <div className="relative w-full aspect-video md:aspect-21/9 lg:aspect-16/8 bg-grey-100 overflow-hidden rounded-3xl">
        <iframe
          src={activeVideo?.src}
          className="w-full h-full border-none"
          allowFullScreen
          title={activeVideo?.title || "Video player"}
        />
      </div>

      {/* Video Grid */}
      <div className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {folder.media
            .filter((item) => item.id !== activeVideo.id)
            .map((item) => (
              <div 
                key={item.id}
                onClick={() => onMediaSelect(item)}
                className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer transition-all duration-300  scale-95 hover:scale-100 `}
              >
                <Image
                  src={folder.thumbnail}
                  alt={item.title || "Video thumbnail"}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <Icon icon="ph:play-fill" className="text-grey-800" width="14" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function FolderDetail({ 
  folder, 
  activeMediaType, 
  selectedMedia, 
  onMediaSelect, 
  onBack 
}) {
  const isVideo = activeMediaType === "Videos";
  
  // Current index for image navigation
  const currentIndex = folder.media.findIndex(
    (m) => m.id === (selectedMedia?.id || folder.media[0]?.id)
  );

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center font-semibold gap-3 text-grey-500 hover:text-blue-300 transition-colors mb-6 group text-sm"
      >
        <div className="flex items-center justify-center">
          <Icon icon="tabler:chevron-left" width="24" className="group-hover:-translate-x-1 transition-transform" />
        </div>
        <span>Back to folder</span>
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h5 className="text-grey-900 mb-4">{folder.title}</h5>
          <div className="flex items-center gap-2 text-grey-500">
            <Icon icon="solar:map-point-bold" width="18" />
            <p className="">{folder.location}</p>
          </div>
        </div>
      </div>

      {/* Conditional Media Rendering */}
      {isVideo ? (
        <VideoGalleryView 
          folder={folder} 
          selectedMedia={selectedMedia} 
          onMediaSelect={onMediaSelect} 
        />
      ) : (
        <ImageGalleryView 
          folder={folder} 
          currentIndex={currentIndex} 
          selectedMedia={selectedMedia} 
          onMediaSelect={onMediaSelect} 
        />
      )}
    </div>
  );
}
