import React, { useContext } from 'react';
import Explore from './Explore';
import PinCard from '../Components/PinCard';
import { Loading } from '../Components/Loading';
import { PinContext } from '../Context/PinContext';

const Home = () => {
  const { loading, pins, searchTerm } = useContext(PinContext);

  if (loading) return <Loading />;

  const searchedPins = searchTerm.trim()
    ? pins.filter((pin) =>
        pin.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : pins;

  return (
    <div className='mx-3  columns-[200px] gap-4 mt-4'>
      {searchedPins && searchedPins.length > 0 ? (
        searchedPins.map((pin) => <PinCard key={pin._id} pin={pin} />)
      ) : (
        <div className='min-h-[60vh]'>
          <h2 className='text-2xl text-center font-semibold text-red-600'>
            No pins found
          </h2>
        </div>
      )}
    </div>
  );
};

export default Home;
