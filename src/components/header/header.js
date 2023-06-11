import React from "react";
import { NavLink } from "./navLink.js";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  { url: "#", name: "Servicios" },
  { url: "#", name: "Nosotros" },
  { url: "#", name: "Contacto" },
  { url: "#", name: "Confían en Innova" },
];

export function Header() {
  return (
    <header className="py-3 px-6 bg-neutral-200 flex justify-between items-center">
      <img
        src="images/innova-logo.png"
        alt="logo innova arquitectos"
        className="h-12 px-2 mt-1"
      />
      <details className="group">
        <summary className="list-none p-2 group-open:before:fixed group-open:before:inset-0">
          <RxHamburgerMenu className="text-2xl" />
        </summary>
        <nav className="absolute top-16 left-0 bg-neutral-200 w-full p-4 text-xl z-20 text-center">
          <ul>
            {links.map((link) => (
              <NavLink key={link.url} {...link} />
            ))}
          </ul>
        </nav>
      </details>
    </header>
  );
}
