import React from 'react'

const BateOfBirth = ({formik, years, month, dates, ageValidation}) => {
  return (
    <>
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
                {
                    dates.map((item, index)=>(
                        <option key={index}>{item}</option>
                    ))
                }
            </select>
        </div>
        {
            ageValidation && <p className='text-sm font-gilroyRegular py-2 text-red-500'>{ageValidation}</p>
        }
    </>
  )
}

export default BateOfBirth