import React from "react";
import SingleCard from "./SingleCard";

const Products = ({ products }) => {
  return (
    <div>
      <h1>{products.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <SingleCard key={product.id} product={product}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
