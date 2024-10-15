import React from 'react';
import Button from './YellowButton';

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  href: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, date, title, href }) => {
  return (
    <div className="max-w-sm overflow-hidden shadow-lg ">
      <img src={image} alt={title} className="w-full h-64 object-cover" /> {/* Increased height to h-64 */}
      <div className="p-4">
        <p className="text-white bg-gray-700 p-2 w-fit rounded-lg text-sm font-bold">{date}</p>
        <h2 className="text-xl font-bold my-2 text-white">{title}</h2>
        <Button text='Read More' href={href} />
      </div>
    </div>
  );
};

export default BlogCard;
