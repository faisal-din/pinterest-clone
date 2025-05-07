import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className=' py-2 px-2 mt-4 bg-white shadow-md'>
        <p className='text-base text-gray-800 text-center'>
          © 2025 Pinterest Clone by{' '}
          <a
            className='text-blue-500 hover:text-blue-700 font-medium'
            href='https://github.com/faisal-din'
          >
            Faisal Din
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
