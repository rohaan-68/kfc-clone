import { useState } from 'react';
import { Link } from 'react-scroll';
import kfc from './images/kfc.png';
import as from './images/as.png';
import gp from './images/gp.png';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="mt-[100px] dark:bg-[#1e1b19]  lg:mt-[100px] md:px-[70px] lg:px-[100px] 3xl:px-[250px] leading-10">
      <div className="flex pt-[50px] flex-row space-y-[-50x] md:space-y-0 items-center  justify-center gap-[50px] xs:gap-[100px] xl:px-[300px]">
        <Link to="home" smooth={true} duration={500} offset={-150}>
          <div>
            <img src={kfc} alt="" className="cursor-pointer w-[80px]" />
          </div>
        </Link>

        <div className="flex gap-2 ">
          <div className=" bg-white p-2 mr-2 cursor-pointer rounded-full">
            <FaYoutube size={22} className=" text-red-500" />
          </div>
          <div className=" bg-white p-2 mr-2 cursor-pointer rounded-full">
            <FaInstagram size={22} className="" />
          </div>
          <div className=" bg-white p-2 cursor-pointer rounded-full">
            <FaFacebookF size={22} className=" text-blue-800" />
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 w-full  leading-10">
        <div className="mb-5 ml-[50px] xs:ml-[70px] md:ml-0 ">
          <ul className=" text-black text-[19px] font-pop font-[500] dark:text-white">
            <li className="hover:text-red-500 duration-[200ms] cursor-pointer">
              About Us
            </li>
            <li className="hover:text-red-500 duration-[200ms] cursor-pointer">
              Mitao Bhook
            </li>
            <li className="hover:text-red-500 duration-[200ms] cursor-pointer">
              Mitao Bhook - Scholarship
            </li>
            <li className="hover:text-red-500 duration-[200ms] cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-red-500 duration-[200ms] cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
        <div className="mb-5 md:ml-[20px] ml-[50px] xs:ml-[70px] ">
          <ul className=" text-black text-[19px] font-pop font-[500] dark:text-white">
            <li className="hover:text-red-500 duration-[200ms] cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-red-500 duration-[200ms] cursor-pointer">
              Store Locator
            </li>
            <li className="hover:text-red-500 duration-[200ms] cursor-pointer">
              Track Order
            </li>
          </ul>
        </div>

        <div className="mb-5  ml-[50px] xs:ml-[70px] md:ml-0">
          <ul className=" text-black text-[19px] font-pop font-[500] md:w-[100px] lg:w-full dark:text-white">
            <li className="hover:text-red-500 duration-[200ms] leading-[30px] cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
        <div className="mb-5 flex flex-col 2xl:flex-row ml-[50px] xs:ml-[70px] md:ml-0 ">
          <img
            src={as}
            alt=""
            className="w-[150px] h-[45px] mb-4 mr-1 cursor-pointer"
          />
          <img src={gp} alt="" className="w-[150px] h-[45px] cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col xs:flex-row  space-y-[-20px] xs:space-y-0 items-center justify-around">
        <p className="xs:mt-6 pb-5  md:w-[500px] font-poppin text-[16px] dark:text-white sm:text-[17px] tracking-[0.5px] xl:font-[500]">
          &copy; 2023 Rohaan. All rights reserved.
        </p>
        <p className=" font-pop text-red-500 ml-[5px] xs:ml-0 text-[16px] sm:text-[17px] sm:tracking-[-1px] xl:font-[700]">
          Cloned by
          <span className="flex mt-[-15px] text-[15px] sm:text-[16px] dark:text-white sm:mt-[-10px] font-[500] tracking-[0.5px] underline cursor-pointer">
            Rohaan
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
