import { useContext, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { Loading } from '../Components/Loading';
import { pinData } from '../assets/constants';
import PinCard from '../Components/PinCard';
import ProfileHeader from '../Components/ProfileHeader';

const Profile = () => {
  const { user, isAuthenticated, loading } = useContext(UserContext);

  // Memoize pins to prevent unnecessary renders
  const userPins = useMemo(
    () => pinData.slice(0, 14),
    [] // Empty dependency array since pinData is imported constant
  );

  // Redirect if not authenticated
  if (!loading && !isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

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
            <PinCard
              key={pin.id}
              id={pin.id}
              image={pin.image}
              title={pin.title}
              alt={pin.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
