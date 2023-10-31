import React from 'react'

export default function Button({ children, onClick, ariaLabel}) {
  return (
    <button
    aria-label={ariaLabel}
    onClick={onClick} 
    className='bg-lemon bg-glass text-dark font-semibold rounded-full py-4 px-6 hover:bg-lemon/70 transition-all duration-400 ease-in-out md:text-xs lg:text-xl'>{children} </button>
  )
}
