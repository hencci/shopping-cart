import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1) setQuantity(value);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setQuantity(1); // Reset input after adding
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>

      <div className={styles.controls}>
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min="1"
        />
        <button onClick={handleIncrement}>+</button>
      </div>

      <button className={styles.addButton} onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
