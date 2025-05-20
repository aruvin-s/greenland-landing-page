import React from 'react';

const ButtonPrimary = ({ position = 'left', icon: Icon, text = "Button" }) => {
  return (
    <a
      href="https://wa.me/6282144036169"
      target="_blank"
      rel="noopener noreferrer"
      className='w-fit inline-flex justify-center items-center gap-2 font-jakarta font-semibold text-base text-white bg-primary px-6 py-3 rounded'
    >
      {position === 'left' && Icon && <Icon size={24} />}
      <span>{text}</span>
      {position === 'right' && Icon && <Icon size={24} />}
    </a>
  );
};

export default ButtonPrimary;
