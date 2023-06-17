import React from "react";
import { Helmet } from "react-helmet";

function fileExists(url) {
  const http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  return http.status !== 404;
}

export function SEO({ title }) {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        href={
          fileExists("./images/innova-logo.png")
            ? "./images/innova-logo.png"
            : "../images/innova-logo.png"
        }
      />
      <title>{title}</title>
    </Helmet>
  );
}
