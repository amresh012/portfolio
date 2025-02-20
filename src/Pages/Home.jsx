import  { useEffect } from 'react'
import { CiLocationArrow1 } from 'react-icons/ci';
import { SlSocialLinkedin } from "react-icons/sl";
import { LuGithub } from "react-icons/lu";
import { CiShare1 } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import AccordionUsage from '../Component/Accordian';
import {experiance} from "../Constants"
const Home = () => {

 useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="p-10 w-full flex flex-col  " data-aos="zoom-in">
      <div className="w-full h-full p-10">
        <div className="flex flex-col  justify-center p-6 gap-6 max-w-[70vw] ">
          <div className="flex items-center">
            <div className="rounded-lg overflow-clip p-2">
              <img
                src="/public/ProfilePic.jpg"
                alt=""
                className="h-[7vw] w-[7vw] rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold ">
                Hi, I'am Amresh Mishra
              </h1>
              <p className="uppercase text-[10px] border bg-indigo-200 text-indigo-700 p-1 w-fit rounded-lg">
                Full Stack Developer
              </p>
              <p className="flex items-center gap-2">
                <CiLocationArrow1 /> Noida,UP
              </p>
            </div>
          </div>
          <p className="text-gray-600 p-2">
            I'm a problem-solver at heart, crafting scalable and
            high-performance applications that seamlessly blend functionality
            with user experience. Passionate about design systems, performance
            optimization, and intuitive interfaces, I thrive on tackling complex
            challenges and refining workflows for efficiency. With a holistic
            approach to development, I create impactful solutions that adapt to
            evolving needs. Currently upskilling in Generative AI to explore new
            frontiers in intelligent, adaptive systems.
          </p>
          {/* current location */}

          <div className="flex items-center justify-start gap-7">
            <button className="border p-2 text-xs flex items-center gap-2 rounded-lg">
              <LuGithub/>
              Github
              <CiShare1/>
            </button>
            <button className="border p-2 text-xs flex items-center gap-2 rounded-lg "> <SlSocialLinkedin/> LinkedIn <CiShare1/></button>
          </div>
        </div>
      </div>
      {/* work experiance */}
      <div className="w-full h-full p-10 ">
        <div className="w-full h-full space-y-8 p-10 ">
          <div className="font-bold text-3xl capitalize ">
            <h1>Work Experiance</h1>
          </div>
          <div className="h-full w-full">
            <AccordionUsage  props={experiance}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home