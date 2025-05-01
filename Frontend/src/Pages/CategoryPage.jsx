// CategoryPage.jsx
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { PinContext } from '../Context/PinContext';
import PinCard from '../Components/PinCard';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { pins } = useContext(PinContext);

  const categoryPins = pins.filter(
    (pin) =>
      pin.category && pin.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className='mx-5 mt-10'>
      <h2 className='text-3xl font-bold mb-4'>
        Pins in "{categoryName}" Category
      </h2>
      <div className='mx-3 columns-[200px] gap-4'>
        {categoryPins.length > 0 ? (
          categoryPins.map((pin) => <PinCard key={pin._id} pin={pin} />)
        ) : (
          <p className='text-center text-lg font-semibold mt-4 text-gray-500'>
            No pins found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
