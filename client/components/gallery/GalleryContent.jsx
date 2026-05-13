"use client"

import React from 'react';
import GalleryHero from './hero/GalleryHero';
import GallerySection from './content/GallerySection';

/**
 * GalleryContent Component
 * Acts as the main entry point for the Gallery page, 
 * composing the Hero and the interactive Content sections.
 */
export default function GalleryContent() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section with Floating Polaroid Cards */}
      <GalleryHero />

      {/* 2. Main Media Content (Folders, Filters, and Media Viewer) */}
      <GallerySection />
    </div>
  );
}