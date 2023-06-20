import * as React from "react";
import { Layout } from "../components/layout";
import { Header } from "../components/header";
import { ServicesInfo } from "../components/servicesInfo";

const links = [
  { url: "../#about", name: "Nosotros" },
  { url: "#", name: "Contacto" },
  { url: "../#clientes", name: "Confían en Innova" },
];

export default function index() {
  return (
    <Layout title="Nuestros servicios">
      <Header main={"../"} links={links} />
      <ServicesInfo />
    </Layout>
  );
}
