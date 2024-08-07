import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_banner"
        alt="banner"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/AugART24/GW/MainEvent/AugART24_GW_PC_Hero_Day1_EN_2x._CB568183263_.jpg"
      />
      <div className="home_row">
        <Product
          id="1234"
          title="Apple iPad (10th generation): with A14 Bionic chip, 27.69 cm (10.9″) Liquid Retina display, 64GB, Wi-Fi 6, 12MP front/12MP back camera, Touch ID, all-day battery life – Blue"
          price={30900}
          rating={4}
          image="https://m.media-amazon.com/images/I/61uA2UVnYWL._SX679_.jpg"
        />
        <Product
          id="1235"
          title="Amazon Fire TV Stick with Alexa Voice Remote (includes TV and app controls) | HD streaming device"
          price={2999}
          rating={5}
          image="https://m.media-amazon.com/images/I/615OGYzaPCL._SX450_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1236"
          title="Safari Pentagon Set of 3 (Cabin + Medium + Large) Trolley Bags Hard Case Polypropylene 4 Wheels 360 Degree Wheeling Luggage, Travel Bags, Suitcase for Travel, Trolley Bags for Travel, Dusk Green"
          price={5299}
          rating={3}
          image="https://m.media-amazon.com/images/I/61cPNkLGRiL._SX679_.jpg"
        />
        <Product
          id="1237"
          title="HP Laptop 15s, AMD Ryzen 3 5300U, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, AMD Radeon Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2019, Silver, 1.69 kg), eq2143AU"
          price={29990}
          rating={5}
          image="https://m.media-amazon.com/images/I/71-oBEGEnOL._SX466_.jpg"
        />
        <Product
          id="1234"
          title="Samsung Galaxy Watch4 Classic LTE (4.6cm, Black)"
          price={8999}
          rating={5}
          image="https://m.media-amazon.com/images/I/61ftRB6KycL._SX466_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1234"
          title="Kodak 80 cm (32 inches) Special Edition Series HD Ready Smart LED TV 32SE5001BL (Black)"
          price={8499}
          rating={4}
          image="https://m.media-amazon.com/images/I/812v525aLdL._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
