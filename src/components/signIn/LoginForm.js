import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Image from '../../assets/style/signin-images/Image1.png';
import '../../assets/style/LoginForm.css';
import SkeletonUpdate from '../signInSkeleton/SkeletonUpdate';
import main from '../../assets/js/main'


const LoginForm = () => {
    const history = useHistory()

    const [signInSkeleton, setSignInSkeleton] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setSignInSkeleton(false);
        }, 2000)
    }, [])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        validationSchema: Yup.object({

            password: Yup.string()
                .oneOf(["test123"], "Password doesn't match with Email address")
                .required('Password required'),
            email: Yup.string()
                .oneOf(["admin@andela.com"], "Email does not match")
                .email('Invalid email address')
                .required('Email required'),
        }),
        onSubmit: () => {
            history.push('/new')
        },
    });

    return (
        <div 
        className="lg:flex md:flex w-screen h-screen overflow-hidden "   style={main.style}
        >
            <div className="lg:w-5/12 md:w-7/12 w-full lg:flex md:flex lg:flex-col md:flex-col lg:items-center md:items-center">
               {signInSkeleton && (<SkeletonUpdate />)}
                 {!signInSkeleton && (
                <div className="w-full letfSide_bg-color h-screen py-10 px-1">
                        <blockquote className="text-2xl font-medium text-center lg:mt-24 md:mt-20 mt-12">
                            <p className="text-mainColor text-4xl lg:text-4xl md:text-2xl font-bold font-sans leading-10">Phantom</p>
                        </blockquote>
                    <div className="text-primary m-6">
                        <div className="flex items-center mt-3 justify-center">
                            <h1 className="text-xl md:text-2xl font-sans font-medium text-primary mt-0 mb-6 text-white">
                                Sign In
                            </h1>
                            <a className="text-mainColor" href=""><span className="iconify w-8 h-9 absolute lg:-ml-56 md:-ml-48 lg:-mt-36 md:-mt-32 -ml-44 -mt-32" data-icon="akar-icons:arrow-left"></span></a>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="md:w-full md:-ml-6">

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={
                                    "lg:w-3/4  w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 lg:ml-20 md:ml-6"} />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="lg:ml-20 md:ml-7 text-red-500 text-sm">{formik.errors.email}</div>
                            ) : null}

                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className={
                                    "lg:w-3/4 w-full lg:ml-20 p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 md:ml-6"} />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="lg:ml-20 md:ml-7 text-red-500 text-sm">{formik.errors.password}</div>
                            ) : null}
                            <p className="font-sans font-medium lg:ml-20 md:ml-6 justify-center text-mainColor"><a href="">Forget Password?</a></p>

                            <div className="flex items-center mt-6">
                                <button
                                    type="submit"
                                    className={
                                        "bg-primary-600 hover:bg-primary-400 font-sans text-white font-bold py-2 px-4 rounded lg:ml-20 md:ml-6 lg:w-3/4 w-full"
                                    }
                                    value="Login">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="flex items-center mt-3 lg:w-3/4 md:w-full">
                            <button className={"text-blue-500 lg:ml-14 md:ml-0"}>
                                <p className="text-mainColor font-sans font-medium">Dont have an account yet?<a className = "text-mainColor"href="">Sign Up</a></p>
                            </button>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className="bg-no-repeat bg-center bg-cover w-3/5 h-screen relative">
                <figure>
                    <img className="lg:block md:block lg:mt-10 lg:h-5/6 md:mt-28 md:h-96 lg:mb-20 mr-auto lg:w-10/12 lg:ml-12 hidden" src={Image} alt="Backgraoung Image" />
                    <figcaption className="hidden lg:block md:block lg:absolute md:absolute lg:top-1/2 md:top-64 lg:left-1/2 md:left-1/2 lg:right-0 md:right-0 lg:bottom-0 md:bottom-0">  <h3 className="text-mainColor font-sans font-bold leading-10 lg:text-4xl md:text-2xl lg:mb-2 md:mb-1 lg:mt-1 md:mt-20 not-italic">Fast and easy movement !</h3>
                        <p className="text-secondary-550 font-sans not-italic font-medium leading-10 md:text-xs md:mt-2 lg:mt-4 mt-8">Get notified anytime, anywhere bus is.Get notified anytime, anywhere bus is.Get notified anytime, anywhere bus is.Get notified anytime, anywhere bus is.</p></figcaption>
                </figure>
            </div>
        </div>
    )}

export default LoginForm