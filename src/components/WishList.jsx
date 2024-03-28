import { FaLocationDot } from 'react-icons/fa6';
import { RiFilePaper2Line } from 'react-icons/ri';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import useWishListLocalStorage from '../Hooks/useWishListLocalStorage';

const WishList = () => {
  const { wishListlocalData } = useWishListLocalStorage();
  console.log(wishListlocalData);
  return (
    <div>
      {wishListlocalData?.map((item) => (
        <div key={item.bookId}>
          <div className='card gap-9 card-side bg-base-100 shadow-xl'>
            <figure>
              <img
                className='h-[200px] w-[150px]'
                src={item.image}
                alt='Movie'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{item.bookName}</h2>
              <p>By : {item.author}</p>
              <div className='flex gap-4'>
                <div className='flex gap-3'>
                  <span className='font-semibold'>tag :</span>
                  {item.tags?.map((tag) => (
                    <div key={tag}>
                      <p key={tag} className='text-green-500'>
                        #{tag}
                      </p>
                    </div>
                  ))}
                </div>
                <div className='flex items-center gap-2'>
                  {' '}
                  <FaLocationDot /> Year of Publishing : {item.yearOfPublishing}
                </div>
              </div>
              <div className='flex gap-4 pb-4 border-b-2'>
                <div className='flex items-center gap-2'>
                  <MdOutlinePeopleAlt /> publisher : {item.publisher}
                </div>
                <div className='flex items-center gap-2'>
                  <RiFilePaper2Line /> Pages : {item.totalPages}
                </div>
              </div>
              <div className='flex items-center gap-2 pt-2'>
                <div className='bg-[#328eff8c] rounded-3xl p-2 px-2 text-[#328EFF] text-sm'>
                  Category : {item.category}
                </div>
                <div className='bg-[#FFAC338c] rounded-3xl p-2 px-2 text-[#FFAC33] text-sm'>
                  Rating : {item.rating}
                </div>
                <div className='bg-green-600 rounded-3xl p-2 px-2 text-white text-sm'>
                  View Details
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default WishList;
