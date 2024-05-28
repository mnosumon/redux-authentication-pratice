import React from 'react'

const Gemder = ({formik, errors, touched}) => {
  return (
    <>
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
    </>
  )
}

export default Gemder