import React, { useState, useEffect } from "react";
import { InfoButton, PermissionButton, Primary } from "../buttons/Buttons";
import { LebalButton, LebalTextButton } from "../buttons/LebalButton";
import DashBoardLayout from "../dashBoardLayout/DashBoardLayout";
import Notify from "../../functions/Notify";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import deletePermissionSVG from "../../assets/svgs/deletePermission.svg";
import close from "../../assets/svgs/close.svg";
import add from "../../assets/svgs/lebals/savePrevelage.svg";
import { addRole , fetchRoles ,deleteRole,assignPermission ,deletePermission} from "../../redux/actions/roleAction";
import { fetchPermissions } from "../../redux/actions/permissionAction";
import deleteIcon from '../../assets/svgs/delete.svg';
import TableRolesSkeleton from "../skeletons/Tables/TableRolesSkeleton";
import { API as axios } from "../../api/index"
import Permission from "../permission/Permission";
import getPermissionId from "../../utls/getPermissionId";

const addRoles = async (roleName,setLoading,getRoles) => {
  try{
      const response = await axios.post('/Roles', {
        rolename: roleName
      })    
      getRoles();
      if(response.statusText == 'Created'){
        Notify(`${response.data.message}`, "success");          
        return  response.data.data            
      }
     
    }catch(e) {
      setLoading(false)
      Notify(`${e.response.data.status} ${e.response.data.message}`, "error");
      return false;
    }
}

const removeRoleOne = async (id,setLoading) => {
  try{
    const response = await axios.delete(`/roles/${id}`);
    Notify(`${response.data.message}`, "success");
    setLoading(false)
  } catch(e) {
    setLoading(false);
    Notify(`${e.response.data.message}`, "error");
  }   
}

const removePermissionOnRole = async (roleId,permissionId,setLoading) => {
  setLoading(true);
  try {
    const response = await axios.delete(`/roles/permission/remove`,{
      data :{
        roleid: roleId,
        permissionid: permissionId
      }
    });
    Notify(`${response.data.message}`, "success");
    setLoading(false); 
  } catch (error) {
    setTimeout(() => { setLoading(false); }, 2000);   
    if (error.code != "ERR_NETWORK") {
      Notify(error.response.data.message, "error");
    }
    else{
      Notify(error.message, "error");
    }          
  }
}

const assignPermissionOnRole = async (roleId,permissionId,setLoading) => {
  setLoading(true);
  try {
    const response = await axios.post(`/roles/permission/assign`,{
        roleid: roleId,
        permissionid: permissionId
    });
    setLoading(false); 
    Notify(response.data.message, "success");
  } catch (error) {
    setTimeout(() => { setLoading(false); }, 2000);   
    if (error.code != "ERR_NETWORK") {
      Notify(error.response.data.message, "error");
    }
    else{
      Notify(error.message, "error");
    }          
  }
}

