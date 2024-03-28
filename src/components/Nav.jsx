import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navbar bg-base-100 container mx-auto mt-6 mb-10'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <NavLink to='/'>
              <a>Home</a>
            </NavLink>
            <li>
              <a>Listed Books</a>
            </li>
            <li>
              <a>Pages to Read</a>
            </li>
          </ul>
        </div>
        <NavLink to='/'>
          <a className='btn btn-ghost text-base lg:text-3xl font-bold text-green-500 border-green-500 bg-[#E6F7FF]'>
            Book Vibe
          </a>
        </NavLink>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 flex gap-8 items-center justify-center'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'font-bold border hover:bg-green-500 hover:text-white p-3 rounded-lg text-green-500 border-green-500'
                : 'font-bold  hover:border border-black p-3 rounded-lg'
            }
          >
            <a className=' hover:border-black'>Home</a>
          </NavLink>
          <NavLink
            to='/listedBooks'
            className={({ isActive }) =>
              isActive
                ? 'font-bold border hover:bg-green-500 hover:text-white p-3 rounded-lg text-green-500 border-green-500'
                : 'font-bold  hover:border border-black p-3 rounded-lg '
            }
          >
            <a className=' hover:border-black'>Listed Books</a>
          </NavLink>
          <NavLink
            to='/pagesToRead'
            className={({ isActive }) =>
              isActive
                ? 'font-bold border hover:bg-green-500 hover:text-white p-3 rounded-lg text-green-500 border-green-500'
                : 'font-bold  hover:text-green-500 hover:border border-black p-3 rounded-lg'
            }
          >
            <a>Pages to Read</a>
          </NavLink>
          <NavLink
            to='/newlyArived'
            className={({ isActive }) =>
              isActive
                ? 'font-bold border hover:bg-green-500 hover:text-white p-3 rounded-lg text-green-500 border-green-500'
                : 'font-bold hover:text-green-500 hover:border border-black p-3 rounded-lg'
            }
          >
            <a>Newly Arived</a>
          </NavLink>
          <NavLink
            to='/trandingBook'
            className={({ isActive }) =>
              isActive
                ? 'font-bold border hover:bg-green-500 hover:text-white p-3 rounded-lg text-green-500 border-green-500'
                : 'font-bold  hover:text-green-500 hover:border border-black p-3 rounded-lg'
            }
          >
            <a>Tranding books</a>
          </NavLink>
        </ul>
      </div>
      <div className='navbar-end space-x-3'>
        <a className='btn bg-[#23BE0A] text-white'>Sign In</a>
        <a className='btn bg-[#59C6D2] text-white'>Sign Up</a>
      </div>
    </div>
  );
};
export default Nav;
