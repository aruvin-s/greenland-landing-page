import React from 'react';
import { WhatsappLogo } from "phosphor-react";

const Chips = ({ text = "CHIPS", variant = "primary" }) => {
  const baseClass = 'w-fit inline-flex items-center font-jakarta font-extrabold text-sm px-3 py-2 rounded';

  const variantClass = variant === 'primary'
    ? 'bg-primary/20 text-primary'
    : 'bg-secondary/20 text-secondary';

  return (
    <div className={`${baseClass} ${variantClass}`}>
      {text}
    </div>
  );
};

export default Chips;
