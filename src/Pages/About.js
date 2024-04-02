import React from "react";
import AboutList from "./AboutList.js";
import books from "./books.json";
// import "./About.css";

function About() {
  return (
    <div className="Samsung">
      {books.map((abu) => {
        return (
          <AboutList image={abu.image} title={abu.title} price={abu.price} />
        );
      })}
    </div>
  );
}

export default About;
