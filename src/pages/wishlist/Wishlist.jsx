import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  console.log(wishlist);

  return (
    <section className="wishlist">
      <div className="container">
        {wishlist.length ? (
          <Products title="Favorites" data={wishlist} />
        ) : (
          "Empty"
        )}
      </div>
    </section>
  );
};

export default Wishlist;
