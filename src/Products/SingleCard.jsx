import React from "react";
import { IoStarSharp } from "react-icons/io5";

const SingleCard = ({ product }) => {
  return (
    <div className="card card-compact bg-green-400 hover:scale-105 transition shadow-xl">
      <figure>
        <img src={product.productImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <div className="flex justify-between">
          <p>{product.category}</p>
          <p>{product.price}$</p>
        </div>
        <p>{product.description}</p>
        <div>
          <p className="flex justify-start items-center gap-1">
            <IoStarSharp /> {product.ratings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
