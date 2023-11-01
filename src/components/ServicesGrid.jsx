import React from 'react'
import Image from 'next/image' 
import { Title } from './'


export default function ServicesGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5 mt-10 md:px-3 items-start lg:gap-7'>
      <Image
      src='/images/services.png'
      alt='Vier Ecken Services Illustration'
      width={1400}
      height={800}
      className='object-cover object-center w-full h-full'
      sizes='(width: 300px) 100vw, 800px'
      />
      <div className='flex flex-col justify-center gap-3'>
        <Title type='small'>
        RENOVIERUNGSARBEITEN
        </Title>
        <p className='font-light text-sm lg:text-base '>
        Wir &uuml;bernehmen f&uuml;r Sie umfangreiche Renovierungsarbeiten, um&nbsp;Ihr Zuhause oder Gesch&auml;ftsr&auml;ume in&nbsp;neuem Glanz erstrahlen zu&nbsp;lassen. Unsere Fachkr&auml;fte arbeiten sorgf&auml;ltig und zuverl&auml;ssig&nbsp;&mdash; egal ob&nbsp;es&nbsp;sich um&nbsp;Malerarbeiten, Bodenbelagswechsel oder andere Instandsetzungsma&szlig;nahmen handelt. Wir setzen Ihre W&uuml;nsche mit Pr&auml;zision&nbsp;um.
        </p>
      </div>
      <div className='flex flex-col justify-center gap-3  '>
        <Title type='small'>
        UMZÜGE
        </Title>
        <p className='font-light text-sm lg:text-base'>
        Ein Umzug steht&nbsp;an? Unser Hausmeisterservice unterst&uuml;tzt Sie dabei! Ob&nbsp;Wohnung, Haus oder B&uuml;ro&nbsp;&mdash; wir sorgen f&uuml;r einen reibungslosen Ablauf. Vom Verpacken Ihrer Wertgegenst&auml;nde bis zum Transport und dem Aufbau an&nbsp;Ihrem neuen Standort sind wir Ihr zuverl&auml;ssiger Partner.
        </p>
      </div>
      <div className='flex flex-col justify-center gap-3  '>
        <Title type='small'>
        TROCKENBAU
        </Title>
        <p className='font-light text-sm lg:text-base'>
        Unser Team ist im&nbsp;Bereich Trockenbau erfahren und f&uuml;hrt alle Arbeiten, von der Raumtrennung &uuml;ber den Dachausbau bis hin zur Deckenverkleidung, professionell f&uuml;r Sie aus. Mit qualitativen Materialien und handwerklichem Geschick realisieren wir Ihre Projekte im&nbsp;Trockenbau.
        </p>
      </div>
      <div className='flex flex-col justify-center gap-3  '>
        <Title type='small'>
        BERATUNG
        </Title>
        <p className='font-light text-sm lg:text-base'>
        Nicht sicher, welche Dienstleistung am&nbsp;besten zu&nbsp;Ihrem Vorhaben passt? Oder wie Sie Ihr Projekt am&nbsp;effizientesten umsetzen k&ouml;nnen? Unsere Experten beraten Sie umfassend und kompetent zu&nbsp;allen Fragen rund um&nbsp;Renovierung, Trockenbau und Umz&uuml;ge. Kontaktieren Sie uns&nbsp;&mdash; wir nehmen uns Zeit f&uuml;r Sie.
        </p>
      </div>
      <Image 
        src='/images/service.png'
        alt='Vier Ecken Services Illustration'
        width={1400}
        height={800}
        className='object-cover object-center w-full h-full'
        sizes='(width: 300px) 100vw, 800px'
        />
    </div>
  )
}
