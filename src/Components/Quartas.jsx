import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Game from "./Game";
import Undefined from "/src/assets/icon-undefined.svg";
import Argentina from "/src/assets/Argentina.svg";
import Netherlands from "/src/assets/Netherlands.svg";
import England from "/src/assets/England.svg";
import France from "/src/assets/France.svg";

const Quartas = () => {
  return (
    <div>
      <Helmet>
        <title>Quartas | Calendário Copa 2022</title>
        <meta name="description" content="quarter finals"></meta>
      </Helmet>
      <main className="cards">
        <Card date={"09/12"} day={"Sexta"}>
          <Game player1={Undefined} player2={Undefined} hour={"12:00"} />
          <Game player1={Argentina} player2={Netherlands} hour={"16:00"} />
        </Card>
        <Card date={"10/12"} day={"Sábado"}>
          <Game player1={Undefined} player2={Undefined} hour={"12:00"} />
          <Game player1={England} player2={France} hour={"16:00"} />
        </Card>
      </main>
    </div>
  );
};

export default Quartas;
