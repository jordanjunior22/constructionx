"use client"
import Link from 'next/link'
import React from 'react'
import Button from './ui/YellowButton'

function Navbar() {
  return (
    <div className='flex items-center justify-between my-5 border'>
        <div className='flex gap-5 items-center font-bold'>
            <Link href='/' className='text-[20px]'>Construction <span className='text-foreground text-[20px]'>X</span></Link>
            <Link href='/'>Home</Link>
            <Link href='/'>Services</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Projects</Link>
            <Link href='/'>Contact</Link>
        </div>
        <Button text='Get a quote' href='/get-a-quote'/>
    </div>
  )
}

export default Navbar