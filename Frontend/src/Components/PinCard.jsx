import React from 'react';
import { Link } from 'react-router-dom';

const PinCard = ({ pin }) => {
  return (
    <Link to={`/pin/${pin._id}`}>
      <div className='mt-5 rounded-2xl overflow-hidden group relative cursor-pointer'>
        {/* Background Image */}
        <img
          src={pin.image}
          alt={pin.title}
          className=' w-full object-cover rounded-2xl '
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-40'></div>

        {/* Centered Text */}
        {/* <button className='hidden  absolute inset-0 hover:flex items-center justify-center text-center text-2xl text-white font-semibold'>
          Save
        </button> */}
      </div>
    </Link>
  );
};

export default PinCard;
