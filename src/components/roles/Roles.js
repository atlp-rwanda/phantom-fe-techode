import React, { useState } from "react";
import { InfoButton, PermissionButton, Primary } from "../buttons/Buttons";
import { LebalTextButton } from "../buttons/LebalButton";
import DashBoardLayout from "../dashBoardLayout/DashBoardLayout";
import deletePermission from "../../assets/svgs/deletePermission.svg"
import { ToastContainer } from "react-toastify";
import close from '../../assets/svgs/close.svg';
import Notify from "../../functions/Notify";

const Roles = () => {
    const [addRoleModal, setAddRoleModal] = useState(false)
    const [roleName , setRoleName] = useState('');
    
    
    const removeModal = () => {

        let newState = !addRoleModal
        setAddRoleModal(newState)
    }

    const createRole = (e) =>{
        e.preventDefault(); 
      
        /* =================================== Start:: validation ================================ */ 
            if(roleName.trim().length == '') return Notify('please add role', 'error' ) 
        /* =================================== End:: validation ================================ */ 
        setTimeout( () => {
            removeModal();
        },
         5000
        )
        return Notify('Role has been added','success') ;     
              
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
                            Adding new Role
                        </h3>
                        <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => removeModal() } >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <h2 className="md:ml-12 text-secondary-500 text-xs md:text-sm">New Role</h2>
                        <form onSubmit={(e) => createRole(e)} action="/drivers" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="roleName" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Add Role" value={ roleName } onChange={ e => setRoleName(e.target.value) } />                                   
                                </div>                
                            </div>  
                            <div className="w-full flex justify-between">
                                <InfoButton name={`Cancel`} onclick={(e) => removeModal(e.preventDefault())} styles='py-2 md:w-1/3 bg-primary-200 hover:bg-primary-100 text-primary-500' />
                                <Primary name={`Save`} styles='py-2 md:w-1/3' />
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
        {/* =========================== Start:: Model =============================== */}  
        <DashBoardLayout>
            <div className="w-full h-min  lg:w-7/12 bg-white rounded-md p-4 m-2">
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
                                <Primary name="New Role" onclick={removeModal}/>
                            </div>
                        </div>
                    <table className="min-w-full border-collapse border-0"  >
                        <thead>
                            <tr className="border-b border-b-secondary-100" >
                                <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >#</th>
                                <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Role name</th>
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
                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                    <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" svg={deletePermission} styleDelete="md:ml-24 -mt-4 pb-2"/>
                                    <PermissionButton name="Get Bus" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" svg={deletePermission} styleDelete="md:ml-24 -mt-4 pb-2"/>
                                    <PermissionButton name="Create routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" svg={deletePermission} styleDelete="md:ml-28 -mt-4 pb-2" />
                                    <PermissionButton name="Add" type="success" styles="bg-success-200 hover:bg-success-300 md:w-1/12" />
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
                                    <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" svg={deletePermission} styleDelete="md:ml-24 -mt-4 pb-2"/>
                                    <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" svg={deletePermission} styleDelete="md:ml-24 -mt-4 pb-2"/>
                                    <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" svg={deletePermission} styleDelete="md:ml-24 -mt-4 pb-2"/>
                                    <PermissionButton name="Add" type="success" styles="bg-success-200 hover:bg-success-300 md:w-1/12" />
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
                                    <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" svg={deletePermission} styleDelete="md:ml-24 -mt-4 pb-2"/>
                                    <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" svg={deletePermission} styleDelete="md:ml-24 -mt-4 pb-2"/>
                                    <PermissionButton name="Get routes" type="danger" styles="bg-danger-100 hover:bg-danger-200 mr-4" svg={deletePermission} styleDelete="md:ml-24 -mt-4 pb-2"/>
                                    <PermissionButton name="Add" type="success" styles="bg-success-200 hover:bg-success-300 md:w-1/12" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <div className="w-full flex items-center justify-center ">
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
                    </div>  */}
                </div>
            </div>
            <div className="w-full h-min lg:w-4/12 bg-white rounded-md m-2 px-4 pt-4">
                <div className="w-full">
                <div className="card-header flex justify-between">                        
                    <div className="card-title">
                        <div className="title mb-3">
                            <h4 className=' text-primary-500 font-bold text-xs md:text-base' >
                                List of Permissions
                            </h4>
                        </div> 
                    </div>
                    <div className="add-new-record">
                        <Primary name="New Permission"/>
                    </div>
                </div>
                <table className="min-w-full border-collapse border-0"  >
                        <thead>
                            <tr className="border-b border-b-secondary-100" >
                                <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >#</th>
                                <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Permission name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                    1
                                </td>
                                <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                    <LebalTextButton text='J' type='primary' /> Get routes
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
 
export default Roles;