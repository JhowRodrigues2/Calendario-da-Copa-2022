import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Game from "./Game";
const Oitavas = () => {
  return (
    <div>
      <Helmet>
        <title>Oitavas | Calendário Copa 2022</title>
        <meta name="description" content="round of 16"></meta>
      </Helmet>
      <main className="cards">
        <Card date={"03/12"} day={"Sábado"}>
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
        <Card date={"04/12"} day={"Domingo"}>
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
        <Card date={"05/12"} day={"Segunda"}>
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
        <Card date={"06/12"} day={"Terça"}>
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

export default Oitavas;
