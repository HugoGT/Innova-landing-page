import React from "react";

export function Hero() {
  return (
    <div className="flex flex-col gap-8 justify-around bg-gradient-to-b p-8 from-p_green-200/50 to-80% sm:flex-row sm:items-center">
      <p className="text-2xl max-w-screen-sm md:text-4xl sm:ml-12">
        Únete a <b>Innova Arquitectos</b> y descubre cómo podemos agregar valor
        a tu proyecto.
      </p>
      <div className="relative max-w-lg sm:mr-16">
        <img src="/svg/investing.svg" alt="Agregando valor al proyecto" />
        <button className="absolute bottom-0 left-4 bg-custom_blue-500/80 hover:bg-custom_blue-500 text-white font-bold py-2 px-4 rounded-lg lg:py-3 lg:px-6 lg:text-xl">
          Contáctanos
        </button>
      </div>
    </div>
  );
}
