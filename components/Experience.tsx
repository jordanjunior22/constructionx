"use client";
import React, { useState } from 'react';
import SmallHeading from './ui/SmallHeading';
import BulletList from './ui/BulletPoints';
import YellowButton from './ui/YellowButton';
import Lottie from 'lottie-react';
import animationData from '../public/lottie.json';

function Experience() {
    const items = [
        'Over 10 years experience',
        'High-quality materials',
        'Environmental Protection',
    ];

    const [showVideo, setShowVideo] = useState(false);

    const handleImageClick = () => {
        setShowVideo(true); // Show the video modal
    };

    return (
        <div className='bg-background lg:px-40 md:py-10 px-5 py-5 flex flex-col md:flex-row relative'>
            <div className='text-white flex flex-col gap-10'>
                <SmallHeading text='Building Company Since 1999' />
                <h1 className='md:text-[56px] text-[20px] font-bold leading-tight'>Turning imagination into reality</h1>
                <p className='opacity-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, suspendisse varius.</p>
                <BulletList items={items} />
                <YellowButton text='Meet the Team' href='/the-team' />
            </div>
            <div className='mt-2 relative w-full md:w-1/2 hover:cursor-pointer' onClick={handleImageClick}>
                <img 
                    src="/construction.jpg" 
                    alt="Construction" 
                    className="object-cover w-full h-full md:h-[400px] lg:h-[500px] cursor-pointer"
                    
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Lottie 
                        
                        animationData={animationData} 
                        loop 
                        style={{ width: '100%', height: '100%' }} 
                    />
                </div>
            </div>

            {/* Video Modal */}
            {showVideo && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50 p-1">
                    <div className="relative bg-white rounded-lg overflow-hidden p-1">
                        <button 
                            className="absolute top-0 right-0 m-2 text-black text-4xl text-white bg-foreground px-2 rounded-md" 
                            onClick={() => setShowVideo(false)}
                        >
                            &times;
                        </button>
                        <iframe
                            height="315"
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video link
                            title="Video"
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-lg w-full" // Optional: styling for the iframe
                        ></iframe>
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default Experience;
