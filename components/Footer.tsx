"use client";

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'
const Footer: React.FC = () => {
  return (
    <footer className="bg-background lg:px-40 md:py-20 px-5 py-5 gap-10 flex flex-col text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <div className='flex gap-5 items-center font-bold text-white'>
                <Link href='/' className='text-[20px]'>
                Construction <span className='text-foreground'>X</span>
                </Link>
            </div>
            <p className='opacity-50'>Build X is an ideal Webflow template for either all-rounders or professional teams to introduce their services.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">NAVIGATION</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">SOCIAL</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400" aria-label="Facebook">
                  <FaFacebook size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400" aria-label="Twitter">
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="hover:underline">+1 (234) 567-89</a></p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
