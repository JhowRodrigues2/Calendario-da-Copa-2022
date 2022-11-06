import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Game from "./Components/Game";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <main id="cards">
        <Card date={"24/11"} day={"Quinta"}>
          <Game player1={"Brazil"} player2={"Serbia"} hour={"13:00"} />
          <Game player1={"Portugal"} player2={"Uruguai"} hour={"16:00"} />
          <Game player1={"Brazil"} player2={"Cameroon"} hour={"16:00"} />
        </Card>
        <Card date={"28/11"} day={"Segunda"} />
        <Card date={"28/11"} day={"Segunda"} />
      </main>
    </div>
  );
}

export default App;
