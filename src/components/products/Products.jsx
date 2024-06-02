import React from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toggleLike } from "../../context/actions/wishlistActions";
import { addToCart } from "../../context/actions/cartAction";

const Products = ({ data, title }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const maxLength = 54;
  console.log(data);

  const productItems = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.images[0]} alt="" />
      <Link>
        <p>{truncateText(el.description, maxLength)}</p>
        <h3>{el.price} $</h3>
        <div>
          <IoStar size={14} color="red" />
          <span className="card__rating"> {el.rating}</span>
        </div>
      </Link>
      <button className="like__btn" onClick={() => dispatch(toggleLike(el))}>
        {wishlist.some((item) => item.id === el.id) ? (
          <FaHeart size={17} style={{ color: "red" }} />
        ) : (
          <FaRegHeart size={17} />
        )}
      </button>
      <button className="cart__btn" onClick={() => dispatch(addToCart(el))}>
        <IoCartOutline size={17} />
      </button>
    </div>
  ));

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__title">{title}</h2>
        <div className="card__list">{productItems}</div>
      </div>
    </section>
  );
};

export default Products;

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};
