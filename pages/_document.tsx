import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content="Sin Fronteras" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Sin Fronteras" />
          <meta name="description" content="Sin Fronteras Travel Blog" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link
            rel="apple-touch-icon"
            href="images/icons/touch-icon-iphone.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/icons/touch-icon-ipad.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/icons/touch-icon-iphone-retina.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/images/icons/touch-icon-ipad-retina.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:url"
            content="https://sinfronteras-travelblog.com"
          />
          <meta name="twitter:title" content="Sin Fronteras" />
          <meta
            name="twitter:description"
            content="Sin Fronteras Travrl Blog"
          />
          <meta
            name="twitter:image"
            content="https://sinfronteras-travelblog.com/images/icons/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@VictorAlaluf" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sin Fronteras" />
          <meta property="og:description" content="Sin Fronteras Travel Blog" />
          <meta property="og:site_name" content="Sin Fronteras" />
          <meta
            property="og:url"
            content="https://sinfronteras-travelblog.com"
          />
          <meta
            property="og:image"
            content="https://sinfronteras-travelblog.com/images/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
