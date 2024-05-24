import React from 'react'
import Input from '../utilities/Input'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'

let initialState = {
    firstName: "",
    lastNmae: "",
    email: "",
    password: "",
    birthYear: " ",
    birthMonth: " ",
    birthDate: " ",
    gender: "",
}

const RegisterFrom = () => {
    let formik = useFormik({
        initialValues: initialState,
        onSubmit: ()=> {
            console.log("hello");
        }
    })
    console.log(formik);
  return (
    <div>
        <div className="w-[80%] shadow-md border border-[#e1dddd] p-4 rounded-md">
            <form onSubmit={formik.handleSubmit} action="" className='flex flex-col gap-5'>
                <div className="flex flex-col gap-4">
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.firstName} type="text" name="firstName" placeholder="First Name"  className='py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md' />
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.lastNmae}  type="text" name="lastNmae" placeholder="Last Name"  className='py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md' />
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.email}  type="email" name="email" placeholder="example@gmail.com"  className='py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md' />
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.password}  type="password" name="password" placeholder="Enter your password"  className='py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md' />
                </div>
                <div className="flex justify-between font-gilroyRegular">
                    <select onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.birthYear} name='birthYear' className='border rounded-md border-lineColor w-[30%] outline-none p-2'>
                        <option>Birth year</option>
                        <option>255</option>
                        <option>258</option>
                        <option>256</option>
                    </select>
                    <select onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.birthMonth}  name="birthMonth"  className='border rounded-md border-lineColor w-[30%] outline-none p-2'>
                        <option>Birth month</option>
                        <option>255</option>
                        <option>258</option>
                        <option>256</option>
                    </select>
                    <select onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.birthDate}  name="birthDate"  className='border rounded-md border-lineColor w-[30%] outline-none p-2'>
                        <option>Birth date</option>
                        <option>255</option>
                        <option>258</option>
                        <option>256</option>
                    </select>
                </div>
                <div className="flex items-center w-[50%]">
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value='male' type="radio" name="gender" id="male"  className='py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md' />
                    <label htmlFor="male">Male</label>
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value='female' type="radio" name="gender" id="female"  className='py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md' />
                    <label htmlFor="female">Female</label>
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