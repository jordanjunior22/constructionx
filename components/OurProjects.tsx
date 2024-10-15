import React from 'react';
import ImageCard from './ui/ImageCard';

const projectData = [
  {
    imageUrl: "construction.jpg",
    projectName: "Awesome Project",
    projectType: "Construction",
    linkUrl: "/"
  },
  {
    imageUrl: "construction2.jpg",
    projectName: "Management Excellence",
    projectType: "Project Management",
    linkUrl: "/management"
  },
  {
    imageUrl: "construction3.jpg",
    projectName: "Home Renovation",
    projectType: "Renovation",
    linkUrl: "/renovation"
  },
  {
    imageUrl: "construction.jpg",
    projectName: "Commercial Development",
    projectType: "Construction",
    linkUrl: "/commercial"
  }
];

function OurProjects() {
  return (
    <div className='bg-background lg:px-40 md:py-10 px-5 py-5 gap-10 flex flex-col'>
      <div className='flex flex-col gap-10'>
        <div className='flex gap-2 items-center'>
          <div className='border-2 border-foreground p-1 bg-background'></div>
          <h2 className='md:text-sm text-[10px] font-bold text-white'>SEE OUR PROJECTS</h2>
        </div>
        <h1 className='md:text-[56px] text-[20px] font-bold leading-tight text-white'>Recent Projects</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {projectData.map((project, index) => (
          <ImageCard 
            key={index}
            imageUrl={project.imageUrl} 
            projectName={project.projectName} 
            projectType={project.projectType} 
            linkUrl={project.linkUrl} 
          />
        ))}
      </div>
    </div>
  );
}

export default OurProjects;
