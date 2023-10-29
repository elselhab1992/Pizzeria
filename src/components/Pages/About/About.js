import React from "react";
import "./About.css";
import aboutImg from "../../../assets/makingpizza.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="about-img">
        <img src={aboutImg} alt="pizza" />
      </div>
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Mo Pizzeria has many variations of pizza. The Neapolitan pizza, or
          Naples-style pizza, is made specifically with buffalo mozzarella
          (produced from the milk of Italian Mediterranean buffalo) or fior di
          latte (mozzarella produced from the milk of prized Agerolese cows) and
          with San Marzano tomatoes or pomodorino vesuviano (a variety of grape
          tomato grown in Naples). Roman pizza often omits tomatoes (an early
          16th-century import) and uses onions and olives. The Ligurian pizza
          resembles the pissaladière of Provence in France, adding anchovies to
          olives and onions. Pizza has also spread from Italy throughout much of
          the rest of the world, and, in regions outside of Italy, the toppings
          used vary with the ingredients available and the flavour profile
          preferred.
        </p>
      </div>
    </section>
  );
};

export default About;
