import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="antialiased">
      <Head>
        <link
          rel="preload"
          href="/fonts/AeonikPro-Roman-VF.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-gray-100 text-gray-800 dark:bg-black dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
