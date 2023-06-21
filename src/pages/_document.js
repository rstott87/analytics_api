import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="bg-black" lang="en">
      <Head />
      <body>
        <Main />
        <NextScript strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
