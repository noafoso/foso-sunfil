"use client";
import ArrowUpIcon from "@/components/icons/ArrowUpIcon";
import { IMAGES } from "@/constants/Images";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const images: ImageItem[] = [
    { id: 1, src: IMAGES.product1, alt: "Bộ lọc không khí 1" },
    { id: 2, src: IMAGES.product2, alt: "Bộ lọc dầu 1" },
    { id: 3, src: IMAGES.product3, alt: "Bộ lọc cabin 1" },
    { id: 4, src: IMAGES.product4, alt: "Bộ lọc dầu 2" },
    { id: 5, src: IMAGES.product5, alt: "Bộ lọc không khí 2" },
    { id: 6, src: IMAGES.product6, alt: "Bộ lọc nhiên liệu 1" },
    { id: 7, src: IMAGES.product6, alt: "Bộ lọc nhiên liệu 1" },
    { id: 8, src: IMAGES.product8, alt: "Bộ lọc nhiên liệu 1" },
    { id: 9, src: IMAGES.product9, alt: "Bộ lọc nhiên liệu 1" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedThumbnail((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedThumbnail((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setSelectedThumbnail(index);
  };

  // Cuộn đến thumbnail được chọn
  useEffect(() => {
    if (thumbnailRefs.current[selectedThumbnail] && thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const thumbnail = thumbnailRefs.current[selectedThumbnail];
      
      // Tính toán vị trí cuộn để đưa thumbnail vào giữa container
      const containerRect = container.getBoundingClientRect();
      const thumbnailRect = thumbnail.getBoundingClientRect();
      
      const isVertical = window.innerWidth >= 768; // Kiểm tra nếu là layout dọc (md breakpoint)
      
      if (isVertical) {
        // Cuộn theo chiều dọc
        const centerPosition = thumbnail.offsetTop - (containerRect.height / 2) + (thumbnailRect.height / 2);
        container.scrollTo({
          top: centerPosition,
          behavior: 'smooth'
        });
      } else {
        // Cuộn theo chiều ngang
        const centerPosition = thumbnail.offsetLeft - (containerRect.width / 2) + (thumbnailRect.width / 2);
        container.scrollTo({
          left: centerPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedThumbnail]);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Thumbnails */}
      <div 
        ref={thumbnailContainerRef}
        className="flex flex-shrink-0 flex-row md:flex-col gap-3 order-2 md:order-1 overflow-auto md:max-h-[684px] max-w-full"
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => {
              thumbnailRefs.current[index] = el;
            }}
            className={`relative w-[140px] aspect-[140/104] flex-shrink-0 border-2 rounded-lg cursor-pointer overflow-hidden
              ${
                selectedThumbnail === index
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative w-full h-full order-1 md:order-2 rounded-xl overflow-hidden bg-gray-100">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
        />

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-[#1C252E] text-white px-0.5 py-0.5 rounded-lg text-sm font-semibold">
          <button
            className="p-[5px] hover:bg-white/20 rounded-md transition-all duration-300"
            onClick={handlePrevious}
          >
            <ArrowUpIcon className="size-[18px] -rotate-90" />
          </button>
          {currentIndex + 1} / {images.length}
          <button
            className="p-[5px] hover:bg-white/20 rounded-md transition-all duration-300"
            onClick={handleNext}
          >
            <ArrowUpIcon className="size-[18px] rotate-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
