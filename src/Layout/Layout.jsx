import { Outlet } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';

const Layout = () => {
  return (
    <>
    <div className="flex w-full ">
     <div className="">
     <Sidebar />
     </div>
     <Outlet/>
    </div>
    </>
  );
}

export default Layout