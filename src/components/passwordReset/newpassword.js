import React, { useState } from "react";
import { useFormik } from "formik";
import profile from "../../assets/Image/profile.png";
import onside from "../../assets/Image/onside.svg";
import privilege from "../../assets/Image/privilege.svg";
import common from '../../assets/img/common.jpg';
import vector from '../../assets/img/vector.png';
import carbon from '../../assets/img/carbon_task-add.png';
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import DashBoardLayout from "../dashBoardLayout/DashBoardLayout";

export default function NewPassword() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      newpass: "",
      confpass: "",
    },
    validationSchema: Yup.object({
      newpass: Yup.string("New passwprd is required").required("Required"),
      confpass: Yup.string("confirm password")
        .required("Required")
        .oneOf([Yup.ref("newpass"), null], "Passwordmust match"),
    }),
    onSubmit: (values) => {
      history.push("/reset");
    },
  });

  return (

    <DashBoardLayout>
       <div className=" flex flex-col items-center md:flex-col md:flex md:justify-center  w-screen md:flex md:flex-row lg:flex lg:flex-row justify-evenly">
      
      <section className="  w-4/5  h-80 lg:flex lg:justify-content lg:mt-20 lg:w-full sm:w-1/2 md:ml-20 sm:flex md:flex md:justify-center  md:w-2/3 md:h-96 md:mt-0  bg-white  lg:w-1/3 rounded flex mt-10">
        <div className=" flex flex-col items-center mt-5">
          <div className="flex items-center justify-center    w-1/2 ">
            <figure className="w-2/3 flex justify-center h-4/5">
              <img className=" rounded-full" src={common} alt="" />
            </figure>
          </div>
          <div className="flex justify-center mt-5  w-3/5  sm:ml-0 ">
            <form action="md:flex md:justify-center " className="w-full" onSubmit={formik.handleSubmit}>
              <input
                className=" w-full flex justify-center md:justify-center bg-gray-50 md:w-full appearance-none rounded w-full py-2 px-3 mb-3 text-xs font-semibold text-gray-900 leading-tight "
                id="newpass"
                type="password"
                name="newpass"
                placeholder="New password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.newpass}
              />
              <div className=" text-red-600 text-xs">
                {formik.touched.newpass && formik.errors.newpass}
              </div>
              <input
                className="w-full flex justify-center md:justify-center bg-gray-50 md:w-full appearance-none rounded w-full py-2 px-3 mb-3 text-xs font-semibold text-gray-900 leading-tight "
                id="newpass"
                type=""
                name="confpass"
                placeholder="Confirm password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.confpass}
              />
              <div className=" text-red-600 text-xs">
                {formik.touched.confpass && formik.errors.confpass}
              </div>

              <button
                className="bg-primary-600 shadow-2xl text-white text-xs font-bold py-2   rounded focus:outline-none focus:shadow-outline      w-full flex justify-center md:justify-center md:w-full appearance-none rounded w-full py-2 px-3 mb-3  leading-tight"
                type="submit" id="update">Update
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <!===================================User profile ==========================================!> */}
 <section id="passwordForm" className="w-4/5 lg:flex lg:items-center lg:justify-center child-two bg-white h-2/3 mt-10 md:ml-20  lg:w-2/5 lg:h-96 lg:mr-5  lg:mt-20  p-10   md:w-2/3 md:flex  justify-center ">
        <div className="relative    w-full md:w-5/6 ">
          <div>
            <div className="flex justify-center">
              <figure className="">
                <img className="w-20 rounded-full" src={common} alt="" />
                <figcaption className="text-center text-sm mt-3 font-extrabold">
                  John Doe
                </figcaption>
              </figure>
            </div>
 
            <div className="mb-5 flex flex-row text-xs w-full md:w-full  ">
              <div className="w-10 h-8 bg-primary-100  flex items-center justify-center rounded-md">
                <img className=" " src={onside} alt="" />
              </div>
              <div className="flex flex-col ml-2  w-3/5">
                <p className="text-blue-500">User information</p>
                <p className=" ">00000000000</p>
                <p className=" w-1/6 ">email.exampl</p>
              </div>
            </div>
            <div className="mb-5  flex flex-row text-xs w-full md:w-full">
              <div className="w-10 md:w-10 h-8 bg-primary-100  flex items-center justify-center rounded-md">
                <img className=" " src={privilege} alt="" />
              </div>
              <div className="flex flex-col ml-2  w-full">
                <p className="text-blue-500">Priviliges</p>
                <p className="w-full flex justify-between ">Locate bus <span className="ml-2"><img src={vector} alt="" /></span></p>
                <p className=" flex justify-between">Update his own profile <span><img src={vector} alt="" /></span></p>
                <p className="text-green-300 mt-3 flex justify-between">Set new roles <span><img src={carbon} alt="" /></span></p>
              </div>
            </div>
            <button
              className="w-full bg-indigo-200 shadow-2xl w-full hover:bg-blue-400 text-xs text-blue-500 font-extrabold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Logout from this account{" "}
            </button>
          </div>
        </div>
      </section>
      </div>

    </DashBoardLayout>
   
  );
}
