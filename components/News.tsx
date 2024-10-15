import React from 'react';
import BlogCard from './ui/BlogCard';

const blogPosts = [
  {
    image: "construction.jpg",
    date: "October 15, 2024",
    title: "My Blog Post Title",
    href:'/'
  },
  {
    image: "construction2.jpg",
    date: "October 14, 2024",
    title: "Another Blog Post Title",
    href:'/'
  },
  {
    image: "construction3.jpg",
    date: "October 13, 2024",
    title: "Yet Another Blog Post Title",
    href:'/'
  },
];

function News() {
  return (
    <div className='bg-background lg:px-40 md:py-40 px-5 py-5 gap-10 flex flex-col'>
      <h1 className='md:text-[56px] text-[20px] font-bold leading-tight text-white'>Latest News</h1>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {blogPosts.map((post, index) => (
          <BlogCard 
            key={index} 
            image={post.image} 
            date={post.date} 
            title={post.title} 
            href={post.href}
          />
        ))}
      </div>
    </div>
  );
}

export default News;
