import React from "react";

export function Hero() {
  return (
    <section className="h-[26rem] w-full flex flex-col items-center justify-between overflow-hidden sm:h-[32rem] lg:flex-row lg:justify-between bg-gradient-to-t from-custom_blue-500 to-60% to-blue-100 lg:bg-gradient-to-l">
      <div className="flex flex-col">
        <img
          className="h-4 w-0 sm:h-14 lg:w-40 lg:h-20 m-auto"
          src="/images/innova.png"
          alt="logo"
        />
        <h1 className="p-6 text-3xl font-black text-center sm:text-4xl lg:px-0 lg:text-5xl lg:mx-12 lg:max-w-screen-md">
          INNOVA ARQUITECTOS Y ASOCIADOS
        </h1>
      </div>
      <img
        className="-mt-12 max-h-80 lg:pt-8 lg:max-h-full lg:mt-auto xl:min-h-full"
        src="images/arquitectos.png"
        alt="innova arquitectos"
      />
    </section>
  );
}

// <div className="flex flex-col gap-8 justify-around bg-gradient-to-b p-8 from-p_green-200/50 to-80% sm:flex-row sm:items-center">
//   <p className="text-2xl max-w-screen-sm md:text-4xl sm:ml-12">
//     Únete a <b>Innova Arquitectos</b> y descubre cómo podemos agregar valor
//     a tu proyecto.
//   </p>
//   <div className="relative max-w-lg sm:mr-16">
//     <img src="/svg/investing.svg" alt="Agregando valor al proyecto" />
//     <button className="absolute bottom-0 left-4 bg-custom_blue-500/80 hover:bg-custom_blue-500 text-white font-bold py-2 px-4 rounded-lg lg:py-3 lg:px-6 lg:text-xl">
//       Contáctanos
//     </button>
//   </div>
// </div>
