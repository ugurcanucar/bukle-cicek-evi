import CustomButton from "@/app/components/shared-components/custom-button";
import React from "react";
import style from "../../style.module.scss";

const InformationTextSection = () => {
  return (
    <div className={style.flower_information_section}>
      <h1 className={style.flower_title}>
        Swiss Cheese <br /> Plant
      </h1>
      <h2 className={style.flower_subtitle}>Monstera Deliciosa</h2>
      <p className={style.flower_information}>
        Monstera deliciosa, the Swiss cheese plant, is a species of flowering
        plant native to tropical forests of South America such as southern
        Mexico, south to Panama. It is very widely grown in temperate zones as a
        houseplant.
      </p>
      <CustomButton text="See Details" />
    </div>
  );
};

export default InformationTextSection;
