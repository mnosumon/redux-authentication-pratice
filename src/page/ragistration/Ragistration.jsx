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
      <div className="relative">
        <div className="h-96 w-96 bg-primary rounded-full absolute -top-40 -left-40"></div>
        <div className="flex justify-center my-20 gap-8 container">
          <div className="w-[45%]">
            <RegisterDecoration title="Lets go your journey" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error facere, autem similique veniam accusamus. Impedit voluptate consequatur dolorum quia numquam. Quo ex vitae at aliquam alias voluptatum iste quia." icon={<RegisterIcon/>} />
          </div>
          <div className="w-[45%]"><RegisterFrom/></div>
        </div>
      </div>
    </>
  )
}

export default Ragistration