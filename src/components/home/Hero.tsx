import React from 'react';
import heroImg from '../../assets/images/hero.jpg';

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

  console.log(heroImg);

  return (
    <section style={heroBg} className='min-h-screen relative'>
      <div
        style={heroBgOverlay}
        className='absolute top-0 left-0 h-full w-full px-8 flex flex-col items-center justify-center'>
        <h1 className='text-gray-100 text-4xl text-center xl:text-6xl font-bold lg:w-2/3'>
          Need any recipes? Find it all in Ladaa!
        </h1>
        <div className='mt-24 flex flex-col md:flex-row'>
          <button className='md:mr-4 w-72 primary-bg-yellow shadow-md text-gray-700 font-semibold px-4 py-3 rounded-full'>
            Find Recipe
          </button>
          <button className='mt-3 md:mt-0 w-72 primary-bg-yellow shadow-md text-gray-700 font-semibold px-4 py-3 rounded-full'>
            My Saved Recipes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
