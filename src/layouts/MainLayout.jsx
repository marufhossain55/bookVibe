import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import { createContext, useState } from 'react';
export const SaveDataContextRead = createContext();

const MainLayout = () => {
  const [singleReadData, setSingleReadData] = useState({});
  return (
    <SaveDataContextRead.Provider value={[singleReadData, setSingleReadData]}>
      <div>
        <Nav />
        <div>
          <Outlet />
        </div>
      </div>
    </SaveDataContextRead.Provider>
  );
};
export default MainLayout;
