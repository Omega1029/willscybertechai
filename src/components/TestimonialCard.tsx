import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  isDark?: boolean;
}

const TestimonialCard = ({ quote, author, position, isDark }: TestimonialCardProps) => {
  return (
    <div className={`rounded-xl p-6 border ${
      isDark
        ? 'bg-zinc-900 border-zinc-800'
        : 'bg-white border-gray-100 shadow-sm'
    }`}>
      <Quote className={`mb-4 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} size={32} />
      <p className={`${isDark ? 'text-zinc-300' : 'text-gray-700'} mb-6 text-lg`}>{quote}</p>
      <div>
        <h4 className={`font-semibold text-lg ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>{author}</h4>
        <p className={`${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;