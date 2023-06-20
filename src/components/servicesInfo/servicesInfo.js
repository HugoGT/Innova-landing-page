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
          <button className="absolute bottom-0 left-4 bg-custom_blue-500/80 hover:bg-custom_blue-500 text-white font-bold py-2 px-4 rounded-lg md:py-3 md:px-6 md:text-xl">
            Contáctanos
          </button>
        </div>
      </div>
      <p className="pt-6 pb-2 text-2xl font-black text-center md:text-4xl">
        Nuestros servicios
      </p>
      <div className="grid gap-4 p-6 max-w-7xl m-auto sm:grid-cols-2 lg:grid-cols-3 lg:pb-12">
        <a
          href="#"
          className="relative border rounded-lg hover:bg-black hover:opacity-60"
        >
          <p className="absolute text-white text-4xl bottom-24 right-24">
            LO QUIERO!
          </p>
          <div className="border border-gray-400 rounded-lg p-4 shadow-md">
            <img src="/svg/process.svg" alt="Gerencia de proyectos" />
            <p className="text-lg font-semibold py-2">Diseño de Proyectos</p>
            <p className="">
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
        </a>
        <div className="border border-gray-400 rounded-lg p-4 shadow-md">
          <img src="/svg/presentation.svg" alt="Gerencia de proyectos" />
          <p className="text-lg font-semibold py-2">Gerencia de Proyectos</p>
          <p className="">
            Utilizaremos todos nuestros conocimientos y estrategias para llevar
            a cabo la planeación, ejecución y monitoreo de su proyecto,
            utilizando el método Lean Construction o Construcción sin Pérdidas,
            cumpliendo las metas deseadas.
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg p-4 shadow-md">
          <img src="/svg/reunion.svg" alt="Gerencia de proyectos" />
          <p className="text-lg font-semibold py-2">Trámites de INDECI</p>
          <p className="">
            Utilizaremos todos nuestros conocimientos y estrategias para llevar
            a cabo la planeación, ejecución y monitoreo de su proyecto,
            utilizando el método Lean Construction o Construcción sin Pérdidas,
            cumpliendo las metas deseadas.
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg p-4 shadow-md">
          <img src="/svg/engineers.svg" alt="Gerencia de proyectos" />
          <p className="text-lg font-semibold py-2">
            Licencias Municipales de Construcción
          </p>
          <p className="">
            Utilizaremos todos nuestros conocimientos y estrategias para llevar
            a cabo la planeación, ejecución y monitoreo de su proyecto,
            utilizando el método Lean Construction o Construcción sin Pérdidas,
            cumpliendo las metas deseadas.
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg p-4 shadow-md">
          <img src="/svg/progress.svg" alt="Gerencia de proyectos" />
          <p className="text-lg font-semibold py-2">
            Licencias de Funcionamiento
          </p>
          <p className="">
            Utilizaremos todos nuestros conocimientos y estrategias para llevar
            a cabo la planeación, ejecución y monitoreo de su proyecto,
            utilizando el método Lean Construction o Construcción sin Pérdidas,
            cumpliendo las metas deseadas.
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg p-4 shadow-md">
          <img src="/svg/declaration.svg" alt="Gerencia de proyectos" />
          <p className="text-lg font-semibold py-2">Declaratoria de Fábrica</p>
          <p className="">
            Inscribimos tu construcción con el lote en el Registro de Predios
            correspondiente, consignando las características y condiciones
            técnicas de la obra. Al inscribir la declaratoria de fábrica de tu
            predio, le damos el carácter legal a lo construido, facilitando la
            transferencia del mismo además de revalorizarlo. Asimismo, la
            inscripción de la declaratoria de fábrica permite, en caso se trate
            de departamentos, la independización de los mismos.
          </p>
        </div>
      </div>
    </>
  );
}
