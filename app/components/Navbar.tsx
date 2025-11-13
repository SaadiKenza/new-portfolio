import Link from "next/link";
import { type ReactNode } from "react";

type NavlinksProps ={
    href: string 
    children: ReactNode
}

function NavLink(props:NavlinksProps){
    return(
        <li className="hover:bg-slate-600 py-2 px-2">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )
}
export default function Navbar(){
  return(
    <nav className ="bg-slate-800 text-slate-50 shadow-xl">
      <ul className ="container mx-auto flex gap-4">
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/">CV</Link></li>
      </ul>
    </nav>
  )
}