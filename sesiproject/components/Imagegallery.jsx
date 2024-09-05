import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageGallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageSources = [
    '/picture.png',
    '/picture.png',
    '/picture.png',
    '/picture.png',
    '/picture.png',
  ];

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2500, 
    arrows: false, 
  };

  const images = imageSources.map((src, index) => (
    <div key={index} className="flex justify-center items-center h-full">
      <Image
        src={src}
        width={145}
        height={148}
        alt={`Blog image ${index + 1}`}
        className="  rounded-t-[30px] rounded-b-[30px] md:w-[200px] md:h-[209px]"
      />
    </div>
  ));

  return (
    <div className="mb-16">
      {isMobile ? (
        <Slider {...settings} className="flex justify-center items-center ml-32">
          {images}
        </Slider>
      ) : (
        <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2">
          {images}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
