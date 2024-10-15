"use client";
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link'; // Ensure you import Link from next/link

// Define the props interface
interface CardProps {
  imageUrl: string;
  heading: string;
  bulletPoints: string[];
  href: string; // Add href for the link
}

const Card: React.FC<CardProps> = ({ imageUrl, heading, bulletPoints, href }) => {
  return (
    <Link href={href} className="block relative w-full max-w-[400px] h-[350px] bg-cover bg-center p-4 text-white transition-transform duration-300 hover:-translate-y-2" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Inner shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
      <div className="relative flex flex-col justify-end h-full z-10">
        <h2 className="text-lg md:text-xl font-bold mb-2">{heading}</h2>
        <ul className="list-none p-0">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-center mb-2 text-sm md:text-base">
              <FaCheckCircle className="mr-2 text-foreground" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default Card;
