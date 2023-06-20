import React from "react";

export function Hero() {
  return (
    <section className="relative h-[26rem] w-full overflow-hidden bg-gradient-to-r from-p_green-200 to-sky-200">
      <h1 className="absolute top-1/4 px-4 text-2xl font-black text-center max-w-xl z-0 sm:text-4xl sm:top-[30%] sm:px-12 lg:text-5xl md:">
        INNOVA ARQUITECTOS Y ASOCIADOS
      </h1>
      <img
        className="absolute z-0 bottom-0 sm:right-0"
        src="images/arquitectos.png"
        alt="innova arquitectos"
      />
    </section>
  );
}
