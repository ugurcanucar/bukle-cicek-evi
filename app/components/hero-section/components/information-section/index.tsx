import React from "react";
import style from "./style.module.scss";
import CustomButton from "@/app/components/shared-components/custom-button";
import Image from "next/image";
import ToolkitPoint from "./components/point";
const InformationSection = () => {
  return (
    <div className="w-[60%] flex items-end mb-20">
      <div className="h-full flex flex-col items-end relative  w-full  ">
        <div className="  h-full relative w-full  bg-[#FCDDB7] rounded-t-full ">
          <div className="absolute  bottom-0    right-0 w-[440px] h-[400px]">
            <Image
              className="absolute    bottom-0 left-0 right-0 top-0"
              fill
              src={"/images/flower1.png"}
              alt="flower_image"
              quality={100}
            />
          </div>
        </div>
        <ToolkitPoint />
        <div className="flex justify-between items-center h-5 mt-3 w-full">
          <div className="">{"<--"}</div>
          <div className="">1 of 6</div>
          <div className="">{"-->"}</div>
        </div>
      </div>
      <div className={style.flower_information_section}>
        <h1 className={style.flower_title}>
          Swiss Cheese <br /> Plant
        </h1>
        <h2 className={style.flower_subtitle}>Monstera Deliciosa</h2>
        <p className={style.flower_information}>
          Monstera deliciosa, the Swiss cheese plant, is a species of flowering
          plant native to tropical forests of South America such as southern
          Mexico, south to Panama. It is very widely grown in temperate zones as
          a houseplant.
        </p>
        <CustomButton text="See Details" />
      </div>
    </div>
  );
};

export default InformationSection;
