import React from 'react';
import CategoryCard from '../Components/CategoryCard';
import { categories } from '../assets/constants';
import PinCard from '../Components/PinCard';

const Explore = () => {
  return (
    <div className='mx-5 md:mx-8 lg:mx-14 xl:mx-[72px]'>
      <div className='mt-16'>
        <p className='text-4xl font-semibold '>Explore the best of Pinterest</p>
      </div>

      {/* Categories */}
      <div className='mt-8'>
        <p className='text-3xl font-semibold'>Browse by category</p>
        <div>
          <div className='grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4 mt-4'>
            {categories.slice(0, 10).map((category) => (
              <CategoryCard
                key={category.id}
                image={category.image}
                name={category.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Popular on Pinterest */}
      <div className='mt-16'>
        <p className='text-3xl font-semibold'>What's new on Pinterest</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4'>
          {categories.slice(0, 5).map((category) => (
            <PinCard
              key={category.id}
              image={category.image}
              name={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
