import toast from 'react-hot-toast';
// export const saveToLocalStorage = (data) => {
//   const savedData = JSON.parse(localStorage.getItem('book')) || [];
//   const existedData = savedData.find((item) => item.bookId == data.bookId);
//   if (!existedData) {
//     savedData.push(data);
//     localStorage.setItem('book', JSON.stringify(savedData));
//     toast.success('added succesfully');
//   } else {
//     toast.error('already added');
//   }
// };

// export const getFromLocalStorage = () => {
//   const data = JSON.parse(localStorage.getItem('book')) || [];
//   return data;
// };

//////////////////////////////////////////////////////
// export const getReadBooks = () => {
//   let readBooks = [];
//   const storedBooks = localStorage.getItem('book');
//   if (storedBooks) {
//     readBooks = JSON.parse(storedBooks);

//     return readBooks;
//   }
// };

// // save

// export const saveReadBooks = (books) => {
//   let readBooks = getReadBooks();
//   console.log(readBooks);
//   const isExist = readBooks.find((b) => b.bookId === readBooks.bookId);
//   if (isExist) {
//     return toast.error('Already added');
//   }
//   readBooks.push(books);
//   localStorage.setItem('book', JSON.stringify(readBooks));
//   toast.success('Added successfully');
// };
/////////////////////////////////////////////////////
// const getDataBooks = () => {
//   const shopBook = localStorage.getItem('Books');
//   if (shopBook) {
//     return JSON.parse(shopBook);
//   }
//   return [];
// };

// const saveBooks = (newBook) => {
//   const storedBooks = getDataBooks();
//   console.log(newBook);
//   const exist = storedBooks.find((book) => book.bookId == newBook.bookId);
//   console.log(exist);
//   if (!exist) {
//     const newStoreBooks = [...storedBooks, newBook];
//     localStorage.setItem('Books', JSON.stringify(newStoreBooks));
//   } else {
//     toast.error('Already Data Added Read Book!');
//   }
// };

// export { getDataBooks, saveBooks };

/////////////////////////////

const getStoredBooks = () => {
  const storedBook = localStorage.getItem('Books');
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveBooks = (id) => {
  const storedBooks = getStoredBooks();
  const exist = storedBooks.find((bookId) => bookId.bookId == id.bookId);
  if (!exist) {
    storedBooks.push(id);
    localStorage.setItem('Books', JSON.stringify(storedBooks));
  }
};

export { getStoredBooks, saveBooks };
