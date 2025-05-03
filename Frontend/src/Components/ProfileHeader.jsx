import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const ProfileHeader = ({ user }) => {
  const {
    name,
    bio,
    username,
    profileImage,
    followers,
    followersCount,
    followingCount,
  } = user;

  const { currentUser, toggleFollowUnfollow } = useContext(UserContext);
  const isCurrentUser = currentUser._id === user._id;

  const isAuthenticated = Boolean(currentUser);
  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  const isFollowing = (followers || [])
    .map((id) => id.toString())
    .includes(currentUser._id.toString());

  const handleFollowUser = () => {
    toggleFollowUnfollow(user._id);
  };

  return (
    <div className='mt-10 flex justify-center flex-col items-center w-full max-w-3xl mx-auto px-4'>
      {profileImage ? (
        <div className='w-32 h-32 rounded-full overflow-hidden border border-gray-800'>
          <img
            src={profileImage}
            alt='profile'
            className='w-32 h-32 rounded-full object-cover'
          />
        </div>
      ) : (
        <div className='w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center'>
          <i className='fa-solid fa-user text-7xl text-gray-800'></i>
        </div>
      )}

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

      <div className='flex items-center gap-3 mt-2'>
        <div>{followersCount || 0} Followers</div>
        <div className=' border-2 border-l border-gray-800 h-4'></div>
        <div>{followingCount || 0} Following</div>
      </div>

      {isCurrentUser ? (
        <div className='mt-5'>
          <NavLink to='/edit-myprofile'>
            <button
              className='bg-gray-200 hover:bg-gray-400 font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer'
              aria-label='Edit profile'
            >
              Edit Profile
            </button>
          </NavLink>
        </div>
      ) : (
        <div className='mt-5'>
          <button
            onClick={handleFollowUser}
            type='button'
            className='bg-gray-200 hover:bg-gray-400 font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer'
            aria-label='Follow user'
          >
            {isFollowing ? 'UnFollow' : 'Follow'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
