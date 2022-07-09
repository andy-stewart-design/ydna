import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="antialiased">
      <Head />
      <body className="bg-gray-100 text-gray-800 dark:bg-black dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
