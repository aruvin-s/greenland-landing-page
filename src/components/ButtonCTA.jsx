import React from 'react';
import { WhatsappLogo } from "phosphor-react";

const ButtonCTA = () => {
  return (
    <a
      href="https://wa.me/6282144036169"
      target="_blank"
      rel="noopener noreferrer"
      className='flex justify-center items-center gap-2 font-jakarta font-bold text-base text-white bg-white/20 px-6 py-4 outline-2 rounded'
    >
      <WhatsappLogo size={24} /> Reservasi Sekarang
    </a>
  );
};

export default ButtonCTA;
