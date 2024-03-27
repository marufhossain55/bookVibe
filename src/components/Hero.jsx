import { NavLink } from 'react-router-dom';
import img1 from '../assets/pngwing.png';
const Hero = () => {
  return (
    <section className='dark:bg-gray-100 dark:text-gray-800 container mx-auto'>
      <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around'>
        <div className='flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left'>
          <h1 className='text-5xl font-bold leading-none sm:text-6xl'>
            Books to freshen up your bookshelf
          </h1>

          <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-8'>
            <NavLink to='/listedBooks'>
              {' '}
              <button className='btn bg-[#23BE0A] text-white'>
                View The List
              </button>
            </NavLink>
          </div>
        </div>
        <div className='flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'>
          <img
            src={img1}
            alt=''
            className='object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128'
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
