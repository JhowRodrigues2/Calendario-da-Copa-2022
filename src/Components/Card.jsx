import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
