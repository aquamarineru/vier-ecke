import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Loader } from '.';
import { PiArrowRight } from "react-icons/pi";

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
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <Loader />; 
    return (
        <header >
            <div
                className="md:hidden fixed top-5 right-10 h-7 w-9 cursor-pointer z-10 transition-opacity hover:opacity-70 "
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`block h-0.5 w-full bg-blue absolute transition-transform ${isOpen ? 'transform translate-y-3 rotate-45' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-blue absolute top-3 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-blue absolute top-6 transition-transform ${isOpen ? 'transform -translate-y-3 -rotate-45' : ''}`}></span>
            </div>
            <div className={`md:block ${isOpen ? 'h-screen bg-blue-gradient flex flex-col justify-center' : 'h-0 border-b  border-blue/40 backdrop-blur-[10px]'} fixed top-0 left-0 w-full  transition-height overflow-hidden md:h-auto`}>
                <Container>
                    <nav className="text-xl md:text-sm md:flex md:flex-row md:justify-around md:px-10 md:items-center md:transform-none md:top-auto">
                        <Image
                            src="/images/logo.png"
                            alt="Vier Ecke Logo"
                            width={100}
                            height={50}
                            className="hidden md:block"
                        />
                        <ul className="list-none p-0 m-0 text-center flex flex-col items-center justify-center gap-4 md:flex-row md:gap-10">
                            {links.map((link, index) => (
                                <li key={link.href} className="block h-1/4 min-h-12 transition-opacity transform transition-transform" style={{ animation: isOpen ? `fadeInFromBottom 0.5s forwards ${0.5 + index * 0.1}s` : '' }}>
                                    <Link href={link.href} className="block text-dark hover:text-blue font-eSemi relative overflow-hidden hover:after:w-full">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button
                            aria-label='Direkt Kontakt'
                            className='mt-10 md:mt-0 bg-blue bg-glass text-light font-eSemi rounded-md py-2 px-4 hover:bg-blue/70'
                        >
                            <a
                                className='flex flex-row items-center justify-center gap-3'
                                href="mailto:example@gmail.com"
                            >
                                Direkt Kontakt
                                <PiArrowRight className='transition-all duration-400 ease-in-out hover:transform hover:translate-x-1 cursor-pointer' />
                            </a>
                        </button>
                    </nav>
                </Container>
            </div>
        </header>
    );
}
