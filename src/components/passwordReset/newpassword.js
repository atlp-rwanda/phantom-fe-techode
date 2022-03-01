import React, { useState } from "react";
import { useFormik } from "formik";
import profile from "../../assets/Image/profile.png";
import onside from "../../assets/Image/onside.svg";
import privilege from "../../assets/Image/privilege.svg";
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
       <div className=" flex flex-col md:flex-col md:flex md:justify-center  w-screen md:flex md:flex-row lg:flex lg:flex-row justify-evenly">
      
      <div className="  w-4/5  h-80 lg:flex lg:justify-content lg:mt-20 lg:w-full sm:w-1/2 md:ml-20 sm:flex md:flex md:justify-center  md:w-2/3 md:h-96 md:mt-0  bg-white  lg:w-1/3 rounded flex mt-10">
        <div className="mt-5 md:mt-20">
          <div className="">
            <figure>
              <img className="w-1/3 ml-20" src={profile} alt="" />
            </figure>
          </div>
          <div className="flex justify-center mt-10  ml-10 sm:ml-0 ">
            <form action="md:flex md:justify-center " className="w-full" onSubmit={formik.handleSubmit}>
              <input
                className=" w-5/6 flex justify-center md:justify-center bg-gray-50 md:w-full appearance-none rounded w-full py-2 px-3 mb-3 text-xs font-semibold text-gray-900 leading-tight "
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
                className="flex justify-center  bg-gray-50   appearance-none rounded w-5/6 md:w-full py-2 px-3 mb-3 text-xs font-semibold text-gray-900 leading-tight "
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
                className="bg-primary-600 shadow-2xl text-white text-xs font-bold py-2 w-full px-4 w-5/6 md:w-full rounded focus:outline-none focus:shadow-outline"
                type="submit">Update
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <!===================================User profile ==========================================!> */}
 <div className="w-4/5  lg:flex lg:items-center lg:justify-center child-two bg-white h-2/3 mt-10 md:ml-20  lg:w-2/5 lg:h-96 lg:mr-5  lg:mt-20  p-10   md:w-2/3 md:flex ">
        <div className="relative  ">
          <div>
            <div className="flex justify-center">
              <figure className="">
                <img className="w-20" src={profile} alt="" />
                <figcaption className="text-center text-sm mt-3 font-extrabold">
                  John Doe
                </figcaption>
              </figure>
            </div>
            <div className="mb-5 flex flex-row mt-3 text-xs">
              <div className="w-10 h-8 bg-sky-50 snap-center rounded-md outline-black-5">
                <img className="mt-2 " src={onside} alt="" />
              </div>

              <div className="flex flex-col ml-2">
                <p className="text-blue-500">User Information</p>
                <p>00000000000</p>
                <p className="w-1/6">email.example.email.com</p>
              </div>
            </div>

            <div className="mb-5 flex flex-row text-xs">
              <div className="w-10 h-8 bg-sky-50 snap-center rounded-md outline-black-5">
                <img className="mt-2 " src={privilege} alt="" />
              </div>

              <div className="flex flex-col ml-2">
                <p className="text-blue-500">Priviliges</p>
                <p>Locate bus</p>
                <p>Update his own profile</p>

                <p className="text-green-300 mb-3">Set new roles</p>
              </div>
            </div>

            <button
              className="bg-indigo-200 shadow-2xl w-full hover:bg-blue-400 text-xs text-blue-500 font-extrabold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Logout from this account{" "}
            </button>
          </div>
        </div>
      </div>
      </div>




















    </DashBoardLayout>
   
  );
}
