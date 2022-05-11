import React, { useEffect, useState } from 'react'
import DashBoardLayout from '../../components/dashBoardLayout/DashBoardLayout';
import { Primary } from '../../components/buttons/Buttons.js'
import { LebalButton, LebalTextButton } from '../../components/buttons/LebalButton.js';
import {ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import { OperatorProfile } from '../../components/skeletons/cards/Profile';
import TableSkeleton from '../../components/skeletons/Tables/TableSkeleton';

import userLabel from '../../assets/svgs/lebals/luser.svg';
import lock from '../../assets/svgs/lebals/lock.svg';
import privelege from '../../assets/svgs/lebals/savePrevelage.svg';
import deletePrivelegeIcon from '../../assets/svgs/lebals/deletePrevelage.svg';
import deleteIcon from '../../assets/svgs/delete.svg';
import edit from '../../assets/svgs/edit.svg';
import more from '../../assets/svgs/more.svg';
import close from '../../assets/svgs/close.svg';
import prev from '../../assets/svgs/prev.svg';
import next from '../../assets/svgs/next.svg';
import { useSelector } from 'react-redux';
import { API as axios } from '../../api/index.js';


const RegisterOperator = () => {   
    const [addOperator , setAddOperator] = useState(false);
    const [loading , setLoading] = useState(true);
    const [firstname , setFirsname] = useState('');
    const [lastname , setLastname] = useState('');
    const [username , setUsername] = useState('');
    const [telephone , setTelephone ] = useState('');
    const [email , setEmail] = useState('');
   
    /* ======== Start:: removing skeleton ======= */ 
        useEffect(() => {
            setTimeout(() => {
                setLoading(false); 
            } , 3000)
        } , [])       
    /* ======== End:: removing skeleton ======= */ 

    const removeModel = () => {
        let newState = !addOperator;
        setAddOperator( newState );       
    }
    const {
        type: userType,
      } = useSelector((state) => state.user);   
  
    const registerOperator = async (e) =>{
        e.preventDefault();     
        /* =================================== Start:: validation ================================ */ 
            if(firstname.trim().length == '') return Notify('First name field should not be empty', 'error' ) ;
            if(lastname.trim().length == '') return Notify('Last name field should not be empty', 'error' ) ;
            if(telephone.trim().length == '') return Notify('Please provide Telphone number for the operator', 'error' ) ;
            if(email.trim().length == '') return Notify('Email field required', 'error') ;
            if(username.trim().length == '') return Notify('Username field should not be empty','error') ;
            let isValidEmail = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
            if(isValidEmail) return Notify('Invalid email address', 'error' ) ;
        /* =================================== End:: validation ================================ */ 
        
        try {
            await axios.post(`/users`, {
                firstname,
                lastname,
                username,
                telephone,
                userType: "operator",
                email
            });
            
            setTimeout( () => {
                removeModel();
            },
             5000
            )
            return Notify('New operator have been added','success');
        } catch(error) {
            console.log(error)
            const errors = error.response.data.message || error.message;
            Notify(errors, 'error')
        }
    }
    return (
        <>
        {/* =========================== Start:: Model =============================== */}
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${ addOperator === true ? 'block' : 'hidden' }`}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover /> 
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <h3 className='font-bold text-sm text-center w-11/12' >
                            Adding new operator
                        </h3>
                        <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => removeModel() } >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <form onSubmit={registerOperator} action="/Operators" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12'>
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                                    <input type="text" name="firstname" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="First name" value={ firstname } onChange={ e => setFirsname(e.target.value) } />                                   
                                </div>                
                            </div>  
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                                    <input type="text" name="lastname" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" value={ lastname } placeholder="Last name" onChange={ e => setLastname(e.target.value) }  />
                                </div>                
                            </div>  
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="username" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" value={ username } placeholder="User name" onChange={ e => setUsername(e.target.value) }  />
                                </div>                
                            </div> 
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                                    <input type="email" name="email" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Email" value={email} onChange={ e => setEmail(e.target.value) } />                                   
                                </div>                
                            </div>   
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center h-full w-full rounded-md">
                                    <input type="telphone" name="tel" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Telephone" value={telephone} onChange={ e => setTelephone(e.target.value) } />                                   
                                </div>                
                            </div>                          
                            <div className="w-full">
                                <Primary name={`Save`} styles='py-2' />
                            </div>
                        </form>
                    </div>
                </div>                
            </div>        
        {/* =========================== End:: Model =================================== */}   
        {/* =========================== Start:: Dashboard =============================== */} 
            <DashBoardLayout>
                <div className="w-full h-min  lg:w-7/12 bg-white rounded-md p-4 m-2">
                    <div className="w-full">
                        {/*  ==================== Start: Operator content =================== */}
                            <div className="card-header flex items-center justify-between">                        
                                <div className="card-title">
                                    <div className="title mb-3">
                                        <h4 className=' text-primary-500 font-bold text-xs md:text-base' >
                                            List of operators
                                        </h4>
                                    </div> 
                                    <div className="sub-title">
                                        <h4 className='text-secondary-200  font-bold text-xs' >
                                            Operators
                                        </h4>
                                    </div> 
                                </div>
                                {userType == "admin" ? (
                                    <div className="add-new-record">
                                        <Primary name="New Operator" onclick={ () => removeModel() }  />
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="mt-3 mb-10">
                            { loading &&( <TableSkeleton />  ) }
                            { !loading &&( 
                                <>
                                    <table className="min-w-full border-collapse border-0"  >
                                        <thead>
                                            <tr className="border-b border-b-secondary-100" >
                                                <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >#</th>
                                                <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Operator name</th>
                                                <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Phone</th>
                                                <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    1
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    <LebalTextButton text='J' type='primary' /> John doe
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    2507000000
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    {/* =================== Start:: only admin to see this =================== */}
                                                      {userType == "admin" ? (
                                                          <>
                                                               <LebalButton type={'primary'} svg={edit} />
                                                               <LebalButton type={'danger'} svg={deleteIcon} />
                                                          </>
                                                        ) : (
                                                            ""
                                                        )}
                                                    {/* =================== End:: only admin to see this =================== */}                                                    
                                                        <LebalButton type={'info'} svg={more} />
                                                </td>
                                            </tr>
                                            <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    1
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    <LebalTextButton text='J' type='primary' /> John doe
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    2507000000
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    {/* =================== Start:: only admin to see this =================== */}
                                                      {userType == "admin" ? (
                                                          <>
                                                               <LebalButton type={'primary'} svg={edit} />
                                                               <LebalButton type={'danger'} svg={deleteIcon} />
                                                          </>
                                                        ) : (
                                                            ""
                                                        )}
                                                    {/* =================== End:: only admin to see this =================== */}                                                    
                                                        <LebalButton type={'info'} svg={more} />
                                                </td>
                                            </tr>
                                            <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    2
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    <LebalTextButton text='J' type='primary' /> John doe
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    2507000000
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    {/* =================== Start:: only admin to see this =================== */}
                                                      {userType == "admin" ? (
                                                          <>
                                                               <LebalButton type={'primary'} svg={edit} />
                                                               <LebalButton type={'danger'} svg={deleteIcon} />
                                                          </>
                                                        ) : (
                                                            ""
                                                        )}
                                                    {/* =================== End:: only admin to see this =================== */}                                                    
                                                        <LebalButton type={'info'} svg={more} />
                                                </td>
                                            </tr>
                                            <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    3
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    <LebalTextButton text='J' type='primary' /> John doe
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    2507000000
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    {/* =================== Start:: only admin to see this =================== */}
                                                      {userType == "admin" ? (
                                                          <>
                                                               <LebalButton type={'primary'} svg={edit} />
                                                               <LebalButton type={'danger'} svg={deleteIcon} />
                                                          </>
                                                        ) : (
                                                            ""
                                                        )}
                                                    {/* =================== End:: only admin to see this =================== */}                                                    
                                                        <LebalButton type={'info'} svg={more} />
                                                    </td>
                                            </tr>
                                            <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    4
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    <LebalTextButton text='J' type='primary' /> John doe
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    2507000000
                                                </td>
                                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    {/* =================== Start:: only admin to see this =================== */}
                                                      {userType == "admin" ? (
                                                          <>
                                                               <LebalButton type={'primary'} svg={edit} />
                                                               <LebalButton type={'danger'} svg={deleteIcon} />
                                                          </>
                                                        ) : (
                                                            ""
                                                        )}
                                                    {/* =================== End:: only admin to see this =================== */}                                                    
                                                        <LebalButton type={'info'} svg={more} />
                                                    </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="w-full flex items-center justify-center ">
                                        <div className="w-11/12 sm:w-6/12 md:w-6/12 p-1 px-4 shadow flex justify-between mt-3">
                                            <div className="next flex items-center justify-center rounded-md cursor-pointer hover:bg-secondary-100 w-9">
                                                <img src={prev} alt="Phantomm" />
                                            </div>
                                            <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">1</div>
                                            <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">2</div>
                                            <div className="flex items-center justify-center rounded-md cursor-pointer bg-primary-600 w-8 text-white">3</div>
                                            <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">...</div>
                                            <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">12</div>
                                            <div className="next flex items-center justify-center cursor-pointer rounded-md bg-secondary-100 hover:bg-secondary-200 w-9">
                                                <img src={next} alt="Phantomm" />
                                            </div>
                                        </div>
                                    </div>                                    
                                </>
                             ) }
                                
                            </div>   
                        {/* ==================== End: Operator content ===================== */}                 
                    </div>
                </div>
                <div className=" w-full h-min lg:w-4/12 bg-white rounded-md m-2 py-12">
                    <div className="w-full">
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
                                        <p className=' text-xs font-semibold font-sans md:text-sm text-secondary-300'> Sezerano J Chrysostome</p>                                    
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
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>250700000000</p>
                                        </div> 
                                        <div className="flex flex-wrap">
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>email@site.net</p>
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
                                            <div className="w-1/4">
                                                {userType == "admin" ? (
                                                    <img src={deletePrivelegeIcon} alt="phantom"  />
                                                ) : (
                                                    ""
                                                )}                                               
                                            </div>
                                        </div> 
                                        <div className="flex flex-wrap">
                                            {userType == "admin" ? (
                                                <p className='font-semibold text-xs  w-3/4 text-success-500 '>Add new privilege</p> 
                                            ) : (
                                                ""
                                            )}                                                
                                            <div className='w-1/4' >  
                                                {userType == "admin" ? (
                                                    <img src={privelege} alt="Phantom" />  
                                                ) : (
                                                    ""
                                                )}                                     
                                            </div>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>    
                          ) }
                            
                        {/* =================== End: Operator Profile ==================== */}
                    </div>               
                </div>         
            </DashBoardLayout>     
        {/* =========================== End:: Dashboard ================================ */}               
        </>
    );
}
 
export default RegisterOperator;