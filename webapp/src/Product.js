import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product imagee" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p className="description"><b>{props.description}</b></p>
      <p>
        <button>Book appointment</button>
      </p>
    </div>
  );
}