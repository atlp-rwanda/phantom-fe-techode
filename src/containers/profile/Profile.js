import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SkeletonUpdate from "../../components/skeletons/SkeletonUpdate";
import TextField from "../../components/fields/TextField";
import profileEdit from "../../assets/svgs/lebals/profile.svg";
import deletePreveleg from "../../assets/svgs/lebals/deletePrevelage.svg";
import setrole from "../../assets/svgs/lebals/savePrevelage.svg";
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { OperatorProfile } from "../../components/skeletons/cards/Profile";
import userLabel from "../../assets/svgs/lebals/luser.svg";
import lock from "../../assets/svgs/lebals/lock.svg";
import { useDropzone } from "react-dropzone";
import { setProfile , update } from '../../redux/actions/userActions';
import checkAuth from "../../functions/checkAuth";

const Profile = (props ) => {
  const history = useHistory()
  const [loading, setLoading] = useState(true);
  const { user , setProfile , update } = props;
 
  const {
    email,
    firstname,
    lastname,
    telephone,
    type: userType,
    username,
    profile
  } = user;

  /*  ===== Start:: fetching userinfo =====  */
  useEffect( async () => {
      setLoading(false);
      await checkAuth(user,update);
  }, []);
  /*  ===== End:: fetching userinfo =====  */

  /*=============================Upload==================== */
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png, image/jpg",
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      const renamedAcceptedFiles = acceptedFiles.map(
        (file) =>
          new File([file], `${file.name}_${+new Date()}`, {
            type: file.type,
          })
      );
      const newFile = renamedAcceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setProfile(newFile[0].preview);
    },
  });

  const handleLogout = () => {
    localStorage.clear();
        setTimeout(() => {
          window.location.pathname = "/"
    }, 1000)
   
  }

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
          {loading && <SkeletonUpdate />}
          {!loading && (
            <div className="">
              <section className="flex items-center justify-center " >
                <div className="profile-container">
                  <img
                    {...getRootProps()} className="rounded-full border border-primary-600 w-10 h-10 sm:w-16 sm:h-16 hover:opacity-75"
                    src={
                      profile != "" ? profile : "https://i.picsum.photos/id/188/200/200.jpg?hmac=TipFoTVq-8WOmIswCmTNEcphuYngcdkCBi4YR7Hv6Cw" 
                    } alt="image" />
                  <div className="edit-image-svg-container relative mt-2">
                    <img src={profileEdit} className=" absolute bottom-0 right-0" alt="profile" />
                  </div>    
                </div> 
              </section>
              <section className="mt-5 md:pl-20">
                <TextField setLoading={setLoading}  />
              </section>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-min lg:w-4/12 bg-white rounded-md m-2 py-12">
        <div className="w-full">
          {/* ==================== Start: Operator profile ================== */}
          {loading && <OperatorProfile />}
          {!loading && (
            <div className=" flex flex-col items-center justify-center ">
              <div className="profile ">
                <div className="  border border-primary-600 w-16 h-16 rounded-full flex items-center justify-center bg-primary-100">
                  <p className="text-primary-600 text-xl font-sans font-bold">
                   { firstname[0]+"".toString().toUpperCase() }
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <div className="profiler-name">
                  <p className=" text-xs font-semibold font-sans md:text-sm text-secondary-300">
                    {" "}
                    {firstname + " " + lastname}
                  </p>
                </div>
              </div>
              <div className="Operator-info w-full flex justify-between mt-4  px-6">
                <div className="w-1/6 ">
                  <button className="p-2 md:p-3 border border-primary-600 rounded-md  bg-primary-100">
                    <img src={userLabel} alt="Phantom" />
                  </button>
                </div>
                <div className="w-5/6">
                  <div className="title flex flex-wrap font-sans ">
                    <p className="text-primary-600 font-semibold mb-2 text-sm w-full ">
                      User information
                    </p>
                  </div>
                  <div className="flex flex-wrap">
                    <p className="text-secondary-200 font-semibold text-xs  w-full">
                      {username}
                    </p>
                  </div>
                  <div className="flex flex-wrap">
                    <p className="text-secondary-200 font-semibold text-xs  w-full">
                      {telephone}
                    </p>
                  </div>
                  <div className="flex flex-wrap">
                    <p className="text-secondary-200 font-semibold text-xs  w-full">
                      {email}
                    </p>
                  </div>
                </div>
              </div>
              <div className="Operator-info w-full flex justify-between mt-4  px-6">
                <div className="w-1/6 ">
                  <button className="p-2 md:p-3 border border-primary-600 rounded-md  bg-primary-100">
                    <img src={lock} alt="Phantom" />
                  </button>
                </div>
                <div className="w-5/6">
                  <div className="title flex flex-wrap font-sans ">
                    <p className="text-primary-600 font-semibold mb-2 text-sm w-3/4 ">
                      Privileges
                    </p>
                  </div>
                  <div className="flex flex-wrap">
                    <p className="text-secondary-200 font-semibold text-xs md:text-sm w-3/4 mb-2">
                      {
                        userType
                      }
                    </p>
                  </div>
                  <div className="">
                    <div
                      to="/"
                      className="flex items-center cursor-pointer justify-center rounded-md bg-primary-100 text-primary-600 h-8 md:h-11 w-full md:w-9/12 mt-5  hover:bg-primary-600 hover:text-white"
                      onClick={handleLogout}
                    >
                      Logout from this account
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =================== End: Operator Profile ==================== */}
        </div>
      </div>
    </DashBoardLayout>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,{setProfile,update})(Profile);




