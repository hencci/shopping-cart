import styles from "./Cart.module.css";

function Cart() {
  return (
    <section className={styles.cart}>
      <h1>Your Cart</h1>
      <p>No items yet. Start shopping!</p>
    </section>
  );
}

export default Cart;
