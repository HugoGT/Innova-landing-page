import React from "react";
import { Card } from "./card";

const services = [
  {
    url: "/servicios",
    name: "DISEÑO DE PROYECTOS",
    img: "/images/diseño.jpg",
  },
  {
    url: "/servicios",
    name: "GERENCIA DE PROYECTOS",
    img: "/images/gerencia.jpg",
  },
  {
    url: "/servicios",
    name: "TRÁMITES DE INDECI",
    img: "/images/tramites.jpg",
  },
  {
    url: "/servicios",
    name: "LICENCIAS DE CONSTRUCCIÓN",
    img: "/images/construccion.jpg",
  },
  {
    url: "/servicios",
    name: "LICENCIAS DE FUNCIONAMIENTO",
    img: "/images/indeci.jpg",
  },
  {
    url: "/servicios",
    name: "DECLARATORIA DE FÁBRICA",
    img: "/images/fabrica.jpg",
  },
];

export function Services() {
  return (
    <section id="servicios">
      <h2 className="block text-2xl font-bold text-center py-6 md:text-4xl md:py-12">
        Servicios
      </h2>
      <div className="grid gap-6 px-6 max-w-6xl m-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3 lg:pb-8">
        {services.map((service) => (
          <Card key={service.url} {...service} />
        ))}
      </div>
    </section>
  );
}
