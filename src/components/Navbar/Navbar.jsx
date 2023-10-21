import React from "react";
import styles from "./Navbar.module.css";
import CartImage from "../../assets/shopping-cart.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Tee Rex Store</div>
      <button className={styles.cartbtn}>
        <img src={CartImage} alt="CartImage" />
      </button>
    </nav>
  );
};

export default Navbar;
