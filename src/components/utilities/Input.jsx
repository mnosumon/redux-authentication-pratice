import React from 'react'

const Input = ({className, type, placeholder, name, id}) => {
  return (
    <input type={type} placeholder={placeholder} id={id} className={`py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md ${className}`} name={name} />
  )
}

export default Input