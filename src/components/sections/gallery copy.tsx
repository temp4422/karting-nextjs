// export default function Gallery() {
//   return (
//     <>
//       <h2>Gallery</h2>
//     </>
//   )
// }

'use client'
import React, { useState } from 'react'

const images = [
  {
    original: 'https://via.placeholder.com/600x400?text=Image+1',
    thumbnail: 'https://via.placeholder.com/100x70?text=1',
  },
  {
    original: 'https://via.placeholder.com/600x400?text=Image+2',
    thumbnail: 'https://via.placeholder.com/100x70?text=2',
  },
  {
    original: 'https://via.placeholder.com/600x400?text=Image+3',
    thumbnail: 'https://via.placeholder.com/100x70?text=3',
  },
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))

  const nextImage = () => setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))

  const selectImage = (index) => setCurrentIndex(index)

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h2 className="my-10">Gallery</h2>
      <div style={{ position: 'relative' }}>
        <img
          src={images[currentIndex].original}
          alt={`Image ${currentIndex + 1}`}
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <button
          onClick={prevImage}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          ‹
        </button>
        <button
          onClick={nextImage}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          ›
        </button>
      </div>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.thumbnail}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => selectImage(index)}
            style={{
              cursor: 'pointer',
              border: index === currentIndex ? '2px solid #1CADB0' : '2px solid transparent',
              borderRadius: '4px',
              width: '100px',
              height: '70px',
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
    </div>
  )
}
