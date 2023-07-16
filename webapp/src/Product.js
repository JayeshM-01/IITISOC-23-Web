import React from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Product(props) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p className="price">{props.movetopage}</p>
      <p className="description"><b>{props.description}</b></p>
      <p>
        <button >Book appointment</button>
      </p>
    </div>
  );
}