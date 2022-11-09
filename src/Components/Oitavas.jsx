import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Game from "./Game";
import Undefined from "/src/assets/icon-undefined.svg";

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
            player1={Undefined}
            player2={Undefined}
            hour={"12:00"}
            Undefined
          />
          <Game player1={Undefined} player2={Undefined} hour={"16:00"} />
        </Card>
        <Card date={"04/12"} day={"Domingo"}>
          <Game player1={Undefined} player2={Undefined} hour={"12:00"} />
          <Game player1={Undefined} player2={Undefined} hour={"16:00"} />
        </Card>
        <Card date={"05/12"} day={"Segunda"}>
          <Game player1={Undefined} player2={Undefined} hour={"12:00"} />
          <Game player2={Undefined} player1={Undefined} hour={"16:00"} />
        </Card>
        <Card date={"06/12"} day={"Terça"}>
          <Game player1={Undefined} player2={Undefined} hour={"12:00"} />
          <Game player1={Undefined} player2={Undefined} hour={"16:00"} />
        </Card>
      </main>
    </div>
  );
};

export default Oitavas;
