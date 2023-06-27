import React from "react";

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

export function ServicesInfo() {
  return (
    <>
      <div className="flex flex-col gap-8 justify-around bg-gradient-to-br p-8 from-p_green-200/80 to-60% to-sky-100 sm:flex-row sm:items-center">
        <p className="text-2xl max-w-screen-sm sm:text-4xl">
          Únete a <b>Innova Arquitectos</b> y descubre cómo podemos agregar
          valor a tu proyecto.
        </p>
        <div className="relative max-w-lg">
          <img src="/svg/investing.svg" alt="Agregando valor al proyecto" />
          <button className="absolute bottom-0 left-4 bg-custom_blue-500/80 hover:bg-custom_blue-500 text-white font-bold py-2 px-4 rounded-lg md:py-3 md:px-6 md:text-xl">
            Contáctanos
          </button>
        </div>
      </div>
      <p className="pt-6 pb-2 text-2xl font-bold text-center md:text-4xl md:pt-10 md:pb-6">
        Nuestros servicios
      </p>
      <div className="flex flex-col gap-6 items-center p-6 max-w-6xl m-auto lg:pb-12">
        <div
          id="diseño"
          className="flex flex-col lg:flex-row lg:items-center max-w-xl lg:max-w-full border border-gray-400 rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="object-cover lg:w-1/2"
            src="/images/diseño.jpg"
            alt="Diseño de proyectos"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              DISEÑO DE PROYECTOS
            </p>
            <p>
              Diseñamos proyectos en conjunto para tus ambientes deseados,
              planificando la estructura y criterios de éxito. Desarrollamos
              varios diseños para elegir el mejor en la ejecución del proyecto.
              Entregamos planos de arquitectura, seguridad, estructuras,
              instalaciones eléctricas e instalaciones sanitarias, además de
              memorias descriptivas, esquemas, detalles 3d y perspectivas que
              sirven para llevar a cabo la edificación de cualquier
              construcción.
            </p>
          </div>
        </div>
        <div
          id="gerencia"
          className="flex flex-col lg:flex-row-reverse lg:items-center max-w-xl lg:max-w-full border border-gray-400 rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="object-cover lg:w-1/2"
            src="/images/gerencia.jpg"
            alt="Gerencia de proyectos"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              GERENCIA DE PROYECTOS
            </p>
            <p>
              Utilizaremos todos nuestros conocimientos y estrategias para
              llevar a cabo la planeación, ejecución y monitoreo de su proyecto,
              utilizando el método Lean Construction o Construcción sin
              Pérdidas, cumpliendo las metas deseadas en los plazos
              establecidos.
            </p>
          </div>
        </div>
        <div
          id="indeci"
          className="flex flex-col lg:flex-row lg:items-center max-w-xl lg:max-w-full border lg:max-h-96 border-gray-400 rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="object-cover md:h-[34rem]"
            src="/images/tramites.jpg"
            alt="TRÁMITES DE INDECI"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              TRÁMITES DE INDECI
            </p>
            <p>
              Diseñamos proyectos en conjunto para tus ambientes deseados,
              planificando la estructura y criterios de éxito. Desarrollamos
              varios diseños para elegir el mejor en la ejecución del proyecto.
              Entregamos planos de arquitectura, seguridad, estructuras,
              instalaciones eléctricas e instalaciones sanitarias, además de
              memorias descriptivas, esquemas, detalles 3d y perspectivas que
              sirven para llevar a cabo la edificación de cualquier
              construcción.
            </p>
          </div>
        </div>
        <div
          id="construccion"
          className="flex flex-col lg:flex-row-reverse lg:items-center max-w-xl lg:max-w-full lg:max-h-96 border border-gray-400 rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="object-cover h-96 lg:h-full lg:w-1/2"
            src="/images/construccion.jpg"
            alt="LICENCIAS DE CONSTRUCCIÓN"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              LICENCIAS DE CONSTRUCCIÓN
            </p>
            <p>
              Utilizaremos todos nuestros conocimientos y estrategias para
              llevar a cabo la planeación, ejecución y monitoreo de su proyecto,
              utilizando el método Lean Construction o Construcción sin
              Pérdidas, cumpliendo las metas deseadas.
            </p>
          </div>
        </div>
        <div
          id="funcionamiento"
          className="flex flex-col lg:flex-row lg:items-center max-w-xl lg:max-w-full border border-gray-400 rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="object-cover lg:w-1/2"
            src="/images/indeci.jpg"
            alt="LICENCIAS DE FUNCIONAMIENTO"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              LICENCIAS DE FUNCIONAMIENTO
            </p>
            <p>
              Diseñamos proyectos en conjunto para tus ambientes deseados,
              planificando la estructura y criterios de éxito. Desarrollamos
              varios diseños para elegir el mejor en la ejecución del proyecto.
              Entregamos planos de arquitectura, seguridad, estructuras,
              instalaciones eléctricas e instalaciones sanitarias, además de
              memorias descriptivas, esquemas, detalles 3d y perspectivas que
              sirven para llevar a cabo la edificación de cualquier
              construcción.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center max-w-xl lg:max-h-96 lg:max-w-full border border-gray-400 rounded-lg shadow-md overflow-hidden">
          <img
            id="declaratoria"
            className="object-cover lg:w-1/2"
            src="/images/fabrica.jpg"
            alt="DECLARATORIA DE FÁBRICA"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              DECLARATORIA DE FÁBRICA
            </p>
            <p>
              Inscribimos tu construcción con el lote en el Registro de Predios
              correspondiente, consignando las características y condiciones
              técnicas de la obra. Al inscribir la declaratoria de fábrica de tu
              predio, le damos el carácter legal a lo construido, facilitando la
              transferencia del mismo además de revalorizarlo. Asimismo, la
              inscripción de la declaratoria de fábrica permite, en caso se
              trate de departamentos, la independización de los mismos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
