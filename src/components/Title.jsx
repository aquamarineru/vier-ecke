import React from 'react'

export default function Title({ children, type }) {
    if(type === 'small') {
        return (
            <h3 className="text-2xl font-semibold text-dark/80">{children}</h3>
        )
    }
  return (
    <h2 className='text-4xl font-bold text-dark'>{children} </h2>
  )
}
