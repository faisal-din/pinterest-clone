import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className=' flex justify-between items-center gap-3 py-4 px-6 shadow-md'>
        <div className=' flex items-center  gap-4'>
          <Link to='/'>
            <div className='flex items-center '>
              <i className='fa-brands fa-pinterest text-[#E60023] w-5'></i>
              <p className='text-lg text-[#E60023] font-bold'>Pinterest</p>
            </div>
          </Link>

          <NavLink
            to='/explore'
            className='py-2 px-3 rounded-full bg-black text-white'
          >
            <p>Explore</p>
          </NavLink>
        </div>
        <div className='flex-1 flex items-center gap-2 rounded-full bg-gray-200 px-3 py-2'>
          <i className='fa-solid fa-search text-gray-400'></i>
          <input
            type='text'
            placeholder='Search for easy fashion, tech, and more'
            className='w-full bg-transparent border-none outline-none'
          />
        </div>
        <div className=' flex items-center justify-end gap-3'>
          <ul className='flex items-center gap-3'>
            <NavLink
              to='/login'
              className='py-2 px-4 rounded-full bg-red-600 text-white hover:bg-red-700'
            >
              <p>Log in</p>
            </NavLink>
            <NavLink
              to='/signup'
              className='py-2 px-4 rounded-full bg-gray-200 hover:bg-gray-300 '
            >
              <p>Sign up</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
