import React, { useState } from "react";
import { DangerButton, InfoButton, PermissionButton, Primary } from "../buttons/Buttons";
import { LebalTextButton } from "../buttons/LebalButton";
import DashBoardLayout from "../dashBoardLayout/DashBoardLayout";
// import close from "../../assets/svgs/close.svg"
import { ToastContainer } from "react-toastify";
import close from '../../assets/svgs/close.svg';
import Notify from "../../functions/Notify";

const RemovePermission = () => {

        const [addRoleModal, setAddRoleModal] = useState(false)
        const [roleName , setRoleName] = useState('');
       
         
      
       
        const removeModal = () => {
    
            let newState = !addRoleModal
            setAddRoleModal(newState)
        }
    
        const createRole = (e) =>{
            e.preventDefault(); 
            setTimeout( () => {
                removeModal();
            },
             5000
            )
            return Notify('Permission has been removed','success') ;     
                  
        }
        return ( 
            <>
            {/* =========================== Start:: Model =============================== */}        
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${ addRoleModal === true ? 'block' : 'hidden' }`}>
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
                    <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                        <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                            <h3 className='font-bold text-sm text-center w-11/12' >
                                Remove permision
                            </h3>
                            <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => removeModal() } >
                                <img src={close} alt="Phantom" className='float-right' />
                            </div>
                            <hr className=' bg-secondary-150 border my-3 w-full' />
                        </div>
                        <div className="card-body">
                            <h2 className="md:ml-12 my-4 text-secondary-500 text-xs md:text-sm">Removing <span className="text-mainColor">Get bus</span> Driver Role</h2>
                            <form onSubmit={(e) => createRole(e)} action="/drivers" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                                
                                <div className="w-full flex justify-between">
                                    <InfoButton name={`Cancel`} onclick={(e) => removeModal(e.preventDefault())} styles='py-2 md:w-1/3  hover:bg-secondary-100 text-primary-500' />
                                    <DangerButton name={`Remove`} styles='py-2 md:w-1/3' />
                                </div>
                            </form>
                        </div>
                    </div>                
                </div>
            {/* =========================== Start:: Model =============================== */}  
          
            <DashBoardLayout >
                <div className="w-full h-min lg:ml-28 lg:w-7/12 bg-white rounded-md p-4 m-2">
                    <div className="w-full">
                            <div className="card-header flex items-center justify-between">                        
                                <div className="card-title">
                                    <div className="title mb-3">
                                        <h4 className=' text-primary-500 font-bold text-xs md:text-base' >
                                            List of Roles
                                        </h4>
                                    </div> 
                                </div>
                                <div className="add-new-record">
                                    <Primary name="New Role"/>
                                </div>
                            </div>
                        <table className="min-w-full border-collapse border-0"  >
                            <thead>
                                <tr className="border-b border-b-secondary-100" >
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >#</th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2 " >Role name</th>
                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2 md:text-left md:pl-20"  >Permissions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        1
                                    </td>
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        <LebalTextButton text='J' type='primary' /> Driver
                                    </td>
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans justify-between'>
                                        <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4 w-2/6" onclick={removeModal}/>
                                        <PermissionButton name="Get Bus" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4 w-2/6" onclick={removeModal}/>
                                        <PermissionButton name="Create routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4 w-2/6" onclick={removeModal}/>
                                        
                                    </td>
                                </tr>
                                <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        2
                                    </td>
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        <LebalTextButton text='J' type='primary' /> Operator
                                    </td>
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" onclick={removeModal}/>
                                        <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" onclick={removeModal}/>
                                        <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" onclick={removeModal}/>
                                    </td>
                                </tr>
                                <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        2
                                    </td>
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        <LebalTextButton text='J' type='primary' /> Admin
                                    </td>
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" onclick={removeModal}/>
                                        <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" onclick={removeModal}/>
                                        <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" onclick={removeModal}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </DashBoardLayout>
            </>
         );
    }
 
export default RemovePermission
