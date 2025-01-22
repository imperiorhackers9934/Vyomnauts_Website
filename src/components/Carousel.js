import { useState, useEffect } from "react";

const Carousel = ({ images, autoSlideInterval = 3000, transitionDuration = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically move to the next slide after a delay
  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoSlideInterval);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [autoSlideInterval]);

  return (
    <div className="relative w-full h-screen mx-auto">
      {/* Images */}
      <div className="overflow-hidden rounded-lg w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-${transitionDuration} ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={prevSlide}
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 focus:outline-none"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
