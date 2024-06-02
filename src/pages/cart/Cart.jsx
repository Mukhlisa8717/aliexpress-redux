import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Carts from "../../components/cart/Carts";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../context/actions/cartAction.js";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <section className="cart">
      <div className="container">
        <div>
          <h2 className="cart__title">Cart</h2>
          {cart.length ? (
            <Carts
              cart={cart}
              incrementCartQuantity={(itemId) =>
                dispatch(incrementCartQuantity(itemId))
              }
              decrementCartQuantity={(itemId) =>
                dispatch(decrementCartQuantity(itemId))
              }
              removeItemFromCart={(itemId) =>
                dispatch(removeItemFromCart(itemId))
              }
            />
          ) : (
            "Empty"
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
