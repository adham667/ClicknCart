import React, { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import "./styles.css";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=4&skip=40`
        );
        const data = await res.json();
        setProducts(data.products);
        setQuantities(new Array(data.products.length).fill(1));
      } catch (e) {
        console.log(e);
      }
    }
    fetchProducts();
  }, []);

  // Function to calculate the total cost
  const calculateTotal = () => {
    return products.reduce((acc, product, index) => {
      return acc + product.price * quantities[index];
    }, 0);
  };

  // Function to increase quantity
  const increaseQuantity = (index) => {
    setQuantities((prev) => {
      const updated = [...prev];
      updated[index] += 1;
      return updated;
    });
  };

  // Function to decrease quantity
  const decreaseQuantity = (index) => {
    setQuantities((prev) => {
      const updated = [...prev];
      if (updated[index] > 1) updated[index] -= 1;
      return updated;
    });
  };

  function getProducts() {
    return products.map((product, index) => (
      <div key={product.id} className="item">
        <div className="prod">
          <img alt={product.title} src={product.images[0]} />
          <span>{product.title}</span>
        </div>
        <span>${product.price}</span>
        <div>
          <div className="quantity">
            <span>{quantities[index]}</span>
            <div className="arrows">
              <MdOutlineKeyboardArrowUp
                onClick={() => increaseQuantity(index)}
              />
              <MdOutlineKeyboardArrowDown
                onClick={() => decreaseQuantity(index)}
              />
            </div>
          </div>
        </div>
        <span>${(product.price * quantities[index]).toFixed(2)}</span>
      </div>
    ));
  }

  return (
    <div className="cart">
      <h3>
        <span className="home-span">Home</span> / Cart
      </h3>
      <div className="cart-container">
        <div className="item">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>

        <div>{getProducts()}</div>
        <div className="check">
          <div>
            <div className="cupon">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
          </div>

          <div className="total">
            <h2>Cart Total</h2>
            <div className="details">
              <div className="details-row">
                <span>Subtotal</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="details-row">
                <span>Shiping</span>
                <span>Free</span>
              </div>
              <div className="details-row">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
