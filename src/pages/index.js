import * as React from "react";
import { Layout } from "../components/layout";
import { About } from "../components/about";
import { Clients } from "../components/clients";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Services } from "../components/services";

export default function index() {
  return (
    <Layout title="Innova Arquitectos">
      <Header />
      <Hero />
      <Services />
      <About />
      <Clients />
    </Layout>
  );
}
