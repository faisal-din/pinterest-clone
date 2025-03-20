import React from 'react';

const PinCard = ({ image, name }) => {
  return (
    <div className='relative w-full sm:w-[230px] h-[120px] rounded-2xl overflow-hidden cursor-pointer group'>
      {/* Background Image */}
      <img src={image} alt={name} className='w-full h-full object-cover' />

      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-40 group-hover:opacity-60'></div>

      {/* Centered Text */}
      <p className='absolute inset-0 flex items-center justify-center text-center text-2xl text-white font-semibold'>
        {name}
      </p>
    </div>
  );
};

export default PinCard;
