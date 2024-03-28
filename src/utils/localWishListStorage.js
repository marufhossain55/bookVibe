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

const getLD = () => {
  const taken = localStorage.getItem('wishListbook');
  if (taken) {
    return JSON.parse(taken);
  } else {
    return [];
  }
};
const saveLData = (data) => {
  const saveIt = getLD();
  const isExist = saveIt.find((itemId) => itemId.bookId === +data.bookId);

  if (!isExist) {
    saveIt.push(data);
    localStorage.setItem('listBook', JSON.stringify(saveIt));
  }
};
