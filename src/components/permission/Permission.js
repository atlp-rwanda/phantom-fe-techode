import React, { useState, useEffect } from "react";
import { fetchPermissions } from "../../redux/actions/permissionAction";
import TablePermissionSkeleton from "../skeletons/Tables/TablePermissionsSkeleton";
import { connect } from "react-redux";
import Notify from "../../functions/Notify";
import { API as axios } from "../../api/index.js";
import prev from '../../assets/svgs/prev.svg';
import next from '../../assets/svgs/next.svg';

const getPageButton =  (count,getPermssion) => {
    const btn = [];
    for (let i = 0; i < count; i++) {
        btn[i] =<div key={i}>
                    <div  onClick={ async () => { await getPermssion(i);}} className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">{i+1}</div> 
                </div>;
    }
    return btn;
}

const Permission = ({ permissions,fetchPermissions }) =>{
  
    /* ============== members paggination ================= */
    const [ page , setPage ] = useState(0); 
    const [ limit , setLimit ] = useState(10);
    const [ totalPage , setTotalPage ] = useState(0);
    const [ loading,setLoading ] = useState(true);
    
    const getPermssion = async (currentPage) => {
        setLoading(true);
        setPage(currentPage);
        try {
            const response = await axios.get(`/permissions?page=${page}&size=${limit}`);
            const { data } = response.data;
            console.log(data);
            setLoading(false)
            setTotalPage(data.totalPage);
            fetchPermissions(data.permission);
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
    useEffect( ()=> {
        setLoading(false);
        setPage(0)
        getPermssion();
      }, [])
      let permissionCounter = 1;
    return(
        <>
            {loading && (<TablePermissionSkeleton/>)}  
            {!loading && (
                <>
                    <h4 className=" text-primary-500 font-bold text-xs md:text-base">
                        Page { page == undefined ? 1 : page+1 } limit {limit}
                    </h4>
                    <table className="min-w-full border-collapse border-0">
                        <thead>
                            <tr className="border-b border-b-secondary-100">
                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                # 
                            </th>
                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2">
                                Permission name 
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {permissions.map((permission) => (
                                <tr key={permission.id} className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                    <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">
                                        {permissionCounter++}
                                    </td>
                                    <td className="text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans">                     
                                        {permission.permission_name}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="w-full flex items-center justify-center mb-3">
                        <div className="w-full xl:w-4/12 p-1 px-4 shadow flex justify-between mt-3">
                            <div className={`next flex items-center justify-center rounded-md cursor-pointer hover:bg-secondary-100 w-9 ${ page == 0 ? "hidden" : "" } `} >
                                <img src={prev} alt="Phantomm" />
                            </div>
                            {
                                getPageButton(totalPage,getPermssion).map(btn => ( btn ))
                            }
                            <div className={`next flex items-center justify-center cursor-pointer rounded-md bg-secondary-100 hover:bg-secondary-200 w-9 ${ (totalPage - 1) == page ? "hidden" : "" } `}>
                                <img src={next} alt="Phantomm" />
                            </div>
                        </div>
                    </div>     
                </>
            )}              
        </>
    );
}


const mapToState = (state) => {
    return {
      permissions: state.permissions
    }
   }
   
export default connect(mapToState, { fetchPermissions })(Permission);