import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="de">
      <Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-" />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
            
          gtag('config', 'G-');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

