import { useEffect, useState } from 'react';
// import { getFromLocalWishStorage } from '../utils/localWishListStorage';
const useWishListLocalStorage = () => {
  const [wishListlocalData, setWishListLocalData] = useState([]);

  useEffect(() => {
    // setWishListLocalData(getFromclearLocalWishStorage);
  }, []);

  return { wishListlocalData };
};
export default useWishListLocalStorage;
