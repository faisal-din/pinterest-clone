import { NavLink } from 'react-router-dom';

const SaveIdeas = () => {
  return (
    <div className='min-h-screen bg-mint-100'>
      {/* Main Content */}
      <div className='bg-green-50 py-8 md:py-16'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex flex-col md:flex-row'>
            {/* Left Column */}
            <div className='w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center justify-center'>
              <h1 className='text-4xl md:text-5xl font-bold text-teal-800 mb-6'>
                Save ideas you like
              </h1>
              <p className='text-xl text-teal-800 mb-8'>
                Collect your favorites so you can get back to them later.
              </p>
              <NavLink to='/explore'>
                <button
                  onClick={() => scrollTo(0, 0)}
                  className='bg-red-600 text-white font-semibold px-8 py-3 rounded-full cursor-pointer'
                >
                  Explore
                </button>
              </NavLink>
            </div>

            {/* Right Column - Image Grid */}
            <div className='w-full md:w-1/2 md:pl-8 relative'>
              <div className='grid grid-cols-2 gap-4'>
                {/* Main Large Image */}
                <div className='col-span-2 md:col-span-1 row-span-2 relative'>
                  <div className='rounded-3xl overflow-hidden bg-green-800 relative h-96'>
                    <img
                      src='https://s.pinimg.com/webapp/future-home-vibes-fd224806.png'
                      alt='Fern home decor'
                      className='w-full h-full object-cover opacity-90'
                    />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <h3 className='text-4xl font-bold text-white text-center leading-tight'>
                        Fern future
                        <br />
                        home vibes
                      </h3>
                    </div>
                    <div className='absolute bottom-4 left-0 right-0 flex justify-center'>
                      <div className='flex space-x-2'>
                        <div className='w-20 h-16 bg-white rounded-2xl overflow-hidden'>
                          <img
                            src='https://s.pinimg.com/webapp/future-home1-796541ba.png'
                            alt='Interior 1'
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='w-20 h-16 bg-white rounded-2xl overflow-hidden'>
                          <img
                            src='https://s.pinimg.com/webapp/future-home2-1fb36304.png'
                            alt='Interior 2'
                            className='w-full h-full object-cover'
                          />
                        </div>
                        <div className='w-20 h-16 bg-white rounded-2xl overflow-hidden'>
                          <img
                            src='https://s.pinimg.com/webapp/future-home3-865bc67f.png'
                            alt='Interior 3'
                            className='w-full h-full object-cover'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Right */}
                <div className='relative'>
                  <div className='rounded-3xl overflow-hidden bg-gray-200 h-44'>
                    <img
                      src='https://s.pinimg.com/webapp/scandinavian-bedroom-0fe87b61.png'
                      alt='Scandinavian bedroom'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <h3 className='text-xl font-bold text-white text-center'>
                        My
                        <br />
                        Scandinavian
                        <br />
                        bedroom
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Bottom Right */}
                <div className='relative'>
                  <div className='rounded-3xl overflow-hidden bg-gray-200 h-44'>
                    <img
                      src='https://s.pinimg.com/webapp/deck-of-dreams-a480821d.png'
                      alt='Deck'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <h3 className='text-xl font-bold text-white text-center'>
                        The deck of
                        <br />
                        my dreams
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Bottom Image */}
                <div className='col-span-2 md:col-span-1 mt-4 md:mt-0 relative'>
                  <div className='rounded-3xl overflow-hidden bg-gray-200 h-44'>
                    <img
                      src='https://s.pinimg.com/webapp/serve-my-drinks-aa067901.png'
                      alt='Orange pitcher'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <h3 className='text-xl font-bold text-white text-center'>
                        Serve my
                        <br />
                        drinks in style
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Extra Bottom Right Image */}
                <div className='hidden md:block relative'>
                  <div className='rounded-3xl overflow-hidden bg-gray-200 h-44'>
                    <img
                      src='https://s.pinimg.com/webapp/bathroom-upgrade-ad23a104.png'
                      alt='Mirror bathroom'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <h3 className='text-xl font-bold text-white text-center'>
                        Our dream
                        <br />
                        bathroom
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SaveIdeas;
