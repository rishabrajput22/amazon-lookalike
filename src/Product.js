import React from "react";
import "./Product.css";

function Product({ id, title, rating, price, image }) {
  return (
   <div className="product">
     <div className="product_info">
      <p>{title}</p>
      <p className="product_price">
        <small>₹</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <p key={index}>⭐</p>
          ))}
      </div>
    </div>

    <img alt="prodimage" src={image}/>
    <button>Add to Basket</button>
   </div>
  );
}

export default Product;
