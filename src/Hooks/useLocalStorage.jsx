import { useEffect, useState } from 'react';

const useLocalStorage = () => {
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    // setLocalData(getFromLocalStorage);
  }, []);

  return { localData };
};
export default useLocalStorage;
