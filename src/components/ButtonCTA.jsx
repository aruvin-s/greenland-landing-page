import React from 'react';

const ButtonCTA = ({ position = 'left', icon: Icon, text = "text" }) => {
  return (
    <a
      href='https://wa.me/6281228866113'
      target="_blank"
      rel="noopener noreferrer"
      className='flex justify-center items-center gap-2 font-jakarta font-bold text-base text-white bg-white/20 px-6 py-4 outline-2 rounded'
    >
      {position === 'left' && Icon && <Icon size={24} />}
      <span>{text}</span>
      {position === 'right' && Icon && <Icon size={24} />}
    </a>
  );
};

export default ButtonCTA;
