import React, { useContext } from 'react';
import Explore from './Explore';
import { pinData } from '../assets/constants';
import PinCard from '../Components/PinCard';
import { UserContext } from '../Context/UserContext';
import { Loading } from '../Components/Loading';

const Home = () => {
  const { loading } = useContext(UserContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className='mx-3  columns-[200px] gap-4 mt-4'>
      {pinData.map((pin) => (
        <PinCard key={pin.id} id={pin.id} image={pin.image} name={pin.name} />
      ))}
    </div>
  );
};

export default Home;
