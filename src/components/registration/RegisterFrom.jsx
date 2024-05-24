import React from 'react'
import Input from '../utilities/Input'
import { Link } from 'react-router-dom'

const RegisterFrom = () => {
  return (
    <div>
        <div className="w-[80%] shadow-md border border-[#e1dddd] p-4 rounded-md">
            <form action="" className='flex flex-col gap-5'>
                <div className="flex flex-col gap-4">
                    <Input type="text" name="firstName" placeholder="First Name"/>
                    <Input type="text" name="lastNmae" placeholder="Last Name"/>
                    <Input type="email" name="email" placeholder="example@gmail.com"/>
                    <Input type="password" name="password" placeholder="Enter your password"/>
                </div>
                <div className="flex justify-between font-gilroyRegular">
                    <select name="" id="" className='border rounded-md border-lineColor w-[30%] outline-none p-2'>
                        <option value="">Birth year</option>
                        <option value="">255</option>
                        <option value="">258</option>
                        <option value="">256</option>
                    </select>
                    <select name="" id="" className='border rounded-md border-lineColor w-[30%] outline-none p-2'>
                        <option value="">Birth month</option>
                        <option value="">255</option>
                        <option value="">258</option>
                        <option value="">256</option>
                    </select>
                    <select name="" id="" className='border rounded-md border-lineColor w-[30%] outline-none p-2'>
                        <option value="">Birth date</option>
                        <option value="">255</option>
                        <option value="">258</option>
                        <option value="">256</option>
                    </select>
                </div>
                <div className="flex items-center w-[50%]">
                    <Input type="radio" id="male" name="gender" />
                    <label for="male">Male</label>
                    <Input type="radio" id="female" name="gender" />
                    <label for="female">Female</label>
                </div>
                <div className="flex justify-between items-center">
                    <button type='submit' className='px-3 py-1 font-gilroyBold border border-lineColor rounded-full bg-primary'>Submit</button>
                    <p className='font-gilroyRegular '>Already have an account? <Link to='/' className='text-primary underline'>Sing in</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterFrom