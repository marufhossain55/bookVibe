import { useLoaderData, useParams } from 'react-router-dom';

import toast from 'react-hot-toast';
import { getStoredBooks, saveBooks } from '../utils/localStorage';
import { saveBook } from '../utils/localWishListStorage';

const Book = () => {
  const bookLoader = useLoaderData();
  const { bookId } = useParams();
  // const [singleReadData, setSingleReadData] = useContext(SaveDataContextRead);
  // const [singleWishData, setSingleWishData] = useContext(SaveDataContextWish);

  // const { data } = useBookData();

  // // const { localData } = useLocalStorage();

  // const handleWishList = (data) => {
  //   const readBook = singleWishData.find((book) => book.bookId == data.bookId);
  //   // saveToLocalWishStorage(singleWishData);
  //   console.log(readBook);
  //   if (readBook) {
  //     toast.success('already added');
  //   } else {
  //     const selectedBook = [...singleWishData, data];
  //     setSingleWishData(selectedBook);
  //   }
  // };

  // const handleReadBook = (data) => {
  //   // saveToLocalStorage(singleReadData);
  //   const readBook = singleReadData?.find((book) => book.bookId == data.bookId);
  //   console.log(readBook);
  //   if (readBook) {
  //     toast.success('already added');
  //   } else {
  //     const selectedBook = [...singleReadData, data];
  //     setSingleReadData(selectedBook);
  //   }
  //   saveReadBooks(singleReadData);
  // };

  // useEffect(() => {
  //   const singleBook = data.find((book) => book.bookId === +bookId);

  //   setSingleReadData(singleBook);
  // }, [data, bookId]);

  const singleBook = bookLoader.find((book) => book.bookId == bookId);

  const handleClick = (singleBook) => {
    const bookStore = getStoredBooks();
    const isExists = bookStore.find(
      (books) => books.bookId == singleBook.bookId
    );
    console.log(bookStore);
    if (!isExists) {
      saveBooks(singleBook);

      toast.success('Read Data Saved ');
    } else {
      toast.error('Already Added');
    }
  };
  const handleWishListBtn = (singleBook) => {
    const saveData = getStoredBooks();
    const bookAll = getStoredBooks();
    const bookExist = bookAll.find((data) => data.bookId == singleBook.bookId);
    const singleData = saveData.find(
      (data) => data.bookId == singleBook.bookId
    );
    if (bookExist) {
      toast.error('Already exist');
    } else if (!singleData) {
      saveBook(singleBook);
      toast.success('wishlist saved');
    } else {
      toast.error(' Wishlist exist');
    }
  };

  // const {
  //   bookName,
  //   image,
  //   author,
  //   category,
  //   review,
  //   tags,
  //   totalPages,
  //   publisher,
  //   yearOfPublishing,
  //   rating,
  // } = singleReadData || {};
  return (
    <div className='flex flex-col lg:flex-row container mx-auto justify-around mt-4 lg:mt-14 border px-4'>
      <div className='flex  justify-center items-center '>
        <img
          className=' h-[450px] w-[300px]  lg:ml-32'
          src={singleBook.image}
          alt=''
        />
      </div>
      <div>
        <div className='space-y-2 border-b-2 pb-4'>
          <h3 className='font-bold text-3xl'>{singleBook.bookName}</h3>
          <p>By : {singleBook.author}</p>
        </div>
        <p className='border-b-2 pt-4 pb-4'>{singleBook.category}</p>
        <div className='pt-4 pb-4 space-y-9 border-b-2'>
          {' '}
          <p>
            <span className='font-bold'>Review : </span>
            {singleBook.review}
          </p>
          <div className='flex gap-5'>
            <span className='text-black font-semibold '>tag</span>
            {singleBook.tags?.map((tag) => (
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
            <div>{singleBook.totalPages}</div>
            <div>{singleBook.publisher}</div>
            <div>{singleBook.yearOfPublishing}</div>
            <div>{singleBook.rating}</div>
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={() => handleClick(singleBook)}
            className='btn border border-gray-400'
          >
            Read
          </button>
          <button
            onClick={() => handleWishListBtn(singleBook)}
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
