import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
const NavigationBar = () => {
  return (
    <nav className={styles.navigation_bar_wrapper}>
      <div className={styles.navigation_bar}>
        <div className={styles.logo_side}>
          <h2 className={styles.logo}>BUKLE ÇİÇEKEVİ</h2>
          <span>STORE</span>
          <span>PLANT CARE</span>
          <span>BLOG</span>
          <span>ABOUT US</span>
        </div>

        <div className={styles.bag_side}>
          <div className={styles.shopping_bag_wrapper}>
            <Image
              src="/bag.svg"
              alt="Shopping Bag"
              width={16}
              height={24}
              priority
            />
            <span>SHOPPING BAGS</span>
          </div>
          <button className={styles.login_button}>LOGIN</button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
