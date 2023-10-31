import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './'

const links = [
  {
      href: '/',
      label: 'Home',
  },
  {
      href: '/#services',
      label: 'Unsere Services',
  },
  {
      href: '/#contact',
      label: 'Kontakt',
  },
  {
    href: '/impressum',
    label: 'Impressum',
  },
  {
    href: '/datenschutz',
    label: 'Datenschutz',
  },
];
export default function Footer() {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer className='relative bottom-0 bg-light w-full border-t border-dark/40 backdrop-blur-[10px] py-10'>
      <Container>
        <nav>
          <ul className="list-none p-0 m-0 text-center flex flex-col items-center justify-center gap-4 md:flex-row md:gap-10">
                            {links.map((link, index) => (
                                <li key={link.href} className="block h-1/4 min-h-12  transform transition-transform">
                                    <Link href={link.href} className="block text-dark hover:text-lemon transition-all duration-400 ease-in-out  font-semibold relative overflow-hidden hover:after:w-full">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

        </nav>
        <div className='flex flex-row  items-center justify-between text-dark font-light text-xs gap-5 pt-5'>
          <div>©Copyright {currentYear} - Vier Ecke</div>
          <p> Diese Homepage wurde von
            <a 
            href="https://www.codecrafters.online/"
            target='_blank'
            className='text-dark hover:text-lemon transition-all duration-400 ease-in-out'
            > codecrafters.online </a>
            erstellt.</p>
        </div>
      </Container>
    </footer>
  )
}
