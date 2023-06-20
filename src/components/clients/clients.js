import React from "react";
import { Carousel } from "./carousel";

export const Clients = () => {
  const images = [
    "images/tiendas_efe.png",
    "images/la_curacao.png",
    "images/inkafarma.jpg",
    "images/mifarma.png",
    "images/clinica_centenario.jpg",
    "images/financiera_efectiva.png",
    "images/schorth_papelera.jpg",
    "images/motocorp.png",
    "images/acnur.jpg",
    "images/pacasmayo.jpg",
  ];

  return (
    <div id="clientes">
      <h2 className="block text-2xl font-bold text-center py-4">
        Confían en Innova
      </h2>
      <Carousel images={images} />
    </div>
  );
};
