import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { cartCount } = useCart(); // Access total item count from context

  return (
    <nav className={styles.navbar}>
      {/* Application Logo */}
      <h1 className={styles.logo}>ReactShop</h1>

      {/* Navigation Links */}
      <div className={styles.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Cart{" "}
          {cartCount > 0 && (
            <span className={styles.cartBadge}>{cartCount}</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
