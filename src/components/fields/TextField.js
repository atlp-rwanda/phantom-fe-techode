import { useFormik } from "formik";
import React, { useEffect } from "react";
import { PrimaryButton } from "../buttons/Buttons";
import * as Yup from "yup"
import Notify from "../../functions/Notify";
import { connect, useSelector } from "react-redux";
import { update } from '../../redux/actions/userActions';
import { useDispatch } from "react-redux";

const TextField = ({ setLoading , user ,update }) => {
    const { email , firstname , lastname , telephone , username } = user;    
    
    const formik = useFormik({
        initialValues:{
            username:username,
            firstName: firstname,
            lastName: lastname,
            email: email,
            phone: telephone
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            phone: Yup.string().required("Required")
        }),
        onSubmit: (values) => { 
            setLoading(true);
            update(formik.values);
            setTimeout(() => {
                Notify('Updated', 'success');
                setLoading(false);
            } , 1000)
           
        }
    })
    
    return (  
            <form id="form" onSubmit={formik.handleSubmit} className="flex flex-col">
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 bg-secondary-40 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="text" id="username" name="username" placeholder="JohnDoe"  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username} />
                <div className="text-red-600 text-xs md:text-base">
                    <p className="">{formik.touched.username && formik.errors.username}</p>
                </div>
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 bg-secondary-40 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="text" id="firstName" name="firstName" placeholder="John"  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstName} />
                <div className="text-red-600 text-xs md:text-base">
                    <p className="">{formik.touched.firstName && formik.errors.firstName}</p>
                </div>
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 bg-secondary-40 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="text" id="lastName" name="lastName" placeholder="Doe" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastName} />
                <div className=" text-red-600 text-xs md:text-base">
                    <p>
                        {formik.touched.lastName && formik.errors.lastName}
                    </p>
                </div>

                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 bg-secondary-40 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="email" id="email" name="email" placeholder="example@gmail.com" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                <div className="text-red-600 text-xs md:text-base">
                    <p>
                    {formik.touched.email && formik.errors.email}
                    </p>
                </div>
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 bg-secondary-40 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="tel" id="phone" name="phone" placeholder="079******" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} />
                    <div className=" text-red-600 text-xs md:text-base">
                    <p>
                        {formik.touched.phone && formik.errors.phone}
                    </p>
                </div>

                <span className="text-primary-600 hover:text-primary-500 cursor-pointer mt-5 text-xs md:text-sm">Reset your password</span>
                <PrimaryButton name="Update" />
            </form>
     );
}

const mapStateTo = (state) =>{
    return {
        user: state.user
    }
}
export default connect( mapStateTo , { update })(TextField);