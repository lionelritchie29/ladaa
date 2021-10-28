import React from 'react';

type props = {
  text: string;
  className: string;
};

const SecondaryButton = ({ text, className }: props) => {
  return (
    <button
      className={`btn mt-3 md:mt-0 primary-bg-yellow shadow-md text-gray-700 font-semibold px-4 py-3 rounded-full ${className}`}>
      {text}
    </button>
  );
};

export default SecondaryButton;