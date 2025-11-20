import Link from "next/link";
import { type ReactNode } from "react";

type NavlinksProps ={
    href: string 
    children: ReactNode
}
const Header: React.FC = () => {
  return (
    <div className="header-container">
      <img
        src="/logo.png"
        alt="Logo de bienvenue"
        className="logo-page"
      />
      <ul>
        <li className="dropdown">
          <button
            type="button"
            className="dropbtn"
            aria-haspopup="true"
          >
            Langue
          </button>
            <div className="dropdown-content">
              <a href="#">Français</a>
              <a href="#">Anglais</a>
            </div>
        </li>
        <li>
          <a href="/CV">Contact</a>
        </li>
        <li>
          <a href="#projets">Projets</a>
        </li>
        <li>
          <a href="/Aboutme">A propos</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;