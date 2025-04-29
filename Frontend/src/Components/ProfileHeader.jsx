import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileHeader = ({ user }) => {
  const { name, bio, username, profileImage } = user;

  return (
    <div className='mt-10 flex justify-center flex-col items-center w-full max-w-3xl mx-auto px-4'>
      <img
        src={
          profileImage ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s'
        }
        alt={`${name}'s profile`}
        className='w-32 h-32 rounded-full object-cover'
      />
      <h1 className='mt-5 text-4xl text-center capitalize font-medium'>
        {name || 'Full Name'}.
      </h1>
      <p className='mt-2 text-lg text-gray-800 text-center'>
        {bio || 'write something about yourself...'}
      </p>

      <div className='flex items-center '>
        <i className='fa-brands fa-pinterest text-gray-500 w-5'></i>
        <p className='text-base text-gray-500 font-bold'>
          {username || 'user_name'}
        </p>
      </div>

      <div className='mt-5'>
        <NavLink to='/edit-profile'>
          <button
            className='bg-gray-200 hover:bg-gray-400 font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer'
            aria-label='Edit profile'
          >
            Edit Profile
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileHeader;
