import React from 'react';
import { Link } from 'react-router-dom';

const PinCard = ({ pin }) => {
  return (
    <Link to={`/pin/${pin._id}`}>
      <div className='mt-5 bg-gray-100 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition'>
        <img
          src={pin.image}
          alt={pin.title}
          className=' w-full object-cover '
        />

        <p className='text-center font-semibold mt-2'>{pin.title}</p>
      </div>
    </Link>
  );
};

export default PinCard;
