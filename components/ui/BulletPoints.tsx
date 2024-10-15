"use client"
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface BulletListProps {
    items: string[];
}

const BulletList: React.FC<BulletListProps> = ({ items }) => {
    return (
        <ul className="list-none p-0 font-bold">
            {items.map((item, index) => (
                <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-foreground mr-2" />
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default BulletList;
