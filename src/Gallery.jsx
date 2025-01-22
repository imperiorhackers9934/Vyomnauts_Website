import React, { useState, useEffect } from "react";
import SectionGrid from "./SectionGrid";
import FAQ from "./FAQ";
import TeamCarousel from "./TeamImage";
const ThumbnailGallery = () => {
  // Gallery images
  const images = [
    { id: 1, src: "/TechExpo/7.jpg", alt: "Team Images" },
    { id: 2, src: "/Interview/3.jpg", alt: "Team Images" },
    { id: 3, src: "/TechExpo/1.jpg", alt: "Team Images" },
    { id: 4, src: "/TechExpo/5.jpg", alt: "Team Images" },
  ];

  // State to track the main image
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);
  useEffect(() => {
    setSelectedImage(images[currentIndex]);
  }, [currentIndex, images]);

  return (<>
    <TeamCarousel />
  <SectionGrid />
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Vyom's Gallery</h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start gap-6 w-full">
        {/* Main Image */}
        <div className="flex-1">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="w-full h-[530px] object-cover shadow-lg"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex flex-col gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`cursor-pointer p-1 transition-all ${selectedImage.id === image.id
                  ? "border-2 border-yellow-500"
                  : "hover:border-2 hover:border-gray-300"
                }`}
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(index); // Update the index manually
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-32 h-28 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <FAQ />
  </>
  );
};

export default ThumbnailGallery;