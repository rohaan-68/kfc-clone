import React, { useState, useEffect, useRef } from 'react';
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io';
import bg1 from './images/bg1.jpg';
import bg2 from './images/b2.png';
import bg3 from './images/g3.png';
import bg4 from './images/b4.jpg';
const images = [bg1, bg2, bg3, bg4];

let count = 0;
let slideInterval;
export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim');
  };

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    slideRef.current.addEventListener('mouseenter', pauseSlider);
    slideRef.current.addEventListener('mouseleave', startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };
  const handleOnPrevClick = () => {
    const productsLength = images.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim');
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={images[currentIndex]}
          alt=""
          className="w-full h-[20vh] sm:h-[25vh] md:h-[35vh] lg:h-[37vh] xl:h-[54vh] 2xl:h-[58vh] 3xl:h-[64vh] mt-[145px] md:mt-[98px] object-cove img22"
        />
      </div>

      <div className="absolute w-full top-[80px] sm:top-[150px] md:top-[200px] xl:top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="text-red-500 p-1 rounded-full cursor-pointer transition"
          onClick={handleOnPrevClick}
        >
          <IoIosArrowDropleftCircle size={25} />
        </button>
        <button
          className=" text-red-500 p-1 rounded-full cursor-pointer transition"
          onClick={handleOnNextClick}
        >
          <IoIosArrowDroprightCircle size={25} />
        </button>
      </div>
      <div className="flex justify-center p-4 py-12 ">
        <button className="bg-red-500 rounded-md shadow-lg text-white tracking-[0.5px] font-[600] h-[2.5rem] w-full xs:w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[650px] 3xl:w-[50rem]">
          REORDER
        </button>
      </div>
    </div>
  );
}
