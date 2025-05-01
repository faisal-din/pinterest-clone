import { useContext } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { Loading } from '../Components/Loading';
import ProfileHeader from '../Components/ProfileHeader';
import { PinContext } from '../Context/PinContext';
import PinCard from '../Components/PinCard';

const MyProfile = () => {
  const { currentUser, loading } = useContext(UserContext);
  const { pins } = useContext(PinContext);

  // filter pins based on user ID
  const userPins = pins.filter((pin) => pin.owner._id === currentUser._id);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <ProfileHeader user={currentUser} />

      <hr className='border-gray-600 w-full mt-5' />

      {userPins.length === 0 && (
        <div className='flex flex-col items-center gap-3 justify-center min-h-[40vh]'>
          <p className='mt-4'>
            Nothing to show...yet! Pins you create will live here.
          </p>
          <NavLink to='/create-pin'>
            <button className='py-2 px-3 bg-red-500 text-white rounded-full cursor-pointer'>
              Create Pin
            </button>
          </NavLink>
        </div>
      )}

      {/* pin details */}
      {userPins.length > 0 && (
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
          <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-4'>
            {userPins.map((pin) => (
              <PinCard pin={pin} key={pin._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
