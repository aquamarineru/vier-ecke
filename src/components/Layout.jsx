import React from 'react'
import { Navbar, Footer } from './'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col'>
        <Head>
          <title>Vier Ecken - Hausmeisterdienste in Bayern</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Vier Ecken bietet professionelle Hausmeisterdienste in Bayern, Deutschland an. Wir kümmern uns um Wartung, Reparaturen und vieles mehr für Ihr Zuhause oder Geschäft." />
          <meta name="keywords" content="Hausmeisterdienste, Bayern, Vier Ecken, Wartung, Reparaturen, Renovierungsarbeiten, Umzüge, Trockenbau, Deutschland" />
          <meta name="author" content="Vier Ecken" />
          {/* Open Graph tags */}
          <meta property="og:title" content="Vier Ecken - Hausmeisterdienste in Bayern" />
          <meta property="og:description" content="Vier Ecken bietet professionelle Hausmeisterdienste in Bayern, Deutschland an." />
          <meta property="og:image" content="URL_TO_YOUR_IMAGE" /> 
          <meta property="og:url" content="YOUR_WEBSITE_URL" /> 
          <meta property="og:type" content="website" />
          <link rel="icon" href="/images/logo.png" />
        </Head>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}
