import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {


  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Info Carts</h2>
      </Link>
      
    </div>
  );
};



export default Navbar;
