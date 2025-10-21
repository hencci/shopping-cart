import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <div className={styles.app}>
      <Router>
        <Navbar cartItemCount={cartItemCount} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
