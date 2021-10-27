import React from 'react';
import dummyCuisine from '../../assets/images/cuisines/dummy-cuisine.jpg';

type props = {
  name: string;
};

const CuisineCard = ({ name }: props) => {
  const bg = {
    backgroundImage: `url(${dummyCuisine})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const bgOverlay = {
    backgroundColor: 'rgba(0,0,0,0.5)',
  };

  return (
    <a
      href='#'
      style={bg}
      className='h-24 md:h-36 xl:h-40 rounded-lg relative overflow-hidden'>
      <div
        style={bgOverlay}
        className='absolute text-gray-100 top-0 left-0 h-full w-full flex items-center justify-center'>
        <span className='font-semibold'>{name}</span>
      </div>
    </a>
  );
};

export default CuisineCard;