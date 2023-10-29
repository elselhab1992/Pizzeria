import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import hero from "../../../assets/pizza.jpeg";
import { FaPizzaSlice } from "react-icons/fa";

const Home = () => {
  return (
    <main className="main-container">
      <div className="main-img">
        <img src={hero} alt="pizza" />
      </div>
      <div className="main-text">
        <h1>Mo Pizzeria</h1>
        <p>Pizza To Fit Any Taste</p>
        <Link to="/menu">
          <button>
            Order Now
            <FaPizzaSlice style={{ marginLeft: 10 }} />
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
