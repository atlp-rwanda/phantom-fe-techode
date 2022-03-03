import React, { useState } from "react";
import { InfoButton, PermissionButton, Primary } from "../buttons/Buttons";
import { LebalTextButton } from "../buttons/LebalButton";
import DashBoardLayout from "../dashBoardLayout/DashBoardLayout";
import Notify from "../../functions/Notify";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";


import deletePermission from "../../assets/svgs/deletePermission.svg"
import close from '../../assets/svgs/close.svg';
import add from '../../assets/svgs/lebals/savePrevelage.svg';
import { addRole } from "../../redux/actions/roleAction";
import { addPermission } from '../../redux/actions/permissionAction'



const Roles = () => {
    const [addRoleModal, setAddRoleModal] = useState(false)
    const [roleName , setRoleName] = useState('');    
    const [addPermissionModal, setAddPermissionModal] = useState(false)
    const [permissionName, setPermissionName] = useState('')
    const [assignPermission, setAssignPermission] = useState(false)

    /* ========== Start::  Getting current state ================== */ 
        const dispatch = useDispatch();
        let roleCounter = 1;
        let permissionCounter = 1;
        const roles = useSelector(state => state.roles); 
        console.log("roles ", roles)  
        const permissions = useSelector(statePermission => statePermission.permissions); 
        console.log(permissions)  
    /* ============ End::  Getting current state ================== */ 
    
    const removeModal = () => {

        let newState = !addRoleModal
        setAddRoleModal(newState)
    }
    const removePermissionModal = () => {
        let permissionState = !addPermissionModal
        setAddPermissionModal(permissionState)
    }
    const assignPermissionModal = () => {
        let assignState = !assignPermission
        setAssignPermission(assignState)
    }

    const createRole = (e) =>{
        e.preventDefault(); 
      
        /* =================================== Start:: validation ================================ */ 
            if(roleName.trim().length == '') return Notify('please add role', 'error' ) 
        /* =================================== End:: validation ================================ */
         
        dispatch(addRole(roleName));
        setTimeout( () => {
              removeModal();
            },5000)
        return Notify('Role has been added','success') ;     
              
    }
    const createPermission = (e) =>{
        e.preventDefault(); 
      
        /* =================================== Start:: validation ================================ */ 
            if(permissionName.trim().length == '') return Notify('please add permission', 'error' ) 
        /* =================================== End:: validation ================================ */ 
       
       dispatch(addPermission(permissionName)); 
        setTimeout( () => {
            removeModal();
        },
         5000
        )  
        Notify('Permission has been added','success') ;  
              
    }
    const assignNewPermission = (e) =>{
        e.preventDefault(); 
      
        /* =================================== Start:: validation ================================ */ 
            if(permissionName.trim().length == '') return Notify('please Choose atleast one permission', 'error' ) 
        /* =================================== End:: validation ================================ */ 
        Notify('Permission has been added','success') ;
        setTimeout( () => {
           
            assignPermissionModal();
        },
         5000
        )
              
    }
    return ( 
        <>
        {/* =========================== Start:: Assign Permission Modal =============================== */}        
        <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${ assignPermission === true ? 'block' : 'hidden' }`}>
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
                            Assign new Permission
                        </h3>
                        <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => assignPermissionModal() } >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <h2 className="text-center text-secondary-500 text-xs md:text-sm">Assign new permission to Driver role</h2>
                        <div className="mt-3 text-center">
                        <PermissionButton name="Get bus" type="success"  />
                        <PermissionButton name="Get bus" type="success"  />
                        <PermissionButton name="Get bus" type="success" />
                        <PermissionButton name="Get bus" type="success" />
                        </div>
                        <div className="w-full flex justify-between md:mt-6">
                            <InfoButton name={`Cancel`} onclick={(e) => assignPermissionModal(e.preventDefault())} styles='py-2 md:w-1/3 bg-primary-200 hover:bg-primary-100 text-primary-500' />
                            <Primary name={`Save`} styles='py-2 md:w-1/3' />
                        </div>
                    </div>
                </div>                
        </div>
        {/* =========================== End:: Assign Permission Modal =============================== */}
        {/* =========================== Start:: Permission Modal =============================== */}        
        <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${ addPermissionModal === true ? 'block' : 'hidden' }`}>
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
                            Adding new Permission
                        </h3>
                        <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => removePermissionModal() } >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <h2 className="md:ml-12 text-secondary-500 text-xs md:text-sm">New Permission</h2>
                        <form onSubmit={(e) => createPermission(e)} action="/drivers" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="permissionName" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Add Permission" value={ permissionName } onChange={ e => setPermissionName(e.target.value) } />                                   
                                </div>                
                            </div>  
                            <div className="w-full flex justify-between">
                                <InfoButton name={`Cancel`} onclick={(e) => removePermissionModal(e.preventDefault())} styles='py-2 md:w-1/3 bg-primary-200 hover:bg-primary-100 text-primary-500' />
                                <Primary name={`Save`} styles='py-2 md:w-1/3' />
                            </div>
                        </form>
                    </div>
                </div>                
        </div>
        {/* =========================== End:: Permission Modal =============================== */}  

        {/* =========================== Start:: Role Modal =============================== */}        
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
        {/* =========================== End:: Role Modal =============================== */}  
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
                            {
                                
                                roles.map( role => (
                                    <tr key={roleCounter} className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                            {roleCounter++}
                                        </td>
                                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                            <LebalTextButton text='J' type='primary' /> {role.name}
                                        </td>
                                        <td  className=' text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans h-full'>
                                            <div className="buttons h-full flex flex-col md:flex md:flex-row">
                                                <PermissionButton name="Get routes" type="danger" styles="" svg={deletePermission} />
                                                <PermissionButton name="Get Bus" type="danger" styles="" svg={deletePermission} />
                                                <PermissionButton name="Create routes" type="danger" styles="" svg={deletePermission}/>
                                                <PermissionButton name="Add" svg={add} type="success" onclick={assignPermissionModal} />
                                            </div> 
                                        </td>
                                    </tr>
                                ))
                            }                            
                        </tbody>
                    </table>
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
                        <Primary name="New Permission" onclick={removePermissionModal}/>
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
                     
{
                                
                                permissions.map( permission => (
                                    <tr key={permissionCounter} className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        {permissionCounter++}
                                    </td>
                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                        <LebalTextButton text='J' type='primary' /> {permission.name}
                                    </td>
                                </tr>
                                ))
                            }    
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </DashBoardLayout>
        </>
     );
}
 
export default Roles;