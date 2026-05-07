"use client";

import React from "react";

export default function GalleryTabs({ 
  campaigns, 
  activeCampaign, 
  onCampaignChange, 
  activeMediaType, 
  onMediaTypeChange 
}) {
  return (
    <>
      {/* Top Tabs - Campaign Toggle */}
      <div className="flex justify-start overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        <div className="inline-flex p-1.5 bg-grey-50/30 mb-6 rounded-full border border-grey-100/50 whitespace-nowrap">
          {campaigns.map((campaign) => (
            <button
              key={campaign}
              onClick={() => onCampaignChange(campaign)}
              className={`px-6 md:px-12 py-2.5 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeCampaign === campaign
                  ? "bg-blue-300 text-white shadow-md"
                  : "text-grey-900 hover:text-blue-300"
              }`}
            >
              {campaign}
            </button>
          ))}
        </div>
      </div>

      {/* Media Type Selection */}
      <div className="flex gap-6 md:gap-10 mb-12 border-b border-grey-100 overflow-x-auto scrollbar-hide">
        {["Images", "Videos"].map((type) => (
          <button
            key={type}
            onClick={() => onMediaTypeChange(type)}
            className={`pb-4 font-bold text-base md:text-lg relative transition-colors whitespace-nowrap ${
              activeMediaType === type ? "text-grey-900" : "text-grey-400"
            }`}
          >
            {type}
            {activeMediaType === type && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-grey-900" />
            )}
          </button>
        ))}
      </div>
    </>
  );
}
