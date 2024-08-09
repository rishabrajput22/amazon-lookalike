import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, rating, price, image }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        rating: rating,
        price: price,
        image: image,
      },
    });
  };

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

      <img alt="prodimage" src={image} />
      <button className="prodbutton" onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
