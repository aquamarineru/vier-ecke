import React from 'react'
import { Container, Title, ServicesGrid } from '../components'

export default function Services() {
  return (
    <div className='bg-green-gradient h-screen w-full md:pt-24'>
        <Container className='flex flex-col items-center'>
            <Title>
                Unsere Services
            </Title>
            <Title type='small'>Folgende Leistungen können bei uns angefragt und erbracht werden:</Title>
            <ServicesGrid />
        </Container>
    </div>
  )
}
