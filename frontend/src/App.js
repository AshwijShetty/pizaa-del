import "./style.css";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

function App() {
  const [page, setPage] = useState("login");
  const [cart, setCart] = useState([]);

  return (
    <div>
     <div className="navbar">
  <h2>🍕 Pizza App</h2>
  <div>
    <button onClick={() => setPage("menu")}>Home</button>
    <button onClick={() => setPage("cart")}>Cart 🛒</button>
  </div>
</div>
      {page === "login" && <Login setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "menu" && (
        <Menu setPage={setPage} cart={cart} setCart={setCart} />
      )}
      <div className="footer">
  <p>© 2026 Pizza App | Made by Ashwij 🍕</p>
</div>
      {page === "cart" && (
        <Cart cart={cart} setPage={setPage} />
      )}
    </div>
  );
}

export default App;