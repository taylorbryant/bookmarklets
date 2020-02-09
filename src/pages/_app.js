/* eslint-disable react/prop-types */
import Head from "next/head";
import Router from "next/router";
import React from "react";

import * as gtag from "../lib/gtag";

const SEO_TITLE = `Bookmarklets`;
const SEO_DESCRIPTION = `A list of potentially useful bookmarklets`;

Router.events.on(`routeChangeComplete`, url => gtag.pageview(url));

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title key="html-meta-title">{SEO_TITLE}</title>
        <meta
          content={SEO_DESCRIPTION}
          key="html-meta-description"
          name="description"
        />
        {/* Google / Search Engine Tags */}
        <meta content={SEO_TITLE} itemProp="name" key="google-name" />
        <meta
          content={SEO_DESCRIPTION}
          itemProp="description"
          key="google-description"
        />
        <meta
          content="/android-chrome-512x512.png"
          itemProp="image"
          key="google-image"
        />
        {/* Facebook Meta Tags */}
        <meta
          content={`https://bookmarklets.io`}
          key="facebook-url"
          property="og:url"
        />
        <meta content="website" key="facebook-type" property="og:type" />
        <meta content={SEO_TITLE} key="facebook-title" property="og:title" />
        <meta
          content={SEO_DESCRIPTION}
          key="facebook-description"
          property="og:description"
        />
        <meta
          content="/android-chrome-512x512.png"
          key="facebook-image"
          property="og:image"
        />
        {/* Twitter Meta Tags */}
        <meta
          content="summary_large_image"
          key="twitter-card"
          name="twitter:card"
        />
        <meta content={SEO_TITLE} key="twitter-title" name="twitter:title" />
        <meta
          content={SEO_DESCRIPTION}
          key="twitter-description"
          name="twitter:description"
        />
        <meta
          content="/android-chrome-512x512.png"
          key="twitter-iamge"
          name="twitter:image"
        />
        {/* Favicon */}
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link color="#ff0" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content="#ff0" name="msapplication-TileColor" />
        <meta content="/browserconfig.xml" name="msapplication-config" />
        <meta content="#ffffff" name="theme-color" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
