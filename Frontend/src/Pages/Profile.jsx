import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { Loading } from '../Components/Loading';
import ProfileHeader from '../Components/ProfileHeader';
import { PinContext } from '../Context/PinContext';
import PinCard from '../Components/PinCard';

const Profile = () => {
  const { user, loading } = useContext(UserContext);
  const { pins } = useContext(PinContext);

  // filter pins based on user ID
  const userPins = pins.filter((pin) => pin.owner._id === user._id);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <ProfileHeader user={user} />

      {/* pin details */}
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-4'>
          {userPins.map((pin) => (
            <PinCard pin={pin} key={pin._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
