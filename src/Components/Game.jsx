import React from "react";
const Game = ({ player1, player2, hour, teamName1, teamName2 }) => {
  return (
    <div>
      <li className="list-game">
        <img src={player1} alt={`flag ${player1}`} />

        <strong>{hour}</strong>

        <img src={player2} alt={`flag ${player2}`} />
      </li>
      <div className="teamName">
        <p>{teamName1}</p>
        <p>{teamName2}</p>
      </div>
    </div>
  );
};

export default Game;
