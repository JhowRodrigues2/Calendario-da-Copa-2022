import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Game from "./Game";
const TerceiroLugar = () => {
  return (
    <div>
      <Helmet>
        <title>Terceiro Lugar | Calendário Copa 2022</title>
        <meta name="description" content="third place"></meta>
      </Helmet>
      <main className="cards-finals">
        <Card date={"17/12"} day={"Sábado"}>
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

export default TerceiroLugar;
