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
        <header className='fixed left-0 top-0 w-full ease-in duration-300 border-b border-blue/40 backdrop-blur-[10px] z-20'>
        <Container>
            <div className='flex flex-row justify-between items-center'>
                <Image
                src="/images/logo.png"
                alt="Vier Ecken Logo"
                width={100}
                height={50}
                className="object-cover object-center md:hidden"
                />

                <div
                className="md:hidden fixed top-5 right-10 h-7 w-9 cursor-pointer z-50  transition-opacity hover:opacity-70 "
                onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`block h-0.5 w-full bg-dark absolute transition-transform ${isOpen ? 'transform translate-y-3 rotate-45' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-dark absolute top-3 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-dark absolute top-6 transition-transform ${isOpen ? 'transform -translate-y-3 -rotate-45' : ''}`}></span>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isOpen ? 'h-screen backdrop-blur-[10px] bg-linear-gradient flex flex-col justify-center z-20' : 'h-0'} fixed top-0 left-0 w-full transition-height overflow-hidden`}>
                    <nav className="text-xl flex flex-col items-center  cursor-pointer">
                        <ul className="list-none p-0 m-0 text-center flex flex-col items-center justify-center gap-4">
                            {links.map((link, index) => (
                                <li key={link.href} className="block h-1/4 min-h-12 transform transition-transform" style={{ animation: isOpen ? `fadeInFromBottom 0.5s forwards ${0.5 + index * 0.1}s` : '' }}>
                                <Link 
                                href={link.href}
                                onClick={() => setIsOpen(false)}>
                                        {link.label}
                                    
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                
                <nav className="hidden md:flex items-center justify-between w-full">
                    <Image
                            src="/images/logo.png"
                            alt="Vier Ecken Logo"
                            width={100}
                            height={50}
                    />
                    <ul className="list-none p-0 m-0 text-center flex flex-row gap-10">
                        {links.map(link => (
                            <li key={link.href}>
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button aria-label='Direkt Kontakt' className='bg-blue bg-glass text-light font-semibold rounded-md py-2 px-4 hover:bg-blue/70 transition-all duration-400 ease-in-out'>
                        <a className='flex flex-row items-center justify-center gap-3' href="mailto:info.vierecken@gmail.com">
                            Direkt Kontakt
                            <PiArrowRight className='transition-all duration-400 ease-in-out hover:transform hover:translate-x-1 cursor-pointer' />
                        </a>
                    </button>
                </nav>
            </div>
        </Container>
       </header>
    );
}
