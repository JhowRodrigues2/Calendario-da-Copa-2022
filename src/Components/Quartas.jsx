import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Game from "./Game";
const Quartas = () => {
  return (
    <div>
      <Helmet>
        <title>Quartas | Calendário Copa 2022</title>
        <meta name="description" content="quarter finals"></meta>
      </Helmet>
      <main className="cards">
        <Card date={"09/12"} day={"Sexta"}>
          <Game
            player1={"icon-undefined"}
            player2={"icon-undefined"}
            hour={"12:00"}
          />
          <Game
            player1={"icon-undefined"}
            player2={"icon-undefined"}
            hour={"16:00"}
          />
        </Card>
        <Card date={"10/12"} day={"Sábado"}>
          <Game
            player1={"icon-undefined"}
            player2={"icon-undefined"}
            hour={"12:00"}
          />
          <Game
            player1={"icon-undefined"}
            player2={"icon-undefined"}
            hour={"16:00"}
          />
        </Card>
      </main>
    </div>
  );
};

export default Quartas;
