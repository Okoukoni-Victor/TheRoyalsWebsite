import React from 'react';
import GalleryContent from '../../components/gallery/GalleryContent';

export const metadata = {
  title: "Gallery",
  description: "Explore the visual story of our impact. See The Royals in action across various African communities through our gallery of programs and initiatives.",
};

const Gallery = () => {

  return (
    <main className='relative w-full min-h-screen bg-gray-900 pt-24 overflow-x-hidden'>
      <GalleryContent />
    </main>
  )
}

export default Gallery