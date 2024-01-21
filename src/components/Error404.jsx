import React from 'react'
import { Container, Title, Button } from '../components'
import Image from 'next/image'
import Link from 'next/link'


export default function Error404() {
  return (
    <div className='w-full h-full bg-pink flex flex-col justify-center items-center'>
        <Container>
            <div className='flex flex-col items-center justify-center h-full gap-5 py-24'>
                <Image
                src='/images/error.png'
                alt='Vier Ecken 404 Illustration'
                width={1400}
                height={800}
                sizes='(width: 600px) 100vw, 600px'
                className='object-cover object-center w-full h-full'
                />
                <Title type='small'>Diese Seite existiert nicht.</Title>
                <Button>
                    <Link 
                    href='/'>
                    Zurück zur Startseite
                    </Link>
                </Button>
                
            </div>
        </Container>
      
    </div>
  )
}
