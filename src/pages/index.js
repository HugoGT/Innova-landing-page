import * as React from "react";
import { Layout } from "../components/layout";
import { About } from "../components/about";
import { Clients } from "../components/clients";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Services } from "../components/services";

const links = [
  { url: "#servicios", name: "Servicios" },
  { url: "#about", name: "Nosotros" },
  { url: "#", name: "Contacto" },
  { url: "#clientes", name: "Confían en Innova" },
];

export default function index() {
  return (
    <Layout title="Innova Arquitectos">
      <Header main={"#servicios"} links={links} />
      <Hero />
      <Services />
      <About />
      <Clients />
    </Layout>
  );
}
