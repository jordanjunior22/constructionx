"use client";
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
  rating: number; // Number of stars (0 to 5)
  testimony: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ rating, testimony, name, role }) => {
  return (
    <div className="bg-[#1d1e1f] text-white shadow-md md:p-10 p-6 m-4 w-full max-w-lg"> {/* Take full width */}
      <div className="flex items-center mb-4 ">
        {/* Render stars based on rating */}
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} color={index < rating ? 'bg-background' : '#ccc'} />
        ))}
      </div>
      <p className="text-gray-300 mb-4">{testimony}</p>
      <div className="text-right">
        <p className="font-semibold text-lg">{name}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
