import React from 'react'
import RegisterDecoration from '../../components/registration/RegisterDecoration'
import { RegisterIcon } from './RegisterIcon'

const Ragistration = () => {
  return (
    <>
      <div className="relative">
        <div className="h-96 w-96 bg-primary rounded-full absolute -top-40 -left-40"></div>
        <div className="flex justify-center items-center gap-4 h-screen container">
          <div className="w-[45%]">
            <RegisterDecoration title="Lets go your journey" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis error facere, autem similique veniam accusamus. Impedit voluptate consequatur dolorum quia numquam. Quo ex vitae at aliquam alias voluptatum iste quia." icon={<RegisterIcon/>} />
          </div>
          <div className="w-[45%]">right</div>
        </div>
      </div>
    </>
  )
}

export default Ragistration