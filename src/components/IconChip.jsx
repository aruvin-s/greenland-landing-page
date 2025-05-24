import React from 'react';

const IconChips = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 max-w-2xl">
      <div className="bg-primary text-secondary p-3 rounded-lg">
        <Icon size={32} />
      </div>
      <div>
        <p className="font-jakarta text-lg font-bold text-primary">{title}</p>
        <p className="font-jakarta text-base text-black mt-1">{description}</p>
      </div>
    </div>
  );
};

export default IconChips;
