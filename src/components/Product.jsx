import React from 'react';

export default function Product(props) {
  return (
    <div className="card gap-4 pt-4">
      <div className="bg-white dark:bg-[#1e1b19] dark:text-white xs:h-[210px]  md:w-[220px] xl:w-[210px] 2xl:w-[230px] mx-auto  mr-[10px] sm:mr-[10px] md:mr-[20px] lg:mr-[50px] xl:mr-[70px] 2xl:mr-[70px] 3xl:mr-[10px] overflow-hidden rounded-l-full rounded-tr-full rounded-br-[1200px] hover:translate-y-[-15px] duration-300">
        <img
          src={props.url}
          alt={props.name}
          className="w-[180px] h-[10px] mx-auto mt-[60px] overflow-visible mb-[65px] object-cover rounded-xl"
        />
        <div class="p-4">
          <h5 class=" block font-pop font-[600] text-[12px] xl:text-[14px] text-center leading-snug tracking-normal text- antialiased">
            {props.name}
          </h5>
        </div>

        <div className="w-[55px] mt- h-[4px] mb-[35px] mx-auto rounded-full bg-red-500"></div>
      </div>
    </div>
  );
}
