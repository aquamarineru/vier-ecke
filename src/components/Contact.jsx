import React from 'react'
import { Container, Title, ContactForm } from '../components'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className='h-screen w-full md:pt-24 bg-light'>
        <Container className='flex flex-col items-center'>
            <Title>Kontaktiren Sie uns</Title>
            <Title type='small'>Suchen Sie einen kompetenten Partner im Bereich Hausmeisterservice? Kontaktieren Sie uns.Wir freuen uns auf Ihre Nachricht!</Title>
            <div className='flex flex-row justify-around items-start'>
                <div className='flex flex-col'>
                    <h3>
                    Vier Ecke Hausmeisterservice
                    </h3>
                    <p className='font-light'>Herr Schmied</p>
                    <p className='font-light'>
                        Telefon: +49 123 456 7890</p>  
                    <p className='font-light'>E-Mail: info@vierecke.com</p> 
                    <Image
                    src='/images/contact.png'
                    alt='Vier Ecke Contact Illustration'
                    width={1400}
                    height={800}
                    sizes='(width: 600px) 100vw, 600px'
                    className='object-cover object-center w-[450px] h-[400px]'
                    />
                </div>
                <ContactForm />
            </div>
        </Container>
    </div>
  )
}
