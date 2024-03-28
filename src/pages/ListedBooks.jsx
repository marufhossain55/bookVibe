import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className='container mx-auto mt-10'>
      <h1 className='text-center text-4xl font-bold'>Books</h1>
      {/* <div className='text-center mt-6 p-4'>
        <select
          name='books'
          id='books'
          className='bg-green-500 p-3  text-white font-bold rounded'
        >
          <option>Sort by</option>
          <option value='rating'>Rating</option>
          <option value='numberOfPages'>Number of pages</option>
          <option value='publishYear'>Publish Year</option>
        </select>
      </div> */}
      <div className='dropdown flex justify-center items-center mt-10 mb-8'>
        <div
          tabIndex={0}
          role='button'
          className='btn m-1 bg-green-600 text-white'
        >
          Sort by
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number of pages</a>
          </li>
          <li>
            <a>Publish Year</a>
          </li>
        </ul>
      </div>
      <div>
        <div className='flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800'>
          <Link
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? 'border border-b-0' : 'border-b'
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
            to='wishlist'
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? 'border border-b-0' : 'border-b'
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-4 h-4'
            >
              <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
              <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
            </svg>
            <span>Wishlist Books</span>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default ListedBooks;
