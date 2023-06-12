import React from "react";
import { Card } from "./card";
import { Header } from "./header";
import { Hero } from "./hero";

const services = [
  { url: "#", name: "Diseño de Proyectos", img: "images/diseño.jpg" },
  { url: "#", name: "Gerencia de Proyectos", img: "images/gerencia.jpg" },
  {
    url: "#",
    name: "Trámites de Licencia de Defensa Civil",
    img: "images/indeci.jpg",
  },
  {
    url: "#",
    name: "Licencias Municipales de Construcción",
    img: "images/proveedores.jpg",
  },
  { url: "#", name: "Declaratioria de Fábrica", img: "images/tramites.jpg" },
  { url: "#", name: "Metrados y Presupuestos", img: "images/presupuesto.jpg" },
];

export function Layout() {
  return (
    <>
      <Header />
      <main className="font-sans">
        <Hero />
        <h2 className="block text-2xl font-bold text-center pt-4">
          Nuestros Servicios
        </h2>
        <div className="flex h-72 w-auto items-center space-x-4 overflow-x-auto overscroll-x-contain scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-400 px-6">
          {services.map((service) => (
            <Card key={service.url} {...service} />
          ))}
        </div>
      </main>
    </>
  );
}
