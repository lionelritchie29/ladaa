import React from 'react';
import CuisineCard from '../components/home/CuisineCard';
import Hero from '../components/home/Hero';
import ContentSection from '../components/shared/ContentSection';
import Divider from '../components/shared/Divider';

const Home = () => {
  const cuisines = [
    { name: 'Indonesia', image: '' },
    { name: 'Western', image: '' },
    { name: 'Chinese', image: '' },
  ];

  return (
    <section>
      <Hero />
      <Divider />

      <ContentSection className='mt-6'>
        <h2 className='text-gray-800 font-bold text-3xl text-center'>
          Food Cuisine
        </h2>

        <div className='mt-4 grid gap-4 lg:gap-x-12 lg:gap-y-4 grid-cols-2 lg:grid-cols-3'>
          {cuisines.map((cuisine) => (
            <CuisineCard name={cuisine.name} />
          ))}
        </div>
      </ContentSection>

      <ContentSection className='mt-8'>
        <h2 className='text-gray-800 font-bold text-3xl text-center'>
          Recommended Recipes
        </h2>
      </ContentSection>
    </section>
  );
};

export default Home;
