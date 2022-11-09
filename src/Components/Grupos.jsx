import React from "react";
import Card from "./Card";
import Game from "./Game";
import Qatar from "/src/assets/Qatar.svg";
import Ecuador from "/src/assets/Ecuador.svg";
import England from "/src/assets/England.svg";
import Iran from "/src/assets/Iran.svg";
import Senegal from "/src/assets/Senegal.svg";
import Netherlands from "/src/assets/Netherlands.svg";
import EUA from "/src/assets/EUA.svg";
import Wales from "/src/assets/Wales.svg";
import Argentina from "/src/assets/Argentina.svg";
import Australia from "/src/assets/Australia.svg";
import Belgium from "/src/assets/Belgium.svg";
import Brazil from "/src/assets/Brazil.svg";
import Cameroon from "/src/assets/Cameroon.svg";
import Canada from "/src/assets/Canada.svg";
import CostaRica from "/src/assets/Costa-Rica.svg";
import Croatia from "/src/assets/Croatia.svg";
import Denmark from "/src/assets/Denmark.svg";
import France from "/src/assets/France.svg";
import Gana from "/src/assets/Gana.svg";
import Germany from "/src/assets/Germany.svg";
import Japan from "/src/assets/Japan.svg";
import Mexico from "/src/assets/Mexico.svg";
import Morocco from "/src/assets/Morocco.svg";
import Poland from "/src/assets/Poland.svg";
import Portugal from "/src/assets/Portugal.svg";
import SaudiArabia from "/src/assets/Saudi-Arabia.svg";
import Serbia from "/src/assets/Serbia.svg";
import SouthKorea from "/src/assets/South-korea.svg";
import Spain from "/src/assets/Spain.svg";
import Switzerland from "/src/assets/Switzerland.svg";
import Tunisia from "/src/assets/Tunisia.svg";
import Uruguai from "/src/assets/Uruguai.svg";

