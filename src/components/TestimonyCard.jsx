import React from 'react';
import { StarIcon } from '@phosphor-icons/react';

const TestimonyCard = ({
  name = "Octaviana",
  rating = 5,
  message = "Harga sangat terjangkau, fasilitas sangat lengkap dan bersih, pelayanan yang sangat ramah, pemandangan yang luar biasa, sangat cocok untuk keluarga",
  image = "/your-image.jpg", // path to the family photo
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <StarIcon
      key={i}
      size={18}
      className="text-yellow-400"
      weight="fill"
    />
  ));

  return (
    <div className="rounded-lg overflow-hidden">
      {/* Top Image */}
      <img src={image} alt={name} className="w-full object-cover" />

      {/* Testimonial Box */}
      <div className="bg-secondary p-5 rounded shadow -mt-6 mx-4 relative z-10 max-w-md">
        <p className="text-primary font-jakarta font-bold text-lg">{name}</p>
        <div className="flex items-center gap-2 mt-1 mb-2">
          <p className="text-primary font-jakarta font-bold text-lg">{rating}/5</p>
          <div className="flex gap-1">{stars}</div>
        </div>
        <p className="text-base font-jakarta text-black leading-relaxed italic">
          “{message}”
        </p>
      </div>
    </div>
  );
};

export default TestimonyCard;
