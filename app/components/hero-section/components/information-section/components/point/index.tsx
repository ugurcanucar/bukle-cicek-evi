"use client";
import Image from "next/image";
import React, { useState } from "react";

const ToolkitPoint = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="absolute  z-50   max-w-full w-max   left-[32%] bottom-[55%]">
      {isVisible && (
        <div className="bg-white  shadow-md flex gap-3 px-5 py-3 h-20 mb-3 ml-6 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px]">
          <Image src={"/images/leaf1.png"} alt="leaf1" width={40} height={40} />
          <div className="flex flex-col">
            <h2 className="font-medium text-base whitespace-nowrap">
              Monstera Delicousa
            </h2>
            <div className="flex gap-2">
              <span className="text-[#C2C2C2] line-through font-bold text-sm">
                $49.50
              </span>
              <span className="text-[#312F0D] font-bold tracking-[5%] text-[16px]">
                $29.50
              </span>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsVisible((prev) => !prev)}
        className=" border-white border-[5px]  bg-orange-500 rounded-full w-6 h-6 cursor-pointer"
      ></button>
    </div>
  );
};

export default ToolkitPoint;
