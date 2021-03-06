import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Image from '../../assets/style/signin-images/Image1.png';
import leftArrow from "../../assets/Image/left-arrow.svg"
import '../../assets/style/LoginForm.css';
import SkeletonUpdate from '../../components/signInSkeleton/SkeletonUpdate';
import main from '../../assets/js/main'
import { connect } from 'react-redux';
import Notify from '../../functions/Notify';
import { ToastContainer } from 'react-toastify';
import { API as axios } from "../../api";


const SignUp = () => {
    const history = useHistory();
    const [loading, setloading] = useState(true);  
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 2000)
    }, [])
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const formik = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            telephone:'',
            email: '',
            password: '',

        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .required('firstname required'),
            lastname: Yup.string()
                .required('lastname required'),
            telephone: Yup.string()
                .matches(phoneRegExp,'Please make sure you phone number is valid')
                .required("Phone number can not be empty"),
            password: Yup.string()
                .required('Password required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email required'),
        }),
        onSubmit: async () => {
            setloading(true);
            try {
                const { email, password , firstname , lastname } = formik.values;
                const fullname = firstname + " " + lastname;
                const username = email.split("@")[0];
               
                const response = await axios.post(`/users/login/register`, {
                    fullname,
                    email,
                    username,
                    password
                });                
                Notify("Registered", "success");
                setTimeout(() => { setloading(false); }, 2000);
                setTimeout(() => {
                    history.push('/login');
                }, 2000)
            } catch (error) {
                setTimeout(() => { setloading(false); }, 2000);          
                if (error.code != "ERR_NETWORK") {
                    Notify(error.response.data.message, "error");
                }
                else{
                    Notify(error.message, "error");
                }     
            }
        },
    });

    return (
        <div className='lg:flex md:flex w-screen h-screen overflow-hidden' style={main.style}>
             <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />  
            <div className=" letfSide_bg-color lg:w-5/12 md:w-7/12 flex flex-col p-6 md:p-12 lg:px-24 2xl:p-40 ">                
                <span className="iconify" onClick={() => { history.goBack() }} >
                    <img src={leftArrow} alt="" />
                </span>
                <div className=" w-full h-screen flex items-center flex-wrap">
                    {loading && (<SkeletonUpdate />)}
                    {!loading && (
                    <div className="w-full">                        
                        <div className="form-container min-h-full">
                            <blockquote className="text-2xl font-medium text-center">
                                <p id ="header" className="text-mainColor text-4xl lg:text-4xl md:text-2xl font-bold font-sans leading-10">Phantom</p>
                            </blockquote>
                            <div className="">
                                <div className="flex items-center mt-3 justify-center">
                                    <h1 className="text-xl md:text-2xl font-sans font-medium text-primary mt-0 mb-6 text-white">
                                        Sign Up
                                    </h1>                                    
                                </div>
                                <form onSubmit={formik.handleSubmit} className="">
                                    
                                    <input
                                        id="firstname"
                                        type="text"
                                        name="firstname"
                                        placeholder="firstname"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstname}
                                        className={
                                            "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out my-2"} />
                                    {formik.touched.firstname && formik.errors.firstname ? (
                                        <div className="text-red-500 text-sm">{formik.errors.firstname}</div>
                                    ) : null}

                                                                        
                                    <input
                                        id="lastname"
                                        type="text"
                                        name="lastname"
                                        placeholder="lastname"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.lastname}
                                        className={
                                            "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out my-2"} />
                                    {formik.touched.lastname && formik.errors.lastname ? (
                                        <div className="text-red-500 text-sm">{formik.errors.lastname}</div>
                                    ) : null}

                                    

                                    <input
                                        id="telephone"
                                        type="text"
                                        name="telephone"
                                        placeholder="telephone"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.telephone}
                                        className={
                                            "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out my-2"} />
                                    {formik.touched.telephone && formik.errors.telephone ? (
                                        <div className="text-red-500 text-sm">{formik.errors.telephone}</div>
                                    ) : null}

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="example@email.com"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        className={
                                            "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out my-2"} />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-500 text-sm">{formik.errors.email}</div>
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
                                            "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out my-2"} />
                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="text-red-500 text-sm">{formik.errors.password}</div>
                                    ) : null}
                                    <p className="font-sans font-medium  justify-center text-mainColor">
                                        <Link to="/reset">Forget Password?</Link>
                                    </p>

                                    <div className="flex items-center mt-6">
                                        <button id="btn__submit" type="submit" className={  "bg-primary-600 hover:bg-primary-400 font-sans text-white font-bold py-2 px-4 rounded md:w-full w-full" }  value="Login">
                                            Submit
                                        </button>
                                    </div>
                                    <p className="font-sans font-medium  justify-center text-mainColor my-3">
                                        <Link to="/login">Already have an account? Login</Link>
                                    </p>
                                </form>
                            </div>    
                        </div>                        
                    </div>
                )}
                </div>
             
            </div>
            <div className="bg-no-repeat bg-center bg-cover w-3/5 h-screen relative">
                <figure>
                    <img className="lg:block md:block lg:mt-10 lg:h-5/6 md:mt-28 md:h-96 lg:mb-20 mr-auto lg:w-10/12 lg:ml-12 hidden" src={Image} alt="Background Image" />
                    <figcaption className="hidden lg:block md:block lg:absolute md:absolute lg:top-1/2 md:top-64 lg:left-1/2 md:left-1/2 lg:right-0 md:right-0 lg:bottom-0 md:bottom-0">  <h3 className="text-mainColor font-sans font-bold leading-10 lg:text-4xl md:text-2xl lg:mb-2 md:mb-1 lg:mt-1 md:mt-20 not-italic">Fast and easy movement !</h3>
                        <p className="text-secondary-300 font-sans not-italic font-semibold leading-10 md:text-base md:mt-2 lg:mt-4 mt-8">
                            Get notified anytime, anywhere bus is.Get notified anytime,
                            anywhere bus is.Get notified anytime,
                            anywhere bus is.Get notified anytime, anywhere bus is.
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
    )}

    const mapToState = (state) => {
        return{
            user: state.user
        }
    }

export default connect(mapToState,{})(SignUp)
