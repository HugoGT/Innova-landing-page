import * as React from "react";
import { Layout } from "../components/layout";
import { Header } from "../components/header";
import { Contact } from "../components/contact";
import { ServicesInfo } from "../components/servicesInfo";

const links = [
  { url: "../#about", name: "Nosotros" },
  { url: "#contacto", name: "Contacto" },
  { url: "../#clientes", name: "Confían en Innova" },
];

export default function index() {
  return (
    <Layout title="INNOVA ARQUITECTOS Y ASOCIADOS SAC - Servicios">
      <Header main={"../"} links={links} />
      <ServicesInfo />
      <Contact />
    </Layout>
  );
}
