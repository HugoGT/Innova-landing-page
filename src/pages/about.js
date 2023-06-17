import * as React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components/layout";

export default function index() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Layout />
    </>
  );
}
