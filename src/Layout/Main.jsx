import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';

const Main = () => {
  return (
    <div>
      <div style={{ width: '1440px' }} className="mx-auto">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
