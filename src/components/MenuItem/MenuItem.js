import React from "react";

const MenuItem = ({ image, name, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-text">
        <h2>{name}</h2>
        <p>£{price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
