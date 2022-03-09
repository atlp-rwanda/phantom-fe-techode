import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import Image from "../../assets/style/signin-images/Image1.png";
import leftArrow from "../../assets/Image/left-arrow.svg";
import "../../assets/style/LoginForm.css";
import SkeletonUpdate from "../../components/signInSkeleton/SkeletonUpdate";
import main from "../../assets/js/main";
import { connect } from "react-redux";
import { update } from "../../redux/actions/userActions";
import axios from "axios";
import baseUrl from "../../functions/baseUrl";
import Notify from "../../functions/Notify";
import { ToastContainer } from "react-toastify";

const LoginForm = (props) => {
  const history = useHistory();
  const [isLoading, setIsloading] = useState(true);
  const { update } = props;
  let logginStatus = localStorage.getItem("Logged");  
  useEffect(() => {
    setIsloading(false);
    logginStatus == true ? history.push("/dashboard") : "" ;
  }, [isLoading]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email required"),
    }),
    onSubmit: async () => {
      const { email, password } = formik.values;
      const userInfo = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        type: "",
      };
      try {
        const response = await axios.post(`${baseUrl}/users/login`, {
          email,
          password,
        });

        const { user: userData } = response.data.data;
        const names = userData.fullname.split(" ");
        for (let i = 0; i < names.length; i++) {
          if (i == 0) {
            userInfo.firstName = names[i];
          } else {
            userInfo.lastName += `${names[i]} `;
          }
        }
        userInfo.username = userData.username;
        userInfo.email = userData.email;
        // userInfo.type = userData.userType;
        userInfo.type = "Admin";
        update(userInfo);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("Logged", true);
        history.push("/dashboard");
      } catch (error) {
        Notify(error.response.data.message, "error");
      }
    },
  });

  return (
    <div
      className="lg:flex md:flex w-screen h-screen overflow-hidden"
      style={main.style}
    >
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
        <Link to="/" className="w-full ">
          <span className="iconify">
            <img src={leftArrow} alt="" />
          </span>
        </Link>
        <div className=" w-full h-screen flex items-center flex-wrap">
          {isLoading && <SkeletonUpdate />}
          {!isLoading && (
            <div className="w-full">
              <div className="form-container min-h-full">
                <blockquote className="text-2xl font-medium text-center">
                  <p
                    id="header"
                    className="text-mainColor text-4xl lg:text-4xl md:text-2xl font-bold font-sans leading-10"
                  >
                    Phantom
                  </p>
                </blockquote>
                <div className="">
                  <div className="flex items-center mt-3 justify-center">
                    <h1 className="text-xl md:text-2xl font-sans font-medium text-primary mt-0 mb-6 text-white">
                      Sign In
                    </h1>
                  </div>
                  <form onSubmit={formik.handleSubmit} className="">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      className={
                        "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 "
                      }
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.email}
                      </div>
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
                        "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                      }
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.password}
                      </div>
                    ) : null}
                    <p className="font-sans font-medium  justify-center text-mainColor">
                      <Link to="/reset">Forget Password?</Link>
                    </p>

                    <div className="flex items-center mt-6">
                      <button
                        id="btn__submit"
                        type="submit"
                        className={
                          "bg-primary-600 hover:bg-primary-400 font-sans text-white font-bold py-2 px-4 rounded md:w-full w-full"
                        }
                        value="Login"
                      >
                        Login
                      </button>
                    </div>
                    <p className="font-sans font-medium  justify-center text-mainColor my-3">
                      Dont have an account yet?
                      <Link to="/signup">Sign Up</Link>
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
          <img
            className="lg:block md:block lg:mt-10 lg:h-5/6 md:mt-28 md:h-96 lg:mb-20 mr-auto lg:w-10/12 lg:ml-12 hidden"
            src={Image}
            alt="Background Image"
          />
          <figcaption className="hidden lg:block md:block lg:absolute md:absolute lg:top-1/2 md:top-64 lg:left-1/2 md:left-1/2 lg:right-0 md:right-0 lg:bottom-0 md:bottom-0">
            {" "}
            <h3 className="text-mainColor font-sans font-bold leading-10 lg:text-4xl md:text-2xl lg:mb-2 md:mb-1 lg:mt-1 md:mt-20 not-italic">
              Fast and easy movement !
            </h3>
            <p className="text-secondary-300 font-sans not-italic font-semibold leading-10 md:text-base md:mt-2 lg:mt-4 mt-8">
              Get notified anytime, anywhere bus is.Get notified anytime,
              anywhere bus is.Get notified anytime, anywhere bus is.Get notified
              anytime, anywhere bus is.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

const mapToState = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapToState, { update })(LoginForm);