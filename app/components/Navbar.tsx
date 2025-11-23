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
        <li>
          <a href="/CV">Contact</a>
        </li>
        <li>
          <a href="#projets">Projets</a>
        </li>
        <li>
          <a href="/">A propos</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;