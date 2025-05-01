import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='flex justify-center items-center gap-4 py-2 mt-5 bg-white shadow-md'>
        <p className='text-base text-gray-800'>
          © 2025 Pinterest Clone by{' '}
          <a
            className='text-blue-500 hover:text-blue-700'
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
