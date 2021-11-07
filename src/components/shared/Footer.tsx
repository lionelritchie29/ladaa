import React from 'react';
import { useLocation } from 'react-router';

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/saved-recipes' &&
        location.pathname !== '/meal-plan' &&
        location.pathname !== '/search-recipes' && (
          <div className='bg-green-800 text-gray-100 text-center py-5 font-semibold'>
            Copyright 2021 &copy; Ladaa
          </div>
        )}
    </>
  );
};

export default Footer;
