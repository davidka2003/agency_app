import React from "react";
import { Navigation } from "utils/constants/navigation";
import Navlink from "./Navlink";
import styles from "./styles/navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <ul>
        {Navigation.map((nav) => (
          <Navlink {...nav} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
