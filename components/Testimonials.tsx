import React from 'react'
import Button from './ui/YellowButton'
import TestimonialCard from './ui/TestimonialCard'
export default function Testimonials() {
  return (
    <div className='bg-background lg:px-40 md:py-10 px-5 py-5 gap-10 flex flex-col'>
        <div className='flex flex-row justify-between my-10'>
            <h1 className='md:text-[40px] text-[20px] font-bold leading-tight text-white'>Hear from our satisfied clients</h1>
            <Button text='Contact Us' href='/contact-us'/>
        </div>
        <div className="flex flex-wrap justify-center">
            <TestimonialCard
                rating={5}
                testimony="This service was fantastic! Highly recommend to everyone."
                name="John Doe"
                role="CEO of Company"
            />
            <TestimonialCard
                rating={4}
                testimony="Very satisfied with the experience. Will use again!"
                name="Jane Smith"
                role="Project Manager"
            />
        </div>
    </div>
  )
}
