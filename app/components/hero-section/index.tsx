import React from "react";
import styles from "./style.module.scss";
import BlopGroup from "./components/blop-group";
import SearchSection from "./components/search-section";
import InformationSection from "./components/information-section";
const HeroSection = () => {
  return (
    <div className={styles.hero_section_wrapper}>
      <div className=" w-full z-30 pt-[20vh]  flex-col-reverse xl:flex-row  max-w-7xl relative flex justify-end  ">
        <SearchSection />

        <InformationSection />
      </div>
    </div>
  );
};

export default HeroSection;
