import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Game from "./Game";
import Argentina from "/src/assets/Argentina.svg";
import Croatia from "/src/assets/Netherlands.svg";
import Morocco from "/src/assets/Morocco.svg";
import France from "/src/assets/France.svg";

const Semi = () => {
  return (
    <div>
      <Helmet>
        <title>Semi | Calendário Copa 2022</title>
        <meta name="description" content="semi final"></meta>
      </Helmet>
      <main className="cards">
        <Card date={"13/12"} day={"Terça"}>
          <Game player1={Argentina} player2={Croatia} hour={"16:00"} />
        </Card>
        <Card date={"13/12"} day={"Quarta"}>
          <Game player1={France} player2={Morocco} hour={"16:00"} />
        </Card>
      </main>
    </div>
  );
};

export default Semi;
