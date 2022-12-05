import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import Game from "./Game";
import Netherlands from "/src/assets/Netherlands.svg";
import EUA from "/src/assets/EUA.svg";
import Argentina from "/src/assets/Argentina.svg";
import Australia from "/src/assets/Australia.svg";
import France from "/src/assets/France.svg";
import Poland from "/src/assets/Poland.svg";
import England from "/src/assets/England.svg";
import Senegal from "/src/assets/Senegal.svg";
import Japan from "/src/assets/Japan.svg";
import Croatia from "/src/assets/Netherlands.svg";
import Brazil from "/src/assets/Brazil.svg";
import SouthKorea from "/src/assets/South-Korea.svg";
import Morocco from "/src/assets/Morocco.svg";
import Spain from "/src/assets/Spain.svg";
import Portugal from "/src/assets/Portugal.svg";
import Switzerland from "/src/assets/Switzerland.svg";

const Oitavas = () => {
  return (
    <div>
      <Helmet>
        <title>Oitavas | Calendário Copa 2022</title>
        <meta name="description" content="round of 16"></meta>
      </Helmet>
      <main className="cards">
        <Card date={"03/12"} day={"Sábado"}>
          <Game player1={Netherlands} player2={EUA} hour={"12:00"} Undefined />
          <Game player1={Argentina} player2={Australia} hour={"16:00"} />
        </Card>
        <Card date={"04/12"} day={"Domingo"}>
          <Game player1={France} player2={Poland} hour={"12:00"} />
          <Game player1={England} player2={Senegal} hour={"16:00"} />
        </Card>
        <Card date={"05/12"} day={"Segunda"}>
          <Game player1={Japan} player2={Croatia} hour={"12:00"} />
          <Game player2={Brazil} player1={SouthKorea} hour={"16:00"} />
        </Card>
        <Card date={"06/12"} day={"Terça"}>
          <Game player1={Morocco} player2={Spain} hour={"12:00"} />
          <Game player1={Portugal} player2={Switzerland} hour={"16:00"} />
        </Card>
      </main>
    </div>
  );
};

export default Oitavas;
