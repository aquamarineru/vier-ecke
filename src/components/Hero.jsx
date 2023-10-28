import React from 'react'
import { Container } from './'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='bg-blue-gradient h-full w-full font-bold md:pt-24'>
      <Container className='flex flex-col-reverse md:justify-around md:flex-row items-center py-10'>
        <div className='flex flex-col items-start justify-center gap-3 px-2 lg:w-1/2'>
          <h2 className='font-light lg:text-xl'>Vier Ecke</h2>
          <h1 className='font-bold text-2xl lg:text-6xl tracking-wide'>Willkommen bei unserem Hausmeisterservice</h1>
          <p className='font-light lg:text-xl'>Probleme mit Ihrer Immobilie?</p>
          <p className='font-light lg:text-xl md:w-2/3'>Senden Sie uns eine Anfrage – 
          <span className='font-semibold'>Wir erledigen das für Sie!</span> </p>
          <div className="flex justify-start w-full md:w-1/2">
            <Link
            href="/#contact"
            className='bg-lemon bg-glass text-dark font-light rounded-full py-4 px-6 hover:bg-lemon/70'>Kontaktiren Sie uns</Link>
          </div>
        </div>
        
        <div>
          <Image
            src="/images/hero.png"
            alt="Vier Ecke Hero Illustration"
            sizes="(width: 600px) 100vw, 1400px"
            priority={true}
            width={1400}
            height={800}
            className=" object-cover object-center w-full h-full"
          />
        </div>

      </Container>
    </div>
  )
}
