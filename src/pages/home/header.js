import React from "react";
import { Helmet } from "react-helmet";
import { withLastLocation } from "react-router-last-location";
import { AppConfig } from "../../app-config";

function Header({ location }) {
  return (
    <Helmet key={Math.random()}>
      <title>{`${AppConfig.product} Home`}</title>
      <meta property="og:title" content={`${AppConfig.product}`} />
      <meta name="description" content={`${AppConfig.shortDesc}`} />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href={`${AppConfig.socket_url}${location.pathname}`}
      />
    </Helmet>
  );
}

export default withLastLocation(Header);
