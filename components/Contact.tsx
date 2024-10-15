import React from 'react';
import Label from '../components/ui/Lable'; // Make sure the import path is correct

function Contact() {
  return (
    <div className='bg-[#1d1e1f] lg:px-40 md:py-40 px-5 py-5 gap-10 flex flex-col text-white'>
      <div className='flex flex-col lg:flex-row gap-20'> {/* Use flex-row on larger screens */}
        <img 
          src='/construction.jpg'  // Ensure this path is correct
          alt="Construction" 
          className="w-full lg:w-1/2 h-auto object-cover mb-4 lg:mb-0" // Responsive image styling
        /> 
        <div className='flex-1'> {/* Allow this div to take the remaining space */}
          <div className='flex flex-col gap-10'>
            <div className='flex gap-2 items-center'>
              <div className='border-2 border-foreground p-1 bg-background'></div>
              <h2 className='md:text-sm text-[10px] font-bold text-white'>CONTACT US</h2>
            </div>
            <h1 className='md:text-[56px] text-[20px] font-bold leading-tight text-white'>Get a Free Quote</h1>
          </div>
          <form className='flex flex-col gap-5 mt-5'>
            <div className='flex flex-row justify-between gap-2'>
              <Label placeholder="John Doe" label="Name" />
              <Label placeholder="contact@email.com" label="Email" />
            </div>
            <div className='flex flex-row justify-between gap-2'>
              <Label placeholder="(123) 456-7890" label="Phone" />
              <Label placeholder="Company Name" label="Add Company" />
            </div>
            <div className='flex flex-col'>
              <label>Message</label>
              <textarea className='border border-gray-700 bg-[#1d1e1f] p-2 rounded' rows={4} />
            </div>
            <button type="submit" className='bg-foreground text-black font-bold p-4 rounded hover:bg-opacity-80'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
