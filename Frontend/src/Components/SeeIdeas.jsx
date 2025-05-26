import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/constants.js';

const SeeIdeas = () => {
  return (
    <div className='min-h-screen'>
      {/* Main Content - See it, make it Section */}
      <div className='flex flex-col md:flex-row'>
        {/* Left Column - Images */}
        <div className='w-full md:w-1/2 bg-neutral-200 relative'>
          {/* Main content model with makeup */}
          <div className='h-screen relative'>
            <img
              src={assets.model_img}
              alt='Model with makeup'
              className='w-full h-full object-cover'
            />

            {/* Makeup tip overlay */}
            <div className='absolute top-24 left-6 md:left-24 max-w-xs'>
              <div className='bg-white bg-opacity-90 p-5 rounded-2xl'>
                <h3 className='text-xl font-bold text-gray-800'>
                  How to find the perfect lip shade for any occasion
                </h3>
              </div>
            </div>

            {/* Profile overlay */}
            <div className='absolute bottom-6 left-6 flex items-center'>
              <div className='rounded-full overflow-hidden w-16 h-16 border-2 border-white'>
                <img
                  src={assets.creator_img}
                  alt='Scout the City profile'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='ml-3 text-white'>
                <h4 className='font-bold text-lg'>Scout the City</h4>
                <p className='text-sm'>56.7k followers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className='w-full md:w-1/2 bg-pink-100 flex items-center justify-center p-8'>
          <div className='max-w-md mx-auto text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-red-700 mb-8'>
              See it, make it, try it, do it
            </h1>
            <p className='text-xl md:text-2xl text-red-700 mb-10'>
              The best part of Pinterest is discovering new things and ideas
              from people around the world.
            </p>

            <NavLink to='/explore'>
              <button
                onClick={() => scrollTo(0, 0)}
                className='bg-red-600 text-white font-semibold px-8 py-3 rounded-full cursor-pointer'
              >
                Explore
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeIdeas;
