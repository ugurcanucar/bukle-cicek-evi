import React from "react";
import styles from "./style.module.scss";
import BlopGroup from "./components/blop-group";
import SearchSection from "./components/search-section";
import InformationSection from "./components/information-section";
const HeroSection = () => {
  return (
    <div className={styles.hero_section_wrapper}>
      <BlopGroup />

      <div className="w-full z-30 h-[70vh] max-w-7xl relative flex justify-end  ">
        <SearchSection />
        <InformationSection />
      </div>
    </div>
  );
};

export default HeroSection;
