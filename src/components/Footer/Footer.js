import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-contact">
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </div>
      <div className="social-icons">
        <AiFillFacebook className="icon" />
        <AiFillTwitterCircle className="icon" />
        <AiFillInstagram className="icon" />
      </div>
      <div className="copyrights">
        <p>copyright@Mo Pizzeria 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
