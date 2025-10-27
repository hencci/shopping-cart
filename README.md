# 🛍️ Shopping Cart

A modern, modular React e-commerce web application that allows users to browse products, add items to their cart, and view their selections in a smooth, responsive interface.
The app uses FakeStore API for dynamic product data and demonstrates practical React concepts such as component-based design, routing, and state management.

---

## 🚀 Features

### 🏠 Home Page

- Welcoming landing page with a brief introduction.
- Simple, minimal layout following modern design principles.

### 🛒 Shop Page

- Fetches and displays products dynamically from FakeStore API.
- Each product includes an image, title, price, and an “Add to Cart” button.
- Responsive product grid layout using CSS modules.

### 🧺 Cart Page

- Displays all items added to the cart.
- Shows total price and item count dynamically.
- Allows easy navigation back to the shop for more shopping.

### 🧭 Navigation

- Fixed navbar with routes to Home, Shop, and Cart.
- Active link highlighting for better user experience.
- Logo and brand name (“ShopRite”) remain visible throughout navigation.

### 💡 State Management

- Uses React Hooks (useState, useEffect) for product fetching and cart logic.
- Props are passed down from the parent (App.jsx) to manage cart interactions cleanly.

### 🎨 Styling

- Clean, responsive, and dark-themed design.
- Styled using CSS Modules for scoped, maintainable styling.
- Works seamlessly on desktop and mobile.

---

## 🧩 Folder Structure

```css
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   ├── ProductCard/
│       ├── ProductCard.jsx
│       └── ProductCard.module.css
│
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.module.css
│   ├── Shop/
│   │   ├── Shop.jsx
│   │   └── Shop.module.css
│   └── Cart/
│       ├── Cart.jsx
│       └── Cart.module.css
│
├── App.jsx
├── App.module.css
├── main.jsx
└── index.css
```

---

## ⚙️ Technologies Used

| Category   | Technology                                         |
| ---------- | -------------------------------------------------- |
| Framework  | [React 18+](https://reactjs.org/)                  |
| Routing    | [React Router DOM](https://reactrouter.com/)       |
| Styling    | CSS Modules                                        |
| API        | [FakeStore API](https://fakestoreapi.com/products) |
| Build Tool | [Vite](https://vitejs.dev/)                        |
| Language   | JavaScript (ES6+)                                  |

---

## 🧠 Key Concepts Illustrated

- Component-based architecture — reusable UI components for scalability.
- State management — local state handling using useState hook.
- Data fetching — asynchronous fetch with error handling via try/catch.
- Routing — single-page navigation with react-router-dom.
- Side effects — use of useEffect to fetch data on component mount.
- Props drilling — passing onAddToCart and cart data cleanly between components.

---

## ⚡ Installation & Setup

1. Clone the Repository

```bash
git clone https://github.com/hencci/shopping-cart.git
cd shopping-cart
```

2. Install Dependencies

```bash
npm install
```

3. Run the Development Server

```bash
npm run dev
```

4. Open local host

---

## 🌐 API Information

Base URL:

```bash
https://fakestoreapi.com/products
```

Each product includes:

```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}
```

### 💻 Example Code Snippet — Product Fetching

```jsx
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);
```

---

## 🧾 License

This project is open-source and available under the MIT License.

---

## Live preview

https://hencci-shopping-cart.netlify.app

---

## 👨‍💻 Author

Henry Moses

- [GitHub](https://github.com/hencci)
- [LinkedIn](https://linkedin.com/in/henry-orlu-moses-78bb74286)
