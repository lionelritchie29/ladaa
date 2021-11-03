import React from 'react';

const Register = () => {
  return (
    <div className='w-11/12 md:w-3/4 mx-auto my-16 rounded-lg overflow-hidden'>
      <div
        className='bg-green-700 text-white flex shadow-xl'
        style={{ minHeight: '75vh' }}>
        <div className='flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-6 text-3xl font-extrabold text-white'>
                Create a new Account
              </h2>
            </div>

            <div className='mt-8'>
              <div className='mt-6'>
                <form action='#' method='POST' className='space-y-6'>
                  <div>
                    <label className='block text-sm font-medium text-white'>
                      Username
                    </label>
                    <div className='mt-1'>
                      <input
                        id='username'
                        type='text'
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-white'>
                      Email address
                    </label>
                    <div className='mt-1'>
                      <input
                        id='email'
                        type='email'
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label className='block text-sm font-medium text-white'>
                      Password
                    </label>
                    <div className='mt-1'>
                      <input
                        id='password'
                        type='password'
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <label className='block text-sm font-medium text-white'>
                      Confirm Password
                    </label>
                    <div className='mt-1'>
                      <input
                        id='conf_password'
                        type='password'
                        required
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember_me'
                        name='remember_me'
                        type='checkbox'
                        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                      />
                      <label className='ml-2 block text-sm text-white'>
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-green-800 hover:bg-green-600 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block relative w-0 flex-1'>
          <div>
            <img
              className='absolute inset-0 h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'
              alt=''
            />
          </div>
          <div
            className='absolute top-0 left-0 h-full w-full'
            style={{ backgroundColor: 'rgba(6, 95, 70, 0.5)' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
