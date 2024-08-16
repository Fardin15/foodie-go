import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

  return (
    <div className="container max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Products products={products}></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
