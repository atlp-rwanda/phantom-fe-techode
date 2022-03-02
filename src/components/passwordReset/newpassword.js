import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import DashBoardLayout from "../dashBoardLayout/DashBoardLayout";
import SkeletonLogout from '../skeletons/SkeletonLogout';

import info from '../svgs/info.svg'
import priveleges from "../svgs/priveleges.svg"
import locate from "../svgs/locate.svg"
import setrole from "../svgs/setrole.svg"
import { PrimaryButton } from "../buttons/Buttons";
import { ToastContainer } from "react-toastify";
import Notify from "../../functions/Notify";

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
      Notify('Updated', 'success')
      setTimeout(() => {
        history.push("/reset");
      }, 2000)
    },
  });

  const [profile, setProfile] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setProfile(false);
      }, 2000)
    }, [])

  return (
    <DashBoardLayout>
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
      <div className="w-full h-min  lg:w-7/12 bg-white rounded-md p-4 m-2">
        <div className="w-full">
          <div>
            <section className="flex items-center justify-center">
              <img className="rounded-full border border-primary-600 w-16 h-16 hover:opacity-75" src="https://i.picsum.photos/id/188/200/200.jpg?hmac=TipFoTVq-8WOmIswCmTNEcphuYngcdkCBi4YR7Hv6Cw" alt="image" />
              {/* <img src={profileEdit} className="mt-20 -ml-4" alt="profile" /> */}
            </section>

            <section className="mt-10 md:pl-20">
                <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                  <input
                    className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" 
                    id="newpass"
                    type="password"
                    name="newpass"
                    placeholder="New password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.newpass}
                  />
                  <div className="text-red-600 text-xs md:text-lg">
                    {formik.touched.newpass && formik.errors.newpass}
                  </div>
                  <input
                    className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" 
                    id="newpass"
                    type=""
                    name="confpass"
                    placeholder="Confirm password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.confpass}
                  />
                  <div className=" text-red-600 text-xs md:text-lg">
                    {formik.touched.confpass && formik.errors.confpass}
                  </div>
                  <PrimaryButton name="Update" />
                </form>
            </section>
          </div>
        </div>
      </div>
      
      <div className="w-full h-min lg:w-4/12 bg-white rounded-md m-2 py-12">
        <div className="w-full">
          {profile && ( <SkeletonLogout />)}
            {!profile && (
                <div className="h-full w-full md:h-full">
                    <section className="flex flex-col items-center justify-center">
                        <img className="border border-primary-600 w-16 h-16 rounded-full flex items-center justify-center bg-primary-100" src="https://i.picsum.photos/id/188/200/200.jpg?hmac=TipFoTVq-8WOmIswCmTNEcphuYngcdkCBi4YR7Hv6Cw" alt="image" />
                        <span className="text-secondary-300 mt-6 text-primary-600 text-xs md:text-sm font-sans font-semibold">John Doe</span>
                    </section>
                    <section className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="mt-4 px-6">
                                <img src={info} alt="user info" className="w-7 md:w-10"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-primary-600 font-semibold mt-4 text-sm font-sans">User information</span>
                                <span className="text-secondary-200 font-semibold mt-2 text-xs">079*****</span>
                                <span className="text-secondary-200 font-semibold mt-2 text-xs">Johndoe@email.com</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-row">
                            <div className="mt-5 px-6">
                                <img src={priveleges} alt="Priveleges"className="w-7 md:w-10"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-primary-600 font-semibold mt-5 text-sm">Previleges</span>
                                <div className="flex flex-row">
                                    <span className="text-success-500 font-semibold mt-2 text-xs hover:text-success-200 cursor-pointer">Locate bus</span>
                                    <img src={locate} alt="Locate bus" className="w-3 h-3 mt-1 ml-9 md:w-4 md:h-5 md:mt-1 md:ml-9 cursor-pointer"/>
                                </div>
                                <div className="flex flex-row">
                                    <span className="text-success-500 font-semibold mt-2 text-xs hover:text-success-200 cursor-pointer">Update profile</span>
                                    <img src={locate} alt="Update profile" className="w-3 h-3 mt-1 ml-3 md:w-4 md:h-5 md:mt-1 md:ml-4 cursor-pointer"/>
                                </div>
                                <div className="flex flex-row">
                                    <span className="text-success-500 font-semibold mt-2 text-xs hover:text-success-200 cursor-pointer">Set new role</span>
                                    <img src={setrole} alt="Set new Role" className="w-3 h-3 mt-2 ml-6 md:w-4 md:h-5 md:mt-1 md:ml-6 cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                        <div className="px-4">
                            <Link to="/" className="flex items-center justify-center rounded-md bg-primary-100 text-primary-600 h-8 md:h-11 w-full md:w-3/4 mt-5 md:ml-8 hover:bg-primary-600 hover:text-white">Logout from this account</Link>
                        </div>
                    </section>
                </div>
            )
          }
        </div>
      </div>
    </DashBoardLayout>
   
  );
}
