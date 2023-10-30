import React from 'react'
import { Container, Title, Button } from '../components'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className='w-full h-screen bg-blue-gradient md:pt-24'>
        <Container className='flex flex-col items-center'>
            <Title>ÜBER UNS</Title>
            <Title type='small'>Wer steckt hinter Hausmeisterservices "vier Ecke"?</Title>
            <div className='pt-10 flex md:flex-row justify-around items-start gap-10'>
                <div className='flex flex-col w-1/2 justify-between items-start gap-4 font-light'>
                    <p>Wir sind Hausmeisterservices „vier Ecke“ – Ihr zuverlässiger Partner im Herzen der Region. Unser Name spiegelt unsere Philosophie wider: Wir stehen für solides Handwerk, Ecken und Kanten inklusive, weil wir wissen, dass gerade diese den Charakter eines Raums, eines Gebäudes und eines Zuhauses prägen.</p>
                    <p>Unsere qualifizierte Crew betreut mit Herzblut sowohl gewerblicher als auch privater Kundschaft und bringt langjährige Erfahrung in vielfältigen Handwerksbereichen mit.</p>
                    <p>Für uns sind Qualität, Kundenzufriedenheit und Zuverlässigkeit nicht bloße Worte – sie sind das Fundament unserer Arbeit. In unserem Team finden Sie Experten für jeden unserer Servicebereiche. </p>
                    <p>Unser Versprechen an Sie: Alles aus einer Hand. Sie vertrauen uns Ihrem Projekt an, und wir garantieren eine fachgerechte, zuverlässige und erstklassige Umsetzung. Und sollten Sie Unterstützung bei der Planung oder Durchführung eigener Vorhaben benötigen, stehen wir Ihnen mit Rat und Tat zur Seite.</p>
                    <p>Lernen Sie die „vier Ecke“ kennen – wo echte Handwerkskunst auf moderne Dienstleistung trifft.</p>
                    <div className="flex justify-start mt-4 w-full md:w-1/2">
                        <Button
                        aria-label='contact us'>
                        <Link href="/#contact">
                            Kontaktiren Sie uns
                        </Link>
                        </Button>
                    </div>
                </div>
                <Image
                src='/images/about.png'
                alt='Vier Ecke About Illustration'
                width={1400}
                height={800}
                sizes='(width: 600px) 100vw, 600px'
                className='object-cover object-center w-[450px] h-[400px] rounded shadow-md' 
                />
            </div>
        </Container>
    </div>
  )
}
