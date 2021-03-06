import React, { useState, useEffect } from "react";
import { DangerButton, InfoButton, PermissionButton, Primary } from "../../components/buttons/Buttons.js";
import { LebalButton, LebalTextButton } from '../../components/buttons/LebalButton.js'
import { ToastContainer } from "react-toastify";
import Notify from "../../functions/Notify";
import TableSkeleton from "../../components/skeletons/Tables/RemovePermisionSkeleton"
import { Profile } from '../../components/skeletons/cards/InfSkeleton';
import DashBoardLayout from "../../components/dashBoardLayout/DashBoardLayout";

import deleteIcon from '../../assets/svgs/delete.svg';
import edit from '../../assets/svgs/edit.svg';
import list from '../../assets/svgs/list.svg'
import more from '../../assets/svgs/more.svg';
import prev from '../../assets/svgs/prev.svg';
import busPark from '../../assets/Image/busPark.jpg';
import next from '../../assets/svgs/next.svg';
import { connect } from 'react-redux';
import { createBus, updateBusInfo, deleteBus, fetchBuses } from "../../redux/actions/busAction";
import Pagination from "../../components/pagination/Pagination";
import {AUTH as axios } from "../../api/index"
import fetchAllBuses from "../../functions/fetchAllBuses.js";

const addNewBus = async (busName, routeCode, plateNumber, setLoading, getAllBuses) => {
    const newBus = {
        bustype: busName,
        routecode: routeCode,
        platenumber: plateNumber
    }
    try {
      const response = await axios.post(`/buses/register`, newBus, 
        { 
            headers: {
            "auth-token": `Bearer ${localStorage.getItem("token")}`,
            "action": "createBus"
            }
        }
      )
      Notify(response.data.message, "success");
    } catch (error) {
      if (error.code != "ERR_NETWORK") {
        Notify(error.response.data.message, "error");
      }
      else{
        Notify(error.message, "error");
      }          
    }
  }

const changeBus = async (busId, busName, routeCode, plateNumber,  setLoading, getAllBuses) => {
const newBus = {
    bustype: busName,
    routecode: routeCode,
    platenumber: plateNumber
}
try {
    const response = await axios({
    method: "PUT",
    url: `/buses/${busId}`,
    data: newBus,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "auth-token": `Bearer ${localStorage.getItem("token")}`,
        "action": "updateBus"
    }
})
    Notify(response.data.message, "success");
} catch (error) {
    if (error.code != "ERR_NETWORK") {
    Notify(error.response.data.message, "error");
    }
    else{
    Notify(error.message, "error");
    }          
}
}

