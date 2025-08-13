import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  return (
    <div className='border rounded p-4 shadow bg-white'>
      <h3 className='text-lg font-bold mb-2'>{title}</h3>
      <p className='text-gray-700'>{content}</p>
    </div>
  );
}
