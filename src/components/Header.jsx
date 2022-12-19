import "../styles/header.css";

import logo from "../assets/Logo.png"
import { useState } from "react";
import { AiOutlineHome, AiOutlineTeam } from "react-icons/ai"


export const Header = () => {

  const [respons, setResponse] = useState(false)

  return (
    <>
      <header className="header">
        <nav className="navbar">

          <div className="max-width" >

            <div className="logo">

              <a href="/"> <img className="logo" src={logo} alt="Logo" />  </a>
            </div>

            <ul className={respons ? 'menu' : 'menu on'}  >
              <li><a href="/" className="menu-btn"><AiOutlineHome /> Home</a></li>
              {/* <li><a href="/" className="menu-btn">Sobre Empresa</a></li> */}
              <li><a href="/sobre" className="menu-btn"><AiOutlineTeam /> Sobre nós</a></li>
            </ul>

            <div className="menu-btn" onClick={() => { setResponse(!respons) }}>
              <i className={respons ? "icon on fas fa-bars" : 'fas fa-bars '} ></i>

            </div>
          </div>

        </nav>


      </header>
    </>
  );
};
