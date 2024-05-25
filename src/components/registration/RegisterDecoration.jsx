import React from 'react'

const RegisterDecoration = ({title, icon, content}) => {
  return (
    <div>
        <div className="">{icon}</div>
        <h2 className='text-blue-500 my-4 font-gilroyRegular md:text-2xl lg:text-3xl xl:text-4xl'>{title}</h2>
        <p className='md:text-base lg:text-xl text-orange-500 my-4 font-gilroyRegular'>{content}</p>
    </div>
  )
}

export default RegisterDecoration