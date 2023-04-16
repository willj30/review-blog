import React from "react";

function Card(props) {
  return (
    <div className="movieForm">
      <div className="">
        <h2>{props.heading}</h2>
      </div>
      <div className="">{props.children}</div>
    </div>
  );
}

export default Card;
