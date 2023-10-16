import React, { useState, useEffect, useRef } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import kfc from './images/kfc.png';
import del from './images/del.png';
import pick from './images/pick.png';
import cart from './images/cart.png';
import darkcart from './images/darkcart.png';
import stl from './images/stl.jpg';
import tro from './images/tro.jpg';
import em from './images/em.jpg';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleDarkButtonClick = () => {
    setDarkMode(true);
  };

  const handleLightButtonClick = () => {
    setDarkMode(false);
  };

  return (
    <div className="bg-white dark:bg-black sm:pl-[50px] lg:pl-[50px] xl:pl-[100px] 2xl:pl-[250px] mx-auo flex justify-between items-center p-7 navbar">
      <div className="flex items-center mt-[-50px] md:mt-[-25px] lg:mt-0">
        <div onClick={() => setNav(true)} className="cursor-pointer">
          <HiMenuAlt1 className="-mt-1 dark:text-white " size={33} />
        </div>
        <img
          className="ml-[15px] cursor-pointer hidden xs:flex"
          src={kfc}
          alt="/"
        />

        <div className="flex mt-[100px] md:mt-[50px] lg:mt-0 ml-[-50px] xs:ml-0">
          <button className="bg-slate-50 dark:bg-[#1e1b19] dark:text-white border-2 flex border-red-500 ml-5 mr-5 pt-2 rounded-md tracking-[0.3px] font-[700] text-[11.5px] md:text-[14.5px] h-[40px] w-[110px] md:h-[43px] md:w-[145px]">
            <img
              className="w- max-h-[25px] ml-[10px] md:ml-[20px] mr-1 flex"
              src={del}
              alt="/"
            />
            DELIVERY
          </button>
          <button className="bg-slate-50 dark:bg-[#1e1b19] dark:text-white border2 flex border-red-500 pt-2 rounded-md tracking-[0.3px] font-[700] text-[11.5px] md:text-[13.5px] h-[40px] w-[110px] md:h-[43px] md:w-[145px]">
            <img
              className="w- max-h-[25px] ml-[10px] md:ml-[20px] mr-1 flex"
              src={pick}
              alt="/"
            />
            PICKUP
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row ml-[-60px] xs:ml-0 ">
        <img
          className="w- max-w-[35px] mr-[-10px] xs:mr-4 mt-[-5px] xs:mt-[10px] md:mt-[-5px] dark:hidden "
          src={cart}
          alt="/"
        />
        <img
          className="w- max-w-[35px] mr-[-10px] xs:mr-4 mt-[-5px] xs:mt-[10px] md:mt-[-5px] hidden dark:flex"
          src={darkcart}
          alt="/"
        />
        <img
          className="mt-[-35px] max-w-[50px] mb-4 cursor-pointer xs:hidden "
          src={kfc}
          alt="/"
        />
        <button className="login hidden xs:block bg-red-500 md:mr-[40px] xl:mr-[50px] 2xl:mr-[100px] 3xl:mr-[200px] rounded-[4px] shadow-lg text-white tracking-[0px] font-[600] pb-[2px] text-[14px] h-[38px] w-[65px]">
          LOGIN
        </button>
      </div>
      {/* Overlay */}
      {nav ? (
        <div
          onClick={() => setNav(!nav)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ''
      )}

      {/* Sidebar */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-[#f5f5f5] dark:bg-[#1e1b19] dark:text-white z-10 duration-[400ms]'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-[#e5e5e57d] z-10 duration-[400ms]'
        }
      >
        <button className=" bg-red-500 mt-5 ml-[20px] rounded-[4px] shadow-lg text-white tracking-[0px] font-[600] pb-[2px] text-[14px] h-[38px] w-[68px]">
          LOGIN
        </button>
        <div className="flex mt-[25px] justify-end mr-5 ">
          <button
            onClick={handleLightButtonClick}
            className="flex bg-red-500 duration-100 transition-all ease-linear dark:bg-black ml-5 cursor-pointer pt-[8px] md:pt-[5px] dark:pr-[18px] dark:mr-[-13px] justify-center z-20 dark:z-0 rounded-full tracking-[0.1px] font-[700] text-[12.5px] md:text-[13.5px] h-[36px] w-[50px] dark:w-[68px]"
          >
            Day
          </button>
          <button
            onClick={handleDarkButtonClick}
            className="bg-white duration-100 transition-all ease-linear dark:bg-red-500 cursor-pointer flex pt-[8px] md:pt-[5px] ml-[-13px] pl-[5px] dark:pl-0 dark:z-50 justify-center rounded-r-full dark:rounded-full tracking-[0.1px] font-[700] text-[12.5px] md:text-[13.5px] h-[36px] w-[65px] dark:w-[53px]"
          >
            Night
          </button>
        </div>
        <div className="w-[250px] mt-[20px] h-[1px] mb-[35px] mx-auto rounded-full bg-black dark:bg-[#535352]"></div>
        <ul className="flex flex-col p-4 pl-8 mt-[-40px] text-gray-800 dark:text-white font-[600] dark:font-[500]">
          <li className=" text-[16px] tracking-[-0.1px] font-pop py-3 flex hover:-translate-x-4 duration-200 hover:bg-stone-600/50 cursor-pointer hover:pl-2">
            <img src={stl} alt="" className="w-[22px] mr-4" />
            Store Locator
          </li>
          <li className=" text-[16px] tracking-[-0.1px] font-pop py-3 flex hover:-translate-x-4 duration-200 hover:bg-stone-600/50 cursor-pointer hover:pl-2">
            <img src={tro} alt="" className="w-[22px] mr-4" /> Track Order
          </li>
          <li className=" text-[16px] tracking-[-0.1px] font-pop py-3 flex hover:-translate-x-4 duration-200 hover:bg-stone-600/50 cursor-pointer hover:pl-2">
            <img src={em} alt="" className="w-[22px] mr-4" />
            Explore Menu
          </li>
        </ul>
        <div className="w-[250px] mt-[5px] h-[1px] mb-[35px] mx-auto rounded-full bg-black dark:bg-[#535352]"></div>

        <nav>
          <ul className="flex flex-col pl-1 mt-[-30px] text-gray-800 dark:text-white font-[600] dark:font-[500]">
            <li className="text-[16px] font-pop pl- ml-[25px] py-4 flex  hover:-translate-x-3 w-[250px] duration-200 hover:bg-stone-600/50 cursor-pointer">
              About Us
            </li>
            <li className="text-[16px] font-pop pl- ml-[25px] py-3 flex hover:-translate-x-3 w-[250px] duration-200 hover:bg-stone-600/50 cursor-pointer">
              FeedBack
            </li>
            <li className="text-[16px] font-pop pl- ml-[25px] py-3 flex hover:-translate-x-3 w-[250px] duration-200 hover:bg-stone-600/50 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="text-[16px] font-pop pl- ml-[25px] py-3 flex hover:-translate-x-3 w-[250px] duration-200 hover:bg-stone-600/50 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-[16px] font-pop pl- ml-[25px] py-3 flex hover:-translate-x-3 w-[250px] duration-200 hover:bg-stone-600/50 cursor-pointer">
              Contact Us
            </li>
            <li className="text-[16px] font-pop pl- ml-[25px] py-3 flex hover:-translate-x-3 w-[250px] duration-200 hover:bg-stone-600/50 cursor-pointer">
              Mitao Bhook
            </li>
            <li className="text-[16px] font-pop pl- ml-[25px] py-3 flex hover:-translate-x-3 w-[250px] duration-200 hover:bg-stone-600/50 cursor-pointer">
              Mitao Bhook - Scholarship
            </li>
            <li className="text-[16px] font-pop pl- ml-[25px] py-3 flex hover:-translate-x-3 w-[250px] duration-200 hover:bg-stone-600/50 cursor-pointer">
              Careers
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
