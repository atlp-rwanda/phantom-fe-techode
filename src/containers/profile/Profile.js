import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import SkeletonUpdate from '../../components/skeletons/SkeletonUpdate';
import TextField from '../../components/fields/TextField';
import profileEdit from '../../assets/svgs/lebals/profile.svg'
import deletePreveleg from "../../assets/svgs/lebals/deletePrevelage.svg"
import setrole from "../../assets/svgs/lebals/savePrevelage.svg"
import DashBoardLayout from '../../components/dashBoardLayout/DashBoardLayout';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { OperatorProfile } from '../../components/skeletons/cards/Profile';
import userLabel from '../../assets/svgs/lebals/luser.svg';
import lock from '../../assets/svgs/lebals/lock.svg';

const Profile = () => {

    const [loading, setLoading] = useState(true);
    const { email , firstname , lastname , telephone , type : userType , username } = useSelector(state => state.user);
    
    /*  ===== Start:: fetching userinfo =====  */ 
        useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        }, [])
   /*  ===== End:: fetching userinfo =====  */ 
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
            <div className='w-full h-min  lg:w-7/12 bg-white rounded-md p-4 m-2'>
                <div className='w-full'>
                    {loading && ( <SkeletonUpdate />)}
                        {!loading && (
                            <div className="">
                                <section className="flex items-center justify-center">
                                    <img className="rounded-full border border-primary-600 w-16 h-16 hover:opacity-75" src="https://i.picsum.photos/id/188/200/200.jpg?hmac=TipFoTVq-8WOmIswCmTNEcphuYngcdkCBi4YR7Hv6Cw" alt="image" />
                                    <img src={profileEdit} className="mt-20 -ml-4" alt="profile" />
                                </section>
                                <section className="mt-5 md:pl-20">
                                    <TextField setLoading={setLoading} />
                                </section>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='w-full h-min lg:w-4/12 bg-white rounded-md m-2 py-12'>
                <div className='w-full'>
                     {/* ==================== Start: Operator profile ================== */}
                     { loading &&( <OperatorProfile />  ) }
                        { !loading &&( 
                            <div className=" flex flex-col items-center justify-center ">
                                <div className="profile ">
                                    <div className="  border border-primary-600 w-16 h-16 rounded-full flex items-center justify-center bg-primary-100">
                                        <p className='text-primary-600 text-xl font-sans font-bold' >
                                            j
                                        </p>
                                    </div>
                                </div>    
                                <div className="mt-6">
                                    <div className="profiler-name">
                                        <p className=' text-xs font-semibold font-sans md:text-sm text-secondary-300'> { firstname + ' ' +  lastname }</p>                                    
                                    </div>
                                </div>   
                                <div className="Operator-info w-full flex justify-between mt-4  px-6">
                                    <div className="w-1/6 ">
                                        <button className='p-2 md:p-3 border border-primary-600 rounded-md  bg-primary-100' >
                                            <img src={userLabel} alt="Phantom" />                                                                        
                                        </button>
                                    </div>
                                    <div className="w-5/6">
                                        <div className="title flex flex-wrap font-sans " >
                                            <p className='text-primary-600 font-semibold mb-2 text-sm w-full ' >User information</p>
                                        </div>   
                                        <div className="flex flex-wrap">
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>{ username }</p>
                                        </div> 
                                        <div className="flex flex-wrap">
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>{ telephone }</p>
                                        </div> 
                                        <div className="flex flex-wrap">
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>{ email }</p>
                                        </div>                                       
                                    </div>
                                </div>
                                <div className="Operator-info w-full flex justify-between mt-4  px-6">
                                    <div className="w-1/6 ">
                                        <button className='p-2 md:p-3 border border-primary-600 rounded-md  bg-primary-100' >
                                            <img src={lock} alt="Phantom" />                                                                        
                                        </button>
                                    </div>
                                    <div className="w-5/6">
                                        <div className="title flex flex-wrap font-sans " >
                                            <p className='text-primary-600 font-semibold mb-2 text-sm w-3/4 ' >Privileges</p>
                                        </div>   
                                        <div className="flex flex-wrap">
                                            <p className='text-secondary-200 font-semibold text-xs md:text-sm w-3/4 mb-2'>Operator</p>
                                            { userType == 'admin' ? 
                                                <div className="w-1/4">
                                                    <img src={deletePreveleg} alt="phantom"  />
                                                </div>
                                            : '' }
                                        </div> 
                                        {/* =================== Start:: only admin to see this =================== */}
                                        { userType == 'admin' ? 
                                            <div className="flex flex-wrap">
                                                <p className='font-semibold text-xs  w-3/4 text-success-500 '>Add new privilege</p>
                                                <div className='w-1/4' >                                          
                                                    <img src={setrole} alt="Phantom" />                                           
                                                </div>
                                            </div>
                                        : '' }                                       
                                        {/* =================== End:: only admin to see this =================== */}                               
                                    </div>
                                </div>
                            </div>    
                          ) }
                            
                        {/* =================== End: Operator Profile ==================== */}                
                </div>
            </div> 
        </DashBoardLayout>
     );
}
 
export default Profile;