import React from 'react';
import { IconType } from 'react-icons';

interface ValuesProps {
    Icon: IconType; // Use IconType for the icon prop
    heading: string;
    paragraph: string;
}

const Values: React.FC<ValuesProps> = ({ Icon, heading, paragraph }) => {
    return (
        <div className="flex flex-col gap-10">
            <Icon className="text-6xl text-black bg-foreground rounded-md p-4 mt-5" /> {/* Adjust size with Tailwind classes */}
            <div className='flex flex-col gap-2'>
                <h2 className="text-lg font-bold">{heading}</h2>
                <p className="opacity-50">{paragraph}</p>
            </div>
        </div>
    );
};

export default Values;
