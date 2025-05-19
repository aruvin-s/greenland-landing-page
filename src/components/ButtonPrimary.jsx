import React from 'react';
import { WhatsappLogo } from "phosphor-react";

const ButtonPrimary= () => {
  return (
    <a
      href="https://wa.me/6282144036169"
      target="_blank"
      rel="noopener noreferrer"
      className='w-fit inline-flex justify-center items-center gap-2 font-jakarta font-semibold text-base text-white bg-primary px-6 py-3 rounded'
    >
      <WhatsappLogo size={24} /> Pelajari lebih lanjut
    </a>
  );
};

export default ButtonPrimary;
