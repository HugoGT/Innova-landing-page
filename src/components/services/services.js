import React from "react";
import { Card } from "./card";

const services = [
  {
    url: "/servicios",
    name: "DISEÑO DE PROYECTOS",
    img: "/svg/process.svg",
    description:
      "Diseñamos proyectos en conjunto para tus ambientes deseados, planificando la estructura y criterios de éxito. Desarrollamos varios diseños para elegir el mejor en la ejecución del proyecto. Entregamos planos de arquitectura, seguridad, estructuras, instalaciones eléctri memorias descriptivas, esquemas, detalles 3d y perspectivas que sirven para llevar a cabo la edificación de cualquier construcción.",
  },
  {
    url: "/servicios",
    name: "GERENCIA DE PROYECTOS",
    img: "/svg/presentation.svg",
    description:
      "Utilizaremos todos nuestros conocimientos y estrategias para llevar a cabo la planeación, ejecución y monitoreo de su proyecto, utilizando el método Lean Construction o Construcción sin Pérdidas, cumpliendo las metas deseadas.",
  },
  {
    url: "/servicios",
    name: "TRÁMITES DE INDECI",
    img: "/svg/reunion.svg",
    description:
      "Utilizaremos todos nuestros conocimientos y estrategias para llevar a cabo la planeación, ejecución y monitoreo de su proyecto, utilizando el método Lean Construction o Construcción sin Pérdidas cumpliendo las metas deseadas.",
  },
  {
    url: "/servicios",
    name: "LICENCIAS MUNICIPALES DE CONSTRUCCIÓN",
    img: "/svg/engineers.svg",
    description:
      "Utilizaremos todos nuestros conocimientos y estrategias para llevar a cabo la planeación, ejecución y monitoreo de su proyecto, utilizando el método Lean Construction o Construcción sin Pérdidas cumpliendo las metas deseadas.",
  },
  {
    url: "/servicios",
    name: "LICENCIAS DE FUNCIONAMIENTO",
    img: "/svg/progress.svg",
    description:
      "Utilizaremos todos nuestros conocimientos y estrategias para llevar a cabo la planeación, ejecución y monitoreo de su proyecto, utilizando el método Lean Construction o Construcción sin Pérdidas cumpliendo las metas deseadas.",
  },
  {
    url: "/servicios",
    name: "DECLARATORIA DE FÁBRICA",
    img: "/svg/declaration.svg",
    description:
      "Inscribimos tu construcción con el lote en el Registro de Predios correspondiente, consignando las características y condiciones técnicas de la obra. Al inscribir la declaratoria de fábrica de tu predio, le damos el carácter legal a lo construido, facilitando la transferencia del mismo además de revalorizarlo. Asimismo, la inscripción de la declaratoria de fábrica permite, en caso se trate de departamentos, la independización de los mismos.",
  },
];

export function Services() {
  return (
    <section id="servicios">
      <h2 className="block text-2xl font-bold text-center pt-4">
        Nuestros Servicios
      </h2>
      <div className="grid gap-4 p-6 max-w-7xl m-auto sm:grid-cols-2 lg:grid-cols-3 lg:pb-12">
        {services.map((service) => (
          <Card key={service.url} {...service} />
        ))}
      </div>
    </section>
  );
}
