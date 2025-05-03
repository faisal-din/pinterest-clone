import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { LoadingAnimation } from '../Components/Loading';

const EditMyProfile = () => {
  const { currentUser, updateProfile, loading } = useContext(UserContext);

  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (currentUser) {
      setImagePreview(currentUser.profileImage || null);
      setName(currentUser.name || '');
      setBio(currentUser.bio || '');
      setUsername(currentUser.username || '');
    }
  }, [currentUser]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfileHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Only append image if a new one was selected
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }

    formData.append('name', name);
    formData.append('bio', bio);
    formData.append('username', username);

    updateProfile(formData);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50 mt-5'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-semibold mb-2'>Edit Profile</h2>
        <p className='text-sm text-gray-500 mb-6'>
          Keep your personal details private. Information you add here is
          visible to anyone who can view your profile.
        </p>

        <div className='flex flex-col items-center mb-6'>
          {imagePreview ? (
            <img
              src={imagePreview}
              alt='Preview'
              className='w-24 h-24 rounded-full object-cover border border-gray-300'
            />
          ) : (
            <div className='w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center'>
              <i className='fa-solid fa-user text-7xl text-gray-800'></i>
            </div>
          )}

          <input
            type='file'
            className='hidden'
            id='file-upload'
            onChange={handleImageUpload}
            accept='image/*'
            name='image'
          />
          <label
            htmlFor='file-upload'
            className='mt-4 inline-block px-3 py-1 bg-gray-300 text-black font-semibold
                rounded-full   cursor-pointer'
          >
            {profileImage ? 'Change Image' : 'Upload Image'}
          </label>
        </div>

        <form onSubmit={updateProfileHandler} className='space-y-4'>
          <div>
            <label htmlFor='fullname' className='block text-sm font-medium'>
              Full Name
            </label>
            <input
              type='text'
              name='fullname'
              placeholder='Full Name'
              className='mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='bio' className='block text-sm font-medium'>
              Bio
            </label>
            <input
              type='text'
              name='bio'
              placeholder='introduce yourself...'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className='mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          </div>

          <div>
            <label htmlFor='username' className='block text-sm font-medium'>
              Username
            </label>
            <input
              type='text'
              name='username'
              placeholder='user_name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition cursor-pointer'
          >
            {loading ? <LoadingAnimation /> : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMyProfile;
