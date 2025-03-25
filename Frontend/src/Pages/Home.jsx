import React, { useContext } from 'react';
import Explore from './Explore';
import PinCard from '../Components/PinCard';
import { Loading } from '../Components/Loading';
import { PinContext } from '../Context/PinContext';

const Home = () => {
  const { loading, pins } = useContext(PinContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className='mx-3  columns-[200px] gap-4 mt-4'>
      {pins && pins.length > 0 ? (
        pins.map((pin) => <PinCard key={pin._id} pin={pin} />)
      ) : (
        <p>No pins available</p>
      )}
    </div>
  );
};

export default Home;
