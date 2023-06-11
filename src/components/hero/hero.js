import React from "react";

export function Hero() {
  return (
    <section className="relative h-96 overflow-hidden">
      <img
        className="z-10 absolute object-cover w-full top-0 sm:hidden"
        src="images/fondo_v.jpg"
        alt="fondo"
      />
      <h1 className="absolute text-2xl font-black tracking-wide text-center z-20 py-20">
        INNOVA ARQUITECTOS Y ASOCIADOS
      </h1>
      <img
        className="absolute z-20 bottom-0 mt-20"
        src="images/arquitectos.png"
        alt="innova arquitectos"
      />
    </section>
  );
}
