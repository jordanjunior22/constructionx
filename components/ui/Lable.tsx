import React from 'react';

interface LabelProps {
  placeholder: string;
  label: string;
}

const Label: React.FC<LabelProps> = ({ placeholder, label }) => {
  return (
    <div className='flex flex-col'>
      <label className='font-bold opacity-60 text-sm'>{label}</label>
      <input type='text' placeholder={placeholder} className="mt-1 p-2 border border-gray-700 bg-[#1d1e1f] w-full" />
    </div>
  );
};

export default Label;
