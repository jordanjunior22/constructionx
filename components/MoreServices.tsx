import React from 'react';
import { FaHammer, FaTools, FaBuilding, FaRulerCombined, FaHardHat, FaTruck } from 'react-icons/fa';
import MoreServiceCard from './ui/MoreServiceCard';

const services = [
    {
        Icon: FaHammer,
        heading: 'General Contracting',
        paragraph: 'Comprehensive construction management services.',
        items: ['Project management', 'Quality assurance', 'Timeline management'],
        href: '/',
    },
    {
        Icon: FaTools,
        heading: 'Renovation Services',
        paragraph: 'Transform your space with our expert renovations.',
        items: ['Home renovations', 'Office remodels', 'Interior updates'],
        href: '/',
    },
    {
        Icon: FaBuilding,
        heading: 'Commercial Construction',
        paragraph: 'Expertise in building commercial properties.',
        items: ['Retail spaces', 'Office buildings', 'Warehouses'],
        href: '/',
    },
    {
        Icon: FaRulerCombined,
        heading: 'Architectural Design',
        paragraph: 'Creative designs tailored to your vision.',
        items: ['Custom designs', '3D modeling', 'Blueprint creation'],
        href: '/',
    },
    {
        Icon: FaHardHat,
        heading: 'Safety Management',
        paragraph: 'Prioritizing safety on every job site.',
        items: ['Risk assessments', 'Safety training', 'Compliance checks'],
        href: '/',
    },
    {
        Icon: FaTruck,
        heading: 'Logistics and Supply',
        paragraph: 'Efficient material sourcing and delivery.',
        items: ['Material procurement', 'On-site delivery', 'Inventory management'],
        href: '/',
    },
];

function MoreServices() {
    return (
        <div className='bg-foreground lg:px-40 md:py-10 flex flex-col gap-10 px-5 py-5'>
            <div className='text-black text-center flex flex-col justify-center items-center py-10'>
                <div className='flex gap-2 items-center'>
                    <div className=' border-2 border-background p-1 bg-foreground'></div>
                    <h2 className='md:text-sm text-[10px] font-bold'>WHAT WE OFFER</h2>
                </div>
                <h1 className='md:text-[56px] text-[20px] font-bold leading-tight'>More Services</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services.map((service, index) => (
                    <MoreServiceCard
                        key={index}
                        Icon={service.Icon}
                        heading={service.heading}
                        paragraph={service.paragraph}
                        items={service.items}
                        href={service.href}
                    />
                ))}
            </div>
        </div>
    );
}

export default MoreServices;
