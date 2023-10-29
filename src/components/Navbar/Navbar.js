import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/pizzaLogo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo" id={openMenu ? "open" : "close"}>
        <img src={logo} alt="pizza logo" />
        {/* Mobile Links */}
        <div className="mobile-nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <button className="nav-btn" onClick={() => setOpenMenu(!openMenu)}>
          <GiHamburgerMenu style={{ width: 40, height: "auto" }} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
