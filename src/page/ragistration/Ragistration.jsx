import React from 'react'
import RegisterDecoration from '../../components/registration/RegisterDecoration'
import RegisterIcon from '../../components/registration/RegisterIcon'
import RegisterFrom from '../../components/registration/RegisterFrom'
import { Helmet } from 'react-helmet-async'

const Ragistration = () => {
  return (
    <>
    <Helmet>
      <title>Registration</title>
    </Helmet>
      <div className="relative z-10">
        <div className="h-96 w-96 bg-subHeading rounded-full absolute -top-40 -left-40 hidden md:block -z-10"></div>
        <div className="w-full flex justify-center px-5 my-20 gap-8 lg:container">
          <div className=" md:w-[35%] xl:w-[45%] hidden md:block">
            <RegisterDecoration title="Lets go your journey" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error facere, autem similique veniam accusamus." icon={<RegisterIcon/>} />
          </div>
          <div className="w-full md:w-[55%] xl:w-[45%] sm:px-8 md:px-2"><RegisterFrom/></div>
        </div>
      </div>
    </>
  )
}

export default Ragistration