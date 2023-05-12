import React from "react";

export default function Head() {
  const metadata = {
    title: "Gowthaman Ravindrathas",
    description:
      "Portfolio of Gowthaman Ravindrathas - Software Engineer based in London, UK",
    url: "https://gowtham.io",
  };

  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/logo/logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gowth6m" />
      <meta name="twitter:creator" content="@gowth6m" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content="/logo/logo.png" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="logo/logo.svg" />
      <link rel="icon" href="logo/logo.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="logo/logo.png" />
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </head>
  );
}
