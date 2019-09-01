import React from "react";
import { Helmet } from "react-helmet";
import { withLastLocation } from "react-router-last-location";
import { AppConfig } from "../../app-config";

function Header({ location }) {
  return (
    <Helmet key={Math.random()}>
      <title>{AppConfig.product_title}</title>
      <meta name="robots" content="index, follow" />
      
      {/* OG IMAGE SECTION STARTS */}
      <meta name="description" content={AppConfig.shortDesc} />
      <meta
        property="og:image"
        content={AppConfig.ogimage_url}
      />
      <meta
        property="og:image:url"
        content={AppConfig.ogimage_url}
      />
      <meta
        property="og:image:secure_url"
        content={AppConfig.ogimage_url}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={AppConfig.product_title}
      />
      <meta
        property="og:description"
        content={AppConfig.shortDesc}
      />
      <meta
        property="og:url"
        content=""
      />
      {/* OG IMAGE SECTION ENDS */}
      <link
        rel="canonical"
        href={`${AppConfig.socket_url}${location.pathname}`}
      />
    </Helmet>
  );
}

export default withLastLocation(Header);