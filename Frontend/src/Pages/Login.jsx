import React from 'react';

const Login = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-amber-100  '>
      <div className='w-[450px] flex flex-col  gap-4 py-8 px-10 bg-white rounded-md shadow-md'>
        {/* Header */}
        <div className='flex flex-col items-center gap-3'>
          <i className='fa-brands fa-pinterest text-[#E60023] text-5xl'></i>
          <h1 className='text-3xl font-bold text-gray-800 text-center'>
            Welcome to Pinterest
          </h1>
        </div>

        {/* Login Form */}
        <form className='flex flex-col gap-4 mt-6'>
          <input
            type='email'
            placeholder='Email'
            className='py-3 px-4 rounded-lg bg-[#E8F0FE] text-base focus:outline-none ring-2 ring-gray-300 focus:ring-blue-300'
          />
          <input
            type='password'
            placeholder='Password'
            className='py-3 px-4 rounded-lg bg-[#E8F0FE] text-base focus:outline-none ring-2 ring-gray-300 focus:ring-blue-300'
          />
          <button className='py-3 rounded-full bg-red-600 text-white text-lg font-semibold hover:bg-red-700 transition-all cursor-pointer'>
            Log in
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
          <button className='flex items-center justify-center gap-3 bg-blue-600 text-white rounded-full px-4 py-3 cursor-pointer hover:bg-blue-700 transition-all'>
            <i className='fa-brands fa-facebook text-xl'></i>
            <p className='font-semibold'>Continue with Facebook</p>
          </button>

          <button className='flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-full px-4 py-3 cursor-pointer hover:bg-gray-100 transition-all'>
            <i className='fa-brands fa-google text-xl'></i>
            <p className='font-semibold'>Continue with Google</p>
          </button>
        </div>

        <p className='text-center text-gray-600 text-xs'>
          By continuing, you agree to Pinterest's Terms of Service and
          acknowledge you've read our Privacy Policy. Notice at collection.
        </p>

        <button>
          <p className='text-center text-gray-600 text-sm font-semibold'>
            Not on Pinterest yet?{' '}
            <a href='/signup' className='text-blue-600'>
              Sign up
            </a>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Login;
