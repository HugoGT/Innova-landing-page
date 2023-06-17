import * as React from "react";
import { Layout } from "../components/layout";
import { Header } from "../components/header";
import { ServicesInfo } from "../components/servicesInfo";

export default function index() {
  return (
    <Layout title="Nuestros servicios">
      <Header />
      <ServicesInfo />
    </Layout>
  );
}
