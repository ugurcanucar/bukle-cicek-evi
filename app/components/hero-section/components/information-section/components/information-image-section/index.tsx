"use client";
import Image from "next/image";
import React, { useState } from "react";
import ToolkitPoint from "./components/point";
import style from "../../style.module.scss";
import ArrowLeft from "../../../../../../../public/arrow.svg";
import { Flower, fakeData } from "@/app/core/data/fake_data";
const InformationImageSection = () => {
  const [flowerIndex, setFlowerIndex] = useState(0);
  const data: Array<Flower> = fakeData;
  return (
    <div className={style.image_section_wrapper}>
      <div className={style.image_section}>
        <div
          className={`${style.image_wrapper} left-0 right-0    md:right-[3%] lg:right-[10%]     xl:left-auto  bottom-0 xl:right-0 w-[440px] h-[400px]`}
        >
          <Image
            className={style.image}
            fill
            src={`/images/${data[flowerIndex].image}`}
            alt="flower_image"
            quality={100}
          />
        </div>
      </div>
      <ToolkitPoint />
      <div className={style.image_stepper_wrapper}>
        <div
          onClick={() => {
            if (flowerIndex !== 0) {
              setFlowerIndex((prev) => prev - 1);
            }
          }}
        >
          <ArrowLeft
            color={`${flowerIndex == 0 ? "grey" : ""}`}
            className={`rotate-180 cursor-pointer`}
          />
        </div>
        <span className="">1 of 6</span>
        <div
          className=""
          onClick={() => {
            if (flowerIndex !== data.length - 1) {
              setFlowerIndex((prev) => prev + 1);
            }
          }}
        >
          <ArrowLeft
            color={`${flowerIndex === data.length - 1 ? "grey" : ""}`}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default InformationImageSection;
