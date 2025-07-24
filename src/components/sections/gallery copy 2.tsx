'use client'
import React, { useState } from 'react'

const images = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
]

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setIsOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Heights for masonry effect
  const masonryHeights = ['h-64', 'h-40', 'h-52', 'h-72', 'h-56', 'h-48']

  return (
    <>
      <div className="overflow-y-auto max-h-[600px]">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <img
                src={image}
                alt=""
                className={`w-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity ${
                  masonryHeights[index % masonryHeights.length]
                }`}
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <img
              src={images[currentImageIndex]}
              alt=""
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={previousImage}
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={nextImage}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}
