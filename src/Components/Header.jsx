import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/";
import Logo from "/src/assets/logo.svg";

const Header = () => {
  return (
    <header>
      <Helmet>
        <title>Fase de grupos | Calendário Copa 2022</title>
        <meta name="description" content="group stage"></meta>
      </Helmet>
      <Link to="/" className="link">
        <img src={Logo} alt="project Logo"></img>
      </Link>
      <div>
        <ul className="menu">
          <li>
            <Link to={"/"} className="link">
              Grupos
            </Link>
          </li>
          <li>
            <Link to={"/oitavas"} className="link">
              Oitavas
            </Link>
          </li>
          <li>
            <Link to={"/quartas"} className="link">
              Quartas
            </Link>
          </li>
          <Link to={"/semi"} className="link">
            Semi
          </Link>
          <Link to={"/final"} className="link">
            Finais
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
