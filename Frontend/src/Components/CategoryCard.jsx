import React from 'react';

const CategoryCard = ({ image, name }) => {
  return (
    <div className='relative w-[250px] h-[130px] rounded-2xl overflow-hidden cursor-pointer'>
      {/* Background Image */}
      <img src={image} alt={name} className='w-full h-full object-cover' />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-40 hover:opacity-50'></div>

      {/* Centered Text */}
      <p className='absolute inset-0 flex items-center justify-center text-center text-2xl text-white font-semibold'>
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
