import { FaRegStar } from 'react-icons/fa';
const BookCard = ({ books }) => {
  const { bookName, category, rating, author, tags, image } = books;
  console.log(books);
  return (
    <div className='w-[400px] h-[520px]  shadow-md dark:bg-gray-50 dark:text-gray-900 border rounded-lg '>
      <div className='flex  justify-center'>
        {' '}
        <img
          src={image}
          alt=''
          className='object-cover object-center rounded-md h-[300px] dark:bg-gray-500'
        />
      </div>
      <div className='mt-6 mb-2 mx-6'>
        <span className=' text-xs font-medium tracking-widest dark:text-violet-600 flex gap-3 text-green-400 mb-2'>
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </span>
        <h2 className='text-xl font-semibold tracking-wide'>{bookName}</h2>
      </div>
      <p className='border-b-2 border-dotted mx-6 pb-6'>By : {author}</p>
      <div className='flex justify-between px-6 pt-4'>
        <p>{category}</p>
        <p className='flex items-center gap-3'>
          {rating}
          <FaRegStar />
        </p>
      </div>
    </div>
  );
};
export default BookCard;
