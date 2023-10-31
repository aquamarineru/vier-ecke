import React from 'react'
import { Container, Title, Button } from '../components'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className='h-full w-full py-10 md:py-24 bg-blue-gradient'>
        <Container className='flex flex-col items-center'>
            <Title>ÜBER UNS</Title>
            <Title type='small'>Wer steckt hinter Hausmeisterservices "vier Ecke"?</Title>
            <div className='pt-10 flex flex-col-reverse md:flex-row justify-around items-start gap-10'>
                <div className='flex flex-col md:w-1/2 justify-between items-start gap-4 font-light text-sm lg:text-base'>
                    <p>Wir sind Hausmeisterservices &laquo;vier Ecke&raquo;&nbsp;&mdash; Ihr zuverl&auml;ssiger Partner im&nbsp;Herzen der Region. Unser Name spiegelt unsere Philosophie wider: Wir stehen f&uuml;r solides Handwerk, Ecken und Kanten inklusive, weil wir wissen, dass gerade diese den Charakter eines Raums, eines Geb&auml;udes und eines Zuhauses pr&auml;gen.</p>
                    <p>Unsere qualifizierte Crew betreut mit Herzblut sowohl gewerblicher als auch privater Kundschaft und bringt langj&auml;hrige Erfahrung in&nbsp;vielf&auml;ltigen Handwerksbereichen mit.</p>
                    <p>F&uuml;r uns sind Qualit&auml;t, Kundenzufriedenheit und Zuverl&auml;ssigkeit nicht blo&szlig;e Worte&nbsp;&mdash; sie sind das Fundament unserer Arbeit. In&nbsp;unserem Team finden Sie Experten f&uuml;r jeden unserer Servicebereiche.</p>
                    <p>Unser Versprechen an&nbsp;Sie: Alles aus einer Hand. Sie vertrauen uns Ihrem Projekt&nbsp;an, und wir garantieren eine fachgerechte, zuverl&auml;ssige und erstklassige Umsetzung. Und sollten Sie Unterst&uuml;tzung bei der Planung oder Durchf&uuml;hrung eigener Vorhaben ben&ouml;tigen, stehen wir Ihnen mit Rat und Tat zur Seite.</p>
                    <p>Lernen Sie die &laquo;vier Ecke&raquo; kennen&nbsp;&mdash; wo&nbsp;echte Handwerkskunst auf moderne Dienstleistung trifft.</p>
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
                sizes='(width: 400px) 100vw, 600px'
                className='object-cover object-center w-[250px] h-[250px]  lg:w-[450px] h-lg:[400px] rounded shadow-md' 
                />
            </div> 
        </Container>
    </div>
  )
}
