import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Game from "./Game";
import Undefined from "/src/assets/icon-undefined.svg";

const Final = () => {
  return (
    <div>
      <Helmet>
        <title>Final | Calendário Copa 2022</title>
        <meta name="description" content="Final"></meta>
      </Helmet>

      <main className="cards">
        <Card date={"17/12"} day={"Sábado"}>
          <span>3º Lugar</span>
          <Game player1={Undefined} player2={Undefined} hour={"16:00"} />
        </Card>
        <Card date={"18/12"} day={"Domingo"}>
          <span>Grande Final</span>

          <Game player1={Undefined} player2={Undefined} hour={"16:00"} />
        </Card>
      </main>
    </div>
  );
};

export default Final;
