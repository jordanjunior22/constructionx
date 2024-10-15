"use client"
import React from 'react';
import Values from './ui/Values';
import { FaHardHat, FaTools, FaHandshake, FaShieldAlt } from 'react-icons/fa'; // Example icons

function OurValues() {
    const valuesData = [
        {
            Icon: FaHardHat,
            heading: "Safety First",
            paragraph: "We prioritize safety in all our construction projects, ensuring a secure environment for our workers and clients."
        },
        {
            Icon: FaTools,
            heading: "Quality Workmanship",
            paragraph: "Our commitment to quality craftsmanship ensures that every project is meeting the highest standards."
        },
        {
            Icon: FaHandshake,
            heading: "Integrity",
            paragraph: "We believe in transparency and honesty in all our dealings, fostering trust with our clients and partners."
        },
    ];

    return (
        <div className='bg-background text-white lg:px-40 md:py-10 flex flex-col md:flex-row md:gap-5 justify-between items-start px-5 py-5 border-t'>
            {valuesData.map((value, index) => (
                <Values 
                    key={index}
                    Icon={value.Icon}
                    heading={value.heading}
                    paragraph={value.paragraph}
                />
            ))}
        </div>
    );
}

export default OurValues;
