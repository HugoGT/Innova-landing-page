import React from "react";
import { Card } from "./card";

const services = [
  { url: "#", name: "Diseño de Proyectos", img: "svg/presentation.svg" },
  { url: "#", name: "Gerencia de Proyectos", img: "svg/process.svg" },
  {
    url: "#",
    name: "Trámites de Licencia de Defensa Civil",
    img: "svg/reunion.svg",
  },
  {
    url: "#",
    name: "Licencias Municipales de Construcción",
    img: "svg/engineers.svg",
  },
  { url: "#", name: "Declaratioria de Fábrica", img: "svg/progress.svg" },
  { url: "#", name: "Metrados y Presupuestos", img: "svg/percentages.svg" },
];

export function Services() {
  return (
    <section id="services">
      <h2 className="block text-2xl font-bold text-center pt-4">
        Nuestros Servicios
      </h2>
      <div className="flex h-72 w-auto items-center space-x-4 overflow-x-auto overscroll-x-contain scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-600 dark:scrollbar-track-gray-600 dark:scrollbar-thumb-gray-400 px-6">
        {services.map((service) => (
          <Card key={service.url} {...service} />
        ))}
      </div>
    </section>
  );
}
