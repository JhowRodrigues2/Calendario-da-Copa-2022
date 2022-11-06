import React from "react";

const Game = ({ player1, player2, hour }) => {
  return (
    <li>
      <img src={`/src/assets/${player1}.svg`} alt="flag Brazil " />
      <strong>{hour}</strong>
      <img src={`/src/assets/${player2}.svg`} alt="flag Serbia" />
    </li>
  );
};

export default Game;
