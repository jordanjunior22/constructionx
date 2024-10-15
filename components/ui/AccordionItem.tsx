"use client";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-background">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer" 
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full text-white">
          {/* Responsive text size */}
          <span className="text-lg md:text-xl"> {/* Larger on medium devices */}
            {isOpen ? <FaMinus className="w-5 h-5" /> : <FaPlus className="w-5 h-5" />}
          </span>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <p className="p-4 text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
