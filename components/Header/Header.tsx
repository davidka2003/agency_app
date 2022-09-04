import { Navbar } from "components/Navbar";
import React from "react";
import styles from "./styles/header.module.scss";
const Header = () => {
  return (
    <header className={styles.Header}>
      <Navbar />
    </header>
  );
};

export default Header;
