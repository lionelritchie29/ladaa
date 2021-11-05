import React, { useState } from 'react';
import { If, Then } from 'react-if';
import { Link } from 'react-router-dom';
import { LocalStorageService } from '../services/storage/LocalStorageService';

const Navbar = () => {
  const [showProfilePopUpMenu, setShowProfilePopUpMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className='bg-green-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex items-center px-2 lg:px-0'>
            <div className='flex-shrink-0'>
              <Link to='/'>
                <h1 className='text-white font-bold text-xl'>LADAA</h1>
              </Link>
            </div>
            <div className='hidden lg:block lg:ml-6'>
              <div className='flex space-x-4'>
                <Link
                  to='/'
                  href='#'
                  className='bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Home
                </Link>
                <Link
                  to='/saved-recipes'
                  className='text-gray-100 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Saved Recipe
                </Link>
                <Link
                  to='/meal-plan'
                  className='text-gray-100 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Meal Plan
                </Link>
                <Link
                  to='/auth/login'
                  className='text-gray-100 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Login
                </Link>
                <Link
                  to='/auth/register'
                  className='text-gray-100 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Register
                </Link>
              </div>
            </div>
          </div>
          <div className='flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end'>
            <div className='max-w-lg w-full lg:max-w-xs'>
              <label className='sr-only'>Search</label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-100'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'>
                    <path
                      fill-rule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </div>
                <input
                  id='search'
                  name='search'
                  className='block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-green-700 text-gray-100 placeholder-gray-100 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm'
                  placeholder='Search'
                  type='search'
                />
              </div>
            </div>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-700'
              aria-controls='mobile-menu'
              aria-expanded='false'
              onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='hidden lg:block lg:ml-4'>
            <div className='flex items-center'>
              {/* <!-- Profile dropdown --> */}
              <div className='ml-4 relative flex-shrink-0'>
                <div>
                  <button
                    type='button'
                    className='bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-green'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={() =>
                      setShowProfilePopUpMenu(!showProfilePopUpMenu)
                    }>
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=nkXPoOrIl0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>

                <If condition={showProfilePopUpMenu}>
                  <Then>
                    <div
                      className='z-50 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu-button'
                      tabIndex={-1}>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        tabIndex={-1}
                        id='user-menu-item-2'>
                        Sign out
                      </a>
                    </div>
                  </Then>
                </If>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <If condition={showMobileMenu}>
        <Then>
          <div className='lg:hidden' id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              <Link
                to='/'
                href='#'
                className='bg-green-900 text-white block px-3 py-2 rounded-md text-base font-medium'>
                Home
              </Link>
              <Link
                to='/saved-recipes'
                className='text-gray-100 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Saved Recipes
              </Link>
              <Link
                to='/meal-plan'
                className='text-gray-100 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Meal Plan
              </Link>
              <Link
                to='/auth/login'
                className='text-gray-100 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Login
              </Link>
              <Link
                to='/auth/register'
                className='text-gray-100 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                Register
              </Link>
            </div>
            <div className='pt-4 pb-3 border-t border-green-700'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=nkXPoOrIl0&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-white'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium text-gray-400'>
                    tom@example.com
                  </div>
                </div>
                <button className='ml-auto flex-shrink-0 bg-green-800 p-1 rounded-full text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                  <span className='sr-only'>View notifications</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                    />
                  </svg>
                </button>
              </div>
              <div className='mt-3 px-2 space-y-1'>
                <a
                  href='#'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-green-700'>
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </Then>
      </If>
    </nav>
  );
};

export default Navbar;
