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
      <div className="py-6">
        <h3 className="text-xl font-bold text-center pb-2">Nuestros Valores</h3>
        <img className="w-2/5" src="svg/goals.svg" alt="Visión" />
        <ul>
          <li>
            <b>Competitividad:</b> El esfuerzo por ser el primero, tomando la
            meta como el destino al que llegar lo más rápidamente posible.
          </li>
          <li>
            <b>Responsabilidad:</b> Esto significa una mezcla de gratitud,
            lealtad y sinceridad, que en términos empresariales es sinónimo de
            compromiso social y comunitario no sólo con la clientela, sino con
            la sociedad.
          </li>
          <li>
            <b>Integridad:</b> Coherencia entre la palabra y la acción en un
            sentido de rectitud, probidad y respeto.
          </li>
          <li>
            <b>Liderazgo:</b> Capacidad de orientar el esfuerzo de los grupos
            humanos en una dirección deseada, promoviendo una visión compartida,
            estructurándolos, dirigiéndolos, generando oportunidades de
            crecimiento, inspirando valores de acción y anticipando escenarios
            de desarrollo.
          </li>
          <li>
            <b>Innovación:</b> Disposición de modificar las formas existentes de
            hacer las cosas asumiendo con responsabilidad el riesgo de llevarlas
            a la práctica, buscando obtener ventajas competitivas, la eficiencia
            de nuestros procesos y el éxito de nuestros resultados.
          </li>
          <li>
            <b>Espíritu de Equipo:</b> Colaborar, cooperar y conjugar esfuerzos
            con un grupo de personas, a fin de alcanzar objetivos comunes
            enriqueciendo la experiencia propia con la de otros miembros del
            grupo, y produciendo un resultado mayor que la suma de los esfuerzos
            individuales.
          </li>
        </ul>
      </div>
    </section>
  );
}
