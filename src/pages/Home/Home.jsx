import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.page}>
      <h2>Welcome to ReactShop!</h2>
      <p>
        Explore our collection of products and add your favorites to the cart.
      </p>
    </div>
  );
}

export default Home;
