import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchIdeas = () => {
  return (
    <div className='min-h-screen'>
      {/* Main Content - Search Section */}
      <div className='bg-yellow-100 min-h-screen'>
        <div className='container mx-auto px-4 py-6 md:py-12'>
          <div className='flex flex-col md:flex-row items-center'>
            {/* Left Column - Food Image */}
            <div className='w-full md:w-1/2 relative'>
              <div className='relative'>
                {/* Main image with rounded corners */}
                <div className='w-full md:w-[380px] flex justify-center items-center  rounded-3xl overflow-hidden bg-yellow-400 relative'>
                  <img
                    src='https://s.pinimg.com/webapp/center-c2550bb2.png'
                    alt='Plate of food with chicken dinner'
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Search bar overlay */}
                <div className='absolute w-[350px] top-1/4 left-0 right-0 flex justify-center'>
                  <div className='bg-white rounded-full py-3 px-5 flex items-center shadow-lg w-4/5'>
                    <svg
                      className='w-6 h-6 text-gray-600 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>
                    <span className='text-xl text-rose-800 font-medium'>
                      easy chicken dinner
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className='w-full md:w-1/2 mt-8 md:mt-0 md:pl-12'>
              <h1 className='text-4xl md:text-6xl font-bold text-[#C31952] mb-6'>
                Search for an idea
              </h1>
              <p className='text-xl md:text-2xl text-[#C31952] mb-8'>
                What do you want to try next? Think of something you're
                into—like "easy chicken dinner"—and see what you find.
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
    </div>
  );
};

export default SearchIdeas;
