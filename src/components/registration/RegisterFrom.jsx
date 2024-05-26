import React from 'react'
import Input from '../utilities/Input'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUp } from '../../warning/ragistration'

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthYear: new Date().getFullYear(),
    birthMonth: new Date().getDate(),
    birthDate: new Date().getDate(),
    gender: "",
}

const RegisterFrom = () => {
    let formik = useFormik({
        initialValues: initialState,
        validationSchema: signUp,
        onSubmit: ()=> {
            console.log("Succesfull");
        }
    })
    let {errors, touched} = formik

    let storeBirthYear = new Date().getFullYear()
    let years = Array.from(new Array(105), (val, index)=> storeBirthYear - index)
    let month = Array.from(new Array(12), (val, index)=> 1 + index)
    console.log(years);
  

    // let years = Array.from(new Array(105), 
    // (val, index)=> formik.values.birthYear - index)
    // console.log(years)
    
  return (
    <div>
        <div className="w-full shadow-md border border-[#e1dddd] p-4 rounded-md">
            <form onSubmit={formik.handleSubmit} action="" className='flex flex-col gap-5'>
                <div className=''>
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.firstName} type="text" name="firstName" placeholder="First Name"  className={errors.firstName && touched.firstName ?'py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md':'py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md mb-4'} />
                    {
                        errors.firstName && touched.firstName && (
                            <p className='text-sm font-gilroyRegular py-2 text-red-500'>{errors.firstName}</p>
                        )
                    }
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.lastName}  type="text" name="lastName" placeholder="Last Name"  className={errors.lastName && touched.lastName ?'py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md':'py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md mb-4'} />
                    {
                        errors.lastName && touched.lastName && (
                            <p className='text-sm font-gilroyRegular py-2 text-red-500'>{errors.lastName}</p>
                        )
                    }
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.email}  type="email" name="email" placeholder="example@gmail.com"  className={errors.email && touched.email ?'py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md':'py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md mb-4'} />
                    {
                        errors.email && touched.email && (
                            <p className='text-sm font-gilroyRegular py-2 text-red-500'>{errors.email}</p>
                        )
                    }
                    <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.password}  type="password" name="password" placeholder="Enter your password"  className={errors.password && touched.password ?'py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md':'py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md mb-4'} />
                    {
                        errors.password && touched.password && (
                            <p className='text-sm font-gilroyRegular py-2 text-red-500'>{errors.password}</p>
                        )
                    }
                </div>
                <div className="flex justify-between font-gilroyRegular">
                    <select onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete='off' value={formik.values.birthYear} name='birthYear' className='border rounded-md border-lineColor w-[30%] outline-none p-2'>
                        <option>Birth year</option>
                        {
                            years.map((item, index)=>(
                                <option key={index}>{item}</option>
                            ))
                        }
                    </select>
                    <select onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.birthMonth}  name="birthMonth"  className='border rounded-md border-lineColor w-[30%] outline-none p-2'>
                        <option>Birth month</option>
                        {
                            month.map((item, index)=>(
                                <option key={index}>{item}</option>
                            ))
                        }
                    </select>
                    <select onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value={formik.values.birthDate}  name="birthDate"  className='border rounded-md border-lineColor w-[30%] outline-none p-2'>
                        <option>Birth date</option>
                        <option>255</option>
                        <option>258</option>
                        <option>256</option>
                    </select>
                </div>
                <div>
                    <div className="flex items-center w-[75%] sm:w-[50%] lg:text-xl">
                        <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value='male' type="radio" name="gender" id="male"  className='py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md' />
                        <label htmlFor="male">Male</label>
                        <input onChange={formik.handleChange} autoComplete='off' onBlur={formik.handleBlur} value='female' type="radio" name="gender" id="female"  className='py-3 px-6 w-full font-gilroyRegular focus:outline-none border border-lineColor rounded-md' />
                        <label htmlFor="female">Female</label>
                    </div>
                    {
                        errors.gender && touched.gender && (
                            <p className='text-sm font-gilroyRegular py-2 text-red-500'>{errors.gender}</p>
                        )
                    }
                </div>
                <div className="sm:flex justify-between items-center">
                    <button type='submit' className='px-3 py-1 lg:px-5 lg:py-2 font-gilroyBold border border-lineColor rounded-full bg-primary lg:text-xl'>Submit</button>
                    <p className='font-gilroyRegular text-sm sm:text-base lg:text-xl mt-3 sm:mt-0 text-right'>Already have an account? <Link to='/' className='text-primary underline'>Sing in</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterFrom