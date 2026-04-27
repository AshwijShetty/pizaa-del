import margherita from "./images/margherita.jpg";
import farmhouse from "./images/farmhouse.jpg";
import paneer from "./images/paneer.jpg";
import React from "react";

function Menu({ setPage, cart, setCart }) {

  const pizzas = [
    { name: "Margherita", price: 100, img: margherita },
    { name: "Farmhouse", price: 150, img: farmhouse },
    { name: "Peppy Paneer", price: 180, img: paneer },
  ];

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
    alert("Added to cart!");
  };

  return (
    <div className="container">

      <div className="hero">
        <h1>Delicious Pizza Delivered Fast 🍕</h1>
        <p>Fresh, hot and tasty!</p>
      </div>

      <h2>🍕 Pizza Menu</h2>

      <button onClick={() => setPage("cart")}>Go to Cart</button>

      <div className="pizza-grid">
        {pizzas.map((pizza, index) => (
          <div key={index} className="pizza-card">
            <img src={pizza.img} alt="" />
            <h3>{pizza.name}</h3>
            <p>₹{pizza.price}</p>
            <button onClick={() => addToCart(pizza)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Menu;