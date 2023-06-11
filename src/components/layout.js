import React from "react";
import { Header } from "./header";
import { Hero } from "./hero";

export function Layout() {
  return (
    <>
      <Header />
      <main className="font-sans">
        <Hero />
        <h2 className="block h-80 text-2xl font-bold text-center py-2">
          Nuestros Servicios
        </h2>
        {/* <ul className="px-6">
          {services.map((service) => (
            <Card key={service.url} {...service} />
          ))}
        </ul> */}
      </main>
    </>
  );
}
