import { Avatar, Badge } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { FiSidebar } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoStack } from "react-icons/go";
import { TbSmartHome } from "react-icons/tb";
import { BsFolder } from "react-icons/bs";
import { RiBloggerLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiShare1 } from "react-icons/ci";
import { TbBrandLeetcode } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";

const menu = [
  {
    id: 0,
    name: "Home",
    icon: <TbSmartHome size={20} />,
  },
  {
    id: 1,
    name: "Project",
    icon: <BsFolder size={20} />,
  },
  {
    id: 2,
    name: "Blogs",
    icon: <RiBloggerLine size={20} />,
  },
  {
    id: 2,
    name: "Extras",
    icon: <GoStack size={20} />,
  },
];

const media = [
  {
    id: 0,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/a-m-r-e-s-h/",
    icon: SlSocialLinkedin,
  },
  {
    id: 0,
    name: "Github",
    url: "https://github.com/amresh012",
    icon: LuGithub,
  },
  {
    id: 0,
    name: "LeetCode",
    url: "https://leetcode.com/u/_amresh001_/",
    icon: TbBrandLeetcode,
  },
  {
    id: 0,
    name: "Twitter",
    url: "https://x.com/AmreshM86385906",
    icon: FaXTwitter,
  },
];


const Sidebar = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div
      className={`flex flex-col relative justify-between  ${
        isOpen ? "w-[15rem]" : "w-20"
      } h-screen bg-gray-100 py-4  transition-width duration-300 border-r`}
    >
      <div className="">
        <div className="parent flex items-center justify-around gap-2 ">
          {isOpen ? (
            <div className="flex items-center justify-evenly gap-2 hover:bg-gray-200 p-2 rounded-lg">
              <div className="flex items-center justify-center bg-gray-200 roundedl-lg w-full p-3 rounded-lg">
                <img src="/public/letter-a.png" alt="" className="w-6" />
                <img src="/public/letter-m.png" alt="" className="w-6" />
              </div>
              <div className="">
                <h1 className="text-lg font-bold">Amresh Mishra</h1>
                <p className="text-[11px] break-words">
                  amreshmishra67099@gmail.com
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center justify-center hover:bg-gray-200 roundedl-lg w-full p-3">
                <img src="/public/letter-a.png" alt="" className="w-6" />
                <img src="/public/letter-m.png" alt="" className="w-6" />
              </div>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className=" -right-8 transition-colors duration-300 absolute top-4  rounded-full "
          >
            <FiSidebar />
          </button>
        </div>

        {/*  */}
        {isOpen ? (
          <ul className="mt-4 space-y-2 p-2">
            <h1 className="py-3 px-2 text-gray-700 font-medium">Menu</h1>
            {menu.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className={
                  location.pathname === item.url
                    ? "flex gap-3 group items-center bg-gray-200 p-2 duration-500 text-black group rounded-4xl"
                    : "flex gap-3 group items-center hover:bg-gray-200 p-2 duration-500 hover:text-black group rounded-4xl"
                }
              >
                {item.icon}
                <li className=" text-xs items-center uppercase text-gray-700 ">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="mt-4 space-y-2 p-2">
            <h1 className="py-3 px-2 text-gray-700 font-medium">Menu</h1>
            {menu.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className={
                  location.pathname === item.url
                    ? "flex relative gap-6 items-center bg-gray-200 p-3 duration-500 text-black group rounded-4xl"
                    : "flex relative gap-6 items-center hover:bg-gray-200 p-3 duration-500 hover:text-black group rounded-4xl"
                }
              >
                {item.icon}
                <div className="bg-gray-200   group-hover:block opacity-0 group-hover:opacity-100  text-xs w-20 text-center absolute -right-[10rem] group-hover:-right-[6.4rem] duration-300 p-3 rounded-lg">
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="">
        <h1 className="py-6 px-2 text-gray-700 font-medium">Social</h1>
        <ul className=" flex flex-col gap-6 px-4 py-2">
          {media.map((m) =>
            isOpen ? (
              <Link to={m.url} key={m.id} className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{<m.icon />}</span>
                  <li className="text-xs">{m.name}</li>
                  <CiShare1 />
                </div>
              </Link>
            ) : (
              <Link to={m.url} key={m.id} className="space-y-6 relative">
                <div className="flex items-center group gap-3">
                  <span className="text-xl">{<m.icon />}</span>
                  {/* <li className="text-xs">{m.name}</li> */}
                  <CiShare1 />
                  <div className="bg-gray-200   group-hover:block opacity-0 group-hover:opacity-100  text-xs w-20 text-center absolute -right-[10rem] group-hover:-right-[6.4rem] duration-300 p-3 rounded-lg">
                    {m.name}
                  </div>
                </div>
              </Link>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar