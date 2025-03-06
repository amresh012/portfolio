import { Outlet } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';

const Layout = () => {
  return (
    <>
    <div className="flex w-full ">
     <div className="fixed h-screen ">
     <Sidebar />
     </div>
     <div className="ml-[20rem] ">
      <Outlet/>
     </div>
    </div>
    </>
  );
}

export default Layout