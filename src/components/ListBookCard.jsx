import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlinePeopleOutline } from 'react-icons/md';
import { MdOutlineRequestPage } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ListBookCard = ({ item }) => {
  const {
    bookId,
    tags,
    author,
    rating,
    bookName,
    image,
    category,
    yearOfPublishing,
    publisher,
    totalPages,
  } = item;
  return (
    <div>
      <div className='card flex-col lg:flex-row card-side bg-base-100 border-2'>
        <figure>
          <img
            src={image}
            className='p-5  h-[300px] w-[200px] lg:w-[200px] lg:h-[200px] rounded-2xl'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title '>{bookName}</h2>
          <p className='text-sm font-bold'>By: {author}</p>
          <div className='lg:flex gap-10 '>
            <h1 className='text-sm font-bold'>Tag :</h1>
            {tags?.map((tag, id) => (
              <div key={id}>
                <h2 className='bg-gray-200 p-1 rounded-xl text-[#23BE0A] text-sm font-bold '>
                  # {tag}
                </h2>
              </div>
            ))}{' '}
            <h1 className='text-[#131313] text-sm font-semibold flex items-center gap-4'>
              {' '}
              <h1 className='flex items-center gap-1'>
                {' '}
                <FaLocationDot /> Year of Publishing:
              </h1>
              {yearOfPublishing}
            </h1>
          </div>
          <div className='flex gap-10'>
            <h1 className='text-[#131313] text-sm font-semibold flex items-center gap-4'>
              <h1 className='flex items-center gap-1'>
                <MdOutlinePeopleOutline />
                Publisher:
              </h1>
              {publisher}
            </h1>
            <h1 className='text-[#131313] text-sm font-semibold flex items-center gap-4'>
              <h1 className='flex items-center gap-1'>
                <MdOutlineRequestPage />
                Page
              </h1>
              {totalPages}
            </h1>
          </div>
          <hr />
          <div className='card-actions '>
            <div className='bg-gray-300 rounded-3xl font-bold'>
              <p href='' className='p-2  text-[#328EFF]'>
                Category: {category}
              </p>
            </div>
            <div className='bg-gray-300 rounded-3xl font-bold'>
              <p href='' className='p-2  text-[#FFAC33]'>
                Rating: {rating}
              </p>
            </div>

            <Link to={`/bookDetails/${bookId}`}>
              <button className='p-2 rounded-3xl bg-[#23BE0A] text-white font-bold'>
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListBookCard;
