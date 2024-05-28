import React, { useState } from 'react'
import Input from '../utilities/Input'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { signUp } from '../../warning/ragistration'
import Gemder from './Gemder'
import BateOfBirth from './BateOfBirth'

let initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthYear: new Date().getFullYear(),
    birthMonth: new Date().getMonth() + 1,
    birthDate: new Date().getDate(),
    gender: "",
}

const RegisterFrom = () => {
    let [ageValidation, setAgeValidation] = useState("")
    let formik = useFormik({
        initialValues: initialState,
        validationSchema: signUp,
        onSubmit: ()=> {
            let currentDate = new Date()
            let pickedDate = new Date(
                formik.values.birthYear,
                formik.values.birthMonth - 1,
                formik.values.birthDate
            )
            let adult = new Date(1970 + 18, 0, 1)
            let oldMan = new Date(1970 + 70, 0, 1)
            if (currentDate - pickedDate < adult) {
                return setAgeValidation("You are not 18+")
            }else if (currentDate - pickedDate > oldMan) {
                return setAgeValidation("You are also 70+")
            }else{
                return setAgeValidation("")
            }
        }
    })
    let {errors, touched} = formik

    let storeBirthYear = new Date().getFullYear()
    let years = Array.from(new Array(105), (val, index)=> storeBirthYear - index)
    let month = Array.from(new Array(12), (val, index)=> 1 + index)
    let day = ()=>{
        return new Date(formik.values.birthYear, formik.values.birthMonth, 0).getDate()
    }
    let dates = Array.from(new Array(day()),(val, index)=> 1 + index)
    
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
                <div>
                <BateOfBirth formik={formik} dates={dates} month={month} years={years} ageValidation={ageValidation} />
                </div>
                <div>
                    <Gemder formik={formik} errors={errors} touched={touched} />
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