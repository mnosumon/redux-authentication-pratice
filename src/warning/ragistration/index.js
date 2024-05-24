import * as Yup from 'yup'

export const signUp = Yup.object({
    firstName: Yup.string().min(3).max(15).required('Please enter first name'),
    lastName: Yup.string().min(3).max(15).required('Please enter last name'),
    email: Yup.string().email().required('Please enter valid email'),
    password: Yup.string().min(8).required('Please enter password'),
    gender: Yup.string().required('select your gender'),
})