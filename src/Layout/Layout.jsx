import { Outlet } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';

const Layout = () => {
  return (
    <div className="flex gap-8">
          <Sidebar />
          <Outlet/>
    </div>
  );
}

export default Layout