import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product(props) {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    const route = `/${props.movetopage}`;
    window.location.href=route;
  };
  
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p className="description"><b>{props.description}</b></p>
      <p>
      <button onClick={handleBookAppointment} className="b-mainbutton">Book appointment</button>
      </p>
    </div>
  );
}