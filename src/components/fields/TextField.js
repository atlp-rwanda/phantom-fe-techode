import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../buttons/Buttons";
import * as Yup from "yup"
import Notify from "../../functions/Notify";
import { connect, useSelector } from "react-redux";
import { setProfile, update } from '../../redux/actions/userActions';
import { useDispatch } from "react-redux";
import { API as axios } from "../../api/index"

const TextField = ({ setLoading, image, user }) => {
    let myImage
    const { email , firstname , lastname , telephone , username } = useSelector(state => state.user);    
    const [profileId, setProfileId] = useState('')
    if(image) {
        myImage = image
    } else {
        myImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
    }

  
    const formik = useFormik({
        initialValues:{
            username:username,
            firstName: firstname,
            lastName: lastname,
            phone: telephone
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            // email: Yup.string().email("Invalid email").required("Required"),
            phone: Yup.string().required("Required")
        }),
        onSubmit: async (values) => { 
            setLoading(true);
            let id = user.id

            try {
                const responseOne = await axios.put(`/profile`, 
                  {
                    profileImage: myImage 
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json",
                      'auth-token': `Bearer ${localStorage.getItem("token")}`,
                      'action': 'editProfile'
                    }
                  }
                  );
    
                const response = await axios.put(`/users/${id}`, {
                    firstname: formik.values.firstName,
                    lastname: formik.values.lastName,
                    username: formik.values.username,
                    telephone: formik.values.telephone
                },
                  {
                    headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json",
                      'action': 'editProfile'
                    }
                  }
                  );
                Notify('Updated', 'success');
                setLoading(false);
            }  catch (error) {
                if (error.code != "ERR_NETWORK") {
                  Notify(error.response.data.message, "error");
                }
                else{
                  Notify(error.message, "error");
                }          
              }
           
           
        }
    })
    
    return (  
            <form id="form" onSubmit={formik.handleSubmit} className="flex flex-col">
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 bg-secondary-40 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="text" id="username" name="username" placeholder="JohnDoe"  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.username} />
                <div className="text-red-600 text-xs md:text-base">
                    <p className="">{formik.touched.username && formik.errors.username}</p>
                </div>
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 bg-secondary-40 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="text" id="firstName" name="firstName" placeholder="John"  onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.firstName} />
                <div className="text-red-600 text-xs md:text-base">
                    <p className="">{formik.touched.firstName && formik.errors.firstName}</p>
                </div>
                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 bg-secondary-40 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="text" id="lastName" name="lastName" placeholder="Doe" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lastName} />
                <div className=" text-red-600 text-xs md:text-base">
                    <p>
                        {formik.touched.lastName && formik.errors.lastName}
                    </p>
                </div>

                <input className="mt-5 placeholder:text-slate-400 block bg-slate-200 w-full md:w-5/6 h-8 md:h-11 bg-secondary-40 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-sm" type="tel" id="phone" name="phone" placeholder="079******" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} />
                    <div className=" text-red-600 text-xs md:text-base">
                    <p>
                        {formik.touched.phone && formik.errors.phone}
                    </p>
                </div>

                <span className="text-primary-600 hover:text-primary-500 cursor-pointer mt-5 text-xs md:text-sm">Reset your password</span>
                <PrimaryButton name="Update" />
            </form>
     );
}


const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }

export default connect(mapStateToProps,{ setProfile, update })(TextField);
