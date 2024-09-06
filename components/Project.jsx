import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Project() {
  const projects = [
    {
      title: 'SCHOOL INFRASTRUCTURE DEVELOPMENT ',
      description: `Passionate about knowledge inculcation in a safe and serene condition, Sesi Whingan has through diverse projects supported educational activities within Badagry Constituency.`,
      image: '/Images/education.jpg',
    },
    {
      title: 'ROAD DEVELOPMENT',
      description: `Sesi Whingan has succeeded in initiating and monitoring onsite road inspection visits in Badagry to ensure that the inspections are backed by rapid implementation for the greater good of Badagry Constituency.`,
      image: '/Images/road.jpg',
    },
    {
      title: 'NIN ENROLLMENT CENTER',
      description: `Going by the recent data, the Sesi Whingan NIN Center has enrolled over 20,000 persons, thereby decongesting incessant crowd while also reducing exorbitant spending of Badagry residents.`,
      image: '/Images/nin.png',
    },
    {
      title: 'HEALTHCARE DEVELOPMENT',
      description: `The Sesi Whingan Foundation has successfully refurbished and donated some medical and non medical equipment worth millions of naira to primary healthcare centers, nursing mothers and pregnant women, and physically challenged persons in Badagry.`,
      image: '/Images/healthcare.jpg',
    },
    {
      title: 'SOCIAL SERVICE INITIATIVE',
      description: `Considering the harsh economic realities of the country, The Sesi Whingan Foundation has designed a Social Service Program aimed at the provision of economic intervention programs to support the government, with a direct impact on people’s lives, and for the social good of Badagry Constituency at large.`,
      image: '/Images/socialService.jpg',
    },
    {
      title: 'HUMAN CAPACITY DEVELOPMENT ',
      description: `Despite his relatively young age, Sesi Whingan has impacted many lives within and beyond his community. Through human capacity building initiatives, he has successfully remodeled lives of many youths, the aged and widows in Badagry. He is passionate about empowering the old and young with needed skills that positions them at the forefront of change and innovation.`,
      image: '/Images/human.png',
    },
    {
      title: 'TOURISM DEVELOPMENT ',
      description: `Badagry is an ancient and historic city of Nigeria famous for its tourism potential. Sesi Whingan through strategic partnerships and infrastructural development aims to further promote tourism in Badagry, thereby enabling tourists, entrepreneurs, and creative professionals to visit Badagry.`,
      image: '/Images/tourism.jpg',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="block justify-center items-end p-8 overflow-hidden">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className=" justify-center items-center gap-0">
            <div>
                <div className='flex flex-col  md:flex-row justify-center items-center'>
                    <div className="w-[350px] md:w-[400px] h-[350px] md:h-[400px] bg-custom-grey p-12  md:rounded-tl-[50px] md:rounded-bl-[50px]">
                        <h1 className="font-neuemachina text-2xl md:text-3xl text-custom-green font-normal mb-4">{project.title}</h1>
                        <p className="font-cabinetGrotesk h-auto text-custom-green md:mt-10">{project.description}</p>
                    </div>
                    <div className="">
                        <Image
                            src={project.image}
                            width={400}
                            height={800}
                            alt={project.title}
                            className=" rounded-br-[40px] rounded-bl-[40px] md:rounded-bl-[0px] md:rounded-tr-[50px] md:rounded-br-[50px]"
                        />
                    </div>
                </div>
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Project;
