"use client";
import React from 'react';
import Link from 'next/link'; // Ensure you import Link from next/link
import { BiArrowToRight } from 'react-icons/bi';

function Button({ text = "Get a quote", href = "/get-a-quote" }) {
  return (
    <Link href={href} className=' text-black w-fit font-bold flex items-center gap-2 py-[12px] px-[16px] bg-foreground transition-all duration-300 hover:bg-opacity-80 group'>
      <p>{text}</p>
      <span className='transition-transform duration-300 transform group-hover:translate-x-1'>
        <BiArrowToRight />
      </span>
    </Link>
  );
}

export default Button;
