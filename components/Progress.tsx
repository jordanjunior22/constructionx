"use client"
import React, { useEffect, useState, useRef } from 'react';

function Progress() {
  const [inView, setInView] = useState(false);
  const [countedAwards, setCountedAwards] = useState(0);
  const [countedProjects, setCountedProjects] = useState(0);
  const [countedRevenue, setCountedRevenue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const awardsInterval = setInterval(() => {
        setCountedAwards((prev) => (prev < 14 ? prev + 1 : prev));
      }, 100); // adjust interval speed

      const projectsInterval = setInterval(() => {
        setCountedProjects((prev) => (prev < 1300 ? prev + 10 : prev));
      }, 10); // adjust interval speed

      const revenueInterval = setInterval(() => {
        setCountedRevenue((prev) => (prev < 14000 ? prev + 100 : prev));
      }, 1); // adjust interval speed

      return () => {
        clearInterval(awardsInterval);
        clearInterval(projectsInterval);
        clearInterval(revenueInterval);
      };
    }
  }, [inView]);

  return (
    <div ref={ref} className='bg-background px-5 py-5 md:px-40 md:py-40 flex flex-col md:flex-row'>
      <div className='flex flex-col md:flex-row justify-between text-white w-full'>
        <div className='text-center mb-5 md:mb-0 md:mr-5'>
          <p className='text-foreground text-[48px] md:text-[76px] font-bold'>{countedAwards}+</p>
          <p className='opacity-50 text-lg'>Construction Awards</p>
        </div>

        <div className='text-center mb-5 md:mb-0 md:mr-5'>
          <p className='text-foreground text-[48px] md:text-[76px] font-bold'>{countedProjects}</p>
          <p className='opacity-50 text-lg'>Projects Completed</p>
        </div>

        <div className='text-center mb-5 md:mb-0'>
          <p className='text-foreground text-[48px] md:text-[76px] font-bold'>${countedRevenue}M</p>
          <p className='opacity-50 text-lg'>Revenue Generated</p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
