import React from "react";

const Card = ({ date, day, children }) => {
  return (
    <div className="card">
      <h2>
        {date}
        <span>{day}</span>
      </h2>
      <ul>{children}</ul>
    </div>
  );
};

export default Card;