const removeBus = async (busId, setLoading, getAllBuses) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/buses/${busId}`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "auth-token": `Bearer ${localStorage.getItem("token")}`,
            "action": "deleteBus"
        }
    })
      Notify(response.data.message, "success");
    } catch (error) {
      if (error.code != "ERR_NETWORK") {
        Notify(error.response.data.message, "error");
      }
      else{
        Notify(error.message, "error");
      }          
    }
  }

const Busesoperat = (props) => {

    //State infromation
    const { user, buses, createBus, updateBusInfo, deleteBus, fetchBuses } = props;

    const [busModel, setBusModel] = useState(false);

    const [isList, setIsList] = useState(false)
    const [updateModel, setUpdateModel] = useState(false);
    const [createBusModel, setCreateBusModel] = useState(false);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentpage] = useState(1)
    const [postsPerPage] = useState(5)

    const [busId, setBusId] = useState('');
    const [busName, setbusName] = useState('');
    const [route, setRoute] = useState('');
    const [bus, setBus] = useState('');
    //for selecting 
    const [selectedBus, setSelectedBusId] = useState([
        {
            id: 0,
            bustype: "Yutong",
            platenumber: "RAF102F",
            routecode: "401"
        }
    ]);

    const getAllBuses = async () => {
        setLoading(true);
        try {
            const response = await fetchAllBuses()
            setLoading(false);
            fetchBuses(response);
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

      /* ======== Start:: removing skeleton ======= */
      useEffect( async ()=> {
        setLoading(false);
        await getAllBuses();
      }, [])
    /* ======== End:: removing skeleton ======= */


    const getSelectedBus = (id) => {
        const select = buses.filter(bus => bus.id == id);
        setSelectedBusId(select);
    }

    const {
        type: userType,
    } = user;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = buses.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentpage(pageNumber)
    let uniqueState = buses.find(element => element.platenumber == bus);

    const removeModel = () => {
        let newState = !createBusModel;
        setCreateBusModel(newState);

    }

    const updateBuseModel = (id = null) => {
        setUpdateModel(!updateModel);
        if (id != null) {
            const select = buses.filter(bus => bus.id == id);
            setSelectedBusId(select);
            setBusId(select[0].id)
            setBus(select[0].platenumber);
            setRoute(select[0].routecode);
            setbusName(select[0].bustype);
        }
    }

    const registerBus = async (e) => {
        e.preventDefault();
        /* =================================== Start:: validation ================================ */
        if (busName.trim().length == '') return Notify('Bus type is required', 'error');
        if (route.trim().length == '') return Notify('Boute is required', 'error');
        if (bus.trim().length == '') return Notify('Plate number is required', 'error');

        /* =================================== End:: validation ================================ */

        if (uniqueState) {
            setLoading(false)
            Notify("Plate number already exist", "error");
        } else {
            await addNewBus(busName, route, bus, setLoading, getAllBuses)
            getAllBuses()
            removeModel();
            setBusId(0)
            setBus("");
            setRoute("");
            setbusName("");
        }

    }
    const updateBus = async (e) => {
        e.preventDefault();
        setLoading(true)
        /* =================================== Start:: validation ================================ */
        if (busName.trim().length == '') return Notify('Bus Name is required', 'error');
        if (route.toString().trim().length == '') return Notify('Boute is required', 'error');
        if (bus.trim().length == '') return Notify('Plate number is required', 'error');

        /* =================================== End:: validation ================================ */
        setLoading(false)
        await changeBus(busId, busName, route, bus, setLoading, getAllBuses)
            getAllBuses()
            setUpdateModel(false);
            setBusId(0)
            setBus("");
            setRoute("");
            setbusName("");
    }
    const deleteAssignedBus = async (e) => {
        e.preventDefault();
        setLoading(false)
        await removeBus(busId, setLoading, getAllBuses)
        getAllBuses()
        deleteBusModel()
    }

    const deleteBusModel = (bus_Id) => {
        setBusModel(!busModel);
        setBusId(bus_Id);
    }

    const handleList = () => {
        setIsList((prev) => !prev)
    }

    return (
        <>
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
            {/* ==============================================START:: UPDATEBUSMODEL========================= */}
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${updateModel === true ? 'block' : 'hidden'}`}>
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <h3 className='font-bold text-sm text-center w-11/12' >
                            Update Bus Information
                        </h3 >
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => updateBus(e)} action="/buses" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="input my-3 h-9 ">
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Bus Type" value={busName} onChange={e => setbusName(e.target.value)} />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Route" value={route} onChange={e => setRoute(e.target.value)} />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Plate Number" value={bus} onChange={e => setBus(e.target.value)} />
                                </div>
                            </div>
                            <div className="w-full flex justify-between">
                                <InfoButton name={`Cancel`}
                                    onclick={(e) => {
                                        e.preventDefault();
                                        setUpdateModel(false);
                                    }}
                                    styles='py-2 md:w-1/3 bg-primary-200 hover:bg-primary-100 font-sans text-sm text-white-600' />
                                <Primary name={`Update`} styles='text-white-600 py-2 md:w-1/3' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* ==============================================END:: UPDATEBUSMODEL=================*/}

            {/* =========================== Start:: CreateBusModel =============================== */}
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${createBusModel === true ? 'block' : 'hidden'}`}>
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <h3 className='font-bold text-sm text-center w-11/12' >
                            Creating a new bus
                        </h3>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => registerBus(e)} action="/buses" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="input my-3 h-9 ">
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Bus Type" value={busName} onChange={e => setbusName(e.target.value)} />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Route" value={route} onChange={e => setRoute(e.target.value)} />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Plate Number" value={bus} onChange={e => setBus(e.target.value)} />
                                </div>
                            </div>
                            <div className="w-full flex justify-between">
                                <InfoButton name={`Cancel`} onclick={(e) => removeModel(e.preventDefault())} styles='py-2 md:w-1/3 bg-primary-200 hover:bg-primary-100 font-sans text-sm text-white-600' />
                                <Primary name={`Save`} styles='text-white-600 py-2 md:w-1/3' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* =========================== End::  CreateBusModel =============================== */}

            {/* =========================== Start:: DeleteBusModel =============================== */}
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${busModel === true ? 'block' : 'hidden'}`}>
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <h3 className='font-bold text-sm text-center w-11/12 text-danger-500' >
                            Deleting bus
                        </h3>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <h2 className="md:ml-12 text-secondary-500 mt-3 mb-6 text-xs md:text-sm font-sans font-bold">Do you want to remove this bus?</h2>
                        <div className="w-full flex justify-between">
                            <InfoButton name={`Cancel`} onclick={(e) => deleteBusModel(e.preventDefault())} styles='py-2 md:w-1/3 bg-primary-200 hover:bg-primary-100 font-sans text-sm text-white-600' />
                            <Primary name={`Remove`} styles=' bg-danger-200 hover:bg-danger-100 text-danger-600 py-2 md:w-1/3' onclick={deleteAssignedBus} />
                        </div>
                    </div>
                </div>
            </div>
            {/* =========================== End:: DeleteBusModel =============================== */}
            <DashBoardLayout>
            <div className=" w-full rounded-md h-full relative">
                <div className=" bg-white rounded-md p-4 ">

                    {/* Start:  Bus content */}

                    <div className="card-header flex items-center justify-between">
                        <div className="card-title">
                            <div className="title mb-3">
                                <h4 className=' text-primary-500 font-bold text-xl md:text-2xl' >
                                    List of Buses
                                </h4>
                            </div>
                        </div>
                        {
                            userType == "admin" ? <Primary name={`Add a new bus`} styles=' lg:w-1/12 md:w-1/4 sm:w-1/4 w-1/4 font-sans font-bold bg-primary-400 hover:bg-primary-200' onclick={removeModel} /> : <>{ userType}</>
                        }
                        
                    </div>
                    <div className="mt-3 mb-10">
                        {loading && (<TableSkeleton />)
                        }
                        {!loading && (
                            <>
                                <table className="min-w-full border-collapse border-0"  >
                                    <thead>
                                        <tr className="border-b border-b-secondary-100" >
                                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >#</th>
                                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Bus Type</th>
                                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Route</th>
                                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Plate</th>
                                            {
                                                userType == "admin" || userType == "operator" ?  <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >action</th>  : <> </>
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {currentPosts.map((bus) => (
                                                <tr key={bus.id} className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        {bus.id}
                                                    </td>
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        {bus.bustype}
                                                    </td>
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        {bus.routecode}
                                                    </td>
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        {bus.platenumber}
                                                    </td>
                                                    {
                                                userType == "admin" || userType == "operator" ? 
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        <LebalButton type={'primary'} svg={edit} onclick={() => updateBuseModel(bus.id)} />
                                                        <LebalButton type={'danger'} svg={deleteIcon} onclick={() => deleteBusModel(bus.id)} />
                                                    </td>
                                                 : <></>
                                            }
                                                    
                                                </tr>
                                            ))}  
                                    </tbody>
                                </table>
                                {/* ======================= START:: PAGINATION ============================ */}
                                <Pagination
                                    postsPerPage={postsPerPage}
                                    totalPosts={buses.length}
                                    paginate={paginate}
                                />
                                {/* ======================== START:: PAGINATION ============================ */}
                            </>

                        )
                        }

                    </div>
                    {/* End:  Bus content */}
                </div>
            </div>
            </DashBoardLayout>

        </>
    );
}

const mapToState = (state) => {
    return {
        user: state.user,
        buses: state.buses
    }
}

export default connect(mapToState, { createBus, updateBusInfo, deleteBus, fetchBuses })(Busesoperat);



