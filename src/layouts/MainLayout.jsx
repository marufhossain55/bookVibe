import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
