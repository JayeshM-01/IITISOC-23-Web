import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product(props) {
  // const navigate = useNavigate();

  // const handleBookAppointment = () => {
  //   const route = `/${props.movetopage}`;
  //   navigate(route);
  // };

  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p className="description"><b>{props.description}</b></p>
      <p>
      <a href='http://localhost:3000/menu' className="b-mainbutton">Book appointment</a>
      </p>
    </div>
  );
}