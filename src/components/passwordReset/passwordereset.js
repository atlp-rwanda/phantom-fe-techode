import React, { useState } from "react";
import Frame5 from "../../assets/Image/imagereset.png";
import leftArrow from "../../assets/Image/left-arrow.svg";


import { useFormik } from "formik";

import * as Yup from "yup";

import { useHistory } from "react-router-dom";

export default function PasswordReset() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const [loading, setLoading] = useState(false);
  window.onload = (event) => {};

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
    <div className="w-full parent sm: flex flex-row md:flex md:flex-row ">
        
      {!loading && (
          
        <><div className="child-one w-screen sm:w-1/3 md:w-1/3 h-screen bg-indigo-900   ml-0 flex items-center  justify-center ">
      
      
                  <div className=" h-1/2">
                      <img src={leftArrow} alt="" />
                      <p className=" text-primary-500 font-extrabold text-2xl text-center mb-2">
                          Phantom
                      </p>
                      <p className=" text-white text-sm font-extrabold text-center mb-5">
                          Forgot your password ?
                      </p>

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

                              className="bg-primary-300 mt-3 text-white text-xs  outline-black-2 shadow-4xl py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline"
                              type="submit"
                          >
                              Reset password
                          </button>

                      </form>






                  </div>
              </div><div className="child-two flex flex-col hidden sm:block md:block w-3/4 flex items-center justify-center relative  h-screen ">

                      <div className="flex items-center justify-center h-1/2 relative top-20 ">
                          <img className=" h-full" src={Frame5} alt="" />



                          <div className="flex flex-col items-center justify-center h-1/2 absolute top-21 right-30 ">
                              <h1 className="text-blue-500 text-4xl font-extrabold mt-5">
                                  we got you
                              </h1>
                              <p className=" mt-5">Write your email and click reset </p>
                              <p>password button</p>
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
                     type="submit"
                 >
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
  );
}
