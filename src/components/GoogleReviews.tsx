'use client';

import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'A.O.',
    rating: 5,
    text: 'Exceptional service! The team at Vivic Dental made my orthodontic journey comfortable and stress-free. My new smile has completely transformed my confidence.',
    date: 'December 2025'
  },
  {
    name: 'C.N.',
    rating: 5,
    text: 'Best dental clinic in Asaba! Professional staff, modern equipment, and amazing results. My teeth whitening procedure was quick and painless.',
    date: 'November 2025'
  },
  {
    name: 'E.I.',
    rating: 5,
    text: 'I was nervous about getting braces, but Dr. and the team were so patient and caring. The clinic is clean, modern, and welcoming. Highly recommend!',
    date: 'October 2025'
  },
  {
    name: 'M.U.',
    rating: 5,
    text: 'Outstanding smile makeover experience! From consultation to final results, everything was perfect. The attention to detail is remarkable.',
    date: 'September 2025'
  },
  {
    name: 'P.E.',
    rating: 5,
    text: 'Vivic Dental Clinic exceeded all my expectations. Professional, friendly, and results-oriented. My composite bonding looks completely natural!',
    date: 'August 2025'
  },
  {
    name: 'T.A.',
    rating: 5,
    text: 'The best investment in myself! The team is skilled, caring, and truly passionate about creating beautiful smiles. Thank you Vivic Dental!',
    date: 'July 2025'
  }
];

export default function GoogleReviews() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 card-hover"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-semibold text-gray-900">{review.name}</h4>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            <div className="flex">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">{review.text}</p>
        </div>
      ))}
    </div>
  );
}