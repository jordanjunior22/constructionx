import React from 'react'
import Card from './ui/Card'
import SmallHeading from './ui/SmallHeading';

function Services() {
    const cardsData = [
        {
          imageUrl: "construction.jpg",
          heading: "Service 1",
          bulletPoints: [
            'High Quality Materials',
            'Expert Craftsmanship',
            'Timely Delivery',
          ],
          href:"/",
        },
        {
          imageUrl: "construction2.jpg",
          heading: "Service 2",
          bulletPoints: [
            'Reliable Support',
            'Affordable Prices',
            'Customized Solutions',
          ],
          href:"/",
        },
        {
            imageUrl: "construction3.jpg",
            heading: "Service 2",
            bulletPoints: [
              'Reliable Support',
              'Affordable Prices',
              'Customized Solutions',
            ],
            href:"/c",
          },
        // Add more cards as needed
      ];
  return (
    <div className='bg-background text-white lg:px-40 md:py-10 flex flex-col gap-10 px-5 py-5'>
        <div className='flex flex-col items-center'>
            <SmallHeading text='WHAT WE OFFER'/>
            <h1 className=' md:text-[56px] text-[20px] font-bold'>Explore our services</h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-4 ">
        {cardsData.map((card, index) => (
            <Card
            href={card.href}
            key={index}
            imageUrl={card.imageUrl}
            heading={card.heading}
            bulletPoints={card.bulletPoints}
            />
        ))}
        </div>
    </div>
  )
}

export default Services