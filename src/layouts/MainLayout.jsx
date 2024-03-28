import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import { createContext, useState } from 'react';
export const SaveDataContextRead = createContext();
export const SaveDataContextWish = createContext();

const MainLayout = () => {
  const [singleReadData, setSingleReadData] = useState({});
  const [singleWishData, setSingleWishData] = useState({});
  return (
    <SaveDataContextRead.Provider value={[singleReadData, setSingleReadData]}>
      <SaveDataContextWish.Provider value={[singleWishData, setSingleWishData]}>
        <div>
          <Nav />
          <div>
            <Outlet />
          </div>
        </div>
      </SaveDataContextWish.Provider>
    </SaveDataContextRead.Provider>
  );
};
export default MainLayout;
