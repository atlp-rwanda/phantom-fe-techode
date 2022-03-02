import React, { useState } from "react";
import Frame5 from "../../assets/Image/imagereset.png";
import '../../assets/style/LoginForm.css';
import leftArrow from "../../assets/Image/left-arrow.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import main from "../../assets/js/main";

export default function PasswordReset() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const [loading, setLoading] = useState(false);

  const validate = Yup.object({
    email: Yup.string().email("Invalid email").required("required"),
  });
  const formik = useFormik({
        initialValues:{
            email: "",
        },
        validationSchema: Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        }),
        onSubmit: (values) => { 
            setLoading(true);        
            setTimeout(() => {
                setLoading(false);
                history.push("/newpass");
            }, 5000);
        }  
    })
  return (
    <div className='lg:flex md:flex w-screen h-screen overflow-hidden' style={main.style}>
    <div className=" letfSide_bg-color lg:w-5/12 md:w-7/12 flex flex-col md:p-12 lg:p-24 2xl:p-40">
        <Link to="/"  className='w-full' >
            <span className="iconify">
                <img src={leftArrow} alt="" />
            </span>
        </Link>
        <div className=" w-full h-screen flex items-center flex-wrap">           
            <div className="w-full">                        
                <div className="form-container min-h-full">
                    <blockquote className="text-2xl font-medium text-center">
                        <p id ="header" className="text-mainColor text-4xl lg:text-4xl md:text-2xl font-bold font-sans leading-10">Phantom</p>
                    </blockquote>
                    <div className=" w-full">
                        <div className="flex items-center mt-3 justify-center">
                            <h1 className="text-base font-sans font-medium text-primary mt-0 mb-6 text-white">
                                Forgot password ?
                            </h1>                                    
                        </div>
                        <form onSubmit={formik.handleSubmit} className="w-full">

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}
                                className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2 "} />

                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                                ) : null}

                            <div className="flex items-center  mt-3">
                                <button
                                    id="btn__submit"
                                    type="submit"
                                    className={"bg-primary-600 hover:bg-primary-400 font-sans text-white font-semibold py-2 px-2 rounded w-full"}
                                    value="reset">
                                    Reset  Password
                                </button>
                            </div>
                            
                        </form>
                    </div>    
                </div>                        
            </div>
        </div>
     
    </div>
    <div className="bg-no-repeat bg-center bg-cover w-3/5 h-screen relative">
        <figure>
            <img className="lg:block md:block lg:mt-10 lg:h-5/6 md:mt-28 md:h-96 lg:mb-20 mr-auto lg:w-10/12 lg:ml-12 hidden" src={Frame5} alt="Background Image" />
            <figcaption className="hidden lg:block md:block lg:absolute md:absolute lg:top-1/2 md:top-64 lg:left-1/2 md:left-1/2 lg:right-0 md:right-0 lg:bottom-0 md:bottom-0">  <h3 className="text-mainColor font-sans font-bold leading-10 lg:text-4xl md:text-2xl lg:mb-2 md:mb-1 lg:mt-1 md:mt-20 not-italic">Fast and easy movement !</h3>
                <p className="text-secondary-300 font-sans not-italic font-semibold leading-10 md:text-base md:mt-2 lg:mt-4 mt-8">
                    Write your email And click reset password button 
                </p>
            </figcaption>
        </figure>
    </div>
</div>
  );
}
