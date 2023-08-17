import React from "react";
import { Card } from "./card";

const services = [
  {
    url: "/servicios/#diseño",
    name: "DISEÑO DE PROYECTOS",
    img: "/images/diseño.jpg",
  },
  {
    url: "/servicios/#gerencia",
    name: "GERENCIA DE PROYECTOS",
    img: "/images/gerencia.jpg",
  },
  {
    url: "/servicios/#indeci",
    name: "TRÁMITES DE INDECI",
    img: "/images/tramites.jpg",
  },
  {
    url: "/servicios/#construccion",
    name: "LICENCIAS DE CONSTRUCCIÓN",
    img: "/images/construccion.jpg",
  },
  {
    url: "/servicios/#funcionamiento",
    name: "LICENCIAS DE FUNCIONAMIENTO",
    img: "/images/indeci.jpg",
  },
  {
    url: "/servicios/#declaratoria",
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
      <div className="grid gap-6 px-6 max-w-6xl m-auto justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.url} {...service} />
        ))}
      </div>
      <div className="w-full flex justify-center pt-8">
        <a href="/servicios/#contacto">
          <button className="bg-custom_blue-300 hover:bg-custom_blue-400 text-white font-bold py-2 px-4 shadow-lg rounded-lg md:py-3 md:px-6 md:text-xl">
            Contáctanos
          </button>
        </a>
      </div>
    </section>
  );
}
