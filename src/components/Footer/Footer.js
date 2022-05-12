import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./Footer.css";
import mail from "../../assets/svgs/mail.svg";
import phone from "../../assets/svgs/phone.svg";
import location from "../../assets/svgs/location.svg";

const Footer = () => {

  const formik = useFormik({
    initialValues: {
      cFullName: '',
      cPhoneNumber: '',
      cEmail: '',
      cMessage: '',
    },
    validationSchema: Yup.object({
      cFullName: Yup.string()
        .max(35, 'Must be 15 characters or less')
        .required('Required'),
      cPhoneNumber: Yup.string()
        .max(15, 'Must be 10 Numbers or less')
        .required('Required'),
      cEmail: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      cMessage: Yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div id="ph-footer" className="ph-footer flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex md:flex-row  flex-wrap py-9 px-10 justify-between">
      <div className="flex flex-col w-60 md:w-60 lg:w-1/2  mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-600 font-sans py-10 top-0 ">
          Phantom
        </h1>
        <h1 className="text-2xl md:text-4xl text-primary-600 font-sans md:mb-5">
          Let's get connected
        </h1>
        <p className="md:text-xl text-gray-400 md:pr-10 ">
        Thanks for using our app! We hope that you have found what you needed on our website. If not, please feel free to contact us using any of the methods below.
        </p>
        <div className="flex flex-col mt-2">
          <span className="flex flex-col md:flex md:flex-row w-full">
            <div className="w-5 h-5">
              <img src={mail} />
            </div>{" "}
            <div className="md:text-xl text-gray-400 px-2.5">
              techoders.andela@gmail.com
            </div>
          </span>
       
          <span className="flex flex-row w-full">
            <div className="w-5 h-5">
              <img src={phone} />
            </div>{" "}
            <div className="md:text-xl text-gray-400 px-2.5">078882321</div>
          </span>
          <span className="flex flex-row w-full">
            <div className="w-5 h-5">
              <img src={location} />
            </div>{" "}
            <div className="md:text-xl text-gray-400 px-2.5">KN10ST</div>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-60 md:w-60 mt-10 lg:w-auto mx-auto"> 
        <div className="text-2xl md:text-4xl font-bold text-primary-600 font-sans pb-10">
          Send us a message
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <input
                className="cFullName appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="cFullName"
                type="text"
                placeholder="Full name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cFullName}
              />
              {formik.touched.cFullName && formik.errors.cFullName ? (
                <div className="text-red-500 text-xs italic">{formik.errors.cFullName}</div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <input
                className="cPhoneNumber appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="cPhoneNumber"
                type="text"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cPhoneNumber}
              />
              {formik.touched.cFullName && formik.errors.cPhoneNumber ? (
                <div className="text-red-500 text-xs italic">{formik.errors.cPhoneNumber}</div>
              ) : null}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <input
                className="cEmail appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="cEmail"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cEmail}
              />
               {formik.touched.cFullName && formik.errors.cEmail ? (
                <div className="text-red-500 text-xs italic">{formik.errors.cEmail}</div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <textarea
                className="cMessage no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="cMessage"
                placeholder="Message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cMessage}
              ></textarea>
               {formik.touched.cFullName && formik.errors.cMessage ? (
                <div className="text-red-500 text-xs italic">{formik.errors.cMessage}</div>
              ) : null}
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <button type="submit" className="bg-primary-600 hover:bg-primary-400 text-white md:text-xl md:font-bold py-2 px-4 rounded">
              Contact us Now
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
     
    </div>
     <div className="flex items-center text-xl md:font-bold text-primary-600 font-sans m-10 mx-auto">
     © AndelaTechoders 2022
   </div>
    </div>
    
  );
};

export default Footer;
