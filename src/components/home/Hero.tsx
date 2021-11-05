import React from 'react';
import heroImg from '../../assets/images/hero.jpg';
import SecondaryButton from '../shared/SecondaryButton';

const Hero = () => {
  const heroBg = {
    backgroundImage: `url(${heroImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const heroBgOverlay = {
    backgroundColor: 'rgba(6, 95, 70, 0.5)',
  };

  return (
    <section style={heroBg} className='min-h-screen relative'>
      <div
        style={heroBgOverlay}
        className='absolute top-0 left-0 h-full w-full px-8 flex flex-col items-center justify-center'>
        <h1 className='text-gray-100 text-4xl text-center xl:text-6xl font-bold lg:w-2/3'>
          Need any recipes? Find it all in Ladaa!
        </h1>
        <div className='mt-24 flex flex-col md:flex-row'>
          <SecondaryButton
            onClickCallback={() => {}}
            className='w-72 md:mr-4 lg:mr-8 xl:mr-12'
            text='Find Recipe'
          />
          <SecondaryButton onClickCallback={() => {}} className='mt-3 md:mt-0 w-72' text='My Saved Recipes' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
