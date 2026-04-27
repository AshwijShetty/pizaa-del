import React, { useState } from "react";

function Cart({ cart, setPage }) {
  const [message, setMessage] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {
    const res = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart, total }),
    });

    const data = await res.text();
    setMessage(data);   // ✅ replaced alert
  };

  return (
    <div className="container">

      {message && (
        <div className="notification">
          {message}
        </div>
      )}

      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="pizza-card">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}

      <h3>Total: ₹{total}</h3>

      <button onClick={placeOrder}>Place Order</button><br /><br />

      <button onClick={() => setPage("menu")}>
        Back to Menu
      </button>
    </div>
  );
}

export default Cart;