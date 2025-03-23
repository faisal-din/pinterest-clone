import React from 'react';

const ProfileHeader = ({ user }) => (
  <div className='mt-10 flex justify-center flex-col items-center w-full max-w-3xl mx-auto px-4'>
    <img
      src={
        user.profileImage ||
        'https://i.pinimg.com/75x75_RS/64/e1/0d/64e10d9fd2565527c4651caace60e6cb.jpg'
      }
      alt={`${user.name}'s profile`}
      className='w-32 h-32 rounded-full object-cover'
    />
    <h1 className='mt-5 text-4xl text-center capitalize font-medium'>
      {user.name}
    </h1>
    <p className='mt-2 text-lg text-gray-800 text-center'>
      {user.bio || 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
    </p>
    <div className='flex items-center gap-3'>
      <p className='mt-2 text-base'>{user.following || 0} following</p>
      <p className='mt-2 text-base'>{user.followers || 0} followers</p>
    </div>
    <div className='mt-5'>
      <button
        className='bg-gray-200 hover:bg-gray-400 font-medium py-3 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer'
        aria-label='Edit profile'
      >
        Edit Profile
      </button>
    </div>
  </div>
);

export default ProfileHeader;
