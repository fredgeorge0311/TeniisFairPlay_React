import React, { useState } from "react";
import "../components/CSS/home.css";

import Login from "./Login";
import Product from "./Product";

const Shop = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Default Item");

  const DropdownMenu = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  return (
    <div className="Home__container">
      <div className="semiHeader__container">
        <div className="Home__paddingSemiHeader">
          <p className="semiHeader__title">Shop</p>
          <div className="contactUs__semiHeader">
            <p className="contactUs__us">Contact Us</p>
            <p className="contactUs__email">info@tennisfairplay.com</p>
          </div>
        </div>
      </div>
      <div className="HomeDetail__container">
        <div className="main__homeContainer">
          <div className="main__paddingHome">
            <div className="shopMain__container">
              <div className="shopMain__title">
                <p>showing the single result</p>
                <p>Dropdown Menu</p>
              </div>
              <div className="shopMain__productList">
                <Product />
              </div>
            </div>
          </div>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Shop;
