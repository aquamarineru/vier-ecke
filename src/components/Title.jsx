import React from 'react'

export default function Title({ children, type }) {
    if(type === 'small') {
        return (
            <h3 className="text-lg md:text-2xl text-center font-semibold text-dark/80">{children}</h3>
        )
    }
  return (
    <h2 className='text-2xl md:text-4xl font-bold text-center text-dark'>{children} </h2>
  )
}
