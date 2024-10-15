// components/HeroCarousel.tsx
"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './NavbarN';
import BlackButton from './ui/BlackButton';

interface Slide {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Navbar positioned on top of the carousel */}
      <Navbar />

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[400px] md:h-[600px] ">
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="md:px-40 absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
              <h1 className="px-5 text-[20px] lg:text-[66px] font-bold">{slide.title}</h1>
              <p className="mt-4 text-lg md:text-[21px]">{slide.description}</p>
              <BlackButton text='Our Services' href='/our-services' className='mt-5'/>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
