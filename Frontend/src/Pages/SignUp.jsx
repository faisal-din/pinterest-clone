import React from 'react';

const SignUp = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-amber-100 overflow-auto py-8'>
      <div className='relative w-full max-w-md flex flex-col gap-4 py-8 px-10 bg-white rounded-2xl shadow-md mx-4'>
        {/* Header */}
        <div className='flex flex-col items-center gap-3'>
          <i className='fa-brands fa-pinterest text-red-600 text-5xl'></i>
          <h1 className='text-3xl font-bold text-gray-800 text-center'>
            Welcome to Pinterest
          </h1>
          <p className='text-xl text-gray-800 text-center'>
            Find new ideas to try
          </p>
        </div>

        {/* Signup Form */}
        <form className='flex flex-col gap-4 mt-6'>
          <input
            type='text'
            placeholder='Full Name'
            className='py-3 px-4 rounded-lg bg-gray-100 text-base focus:outline-none ring-2 ring-gray-300 focus:ring-blue-300'
          />
          <input
            type='email'
            placeholder='Email'
            className='py-3 px-4 rounded-lg bg-gray-100 text-base focus:outline-none ring-2 ring-gray-300 focus:ring-blue-300'
          />
          <input
            type='password'
            placeholder='Password'
            className='py-3 px-4 rounded-lg bg-gray-100 text-base focus:outline-none ring-2 ring-gray-300 focus:ring-blue-300'
          />
          <button className='py-3 rounded-full bg-red-600 text-white text-lg font-semibold hover:bg-red-700 transition-all cursor-pointer'>
            Sign up
          </button>
        </form>

        {/* Divider */}
        <div className='flex items-center justify-center gap-4 my-4'>
          <hr className='w-1/3 border-gray-300' />
          <p className='text-lg font-semibold text-gray-600'>OR</p>
          <hr className='w-1/3 border-gray-300' />
        </div>

        {/* Social Login Buttons */}
        <div className='flex flex-col gap-4'>
          <button className='flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all'>
            <i className='fa-brands fa-google text-xl'></i>
            <p className='font-semibold'>Continue with Google</p>
          </button>
        </div>

        <p className='text-center text-gray-600 text-xs mt-4'>
          By continuing, you agree to Pinterest's Terms of Service and
          acknowledge you've read our Privacy Policy. Notice at collection.
        </p>

        <button className='mt-2'>
          <p className='text-center text-gray-600 text-sm font-semibold'>
            Already a member?{' '}
            <a href='/login' className='text-blue-600'>
              Log in
            </a>
          </p>
        </button>

        <div className='absolute top-7 right-7'>
          <i className='fa-solid fa-times text-2xl text-gray-800 cursor-pointer'></i>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
