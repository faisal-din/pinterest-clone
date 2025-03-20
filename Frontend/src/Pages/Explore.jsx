import React from 'react';
import CategoryCard from '../Components/CategoryCard';
import { categories } from '../assets/constants';

const Explore = () => {
  return (
    <div className='mx-[72px]'>
      <div className='mt-16'>
        <p className='text-4xl font-semibold '>Explore the best of Pinterest</p>
      </div>

      <div className='mt-8'>
        <p className='text-3xl font-semibold'>Browse by category</p>
        <div>
          <div className='grid grid-cols-5 gap-4 mt-4'>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                image={category.image}
                name={category.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
