import React from "react";
import styles from "./style.module.scss";
import BlopGroup from "./components/blop-group";
const HeroSection = () => {
  return (
    <div className={styles.hero_section_wrapper}>
      <div className="bg-red-500 w-full z-30">
        Our Plants will make Your Life Better
      </div>
      <div className="z-0">
        <BlopGroup />
      </div>
    </div>
  );
};

export default HeroSection;
