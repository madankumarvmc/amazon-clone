import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="	https://m.media-amazon.com/images/I/21HEtJGAJHL.jpg"
          alt="Ad"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Shopping Cart</h2>
          {/* BasketItems */}
          {/* BasketItems */}
          {/* BasketItems */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
