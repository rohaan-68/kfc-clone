import React, { useState } from 'react';
import { data, responsive } from '../data/data.js';
import Carousel from 'react-multi-carousel';
import './main.css';
import { AiOutlineHeart } from 'react-icons/ai';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product.jsx';
import first from './images/1.png';
import second from './images/2.png';
import third from './images/3.jpg';
import fourth from './images/4.png';
const Food = () => {
  const [foods, setFoods] = useState(data);
  const product = data
    .slice(0, 7)
    .map((item, index) => <Product name={item.name} url={item.image} />);
  return (
    <div className="px-[45px] xs:px-[100px] sm:px-[20px] md:px-[20px] lg:px-[60px] xl:px-[80px] 3xl:px-[180px] ">
      <h2 className="text-black dark:text-white h-[100px] exp mt-[-5px] tracking-[-1px] font-ms font-[700] pb-5 text-[20px] md:text-[22px] 3xl:ml-[50px] lg:text-[25px]">
        EXPLORE MENU
        <div className="w-[70px] h-[3px] rounded-full bg-red-500"></div>
      </h2>

      {/* First Section */}
      <div className="App">
        <Carousel className="z-0" showDots={false} responsive={responsive}>
          {product}
        </Carousel>
      </div>
      {/* Second Section */}
      <h2 className="text-black dark:text-white h-[100px] exp mt-[55px] tracking-[-1px] font-ms font-[700] pb-5 text-[20px] md:text-[22px] 3xl:ml-[50px] lg:text-[25px]">
        BEST SELLERS
        <div className="w-[70px] h-[3px] rounded-full bg-red-500"></div>
      </h2>
      <div className="scrollbar overflow-y-auto">
        <ul className=" flex flex-row gap-4 pt-4  h-[350px] w-[1200px] sm:h-[400px] sm:w-[1200px]  lg:h-[350px] lg:w-[950px] xl:h-[350px] xl:w-[1000px] 2xl:h-[400px] 2xl:w-[1200px] mx-auto">
          {foods.slice(7, 11).map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e1b19] text-black dark:text-white rounded-md"
            >
              <div class="kfc-box justify-center flex">
                <span className="bg-red-500 w-[17px] h-[22px] inline-block mr-2 relative"></span>
                <span className="bg-red-500 w-[17px] h-[22px] inline-block mr-2 relative"></span>
                <span className="bg-red-500 w-[17px] h-[22px] inline-block relative"></span>
              </div>
              <div class="p-4">
                <h5 class="cursor-pointer block font-ms text-[14px] md:text-[16px] lg:text-[16px] xl:text-[22px] font-semibold leading-snug tracking-[-1px] text- antialiased">
                  {item.name}
                </h5>
              </div>
              <p class="card-price before:border-white before:border-r-[12px] before:dark:border-r-[#1e1b19] font-ms font-[800]">
                <span>Rs</span> {item.price}
              </p>

              <img
                src={item.image}
                alt={item.name}
                className="h-[70%] max-w-[80%] mx-auto md:h-[70%] md:max-w-[100%] mt-[-25px] sm:mt-[10px] md:mt-[-30px] cursor-pointer object-cove im22 rounded-xl"
              />
            </div>
          ))}
        </ul>
      </div>
      {/* Third Section */}

      <h2 className="text-black dark:text-white h-[100px] exp mt-[55px] tracking-[-1px] font-ms font-[700] pb-5 text-[20px] md:text-[22px] 3xl:ml-[50px] lg:text-[25px]">
        TOP DEALS
        <div className="w-[70px] h-[3px] rounded-full bg-red-500"></div>
      </h2>
      <div className="dark:text-white scrollbar overflow-y-auto mxauto h-[500px] lg:h-[500px] 2xl:h-[500px] ">
        <ul className=" flex flex-row gap-4 pt-4  h-[450px] sm:h-[450px] lg:h-[450px] 2xl:h-[450px] j-center mx-auto 3xl:justify-center">
          {foods.slice(12, 16).map((item, index) => (
            <div key={index} className="bg-white dark:bg-[#1e1b19] rounded-md">
              <div class="kfc-box justify-center flex">
                <span className="bg-red-500 w-[17px] h-[22px] inline-block mr-2 relative"></span>
                <span className="bg-red-500 w-[17px] h-[22px] inline-block mr-2 relative"></span>
                <span className="bg-red-500 w-[17px] h-[22px] inline-block relative"></span>
              </div>
              <AiOutlineHeart className="text-red-500 ml-auto mr-2" size={30} />
              <img
                src={item.image}
                alt={item.name}
                className="h-[60%] max-w-[80%] mx-auto md:h-[60%] hover:scale-[1.1] duration-300 overflow- md:max-w-[100%] mt-[-65px] sm:mt-[-55px] md:mt-[-45px] cursor-pointer object-cove im22 rounded-xl"
              />
              <p class="font-ms text-[14px] mt-[135px] sm:mt-[125px] md:mt-[115px] lg:mt-[115px] 2xl:mt-[115px] font-[700] ml-[18px]">
                {item.price}
              </p>
              <div className="text-center mt-[10px] z-50 overflow-visible block">
                <button className="relative rounded-md font-pop text-[13px] font-[600] duration-300 border-2 py-1 px-1 border-red-500 text-white hover:text-red-500 bg-red-500 hover:bg-white">
                  + ADD TO BUCKET
                </button>
              </div>
              <div class="p-4  mt-[-180px] sm:mt-[-185px] md:mt-[-180px] lg:mt-[-175px] 2xl:mt-[-180px]">
                <h5 class="cursor-pointer block  font-pop text-[18px] md:text-[18px] lg:text-[16px] xl:text-[20px] font-[700] leading-snug tracking-[-1px] text- antialiased">
                  {item.name}
                </h5>
                <p class="flex dark:text-white w-[300px] font-pop font-[500] text-gray-900/80 text-[13px] md:text-[13px] lg:text-[13px] lg:tracking-[0px] mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </div>
      {/* Fourth Section */}
      <div class="grid md:grid-cols-2 gap-5 xs:px-[0px] sm:px-[50px] md:px-[40px] lg:px-[30px] 3xl:px-[70px] mt-[90px]">
        <img
          src={first}
          alt=""
          className=" xl:w-[660px]  xl:h-[400px] rounded-xl"
        />
        <img
          src={second}
          alt=""
          className=" xl:w-[660px]  xl:h-[400px] rounded-xl"
        />
        <img
          src={third}
          alt=""
          className=" xl:w-[660px]  xl:h-[400px] rounded-xl"
        />
        <div className="bg-white dark:bg-[#1e1b19] dark:text-white rounded-xl 3xl:max-w-[660px]  3xl:h-[400px] ">
          <img
            src={fourth}
            alt=""
            className=" w-[40%] mx-auto mt-[20px] rounded-xl"
          />
          <h2 className="mx-auto  lg:leading-6 text-center lg:mt-3 xl:mt-5 2xl:mt-2 mb-2 lg:mb-5 font-[600] md:font-[400] text-[10.5px] sm:text-[13px] md:text-[13px] mt-2 lg:text-[16px] xl:text-[22px]  px-5">
            Adding 11 herbs and spices, Explore our menu and add items to your
            cart.
          </h2>
          <div className="justify-center mx-auto flex">
            <button className=" bg-red-500 py-2 px-[20px] sm:px-[35px] rounded-md  text-white tracking-[0px] font-[600] whitespace-nowrap mb-[30px] md:mb-0 text-[11px] sm:text-[13px] md:text-[11px] lg:text-[16px] xl:text-[22px]">
              EXPLORE MENU
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
