import React from 'react';

const ButtonPrimary = ({
  position = 'left',
  icon: Icon,
  text = 'Button',
  type = 'green',
  href = 'https://wa.me/6282144036169',
}) => {
  const typeStyles = {
    green: 'text-white bg-primary',
    accent: 'text-white bg-accent',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        w-fit inline-flex justify-center items-center gap-2
        font-jakarta font-semibold text-base px-6 py-3 rounded
        ${typeStyles[type]}
        transition-transform duration-300 ease-in-out
        hover:brightness-110 hover:scale-105
        active:scale-95
        shadow-sm hover:shadow-md active:shadow-sm
      `}
    >
      {position === 'left' && Icon && <Icon size={24} />}
      <span>{text}</span>
      {position === 'right' && Icon && <Icon size={24} />}
    </a>
  );
};

export default ButtonPrimary;
