import React from 'react'

const RegisterDecoration = ({title, icon, content}) => {
  return (
    <div>
        <div className="">{icon}</div>
        <h2 className='text-4xl text-blue-500 my-4 font-gilroyRegular'>{title}</h2>
        <p className='text-xl text-orange-500 my-4 font-gilroyRegular'>{content}</p>
    </div>
  )
}

export default RegisterDecoration