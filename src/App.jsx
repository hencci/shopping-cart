import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import styles from "./App.module.css";

function App() {
  return (
    // Provide global cart state across the entire app
    <CartProvider>
      {/* Enable routing for multiple pages */}
      <Router>
        <div className={styles.appContainer}>
          {/* Navbar shown on all pages */}
          <Navbar />

          {/* Define application routes */}
          <main className={styles.mainContent}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
