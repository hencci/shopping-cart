import PropTypes from "prop-types";
import styles from "./Cart.module.css";

function Cart({ cartItems, onUpdateQuantity, onRemoveItem }) {
  // Calculate total cost of all items
  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className={styles.cart}>
        <h1>Your Cart</h1>
        <p>Your cart is empty. Start shopping!</p>
      </section>
    );
  }

  return (
    <section className={styles.cart}>
      <h1>Your Shopping Cart</h1>

      <div className={styles.cartContainer}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.details}>
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>

              <div className={styles.controls}>
                <button onClick={() => onUpdateQuantity(item.id, "decrement")}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, "increment")}>
                  +
                </button>
              </div>

              <button
                className={styles.removeButton}
                onClick={() => onRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className={styles.total}>Total: ${totalCost.toFixed(2)}</h2>
    </section>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onUpdateQuantity: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
