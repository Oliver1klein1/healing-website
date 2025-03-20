'use client';

import React from 'react';

interface BookContentProps {
  book: {
    title: string;
    description: string;
    image: string;
    pdfUrl?: string;
  };
}

const BookContent: React.FC<BookContentProps> = ({ book }) => {
  console.log('Rendering BookContent with:', book.title);
  
  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: book.description }} />
    </div>
  );
};

export default BookContent; 