import React from "react";
import HeaderTitle from "./headerTitle.jsx";
import ShowLogButton from "./showLogButton.jsx";
import styles from "./header.module.css";

const Header = ({ handleLogRender }) => {
  return (
    <section className="header">
      <div className={styles.headerContainer}>
        <HeaderTitle />
        <ShowLogButton handleLogRender={handleLogRender} />
      </div>
    </section>
  );
};

export default Header;
