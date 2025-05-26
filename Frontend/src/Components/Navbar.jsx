import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { PinContext } from '../Context/PinContext';

const Navbar = ({ user }) => {
  const { isAuthenticated, userLogout } = useContext(UserContext);
  const { searchTerm, setSearchTerm } = useContext(PinContext);

  const handleLogout = () => {
    userLogout();
  };

  return (
    <nav className='bg-white sticky top-0 z-50'>
      <div className=' flex justify-between items-center gap-3 py-4 px-3 sm:px-6 shadow-md'>
        {/* Logo and explore  */}
        <div className=' flex items-center  gap-4'>
          <Link to='/'>
            <div className='flex items-center pr-2'>
              <i className='fa-brands fa-pinterest text-[#E60023] text-4xl sm:text-base w-5'></i>

              <div className='hidden sm:flex'>
                <p className='text-lg text-[#E60023] font-bold'>Pinterest</p>
              </div>
            </div>
          </Link>

          {!isAuthenticated ? (
            <NavLink
              to='/explore'
              className='py-2 px-3 rounded-full bg-gray-800 text-white'
            >
              <p>Explore</p>
            </NavLink>
          ) : (
            <NavLink
              to='/create-pin'
              className='py-2 px-3 rounded-full bg-black text-white'
            >
              <p>Create Pin</p>
            </NavLink>
          )}
        </div>

        {/* Search bar */}
        {isAuthenticated && (
          <div className='hidden sm:flex flex-1  items-center gap-2 rounded-full bg-gray-200 px-3 py-2'>
            <i className='fa-solid fa-search text-gray-400'></i>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type='text'
              placeholder='Search for easy fashion, tech, and more'
              className='w-full bg-transparent border-none outline-none'
            />
          </div>
        )}

        {/* Log in and Sign up */}
        <div className=' flex items-center justify-end gap-3'>
          <ul className='flex items-center gap-3'>
            {isAuthenticated ? (
              <div className='flex items-center gap-3'>
                <NavLink
                  to='/myprofile'
                  className='w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-xl text-gray-700'
                >
                  {user?.profileImage ? (
                    <img
                      src={user?.profileImage}
                      alt='profile'
                      className='w-full h-full rounded-full object-cover'
                    />
                  ) : (
                    <i className='fa-solid fa-user'></i>
                  )}
                </NavLink>
                <button
                  onClick={() => handleLogout()}
                  type='button'
                  className='py-2 px-4 rounded-full bg-red-600 text-white hover:bg-red-700 cursor-pointer'
                >
                  <p>Log out</p>
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to='/login'
                  className='py-2 px-4 rounded-full bg-red-600 text-white hover:bg-red-700'
                >
                  <p>Log in</p>
                </NavLink>
                <NavLink
                  to='/signup'
                  className='py-2 px-4 rounded-full bg-gray-200 hover:bg-gray-300 '
                >
                  <p>Sign up</p>
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
