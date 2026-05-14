"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function FolderGrid({ folders, activeMediaType, onFolderClick }) {
  if (folders.length === 0) {
    return (
      <div className="col-span-full py-24 text-center">
        <div className="w-16 h-16 bg-grey-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon icon="solar:gallery-bold" className="text-grey-300" width="24" />
        </div>
        <p className="text-grey-400 font-medium">
          No {activeMediaType.toLowerCase()} available for this campaign.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {folders.map((folder) => (
        <div
          key={folder.id}
          onClick={() => onFolderClick(folder)}
          className="group cursor-pointer flex flex-col overflow-hidden"
        >
          {/* Card Image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={folder.thumbnail}
              alt={folder.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {activeMediaType === "Videos" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Icon
                    icon="ph:play-fill"
                    className="text-grey-800"
                    width="24"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Card Content - Blue Section */}
          <div className="bg-blue-300 p-6 text-white flex flex-col justify-center grow">
            <h5 className="mb-4">{folder.title}</h5>
            <div className="flex items-start gap-2 opacity-90">
              <Icon icon="solar:map-point-bold" className="shrink-0 mt-1.5" width="16" />
              <p className="line-clamp-2">{folder.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
