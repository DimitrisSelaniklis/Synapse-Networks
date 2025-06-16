import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function DynamicImageCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamic import with Vite-style import.meta.glob
    const imports = import.meta.glob('../assets/carousel_images/*.{jpg,jpeg,JPEG,png,gif}', { eager: true });
    const imgs = Object.values(imports).map(mod => mod.default);
    setImages(imgs);
  }, []);

  if (!images.length) return <p>Loading images...</p>;

  return (
    <Carousel 
      interval={3000} 
      pause="hover" 
      data-bs-theme="dark" 
      indicators={false} // <-- This hides the bottom dots
      className="custom-carousel"
      >
      {images.map((src, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
