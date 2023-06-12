import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
const SearchInput = () => {
  return (
    <div className={styles.search_input_wrapper}>
      <input
        className="w-full"
        type="text"
        placeholder="Search Your magical Plants"
        name=""
        id=""
      />
      <div className="bg-[#F59728] rounded-full flex justify-center items-center   absolute right-0 top-0 h-16 w-16">
        <Image alt="Search Icon" src="search.svg" width={20} height={20} />
      </div>
    </div>
  );
};

export default SearchInput;
