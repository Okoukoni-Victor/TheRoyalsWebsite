"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function FolderGrid({ folders, activeMediaType, onFolderClick }) {
  if (folders.length === 0) {
    return (
      <div className="col-span-full py-24 text-center">
        <div className="w-16 h-16 bg-grey-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon icon="lucide:image" className="text-grey-300" width="24" />
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
          <div className="relative aspect-video w-full overflow-hidden bg-grey-100">
            <Image
              src={folder.thumbnail}
              alt={folder.title}
              width={400}
              height={400}
              className="object-cover w-full"
            />
            {activeMediaType === "Videos" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Icon
                    icon="ph:play-fill"
                    className="text-white"
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
              <Icon icon="lucide:map-pin" className="shrink-0 mt-1.5" width="16" />
              <p className="line-clamp-2">{folder.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
