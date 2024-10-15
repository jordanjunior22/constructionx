import React from 'react';
import { IconType } from 'react-icons';
import BulletList from './BulletPoints';
import YellowButton from './YellowButton'

interface ValuesProps {
    Icon: IconType;
    heading: string;
    paragraph: string;
    items: string[]; // Specify the type for items
    href:string;
}

const MoreServiceCard: React.FC<ValuesProps> = ({ Icon, heading, paragraph, items, href }) => {
    return (
        <div className="flex flex-col gap-10 p-5 shadow-md bg-background text-white">
            <Icon className="text-6xl text-black bg-foreground rounded-md p-4 mt-5" aria-label={heading} />
            <div className='flex flex-col gap-2'>
                <h2 className="text-lg font-bold">{heading}</h2>
                <p className="opacity-50">{paragraph}</p>
            </div>
            <BulletList items={items} />
            <YellowButton text='View More' href={href}/>
        </div>
    );
};

export default MoreServiceCard;
