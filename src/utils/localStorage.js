import toast from 'react-hot-toast';
export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem('book')) || [];
  const existedData = savedData.find((item) => item.bookId == data.bookId);
  if (!existedData) {
    savedData.push(data);
    localStorage.setItem('book', JSON.stringify(savedData));
    toast.success('added succesfully');
  } else {
    toast.error('already added');
  }
};

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('book')) || [];
  return data;
};
