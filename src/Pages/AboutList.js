import React from "react";
import "./AboutList.css";

function AboutList(props) {
  const { image, title, price } = props;
  return (
    <div className="samsung">
      {console.log(props)}
      <img className="image1" src={image} alt="Image" />
      <div>
        <h1>{title}</h1>
        <p>{price}</p>
        <button className="button1">Add to cart</button>
      </div>
    </div>
  );
}

export default AboutList;
