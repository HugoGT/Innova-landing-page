import React from "react";

export function About() {
  return (
    <section id="about" className="px-8 text-justify">
      <h2 className="text-2xl font-bold text-center">Sobre nosotros</h2>
      <div className="py-6">
        <h3 className="text-xl font-bold text-center pb-2">Misión</h3>
        <div className="flex">
          <img className="w-2/5" src="svg/investing.svg" alt="Visión" />
          <p className="w-3/5">
            En Innova Arquitectos nos dedicamos a desarrollar servicios de
            gerenciamiento y gestión en proyectos de arquitectura e ingeniería,
            guiados por nuestra firme convicción de actuar de manera ética en
            todas nuestras acciones y decisiones.
          </p>
        </div>
        <p>
          Nuestro compromiso es agregar valor a los requerimientos de nuestros
          clientes, superando sus expectativas y proporcionando soluciones
          innovadoras y efectivas. Nuestro objetivo final es contribuir al
          desarrollo sostenible y al progreso de las comunidades a través de
          nuestras actividades en el campo de la arquitectura y la ingeniería.
        </p>
      </div>
      <div className="py-6">
        <h3 className="text-xl font-bold text-center pb-2">Visión</h3>
        <div className="flex">
          <p className="w-3/5">
            Ser líderes en el desarrollo de proyectos de arquitectura e
            ingeniería, en la búsqueda del bien común de nuestra sociedad y el
            medio ambiente.
          </p>
          <img className="w-2/5" src="svg/vision.svg" alt="Visión" />
        </div>
        <p>
          Nos esforzamos por ir más allá de las expectativas convencionales y
          explorar constantemente nuevas oportunidades en el marco de la
          justicia, la innovación y la competitividad, procurando que esto se
          traduzca en satisfacción total para nuestros clientes y desarrollo
          integral de la organización.
        </p>
      </div>
      <h3 className="text-2xl font-bold text-center pb-2">Nuestros Valores</h3>
      <div className="pt-6 pb-12 grid grid-rows-6 sm:grid-cols-3 sm:grid-rows-1 justify-items-center max-w-4xl m-auto">
        <div className="flex flex-wrap row-span-1 gap-4 sm:flex-col justify-evenly sm:text-right">
          <b>Innovación</b>
          <b>Integridad</b>
          <b>Responsabilidad</b>
        </div>
        <img className="row-span-4 my-4" src="svg/goals.svg" alt="Visión" />
        <div className="flex flex-wrap row-span-1 gap-4 sm:flex-col justify-evenly">
          <b>Liderazgo</b>
          <b>Competitividad</b>
          <b>Espíritu de Equipo</b>
        </div>
      </div>
    </section>
  );
}
