import { useFormik } from "formik";
import React from "react";
import { PrimaryButton } from "../buttons/Buttons";
import * as Yup from "yup"

const TextField = () => {

    const formik = useFormik({
        initialValues:{
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            phone: Yup.string().required("Required")
        }),
        onSubmit: (values) => { 
            console.log(values)
        }
    })
    console.log(formik.touched)
    // console.log(formik.values) 
    return (  
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="text" id="firstName" name="firstName" placeholder="John"  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstName} />
                <div className=" text-red-600">
                    {formik.touched.firstName && formik.errors.firstName}
                </div>
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="text" id="lastName" name="lastName" placeholder="Doe" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastName} />
                <div className=" text-red-600">
                    {formik.touched.lastName && formik.errors.lastName}
                </div>

                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="email" id="email" name="email" placeholder="example@gmail.com" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                <div className=" text-red-600">
                    {formik.touched.email && formik.errors.email}
                </div>
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="tel" id="phone" name="phone" placeholder="079******" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} />
                <div className=" text-red-600">
                    {formik.touched.phone && formik.errors.phone}
                </div>

                <span className="text-blue-400/100 mt-5 text-lg">Reset your password</span>
                <PrimaryButton name="Update" />
            </form>
     );
}

export default TextField;