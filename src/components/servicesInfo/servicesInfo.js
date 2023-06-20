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
      <div>
        <p className="my-4 text-2xl font-bold text-center">
          Nuestros servicios
        </p>
        <ul>
          <li>
            <b>Gerencia de proyectos:</b> Utilizaremos todos nuestros
            conocimientos y estrategias para llevar a cabo la planeación,
            ejecución y monitoreo de su proyecto, utilizando el método Lean
            Construction o Construcción sin Pérdidas, cumpliendo las metas
            deseadas.
          </li>
          <li>
            <b>Diseño de proyectos:</b> Diseñamos tus proyectos en el que
            planificaremos conjuntamente tu casa, negocio u cualquier otro
            ambiente con las características deseadas, la estructura, los
            criterios de éxito. Desarrollaremos uno o varios diseños que puedan
            usarse para lograr los objetivos deseados del proyecto. Las partes
            interesadas pueden elegir el mejor diseño que se utilizará para la
            ejecución real del proyecto. Entregándoles el conjunto de planos de
            las especialidades de arquitectura, seguridad, estructuras,
            instalaciones eléctricas e instalaciones sanitarias, memorias
            descriptivas y especificaciones, esquemas, detalles, 3d y
            perspectivas que sirven para llevar a cabo la edificación de
            cualquier construcción.
          </li>
          <li>
            <b>Trámites de INDECI:</b> Está en la base de datos.
          </li>
          <li>
            <b>Licencias municipales de construcción:</b> Está en la base de
            datos.
          </li>
          <li>
            <b>Licencia de Funcionamiento y/o anuncios:</b> Está en la base de
            datos.
          </li>
          <li>
            <b>Declaratoria de fábrica:</b> Inscribimos la construcción en tu
            lote en el Registro de Predios correspondiente, consignando las
            características y condiciones técnicas de la obra. Al inscribir la
            declaratoria de fábrica de tu predio, le damos el carácter legal a
            lo construido, facilitando la transferencia del mismo además de
            revalorizarlo. Asimismo, la inscripción de la declaratoria de
            fábrica permite, en caso se trate de departamentos, la
            independización de los mismos.
          </li>
        </ul>
      </div>
    </>
  );
}
