import React from "react";
import "./Checkoout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/travel/Flights_Editorial_2300x646._CB566488062_.jpg"
          alt="ad_image"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is Empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Checkout Summary:</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                key={item.id} // Add a unique key prop
                id={item.id} // Correct the prop name
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {/* {basket.length > 0 && (
        <div className="checkout_right">
          <h1>Happy Shopping</h1>
        </div>
      )} */}
    </div>
  );
}

export default Checkout;
