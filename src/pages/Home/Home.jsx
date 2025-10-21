import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <h1>Welcome to ShopRite!</h1>
      <p>Your one-stop shop for everything.</p>
      <img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        alt="Shopping"
        className={styles.image}
      />
    </section>
  );
}

export default Home;
