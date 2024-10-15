// pages/index.tsx

import HeroCarousel from '../components/HeroCarousel';

const slides = [
  {
    image: '/construction.jpg',
    alt: 'Slide 1',
    title: 'Building Your Vision: Exceptional Construction, Unmatched Quality',
    description: 'Discover amazing content.',
  },
  {
    image: '/construction2.jpg',
    alt: 'Slide 2',
    title: 'Crafting Tomorrow: Innovative Solutions for Every Project',
    description: 'Be part of something bigger.',
  },
  {
    image: '/construction3.jpg',
    alt: 'Slide 3',
    title: 'From Blueprint to Reality: Your Trusted Partner in Construction Excellence',
    description: 'Adventure awaits you.',
  },
];

const Hero: React.FC = () => {
  return (
    <div>
      <HeroCarousel slides={slides} />
    </div>
  );
};

export default Hero;
