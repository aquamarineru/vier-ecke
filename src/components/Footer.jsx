import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './'

const links = [
  {
    href: '/impressum',
    label: 'Impressum',
  },
  {
    href: '/datenschutz',
    label: 'Datenschutzerklärung',
  },
];
export default function Footer() {
  const currentYear = new Date().getFullYear(); 
  return (
    <footer className='relative bottom-0 bg-glass bg-[#EAF7FE] w-full border-t border-light backdrop-blur-[10px] py-10'>
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
        <div className='flex flex-col md:flex-row  items-center justify-center md:justify-between text-dark font-light text-xs gap-2 md:gap-5 pt-5'>
          <div>©Copyright {currentYear} - Vier Ecken</div>
          <p className='text-center'> Diese Homepage wurde von
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
