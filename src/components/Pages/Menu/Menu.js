/* eslint-disable no-unused-vars */
import React from "react";
import "./Menu.css";
import menuList from "../../../Data";
import MenuItem from "../../MenuItem/MenuItem";

const Menu = () => {
  return (
    <section className="menu">
      <div className="menu-heading">
        <h1>Our Menu</h1>
      </div>
      <div className="menu-cards">
        {menuList.map((menuItem) => {
          const { id, name, image, price } = menuItem;

          return <MenuItem key={id} {...menuItem} />;
        })}
      </div>
    </section>
  );
};

export default Menu;
