import React from 'react'
import useStore from '../../context/store'
import Products from '../../components/products/Products';

const Wishlist = () => {
  const wishlist = useStore(state => state.wishlist)
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
}

export default Wishlist
