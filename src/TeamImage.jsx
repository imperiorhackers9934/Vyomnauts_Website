import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const TeamCarousel = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const slides = [
    { src: '/TechExpo/10.jpg', caption: '' },
    { src: '/TechExpo/11.jpg', caption: '' },
    { src: 'team.png', caption: '' },
    { src: '/Interview/7.jpg', caption: '' },
  ];

  return (
    <div>
      {/* Team Carousel Section */}
      <div className="relative w-full h-[70vh] bg-space bg-cover bg-center bg-gray-900 overflow-hidden bg pt-14">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-16 w-full text-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                  EXPLORE VYOMNUTS
                </h2>
                <p className="text-white text-xl md:text-2xl font-semibold px-4 py-2 inline-block rounded">
                  FROM CLASSROOM TO COSMOS
                </p>
              </div>
              <div className="absolute bottom-8 w-full text-center">
                <p className="text-white text-lg md:text-xl font-semibold px-4 py-2 inline-block rounded">
                  {slide.caption}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamCarousel;