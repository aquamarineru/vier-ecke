import React from 'react'
import { Container, Title, ContactForm } from '../components'
import Image from 'next/image'

export default function Contact() {
  return (
    <div
    id='contact' 
    className='relative h-full w-full bg-linear-gradient py-10 md:py-24 bg-light md:px-10 '>
        <Container className='flex flex-col items-center'>
            <Title>Kontaktiren Sie uns</Title>
            <Title type='small'>Suchen Sie einen kompetenten Partner im&nbsp;Bereich Hausmeisterservice? Kontaktieren Sie uns. Wir freuen uns auf Ihre Nachricht!</Title>
            <div className='pt-10 flex flex-col md:flex-row justify-between lg:gap-5 items-center md:items-start'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold'>
                    "Vier Ecke" Hausmeisterservice
                    </h3>
                    <div className='flex flex-row font-light items-center gap-2'>
                        <label className='font-light'>
                            Telefon: 
                        </label> 
                        <a 
                        href="tel:+491626983111" 
                        target="_blank"
                        className='hover:text-lemon hover:underline transform transition-colors'>+491626983111</a>
                    </div>
                    <div className='flex flex-row font-light items-center gap-2'>
                        <label className='font-light'>
                            Email: 
                        </label> 
                        <a 
                        href="mailto:info.vierecken@gmail.com" 
                        target="_blank"
                        className='hover:text-lemon hover:underline transform transition-colors'>info.vierecken@gmail.com</a>
                    </div>
                    <Image
                    src='/images/contact.png'
                    alt='Vier Ecke Contact Illustration'
                    width={1400}
                    height={800}
                    sizes='(width: 600px) 100vw, 600px'
                    className='hidden md:block object-cover object-center md:mt-10 md:w-[350px] md:h-[250px] lg:w-[450px] lg:h-[300px]'
                    />
                </div>
                <ContactForm />
            </div>
        </Container>
    </div>
  )
}
