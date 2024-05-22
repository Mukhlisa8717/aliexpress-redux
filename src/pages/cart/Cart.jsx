import React from "react";
import useStore from "../../context/store";
import Carts from "../../components/cart/Carts";

const Cart = () => {
  const cart = useStore((state) => state.cart);
  const incrementCartQuantity = useStore(
    (state) => state.incrementCartQuantity,
  );
  const decrementCartQuantity = useStore(
    (state) => state.decrementCartQuantity,
  );
  const removeItemFromCart = useStore((state) => state.removeItemFromCart);

  return (
    <section className="cart">
      <div className="container">
        <div>
          <h2 className="cart__title">Cart</h2>
          {cart.length ? (
            <Carts
              cart={cart}
              incrementCartQuantity={incrementCartQuantity}
              decrementCartQuantity={decrementCartQuantity}
              removeItemFromCart={removeItemFromCart}
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
