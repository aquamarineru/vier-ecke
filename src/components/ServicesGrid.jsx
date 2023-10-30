import React from 'react'
import Image from 'next/image' 
import { Title } from './'


export default function ServicesGrid() {
  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-5'>
      <Image
      src='/images/services.png'
      alt='Vier Ecke Services Illustration'
      width={1400}
      height={800}
      className='object-cover object-center w-full h-full'
      sizes='(width: 300px) 100vw, 800px'
      />
      <div>
        <Title type='small'>
        RENOVIERUNGSARBEITEN
        </Title>
        <p className='font-light md:text-lg'>
        Wir übernehmen für Sie umfangreiche Renovierungsarbeiten, um Ihr Zuhause oder Geschäftsräume in neuem Glanz erstrahlen zu lassen. Unsere Fachkräfte arbeiten sorgfältig und zuverlässig – egal ob es sich um Malerarbeiten, Bodenbelagswechsel oder andere Instandsetzungsmaßnahmen handelt. Wir setzen Ihre Wünsche mit Präzision um.
        </p>
      </div>
      <div>
        <Title type='small'>
        RENOVIERUNGSARBEITEN
        </Title>
        <p className='font-light md:text-lg'>
        Wir übernehmen für Sie umfangreiche Renovierungsarbeiten, um Ihr Zuhause oder Geschäftsräume in neuem Glanz erstrahlen zu lassen. Unsere Fachkräfte arbeiten sorgfältig und zuverlässig – egal ob es sich um Malerarbeiten, Bodenbelagswechsel oder andere Instandsetzungsmaßnahmen handelt. Wir setzen Ihre Wünsche mit Präzision um.
        </p>
      </div>
      <div>
        <Title type='small'>
        RENOVIERUNGSARBEITEN
        </Title>
        <p className='font-light md:text-lg'>
        Wir übernehmen für Sie umfangreiche Renovierungsarbeiten, um Ihr Zuhause oder Geschäftsräume in neuem Glanz erstrahlen zu lassen. Unsere Fachkräfte arbeiten sorgfältig und zuverlässig – egal ob es sich um Malerarbeiten, Bodenbelagswechsel oder andere Instandsetzungsmaßnahmen handelt. Wir setzen Ihre Wünsche mit Präzision um.
        </p>
      </div>
      <div>
        <Title type='small'>
        RENOVIERUNGSARBEITEN
        </Title>
        <p className='font-light md:text-lg'>
        Wir übernehmen für Sie umfangreiche Renovierungsarbeiten, um Ihr Zuhause oder Geschäftsräume in neuem Glanz erstrahlen zu lassen. Unsere Fachkräfte arbeiten sorgfältig und zuverlässig – egal ob es sich um Malerarbeiten, Bodenbelagswechsel oder andere Instandsetzungsmaßnahmen handelt. Wir setzen Ihre Wünsche mit Präzision um.
        </p>
      </div>
      <Image 
        src='/images/service.png'
        alt='Vier Ecke Services Illustration'
        width={1400}
        height={800}
        className='object-cover object-center w-full h-full'
        sizes='(width: 300px) 100vw, 800px'
        />
    </div>
  )
}
