import React from 'react';
import { WhatsappLogo } from "phosphor-react";

const Chips = ({text = "CHIPS"}) => {
  return (
        <div className='w-fit inline-flex items-center bg-primary/20 text-primary font-jakarta font-extrabold text-sm px-3 py-2 rounded'>
        {text}
        </div>
  );
};

export default Chips;
