import { useParams } from 'react-router-dom';
import useBookData from '../Hooks/useBookData';
import { useContext, useEffect } from 'react';
import { saveToLocalStorage } from '../utils/localStorage';
import { saveToLocalWishStorage } from '../utils/localWishListStorage';
import {
  SaveDataContextRead,
  SaveDataContextWish,
} from '../layouts/MainLayout';
import toast from 'react-hot-toast';

const Book = () => {
  const [singleReadData, setSingleReadData] = useContext(SaveDataContextRead);
  const [singleWishData, setSingleWishData] = useContext(SaveDataContextWish);
  console.log(singleReadData);
  console.log(singleWishData);
  const { bookId } = useParams();
  const { data } = useBookData();
  // console.log(data);
  // const { localData } = useLocalStorage();

  const handleWishList = (datas) => {
    const readBook = singleWishData.find((book) => book.bookId == datas.bookId);
    saveToLocalWishStorage(singleWishData);
    console.log(readBook);
    if (readBook) {
      toast.success('already added');
    } else {
      const selectedBook = [...singleWishData, data];
      setSingleWishData(selectedBook);
    }
  };

  const handleReadBook = (datas) => {
    saveToLocalStorage(singleReadData);
    const readBook = singleReadData.find((book) => book.bookId == datas.bookId);
    console.log(readBook);
    if (readBook) {
      toast.success('already added');
    } else {
      const selectedBook = [...singleReadData, data];
      setSingleReadData(selectedBook);
    }
  };

  useEffect(() => {
    const singleBook = data.find((book) => book.bookId === +bookId);

    setSingleReadData(singleBook);
  }, [data, bookId]);

  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = singleReadData || {};
  return (
    <div className='flex flex-col lg:flex-row container mx-auto justify-around mt-14 border'>
      <div className='flex  justify-center items-center '>
        <img className=' h-[450px] w-[300px] ml-32' src={image} alt='' />
      </div>
      <div>
        <div className='space-y-2 border-b-2 pb-4'>
          <h3 className='font-bold text-3xl'>{bookName}</h3>
          <p>By : {author}</p>
        </div>
        <p className='border-b-2 pt-4 pb-4'>{category}</p>
        <div className='pt-4 pb-4 space-y-9 border-b-2'>
          {' '}
          <p>
            <span className='font-bold'>Review : </span>
            {review}
          </p>
          <div className='flex gap-5'>
            <span className='text-black font-semibold '>tag</span>
            {tags?.map((tag) => (
              <p className='text-green-500' key={tag}>
                #{tag}
              </p>
            ))}
          </div>
        </div>
        <div className='flex gap-10 mt-4 mb-6'>
          <div className='space-y-2 text-gray-500'>
            <div>Number of Pages:</div>
            <div>Publisher:</div>
            <div>Year of Publishing:</div>
            <div>Rating:</div>
          </div>
          <div className='space-y-2 font-semibold'>
            <div>{totalPages}</div>
            <div>{publisher}</div>
            <div>{yearOfPublishing}</div>
            <div>{rating}</div>
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={handleReadBook}
            className='btn border border-gray-400'
          >
            Read
          </button>
          <button
            onClick={handleWishList}
            className='btn bg-[#50B1C9] text-white'
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
export default Book;

// const readBookUnic = singleReadData?.find(
//   (book) => book.bookId == data.bookId
// );
// const readWishBook = singleWishData?.find(
//   (book) => book.bookId == data.bookId
// );
// if (!readBookUnic) {
//   if (!readWishBook) {
//     const selectedBook = [...singleWishData, data];
//     setSingleWishData(selectedBook);
//     toast.success('added to wishlist');
//   } else {
//     toast.error('already exist');
//   }
// } else {
//   toast.error('cant be added on wish');
// }
