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

    handleResize(); // Initial check when component mounts

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageSources = [
    '/Images/1.jpg',
    '/Images/2.jpg',
    '/Images/3.jpg',
    '/Images/4.jpg',
    '/Images/5.jpg',
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
    <div key={index} className="w-[] py-[20px] flex justify-center items-center h-full">
      <div className=''>
        <Image
          src={src}
          width={200}
          height={200}
          alt={`Blog image ${index + 1}`}
          className="rounded-t-[25px] h-[400px] w-[450px] rounded-b-[25px] md:w-[150px] md:h-[150px]"
        />
      </div>
    </div>
  ));

  return (
    <div className="mb-16 justify-center items-center">
      {isMobile ? (
        <div className='block justify-center items-center '>
          <Slider {...settings} className="flex justify-center items-center">
            {images}
          </Slider>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8 md:grid-rows-[auto_auto]">
          <div className="col-span-3 grid grid-cols-3 gap-8">
            {images.slice(0, 3)}
          </div>
          <div className="col-span-3 flex justify-center gap-10">
            {images.slice(3, 5)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
