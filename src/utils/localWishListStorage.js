// import toast from 'react-hot-toast';
// export const saveToLocalWishStorage = (data) => {
//   const savedData = JSON.parse(localStorage.getItem('wishListbook')) || [];
//   const existedData = savedData.find((item) => item.bookId == data.bookId);
//   if (!existedData) {
//     savedData.push(data);
//     localStorage.setItem('wishListbook', JSON.stringify(savedData));
//     toast.success('added succesfully');
//   } else {
//     toast.error('already added');
//   }
// };

// export const getFromLocalWishStorage = () => {
//   const data = JSON.parse(localStorage.getItem('wishListbook')) || [];
//   return data;
// };

///////////////////////////////////////
const getStoredBook = () => {
  const storedBooks = localStorage.getItem('WishBook');
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveBook = (id) => {
  const storedBookss = getStoredBook();
  const exist = storedBookss.find((bookId) => bookId.bookId == id.bookId);
  if (!exist) {
    storedBookss.push(id);
    localStorage.setItem('WishBook', JSON.stringify(storedBookss));
  }
};

export { getStoredBook, saveBook };
