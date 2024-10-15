"use client";
import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  projectName: string;
  projectType: string;
  linkUrl: string; // New prop for the link URL
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, projectName, projectType, linkUrl }) => {
  return (
    <a href={linkUrl} className="relative block w-full h-96 overflow-hidden cursor-pointer">
      {/* Image container with hover zoom and glitch effect */}
      <div className="relative h-full transition-transform duration-300 transform hover:scale-110 hover:animate-glitch">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
      {/* Text Elements */}
      <div className="absolute top-2 right-2 px-4 py-2 text-black font-bold bg-foreground transition-all duration-300">
        {projectType}
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 text-center text-white transition-all duration-300">
        <h2 className="text-lg md:text-[30px] font-bold">{projectName}</h2>
      </div>
    </a>
  );
};

export default ImageCard;
