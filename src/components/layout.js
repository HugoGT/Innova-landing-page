import React from "react";
import { Header } from "./header";

export function Layout() {
  return (
    <>
      <Header />
      <main className="font-sans">
        <h2 className="block h-80 text-2xl font-bold text-center py-2">
          Nuestros Servicios
        </h2>
      </main>
    </>
  );
}
