import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ cartItemCount }) {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>ShopRite</h2>

      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Shop
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Cart{" "}
            {cartItemCount > 0 && (
              <span className={styles.badge}>{cartItemCount}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
