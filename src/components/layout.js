import React from "react";
import { About } from "./about";
import { Clients } from "./clients";
import { Header } from "./header";
import { Hero } from "./hero";
import { Services } from "./services";

export function Layout() {
  return (
    <>
      <Header />
      <main className="font-sans">
        <Hero />
        <Services />
        <About />
        <Clients />
      </main>
    </>
  );
}
