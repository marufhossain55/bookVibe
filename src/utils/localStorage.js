export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem('book') || []);
  const existedData = savedData.find((item) => item.id == data.id);

  if (!existedData) {
    savedData.push(data);
    localStorage.setItem('book', JSON.stringify(savedData));
    alert('added succesfully');
  } else {
    alert('already added');
  }
};

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('book') || []);
  return data;
};
