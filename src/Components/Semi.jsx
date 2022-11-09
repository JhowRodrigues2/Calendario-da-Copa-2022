import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Game from "./Game";
import Undefined from "/src/assets/icon-undefined.svg";

const Semi = () => {
  return (
    <div>
      <Helmet>
        <title>Semi | Calendário Copa 2022</title>
        <meta name="description" content="semi final"></meta>
      </Helmet>
      <main className="cards">
        <Card date={"13/12"} day={"Terça"}>
          <Game player1={Undefined} player2={Undefined} hour={"16:00"} />
        </Card>
        <Card date={"13/12"} day={"Quarta"}>
          <Game player1={Undefined} player2={Undefined} hour={"16:00"} />
        </Card>
      </main>
    </div>
  );
};

export default Semi;
