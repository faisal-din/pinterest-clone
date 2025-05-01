// CategoryCard.jsx
import { Link } from 'react-router-dom';

const CategoryCard = ({ image, name }) => {
  return (
    <Link to={`/category/${name}`}>
      <div className='rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition'>
        <img src={image} alt={name} className='w-full h-40 object-cover' />
        <p className='text-center font-semibold mt-2'>{name}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
