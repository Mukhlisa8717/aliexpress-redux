import React from "react";
import "./Carts.css";
import { RiDeleteBin6Line } from "react-icons/ri";

Number.prototype.brm = function () {
  return this.toFixed(2);
};

const Carts = ({
  cart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
}) => {
  let totalPrice = cart?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  let cartItems = cart?.map((item) => (
    <div key={item.id} className="cart__item">
      <div className="product__info">
        <img src={item.images[0]} alt="" width={150} />
        <div>
          <p className="cart__item-title">{item.title}</p>
          <p className="cart__item-description">{item.description}</p>
        </div>
      </div>
      <div className="product__numAction">
        <button
          disabled={item.quantity <= 1}
          onClick={() => decrementCartQuantity(item.id)}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementCartQuantity(item.id)}>+</button>
      </div>
      <h2>{(item.price * item.quantity).brm()} $</h2>
      <button
        className="product__delete-btn"
        onClick={() => removeItemFromCart(item.id)}
      >
        <RiDeleteBin6Line size={20} color="white" />
      </button>
    </div>
  ));

  let orderCard = cart?.map((item) => (
    <img
      key={item.id}
      src={item.images[0]}
      alt=""
      className="order__card-img"
    />
  ));

  return (
    <div>
      <div className="cartList">
        <div className="cartItems">{cartItems}</div>
        <div className="cartOrder">
          <h4>Place an order</h4>
          <div className="order__card">
            <div className="order__card-images">{orderCard}</div>
            <hr />
            <div className="order__card-total">
              <span>Total:</span>
              <span>{totalPrice?.brm()} $</span>
            </div>
            <div className="order__card-total">
              <span>Delivery:</span>
              <span className="order__card-delivery">Free</span>
            </div>
          </div>
          <button className="cart__order-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
