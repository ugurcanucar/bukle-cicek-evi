import React from "react";
import style from "./style.module.scss";
import CustomButton from "@/app/components/shared-components/custom-button";
import Image from "next/image";
import ToolkitPoint from "./components/information-image-section/components/point";
import InformationTextSection from "./components/information-text-section";
import InformationImageSection from "./components/information-image-section";
const InformationSection = () => {
  return (
    <div className={style.flower_information_section_wrapper}>
      <InformationImageSection />
      <InformationTextSection />
    </div>
  );
};

export default InformationSection;
