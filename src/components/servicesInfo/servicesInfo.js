import React from "react";

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
          <a href="#contacto">
            <button className="absolute bottom-0 left-4 bg-custom_blue-300 hover:bg-custom_blue-400 text-white font-bold py-2 px-4 rounded-lg md:py-3 md:px-6 md:text-xl">
              Contáctanos
            </button>
          </a>
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
            alt="LICENCIAS DE CONSTRUCCIÓN"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              LICENCIAS DE CONSTRUCCIÓN
            </p>
            <p>
              Obtenemos todas las licencias y permisos necesarios para tu
              proyecto. Aseguramos que tu construcción cumpla con las
              regulaciones locales y se ejecute legalmente.
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
            alt="DECLARATORIA DE FABRICA Y HEREDEROS"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              DECLARATORIA DE FABRICA Y HEREDEROS
            </p>
            <p>
              Legalizamos edificaciones existentes y gestionamos asuntos de
              herencia en propiedades. Garantizamos que tus propiedades cumplan
              con las normativas legales y se transfieran adecuadamente.
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
            alt="TRÁMITES DE INDECI Y LICENCIAS DE FUNCIONAMIENTO"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              TRÁMITES DE INDECI Y LICENCIAS DE FUNCIONAMIENTO
            </p>
            <p>
              Gestionamos los trámites ante el INDECI y obtenemos las licencias
              de funcionamiento necesarias. Aseguramos que tu construcción
              cumpla con los requisitos de seguridad y regulaciones para su
              funcionamiento.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:items-center max-w-xl lg:max-h-96 lg:max-w-full border border-gray-400 rounded-lg shadow-md overflow-hidden">
          <img
            id="declaratoria"
            className="object-cover lg:w-1/2"
            src="/images/fabrica.jpg"
            alt="RECTIFICACIÓN DE LINDEROS"
          />
          <div className="p-4 text-center md:p-8">
            <p className="text-lg font-semibold pb-4 md:pb-8 lg:pb-4">
              RECTIFICACIÓN DE LINDEROS
            </p>
            <p>
              Legalizamos tu construcción en el Registro de Predios
              correspondiente. Añadimos valor a tu propiedad al inscribir la
              declaratoria de fábrica y facilitar su transferencia.
              Posibilitamos la independización de departamentos en caso de ser
              necesario.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
