import React from "react";

const SingleCard = ({ product }) => {
  return (
    <div className="card bg-green-400 shadow-xl hover:scale-105 transition">
      <figure className="px-10 pt-10">
        <img src={product.productImage} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-start text-start">
        <h2 className="card-title">{product.productName}</h2>
        <p>{product.category}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
