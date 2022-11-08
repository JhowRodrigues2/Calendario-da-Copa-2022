import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Grupos from "./Components/Grupos";
import Oitavas from "./Components/Oitavas";
import Quartas from "./Components/Quartas";
import Semi from "./Components/Semi";
import Final from "./Components/Final";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Grupos />} />
          <Route path="/oitavas" element={<Oitavas />} />
          <Route path="/quartas" element={<Quartas />} />
          <Route path="/semi" element={<Semi />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
