import React from "react";
import Card from "./Card";
import Game from "./Game";

const Grupos = () => {
  return (
    <main className="cards">
      <Card date={"20/11"} day={"Domingo"}>
        <Game player1={"Qatar"} player2={"Ecuador"} hour={"13:00"} />
      </Card>
      <Card date={"21/11"} day={"Segunda"}>
        <Game player1={"England"} player2={"Iran"} hour={"10:00"} />
        <Game player1={"Senegal"} player2={"Netherlands"} hour={"13:00"} />
        <Game player1={"EUA"} player2={"Wales"} hour={"16:00"} />
      </Card>
      <Card date={"22/11"} day={"Terça"}>
        <Game player1={"Argentina"} player2={"Saudi-Arabia"} hour={"07:00"} />
        <Game player1={"Denmark"} player2={"Tunisia"} hour={"10:00"} />
        <Game player1={"Mexico"} player2={"Poland"} hour={"13:00"} />
        <Game player1={"France"} player2={"Australia"} hour={"16:00"} />
      </Card>
      <Card date={"23/11"} day={"Quarta"}>
        <Game player1={"Morocco"} player2={"Croatia"} hour={"07:00"} />
        <Game player1={"Germany"} player2={"Japan"} hour={"10:00"} />
        <Game player1={"Spain"} player2={"Costa-Rica"} hour={"13:00"} />
        <Game player1={"Belgium"} player2={"Canada"} hour={"16:00"} />
      </Card>
      <Card date={"24/11"} day={"Quinta"}>
        <Game player1={"Switzerland"} player2={"Cameroon"} hour={"07:00"} />
        <Game player1={"Uruguai"} player2={"South-Korea"} hour={"10:00"} />
        <Game player1={"Portugal"} player2={"Gana"} hour={"13:00"} />
        <Game player1={"Brazil"} player2={"Serbia"} hour={"16:00"} />
      </Card>
      <Card date={"25/11"} day={"Sexta"}>
        <Game player1={"Wales"} player2={"Iran"} hour={"07:00"} />
        <Game player1={"Qatar"} player2={"Senegal"} hour={"10:00"} />
        <Game player1={"Netherlands"} player2={"Ecuador"} hour={"13:00"} />
        <Game player1={"England"} player2={"EUA"} hour={"16:00"} />
      </Card>
      <Card date={"26/11"} day={"Sábado"}>
        <Game player1={"Tunisia"} player2={"Australia"} hour={"07:00"} />
        <Game player1={"Poland"} player2={"Saudi-Arabia"} hour={"10:00"} />
        <Game player1={"France"} player2={"Denmark"} hour={"13:00"} />
        <Game player1={"Argentina"} player2={"Mexico"} hour={"16:00"} />
      </Card>
      <Card date={"27/11"} day={"Domingo"}>
        <Game player1={"Japan"} player2={"Costa-Rica"} hour={"07:00"} />
        <Game player1={"Belgium"} player2={"Morocco"} hour={"10:00"} />
        <Game player1={"Croatia"} player2={"Canada"} hour={"13:00"} />
        <Game player1={"Spain"} player2={"Germany"} hour={"16:00"} />
      </Card>
      <Card date={"28/11"} day={"Segunda"}>
        <Game player1={"Cameroon"} player2={"Serbia"} hour={"07:00"} />
        <Game player1={"South-korea"} player2={"Gana"} hour={"10:00"} />
        <Game player1={"Brazil"} player2={"Switzerland"} hour={"13:00"} />
        <Game player1={"Portugal"} player2={"Uruguai"} hour={"16:00"} />
      </Card>
      <Card date={"29/11"} day={"Terça"}>
        <Game player1={"Ecuador"} player2={"Senegal"} hour={"12:00"} />
        <Game player1={"Netherlands"} player2={"Qatar"} hour={"12:00"} />
        <Game player1={"Iran"} player2={"EUA"} hour={"16:00"} />
        <Game player1={"Wales"} player2={"England"} hour={"16:00"} />
      </Card>
      <Card date={"30/11"} day={"Quarta"}>
        <Game player1={"Tunisia"} player2={"France"} hour={"12:00"} />
        <Game player1={"Australia"} player2={"Denmark"} hour={"12:00"} />
        <Game player1={"Poland"} player2={"Argentina"} hour={"16:00"} />
        <Game player1={"Saudi-Arabia"} player2={"Mexico"} hour={"16:00"} />
      </Card>
      <Card date={"01/12"} day={"Quinta"}>
        <Game player1={"Croatia"} player2={"Belgium"} hour={"12:00"} />
        <Game player1={"Canada"} player2={"Morocco"} hour={"12:00"} />
        <Game player1={"Japan"} player2={"Spain"} hour={"16:00"} />
        <Game player1={"Costa-Rica"} player2={"Germany"} hour={"16:00"} />
      </Card>
      <Card date={"02/12"} day={"Sexta"}>
        <Game player1={"South-korea"} player2={"Portugal"} hour={"12:00"} />
        <Game player1={"Gana"} player2={"Uruguai"} hour={"12:00"} />
        <Game player1={"Serbia"} player2={"Switzerland"} hour={"16:00"} />
        <Game player1={"Cameroon"} player2={"Brazil"} hour={"16:00"} />
      </Card>
    </main>
  );
};

export default Grupos;
