"use client";

import React, { useState } from "react";
import { galleryData } from "../GalleryData";
import GalleryTabs from "./GalleryTabs";
import FolderGrid from "./FolderGrid";
import FolderDetail from "./FolderDetail";

export default function GallerySection() {
  const [activeCampaign, setActiveCampaign] = useState("CABI");
  const [activeMediaType, setActiveMediaType] = useState("Images");
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const campaigns = Object.keys(galleryData);
  const folders =
    galleryData[activeCampaign]?.[activeMediaType.toLowerCase()] || [];

  const handleCampaignChange = (campaign) => {
    setActiveCampaign(campaign);
    setSelectedFolder(null);
    setSelectedMedia(null);
  };

  const handleMediaTypeChange = (type) => {
    setActiveMediaType(type);
    setSelectedMedia(null);
  };

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
    setSelectedMedia(folder.media[0]);
  };

  const handleBack = () => {
    setSelectedFolder(null);
    setSelectedMedia(null);
  };

  return (
    <section className="section bg-white pt-12 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {!selectedFolder ? (
          <div className="animate-in fade-in duration-500">
            <GalleryTabs
              campaigns={campaigns}
              activeCampaign={activeCampaign}
              onCampaignChange={handleCampaignChange}
              activeMediaType={activeMediaType}
              onMediaTypeChange={handleMediaTypeChange}
            />
            <FolderGrid
              folders={folders}
              activeMediaType={activeMediaType}
              onFolderClick={handleFolderClick}
            />
          </div>
        ) : (
          <FolderDetail
            folder={selectedFolder}
            activeMediaType={activeMediaType}
            selectedMedia={selectedMedia}
            onMediaSelect={setSelectedMedia}
            onBack={handleBack}
          />
        )}
      </div>
    </section>
  );
}
