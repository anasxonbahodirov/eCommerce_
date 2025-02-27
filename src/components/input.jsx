import React from 'react'

export const Input = ({className, value , onChange, placeholder , type}) => {
  return (
    <input className={className} value={value} onChange={onChange} placeholder={placeholder} type={type} />
  )
}
