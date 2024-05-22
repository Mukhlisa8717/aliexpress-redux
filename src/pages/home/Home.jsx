import React, { useEffect, useState } from "react";
import Products from "../../components/products/Products";
import mainURL from "../../api";
import Hero from "../../components/hero/Hero";

const Home = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    mainURL
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Hero />
      <Products title={"Products"} data={products} />
    </div>
  );
};

export default Home;