const Roles = (props) => {
  const [loading, setLoading] = useState(true)
  const [addRoleModal, setAddRoleModal] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [clearPermissionModal, setClearPermissionModal] = useState(false);
  const [assignPermissionM, setAssignPermission] = useState(false);
  const [assignedPermission, setAssignedPermission] = useState("");
  const [role_Id, setRoleId] = useState("");
  const [dbPermisionId, setDbPermisionId] = useState("");
  const [permissionId, setPermissionId] = useState("");
  const [deleteRolePopUp, setDeleteRolePopUp] = useState(false);
  const { deleteRole, assignPermission, deletePermission , roles , fetchRoles } = props
 
  const getRoles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/roles`);
      const { data } = response.data;
      setLoading(false);
      fetchRoles(data.rows);
    } catch (error) {
      setTimeout(() => { setLoading(false); }, 2000);     
      if (error.code != "ERR_NETWORK") {
        Notify(error, "error");
      }
      else{
        Notify(error.message, "error");
      }          
    }
  }

  useEffect( async ()=> {
    setLoading(false);
    await getRoles();
  }, [])

  /* ========== Start::  Getting current state ================== */
  let roleCounter = 1;
  const permissions = props.permissions;
  /* ============ End::  Getting current state ================== */

  const removeModal = () => {
    let newState = !addRoleModal;
    setAddRoleModal(newState);
  };


  const createRole = async (e) => {
    e.preventDefault();
    setLoading(true)
    /* =================================== Start:: validation ================================ */
    if (roleName.trim().length == "") return Notify("please add role", "error");
    /* =================================== End:: validation ================================ */

    let uniqueState = roles.find(element => element.rolename == roleName);
    setLoading(false)
   
    if (uniqueState) {
      setLoading(false)
      return Notify("Already exist", "error");
    } else {    
      await addRoles(roleName,setLoading,getRoles);
      removeModal();
    }
    setRoleName("");
  };

  const assignPermissionModal = (role) => {
    setRoleId(role);
    let assignState = !assignPermissionM;
    setAssignPermission(assignState);
  };

  const activateDeleteRolePopUp = (roleId = 0) =>{
    setDeleteRolePopUp(!deleteRolePopUp);    
    setRoleId(roleId);
  }

  const removeRole = (id) => {   
    setLoading(true);
    removeRoleOne(id,setLoading)
    deleteRole(id)
    setRoleId('')
    setRoleName("")
    activateDeleteRolePopUp();
  }


  const assigningPermission = (name, id) => {
    setAssignedPermission(name);
    setPermissionId(id)
    Notify(name + " permission selected", "success");
  };

  const assignNewPermission = async (e) => {
    e.preventDefault();
    /* =================================== Start:: validation ================================ */
    if (assignedPermission.trim().length == "")
      return Notify("please Choose atleast one permission", "error");
    /* =================================== End:: validation ================================ */
    await assignPermissionOnRole(role_Id, permissionId, setLoading)
    assignPermission({ role_Id, assignedPermission });
    assignPermissionModal();
  };

  const removeDeletePermissionModal = (role_Id, permissionId, permissionName ) => {   
    console.log("permissionId",permissionName)
    let deleteState = !clearPermissionModal;
    setClearPermissionModal(deleteState);
    setPermissionId(permissionId);
    setRoleId(role_Id);
  };

  const removePermission = (e) => {
    e.preventDefault();
    setTimeout(() => {
      removeDeletePermissionModal();
    }, 2000);
  };

  const deleteAssignedPermission = async () => {
    await removePermissionOnRole(role_Id,permissionId,setLoading);
    deletePermission({ Role_Id: role_Id, permissionId });
    setTimeout(() => {
      removeDeletePermissionModal();
    }, 2000);
  }

  return (
    <>
      {/* =========================== Start:: Delete Permission  Model =============================== */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar newestOnTop={false} closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className={`z-50`}
        />
      <div
        className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${
          clearPermissionModal === true ? "block" : "hidden"
        }`}
      >        
        <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12 text-danger-500">
              Removing permision
            </h3>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body">
            <h2 className="md:ml-12 text-secondary-500 mt-3 mb-6 text-xs md:text-sm">
              Removing <span className="text-mainColor">Permission's </span>
              Role
            </h2>
            <form
              onSubmit={(e) => removePermission(e)}
              className=" sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12"
            >
              <div className="w-full flex justify-between">
                <InfoButton
                  name={`Cancel`}
                  onclick={(e) => removeDeletePermissionModal(e.preventDefault())}
                  styles="py-2 md:w-1/3 w-1/2 bg-primary-200 hover:bg-primary-100 text-primary-500"
                />
                <Primary onclick={deleteAssignedPermission} name={`Remove`} styles="bg-danger-200 hover:bg-danger-100 py-2 text-danger-500 md:w-1/3 w-1/2" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End:: Delete Permssion Model =============================== */}
      <div
        className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${
          deleteRolePopUp === true ? "block" : "hidden"
        }`}
      >        
        <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12 text-danger-500">
              Removing role
            </h3>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body">
            <h2 className="md:ml-12 text-secondary-500 mt-3 mb-6 text-xs md:text-sm">
              Are you sure you want to remove this Role   <span className="text-mainColor">{roleName}</span>
            </h2>
            <div
              className=" sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12"
            >
              <div className="w-full flex justify-between">
                <InfoButton
                  name={`Cancel`}
                  onclick={(e) => activateDeleteRolePopUp()}
                  styles="py-2 md:w-1/3 w-1/2 bg-primary-200 hover:bg-primary-100 text-primary-500"
                />
                <Primary onclick={() =>{
                  removeRole(role_Id)
                }} name={`Remove`} styles="bg-danger-200 hover:bg-danger-100 py-2 text-danger-500 md:w-1/3 w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========================== End:: Delete Permssion Model =============================== */}


      {/* =========================== Start:: Assign Permission Modal =============================== */}
      <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${assignPermissionM === true ? "block" : "hidden"}`} >
        <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              New permission
            </h3>
            <div className="close-icon w-1/12 cursor-pointer float-right" onClick={assignPermissionModal}>
              <img src={close} alt="Phantom" className="float-right" />
            </div>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body">
            <h2 className="text-center text-secondary-500 text-xs md:text-sm">
              Assign new permission 
            </h2>
            <div className="mt-3 text-center flex flex-row flex-wrap">
              {permissions.map((permission) => (
                <PermissionButton
                  key={permission.id}
                  name={permission.permission_name}
                  type="success"
                  styles='w-auto bg-success-200 text-success-600 hover:bg-success-100'
                  onclick={() => assigningPermission(permission.permission, permission.id)}
                />
              ))}
            </div>
            <div className="w-full flex justify-between mt-4">
                <InfoButton
                  name={`Cancel`}
                  onclick={(e) => assignPermissionModal(e.preventDefault())}
                  styles="py-2 md:w-1/3 w-1/2 bg-primary-200 hover:bg-primary-100 text-primary-500"
                />
                <Primary
                  name={`save`}
                  styles="py-2 md:w-1/3 w-1/2"
                  type="submit"
                  onclick={assignNewPermission}
                />
              </div>
           
          </div>
        </div>
      </div>
      {/* =========================== End:: Assign Permission Modal =============================== */}

      {/* =========================== Start:: Role Modal =============================== */}
      <div
        className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${
          addRoleModal === true ? "block" : "hidden"
        }`}
      >
        <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-center w-11/12">
              Adding new Role
            </h3>
            <div
              className="close-icon w-1/12 cursor-pointer float-right"
              onClick={() => removeModal()}
            >
              <img src={close} alt="Phantom" className="float-right" />
            </div>
            <hr className=" bg-secondary-150 border my-3 w-full" />
          </div>
          <div className="card-body">
            <h2 className="md:ml-12 ml-8 text-secondary-500 text-xs md:text-sm">
              New Role
            </h2>
            <form onSubmit={(e) => createRole(e)}  action="/drivers" className=" sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12" >
              <div className="input my-3 h-9 ">
                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                  <input
                    type="text"
                    name="roleName"
                    className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5"
                    placeholder="Add Role"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex justify-between">
                <InfoButton
                  name={`Cancel`}
                  onclick={(e) => removeModal(e.preventDefault())}
                  styles="py-2 md:w-1/3 w-1/2 bg-primary-200 hover:bg-primary-100 text-primary-500"
                />
                <Primary name={`Save`} styles="py-2 md:w-1/3 w-1/2" />
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
                  <h4 className=" text-primary-500 font-bold text-xs md:text-base">
                    List of Roles
                  </h4>
                </div>
              </div>
              <div className="add-new-record">
                <Primary name="New Role" onclick={removeModal} />
              </div>
            </div>
            {/* Skeleton  */}
            {loading && (<TableRolesSkeleton/>)}
              {!loading && (
              <div className="py-6 flex items-center flex-wrap relative overflow-auto" >
                <table className="min-w-full border-collapse border-0">
                  <thead>
                    <tr className="border-b border-b-secondary-100">
                      <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                        #
                      </th>
                      <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                        Role name
                      </th>
                      <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2 md:text-left md:pl-20">
                        Permissions
                      </th>
                      <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2 md:text-left md:pl-20">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.map((role) => (
                      <tr key={roleCounter}   className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100  " >
                        <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans px-4 ">
                          {roleCounter++}
                        </td>
                        <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                          {role.rolename}
                        </td>
                        <td className=" text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans h-full">
                          <div className="buttons h-full flex flex-col md:flex md:flex-row">
                            {role.permissions.map((permission) =>{   
                              if(permission.permissionName){
                                return (<PermissionButton
                                          key={permission.id}
                                          name={permission.permissionName}
                                          onclick={ async () => { 
                                            // const permisionName = await getPermissionId(permission.permissionName);
                                            removeDeletePermissionModal(role.id, permission.id ,permission)
                                          }}
                                          type="danger"
                                          styles=" px-6 "
                                          svg={deletePermissionSVG}
                                      />
                                )
                              }                            
                                
                            })}
                            <PermissionButton
                              name="Add"
                              svg={add}
                              type="success"
                              onclick={() => assignPermissionModal(role.id)}
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <LebalButton type={'danger'} svg={deleteIcon} onclick={() =>{
                               activateDeleteRolePopUp(role.id);
                               setRoleName(role.rolename);
                              }} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          
          </div>
        </div>
        <div className="w-full h-min lg:w-4/12 bg-white rounded-md m-2 px-4 pt-4">
          <div className="w-full">
            <div className="card-header flex justify-between">
              <div className="card-title">
                <div className="title mb-3">
                  <h4 className=" text-primary-500 font-bold text-xs md:text-base">
                    List of Permissions
                  </h4>
                </div>
              </div>
            </div>
            <Permission loading={loading} setLoading={setLoading} />
          </div>
        </div>
      </DashBoardLayout>
    </>
  );
};

const mapToState = (state) => {
 return {
   roles: state.roles,
   permissions: state.permissions
 }
}

export default connect(mapToState, { addRole,fetchRoles, deleteRole, assignPermission, deletePermission , fetchPermissions })(Roles);
