import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../context/UserContext';

const Profile = () => {
  const { user, isAuthenticated, loading } = useContext(userContext);

  // Redirect if not authenticated
  if (!loading && !isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        Loading...
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>User Profile</div>
          <div className='bg-gray-100 rounded-lg p-4 mb-4'>
            <div className='mb-2'>
              <span className='font-semibold text-gray-700'>Name:</span>{' '}
              {user?.name}
            </div>
            <div className='mb-2'>
              <span className='font-semibold text-gray-700'>Email:</span>{' '}
              {user?.email}
            </div>
            <div className='mb-2'>
              <span className='font-semibold text-gray-700'>
                Account created:
              </span>{' '}
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : 'N/A'}
            </div>
          </div>
          <div className='mt-4'>
            <button
              className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
