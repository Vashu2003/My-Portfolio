// components/ImageGallery.tsx
"use client";
import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ImageGallery({ images, onClose }: { images: { url: string; alt: string }[]; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize the navigation functions
  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, nextImage, prevImage]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <div className="relative w-full max-w-4xl h-3/4">
      <button onClick={onClose} className="absolute z-[1] right-4 top-4 text-white">
        <FiX size={24} />
      </button>
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          fill
          className="object-contain"
        />
      </div>

      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-[10000] text-white p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300 hover:scale-110"
          >
            <FiChevronLeft size={24} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-[10000] text-white p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all duration-300 hover:scale-110"
            >
              <FiChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-white" : "bg-gray-500"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}