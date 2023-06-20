import Image from "next/image";
import React from "react";
import ToolkitPoint from "./components/point";
import style from "../../style.module.scss";
const InformationImageSection = () => {
  return (
    <div className={style.image_section_wrapper}>
      <div className={style.image_section}>
        <div className={style.image_wrapper}>
          <Image
            className={style.image}
            fill
            src={"/images/flower1.png"}
            alt="flower_image"
            quality={100}
          />
        </div>
      </div>
      <ToolkitPoint />
      <div className={style.image_stepper_wrapper}>
        <Image
          src="/arrow.svg"
          alt="Arrow Left Svg"
          width={15}
          height={18}
          className="rotate-180 "
          priority
        />
        <span className="">1 of 6</span>
        <Image
          src="/arrow.svg"
          alt="Arrow Right Svg"
          width={15}
          height={18}
          className=""
          priority
        />
      </div>
    </div>
  );
};

export default InformationImageSection;