const Grupos = () => {
  return (
    <main className="cards">
      <Card date={"20/11"} day={"Domingo"}>
        <Game
          player1={Qatar}
          player2={Ecuador}
          hour={"13:00"}
          teamName1="CAT"
          teamName2={"EQU"}
        />
      </Card>
      <Card date={"21/11"} day={"Segunda"}>
        <Game
          player1={England}
          player2={Iran}
          hour={"10:00"}
          teamName1="ENG"
          teamName2={"IRA"}
        />
        <Game
          player1={Senegal}
          player2={Netherlands}
          hour={"13:00"}
          teamName1="SEN"
          teamName2={"HOL"}
        />
        <Game
          player1={EUA}
          player2={Wales}
          hour={"16:00"}
          teamName1={"EUA"}
          teamName2={"GAL"}
        />
      </Card>
      <Card date={"22/11"} day={"Terça"}>
        <Game
          player1={Argentina}
          player2={SaudiArabia}
          hour={"07:00"}
          teamName1={"ARG"}
          teamName2={"ARA"}
        />
        <Game
          player1={Denmark}
          player2={Tunisia}
          hour={"10:00"}
          teamName1={"DIN"}
          teamName2={"TUN"}
        />
        <Game
          player1={Mexico}
          player2={Poland}
          hour={"13:00"}
          teamName1={"MEX"}
          teamName2={"POL"}
        />
        <Game
          player1={France}
          player2={Australia}
          hour={"16:00"}
          teamName1={"FRAN"}
          teamName2={"AUS"}
        />
      </Card>
      <Card date={"23/11"} day={"Quarta"}>
        <Game
          player1={Morocco}
          player2={Croatia}
          hour={"07:00"}
          teamName1={"MAR"}
          teamName2={"CRO"}
        />
        <Game
          player1={Germany}
          player2={Japan}
          hour={"10:00"}
          teamName1={"ALE"}
          teamName2={"JAP"}
        />
        <Game
          player1={Spain}
          player2={CostaRica}
          hour={"13:00"}
          teamName1={"ESP"}
          teamName2={"COS"}
        />
        <Game
          player1={Belgium}
          player2={Canada}
          hour={"16:00"}
          teamName1={"BEL"}
          teamName2={"CAN"}
        />
      </Card>
      <Card date={"24/11"} day={"Quinta"}>
        <Game
          player1={Switzerland}
          player2={Cameroon}
          hour={"07:00"}
          teamName1={"SUI"}
          teamName2={"CAM"}
        />
        <Game
          player1={Uruguai}
          player2={SouthKorea}
          hour={"10:00"}
          teamName1={"URU"}
          teamName2={"COR"}
        />
        <Game
          player1={Portugal}
          player2={Gana}
          hour={"13:00"}
          teamName1={"POR"}
          teamName2={"GAN"}
        />
        <Game
          player1={Brazil}
          player2={Serbia}
          hour={"16:00"}
          teamName1={"BRA"}
          teamName2={"SER"}
        />
      </Card>
      <Card date={"25/11"} day={"Sexta"}>
        <Game
          player1={Wales}
          player2={Iran}
          hour={"07:00"}
          teamName1={"GAL"}
          teamName2={"IRA"}
        />
        <Game
          player1={Qatar}
          player2={Senegal}
          hour={"10:00"}
          teamName1={"CAT"}
          teamName2={"SEN"}
        />
        <Game
          player1={Netherlands}
          player2={Ecuador}
          hour={"13:00"}
          teamName1={"HOL"}
          teamName2={"EQU"}
        />
        <Game
          player1={England}
          player2={EUA}
          hour={"16:00"}
          teamName1={"ING"}
          teamName2={"EUA"}
        />
      </Card>
      <Card date={"26/11"} day={"Sábado"}>
        <Game
          player1={Tunisia}
          player2={Australia}
          hour={"07:00"}
          teamName1={"TUN"}
          teamName2={"AUS"}
        />
        <Game
          player1={Poland}
          player2={SaudiArabia}
          hour={"10:00"}
          teamName1={"POL"}
          teamName2={"ARA"}
        />
        <Game
          player1={France}
          player2={Denmark}
          hour={"13:00"}
          teamName1={"FRA"}
          teamName2={"DIN"}
        />
        <Game
          player1={Argentina}
          player2={Mexico}
          hour={"16:00"}
          teamName1={"ARG"}
          teamName2={"MEX"}
        />
      </Card>
      <Card date={"27/11"} day={"Domingo"}>
        <Game
          player1={Japan}
          player2={CostaRica}
          hour={"07:00"}
          teamName1={"JAP"}
          teamName2={"COS"}
        />
        <Game
          player1={Belgium}
          player2={Morocco}
          hour={"10:00"}
          teamName1={"BEL"}
          teamName2={"MAR"}
        />
        <Game
          player1={Croatia}
          player2={Canada}
          hour={"13:00"}
          teamName1={"CRO"}
          teamName2={"CAN"}
        />
        <Game
          player1={Spain}
          player2={Germany}
          hour={"16:00"}
          teamName1={"ESP"}
          teamName2={"ALE"}
        />
      </Card>
      <Card date={"28/11"} day={"Segunda"}>
        <Game
          player1={Cameroon}
          player2={Serbia}
          hour={"07:00"}
          teamName1={"CAM"}
          teamName2={"SER"}
        />
        <Game
          player1={SouthKorea}
          player2={Gana}
          hour={"10:00"}
          teamName1={"COR"}
          teamName2={"GAN"}
        />
        <Game
          player1={Brazil}
          player2={Switzerland}
          hour={"13:00"}
          teamName1={"BRA"}
          teamName2={"SUI"}
        />
        <Game
          player1={Portugal}
          player2={Uruguai}
          hour={"16:00"}
          teamName1={"POR"}
          teamName2={"URU"}
        />
      </Card>
      <Card date={"29/11"} day={"Terça"}>
        <Game
          player1={Ecuador}
          player2={Senegal}
          hour={"12:00"}
          teamName1={"EQU"}
          teamName2={"SEN"}
        />
        <Game
          player1={Netherlands}
          player2={Qatar}
          hour={"12:00"}
          teamName1={"HOL"}
          teamName2={"CAT"}
        />
        <Game
          player1={Iran}
          player2={EUA}
          hour={"16:00"}
          teamName1={"IRA"}
          teamName2={"EUA"}
        />
        <Game
          player1={Wales}
          player2={England}
          hour={"16:00"}
          teamName1={"GAL"}
          teamName2={"ING"}
        />
      </Card>
      <Card date={"30/11"} day={"Quarta"}>
        <Game
          player1={Tunisia}
          player2={France}
          hour={"12:00"}
          teamName1={"TUN"}
          teamName2={"FRA"}
        />
        <Game
          player1={Australia}
          player2={Denmark}
          hour={"12:00"}
          teamName1={"AUS"}
          teamName2={"DIN"}
        />
        <Game
          player1={Poland}
          player2={Argentina}
          hour={"16:00"}
          teamName1={"POL"}
          teamName2={"ARG"}
        />
        <Game
          player1={SaudiArabia}
          player2={Mexico}
          hour={"16:00"}
          teamName1={"ARA"}
          teamName2={"MEX"}
        />
      </Card>
      <Card date={"01/12"} day={"Quinta"}>
        <Game
          player1={Croatia}
          player2={Belgium}
          hour={"12:00"}
          teamName1={"CRO"}
          teamName2={"BEL"}
        />
        <Game
          player1={Canada}
          player2={Morocco}
          hour={"12:00"}
          teamName1={"CAN"}
          teamName2={"MAR"}
        />
        <Game
          player1={Japan}
          player2={Spain}
          hour={"16:00"}
          teamName1={"JAP"}
          teamName2={"ESP"}
        />
        <Game
          player1={CostaRica}
          player2={Germany}
          hour={"16:00"}
          teamName1={"COST"}
          teamName2={"ALE"}
        />
      </Card>
      <Card date={"02/12"} day={"Sexta"}>
        <Game
          player1={SouthKorea}
          player2={Portugal}
          hour={"12:00"}
          teamName1={"COR"}
          teamName2={"POR"}
        />
        <Game
          player1={Gana}
          player2={Uruguai}
          hour={"12:00"}
          teamName1={"GAN"}
          teamName2={"URU"}
        />
        <Game
          player1={Serbia}
          player2={Switzerland}
          hour={"16:00"}
          teamName1={"SER"}
          teamName2={"SUI"}
        />
        <Game
          player1={Cameroon}
          player2={Brazil}
          hour={"16:00"}
          teamName1={"CAM"}
          teamName2={"BRA"}
        />
      </Card>
    </main>
  );
};

export default Grupos;
