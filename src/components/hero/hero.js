import React from "react";

export function Hero() {
  return (
    <section className="h-[26rem] w-full flex flex-col items-center justify-between overflow-hidden sm:h-[32rem] lg:flex-row lg:justify-between bg-gradient-to-t from-custom_blue-500 to-50% to-white lg:bg-gradient-to-tl">
      <div className="flex flex-col sm:pt-8 lg:pt-0">
        <img
          className="h-4 w-0 lg:w-48 lg:h-24 m-auto"
          src="/images/innova.png"
          alt="logo"
        />
        <h1 className="p-6 pb-12 text-3xl font-black text-center sm:text-4xl lg:px-0 lg:text-5xl lg:mx-12 lg:max-w-screen-md">
          <p className="text-p_green-200">INNOVA</p>
          ARQUITECTOS &amp; ASOCIADOS SAC
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
