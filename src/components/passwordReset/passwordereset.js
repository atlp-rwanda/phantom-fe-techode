import React, { useState } from "react";
import Frame5 from "../../assets/Image/imagereset.png";
<<<<<<< HEAD
import '../../assets/style/LoginForm.css';
import leftArrow from "../../assets/Image/left-arrow.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import main from "../../assets/js/main";
=======
import leftArrow from "../../assets/Image/left-arrow.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
>>>>>>> ft-permissions-tp-32

export default function PasswordReset() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD

=======
  window.onload = (event) => {};
>>>>>>> ft-permissions-tp-32
  const validate = Yup.object({
    email: Yup.string().email("Invalid email").required("required"),
  });
  const formik = useFormik({
<<<<<<< HEAD
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
                            <h1 className="text-base font-sans font-medium text-primary mt-0 mb-6 text-white" >
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
                                    id="reset"
                                    type="submit"
                                    className={"bg-primary-600 hover:bg-primary-400 font-sans text-white font-semibold py-2 px-2 rounded w-full"}
                                    value="reset">
                                    Reset password
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
=======
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
    <div className="w-full parent sm:flex md:flex-row md:flex ">    
      {!loading && (
        <>
        <div className="h-screen w-screen  sm:w-1/2 sm:h-screen bg-indigo-900  flex flex-col items-center  ">
            <div className=" mr-60 mt-10">
            <img src={leftArrow} alt="" />
            </div>
        <div className="child-one w-screen  sm:w-1/3 md:w-2/3   ml-0 flex h-screen  flex-col  justify-center items-center ">
                  <div className=" h-1/2  flex flex-col items-center justify-center ">
                      <p className=" text-primary-500 font-extrabold text-2xl text-center mb-2">
                          Phantom
                      </p>
                      <p className=" text-white text-l font-bold text-center mb-5">
                          Forgot your password ?
                      </p>
                   <div className="flex justify-center items-center">
                      <form action="" onSubmit={formik.handleSubmit}>
                          <input
                              className=" flex justify-center w-60 bg-sky-50 w-full appearance-none rounded  py-2 px-3 mb-3 text-xs font-semibold text-gray-900 leading-tight "
                              id="email"
                              type="email"
                              name="email"
                              placeholder="Email"
                              onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                          <div className=" text-red-600">
                              {formik.touched.email && formik.errors.email}
                          </div>
                          <button
                          id="reset"
                              className="bg-primary-300 mt-3 text-white text-sm  outline-black-2 shadow-4xl py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline"
                              type="submit">
                              Reset password
                          </button>
                      </form>
                      </div>
                      </div>
                  </div>
              </div><div className="child-two hidden flex flex-col sm:block sm:w-3/5 sm:h-screen  md:block w-3/4  items-center justify-center relative  h-screen ">
                      <div className="flex items-center h-full relative sm:h-full  sm:w-4/6  ">
                          <img className=" h-5/6 md:ml-20 sm:ml-5 " src={Frame5} alt="" />
                          <div className="flex flex-col items-center justify-center h-1/2 absolute top-30 left-20 sm:absolute   sm:w-5/6 sm:left-20">
                              <h1 className="text-blue-500  md:ml-20  sm:w-4/5 sm:ml-0  md:text-5xl font-bold mt-5">
                                  we got you
                              </h1>
                              <p className=" mt-7 text-sm   sm:ml-10  sm:w-3/5  w-3/4">Write your email and click reset password button</p>   
                          </div>
                      </div>
                  </div></>
      )}

      {loading && (
         <><div className="child-one w-screen sm:w-1/3 md:w-1/3 h-screen bg-gray-100 animate-pulse   ml-0 flex items-center  justify-center ">
         <div className=" h-1/2">
             <div className="rounded-full animate-pulse w-10 h-10 bg-gray-200"
             ><img src={leftArrow} hidden alt="" /></div>
             
             <p className=" text-gray-200 bg-gray-200 rounded-lg h-6 mt-3 animate-pulse font-extrabold text-xl text-center mb-2">
                 Phantom
             </p>
             <p className=" text-gray-200 bg-gray-200 rounded-lg h-6 mt-3 text-l animate-pulse font-extrabold text-center mb-5">
                 Forgot your password
             </p>

             <form action="" onSubmit={formik.handleSubmit}>
                 <input
                     className=" flex justify-center bg-gray-200 rounded-lg h-6 mt-3 animate-pulse text-gray-200 w-full appearance-none rounded  py-2 px-3 mb-3 text-xs font-semibold  leading-tight "
                     id="email"
                     type="email"
                     name="email"
                     placeholder="Email"
                     onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                 <div className=" text-red-600">
                     {formik.touched.email && formik.errors.email}
                 </div>

                 <button

                     className="bg-sky-700  text-gray-200 bg-gray-200 rounded-lg h-6 mt-3 text-xs animate-pulse  outline-black-2 font-bold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline"
                     type="submit">
                     Reset password
                 </button>
             </form>
         </div>
     </div><div className="child-two flex flex-col hidden sm:block md:block w-3/4 flex items-center justify-center relative  h-screen animate-pulse bg-gray-100 ">
             <div className="flex items-center justify-center h-1/2 relative top-20 ">
                 <div className="h-full w-1/2 bg-gray-200 rounded-lg animate-pulse ">
                 <img className=" h-full" src={Frame5} hidden alt="" />
                 </div>
                 <div className="flex flex-col items-center justify-center h-1/2 absolute top-21 right-30 ">
                     <h1 className="text-gray-300 bg-gray-300 rounded-lg h-6 w-full animate-pulse  font-extrabold mt-5">
                         we got you
                     </h1>
                     <p className=" mt-5 text-gray-300 bg-gray-300 mb-3  rounded-lg animate-pulse">Write your email and click reset </p>
                     <p className="text-gray-300 bg-gray-300 rounded-lg animate-pulse">password button</p>
                 </div>
             </div>
         </div></>
      )} 
    </div>
>>>>>>> ft-permissions-tp-32
  );
}
