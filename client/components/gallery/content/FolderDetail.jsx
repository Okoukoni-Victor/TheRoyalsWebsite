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

      {/* Featured Media + Carousel Joined Unit */}
      <div className="relative mb-20">
        {/* Main Featured Content */}
        <div className={`relative w-full aspect-video md:aspect-21/9 lg:aspect-16/8 bg-grey-100 overflow-hidden ${activeMediaType === "Videos" ? "rounded-3xl" : ""}`}>
          {activeMediaType === "Images" ? (
            <Image
              src={selectedMedia?.src || folder.media[0]?.src}
              alt="Featured"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <iframe
              src={selectedMedia?.src || folder.media[0]?.src}
              className="w-full h-full border-none"
              allowFullScreen
            />
          )}
        </div>

        {/* Carousel Thumbnails */}
        <div className={activeMediaType === "Videos" ? "mt-8" : ""}>
          <GalleryCarousel 
            media={folder.media}
            activeMediaType={activeMediaType}
            selectedMedia={selectedMedia}
            onMediaSelect={onMediaSelect}
            folderThumbnail={folder.thumbnail}
          />
        </div>
      </div>
    </div>
  );
}
