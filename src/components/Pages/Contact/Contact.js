import React from "react";
import "./Contact.css";
import imageLeft from "../../../assets/pizzaLeft.jpg";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-img">
        <img src={imageLeft} alt="pizza" />
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-section">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="full name"
              id="fullName"
            />
          </div>
          <div className="form-section">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="email ..."
              id="fullName"
            />
          </div>
          <div className="form-section">
            <label htmlFor="msg">Message</label>
            <textarea
              id="msg"
              style={{ width: "80%", padding: 20, fontSize: 25 }}
            ></textarea>
          </div>
        </form>
        <div className="contact-btn">
          <button>Send</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
