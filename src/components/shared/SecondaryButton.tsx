import React from 'react';

type props = {
  text: string;
  className: string;
  onClickCallback: Function;
};

const SecondaryButton = ({ text, className, onClickCallback }: props) => {
  return (
    <button
      onClick={() => onClickCallback()}
      className={`btn primary-bg-yellow shadow-md text-gray-700 font-semibold px-4 py-3 rounded-full ${className}`}>
      {text}
    </button>
  );
};

export default SecondaryButton;
