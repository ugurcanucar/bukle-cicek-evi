import React from "react";
import styles from "./style.module.scss";
import SearchInput from "./components/search-input";
const SearchSection = () => {
  return (
    <div className={styles.search_section_wrapper}>
      <h1 className="">Our Plants will make Your Life Better</h1>
      <p>
        We’re your online houseplant destination. We offer a wide range of
        Plants and Accessories shipped directly from our Lovely (green)house to
        yours
      </p>
      <SearchInput />
    </div>
  );
};

export default SearchSection;
