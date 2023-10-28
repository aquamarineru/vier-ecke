import React from 'react'
import { Navbar, Footer } from './'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col'>
        <Head>
            <title> Vier Ecke</title>
        </Head>
        <Navbar />
        <main>
            {children}
        </main>
        <Footer />
    </div>
  )
}
