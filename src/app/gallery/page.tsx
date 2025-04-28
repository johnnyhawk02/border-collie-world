'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Replace this with your actual subdomain once it's set up
const ASSET_URL = "https://bcw-assets.jhawk.uk";

// Sample gallery data (in a real app, this could come from a CMS or API)
const galleryImages = [
  {
    id: 1,
    title: "Border Collie in the Field",
    description: "A beautiful Border Collie running through a green field.",
    category: "action",
    src: `${ASSET_URL}/images/Border Collie in the Field.webp`
  },
  {
    id: 2,
    title: "Herding Sheep",
    description: "Border Collie showing off its natural herding instincts with sheep.",
    category: "working",
    src: `${ASSET_URL}/images/collie-herding sheep.webp`
  },
  {
    id: 3,
    title: "Puppy Close-up",
    description: "Adorable Border Collie puppy with those classic intelligent eyes.",
    category: "puppies",
    src: `${ASSET_URL}/images/Puppy Close-up.webp`
  },
  {
    id: 4,
    title: "Frisbee Catch",
    description: "Athletic Border Collie catching a frisbee mid-air.",
    category: "action",
    src: `${ASSET_URL}/images/collie-frisbee.webp`
  },
  {
    id: 5,
    title: "Playful Pup",
    description: "Young Border Collie with a playful expression.",
    category: "puppies",
    src: `${ASSET_URL}/images/Playful Pup.webp`
  },
  {
    id: 6,
    title: "Agility Champion",
    description: "Border Collie navigating an agility course obstacle.",
    category: "working",
    src: `${ASSET_URL}/images/agility-champion.webp`
  },
  {
    id: 7,
    title: "Beach Day",
    description: "Happy Border Collie running along the beach shoreline.",
    category: "action",
    src: `${ASSET_URL}/images/beach-day.webp`
  },
  {
    id: 8,
    title: "Snow Fun",
    description: "Border Collie playing in fresh winter snow.",
    category: "action",
    placeholder: "Border Collie in snow"
    // In a real app: src: "/images/gallery/border-collie-snow.jpg"
  },
  {
    id: 9,
    title: "Tired After Play",
    description: "Sleepy Border Collie resting after a day of activities.",
    category: "portraits",
    placeholder: "Tired Border Collie resting"
    // In a real app: src: "/images/gallery/border-collie-tired.jpg"
  },
  {
    id: 10,
    title: "Family Portrait",
    description: "Border Collie mother with her adorable puppies.",
    category: "puppies",
    placeholder: "Border Collie with puppies"
    // In a real app: src: "/images/gallery/border-collie-family.jpg"
  },
  {
    id: 11,
    title: "Alert and Attentive",
    description: "The classic Border Collie stare - focused and ready for action.",
    category: "portraits",
    placeholder: "Attentive Border Collie"
    // In a real app: src: "/images/gallery/border-collie-alert.jpg"
  },
  {
    id: 12,
    title: "Sheep Herding Trial",
    description: "Border Collie competing in a sheep herding competition.",
    category: "working",
    placeholder: "Border Collie in herding trial"
    // In a real app: src: "/images/gallery/border-collie-trial.jpg"
  },
];

// Gallery filter categories
const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'action', name: 'Action Shots' },
  { id: 'working', name: 'Working Dogs' },
  { id: 'puppies', name: 'Puppies' },
  { id: 'portraits', name: 'Portraits' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | number>(null);

  // Filter images based on active category
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);
  
  // Open image modal
  const openImage = (id: number) => {
    setSelectedImage(id);
  };
  
  // Close image modal
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Border Collie Gallery</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Browse our collection of beautiful Border Collie photos.
        </p>
      </motion.div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full cartoon-border transition-colors
              ${activeCategory === category.id 
                ? 'bg-primary text-white' 
                : 'bg-white hover:bg-gray-100'
              }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Gallery grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6"
      >
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="cartoon-border overflow-hidden cursor-pointer"
            onClick={() => openImage(image.id)}
          >
            <div className="relative h-48 sm:h-56 md:h-64 bg-gray-200">
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 4}
                  className="object-cover transition-transform hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  {image.placeholder}
                </div>
              )}
            </div>
            <div className="p-3 md:p-4 bg-white">
              <h3 className="text-base md:text-lg font-bold">{image.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state if no images match the filter */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg">No images found in this category.</p>
          <button
            onClick={() => setActiveCategory('all')}
            className="cartoon-button mt-4"
          >
            View All Photos
          </button>
        </div>
      )}

      {/* Image modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeImage}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg cartoon-border max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 sm:h-72 md:h-96 bg-gray-200">
              {/* In a real app, this would display the full-sized image */}
              {galleryImages.find(img => img.id === selectedImage)?.src ? (
                <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                  alt={galleryImages.find(img => img.id === selectedImage)?.title || ''}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 75vw, 1200px"
                  priority
                  className="object-contain"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-lg">
                  {galleryImages.find(img => img.id === selectedImage)?.placeholder}
                </div>
              )}
            </div>
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {galleryImages.find(img => img.id === selectedImage)?.description}
              </p>
              <button
                className="cartoon-button mt-4"
                onClick={closeImage}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Submit photo CTA */}
      <div className="mt-12 md:mt-16 text-center bg-blue-50 p-6 md:p-8 rounded-lg cartoon-border mx-4 md:mx-6">
        <h2 className="text-2xl font-bold mb-2">Share Your Border Collie</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Have an amazing Border Collie photo to share? We&apos;d love to see your furry friend!
          Submit your best Border Collie photos to be featured in our gallery.
        </p>
        <button className="cartoon-button">
          Submit a Photo
        </button>
      </div>
    </div>
  );
} 