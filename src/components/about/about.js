import React from "react";

export function About() {
  return (
    <section id="about" className="px-8 text-justify">
      <h2 className="text-2xl py-8 font-bold text-center md:text-4xl sm:py-12">
        Sobre nosotros
      </h2>
      <div className="">
        <h3 className="text-xl font-bold text-center sm:text-2xl">Misión</h3>
        <div className="flex flex-col md:flex-row max-w-5xl m-auto py-4 gap-8 md:items-center">
          <img className="max-h-64" src="svg/objectives.svg" alt="Visión" />
          <p className="md:text-lg">
            En Innova Arquitectos nos dedicamos a desarrollar servicios de
            gerenciamiento y gestión en proyectos de arquitectura e ingeniería,
            guiados por nuestra firme convicción de actuar de manera ética en
            todas nuestras acciones y decisiones. Nuestro compromiso es agregar
            valor a los requerimientos de nuestros clientes, superando sus
            expectativas y proporcionando soluciones innovadoras y efectivas.
            Nuestro objetivo final es contribuir al desarrollo sostenible y al
            progreso de las comunidades a través de nuestras actividades en el
            campo de la arquitectura y la ingeniería.
          </p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-center sm:text-2xl">Visión</h3>
        <div className="flex flex-col-reverse md:flex-row max-w-4xl m-auto py-4 gap-8 md:items-center">
          <p className="md:text-lg">
            Ser líderes en el desarrollo de proyectos de arquitectura e
            ingeniería, en la búsqueda del bien común de nuestra sociedad y el
            medio ambiente. Nos esforzamos por ir más allá de las expectativas
            convencionales y explorar constantemente nuevas oportunidades en el
            marco de la justicia, la innovación y la competitividad, procurando
            que esto se traduzca en satisfacción total para nuestros clientes y
            desarrollo integral de la organización.
          </p>
          <img className="max-h-60" src="svg/vision.svg" alt="Visión" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-center pb-2 sm:text-2xl">
        Nuestros Valores
      </h3>
      <div className="pt-6 pb-12 grid grid-rows-6 sm:grid-cols-3 sm:grid-rows-1 justify-items-center max-w-4xl m-auto">
        <div className="flex flex-wrap row-span-1 gap-4 sm:flex-col justify-evenly sm:text-right">
          <b className="md:text-lg">Innovación</b>
          <b className="md:text-lg">Integridad</b>
          <b className="md:text-lg">Responsabilidad</b>
        </div>
        <img className="row-span-4 my-4" src="svg/goals.svg" alt="Visión" />
        <div className="flex flex-wrap row-span-1 gap-4 sm:flex-col justify-evenly">
          <b className="md:text-lg">Liderazgo</b>
          <b className="md:text-lg">Competitividad</b>
          <b className="md:text-lg">Espíritu de Equipo</b>
        </div>
      </div>
    </section>
  );
}
