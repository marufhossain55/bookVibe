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
const saveToReadBookStorage = () => {
  const readBooks = localStorage.getItem('readBook');
  if (readBooks) {
    return JSON.parse(readBooks);
  } else {
    return [];
  }
};
const saveReadData = (readData) => {
  const saveIt = saveToReadBookStorage();
  const isExist = saveIt.find((itemId) => itemId.bookId === +readData.bookId);

  if (!isExist) {
    saveIt.push(readData);
    localStorage.setItem('readBook', JSON.stringify(saveIt));
  }
};
export { saveReadData, saveToReadBookStorage };
