import React, { useState, useEffect } from "react";
import { DangerButton, InfoButton, PermissionButton, Primary } from "../buttons/Buttons";
import { LebalButton, LebalTextButton } from '../../components/buttons/LebalButton'
import { ToastContainer } from "react-toastify";
import Notify from "../../functions/Notify";
import TableSkeleton from "../../components/skeletons/Tables/RemovePermisionSkeleton"
import { Profile } from '../../components/skeletons/cards/InfSkeleton';
import DashboardLayout from "../dashBoardLayout/DashboardOperatorLayout";

import deleteIcon from '../../assets/svgs/delete.svg';
import edit from '../../assets/svgs/edit.svg';
import more from '../../assets/svgs/more.svg';
import prev from '../../assets/svgs/prev.svg';
import busPark from '../../assets/Image/busPark.jpg';
import next from '../../assets/svgs/next.svg';
import { connect } from 'react-redux';
import { createBus, updateBusInfo, deleteBus } from "../../redux/actions/busAction";

const Busesoperat = (props) => {

    //State infromation
    const { user, buses, createBus, updateBusInfo, deleteBus } = props;

    const [busModel, setBusModel] = useState(false);

    const [updateModel, setUpdateModel] = useState(false);
    const [createBusModel, setCreateBusModel] = useState(false);
    const [loading, setLoading] = useState(true);
    //for selecting 
    const [selectedBus, setSelectedBusId] = useState([
        {
            id: 0,
            busType: "No bus has been currently selected",
            plate: "",
            route: ""
        }
    ]);
    const getSelectedBus = (id) => {
        const select = buses.filter(bus => bus.id == id);
        setSelectedBusId(select);
    }

    //Form controller 
    const [busId, setBusId] = useState('');
    const [busName, setbusName] = useState('');
    const [route, setRoute] = useState('');
    const [bus, setBus] = useState('');

    /* ======== Start:: removing skeleton ======= */
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])
    /* ======== End:: removing skeleton ======= */


    //Getting user type 
    const {
        type: userType,
    } = user;



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
            setBus(select[0].plate);
            setRoute(select[0].route);
            setbusName(select[0].busType);

        }

    }

    const registerBus = (e) => {
        e.preventDefault();

        /* =================================== Start:: validation ================================ */
        if (busName.trim().length == '') return Notify('Bus type is required', 'error');
        if (route.trim().length == '') return Notify('Boute is required', 'error');
        if (bus.trim().length == '') return Notify('Plate number is required', 'error');

        /* =================================== End:: validation ================================ */

        const newBus = {
            busType: busName,
            route,
            plate: bus
        }
        createBus(newBus);
        setTimeout(() => {
            removeModel();
            setBusId(0)
            setBus("");
            setRoute("");
            setbusName("");
        },
            2000
        )
        return Notify('New Bus have been added', 'success');

    }
    const updateBus = (e) => {
        e.preventDefault();

        /* =================================== Start:: validation ================================ */
        if (busName.trim().length == '') return Notify('Bus Name is required', 'error');
        if (route.toString().trim().length == '') return Notify('Boute is required', 'error');
        if (bus.trim().length == '') return Notify('Plate number is required', 'error');

        /* =================================== End:: validation ================================ */

        const newBusInfo = {
            id: busId,
            busType: busName,
            route,
            plate: bus
        }
        updateBusInfo(newBusInfo);
        setTimeout(() => {
            setUpdateModel(false);
            setBusId(0)
            setBus("");
            setRoute("");
            setbusName("");
        },
            2000
        )
        return Notify('Bus have been updated', 'success');

    }
    const deleteAssignedBus = (e) => {
        e.preventDefault();

        deleteBus({ busId });
        setTimeout(() => {
            deleteBusModel()
        }, 2000)
        Notify("Bus has been deleted", "success");
    }

    const deleteBusModel = (bus_Id) => {
        setBusModel(!busModel);
        setBusId(bus_Id);
    }



    return (
        <>

            {/* =========================== Start:: CreateBusModel =============================== */}
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
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${updateModel === true ? 'block' : 'hidden'}`}>
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <h3 className='font-bold text-sm text-center w-11/12' >
                            Creating a new bus
                        </h3>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => updateBus(e)} action="/buses" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="input my-3 h-9 ">
                                {/* <label htmlFor="" className="bg-transparent border-0 outline-none font-sans text-xs md:text-xl text-secondary-50 h-5 w-full">Bus name</label>  */}
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Bus Type" value={busName} onChange={e => setbusName(e.target.value)} />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                {/* <label htmlFor="" className="bg-transparent border-0 outline-none font-sans text-xs md:text-xl text-secondary-50 h-5 w-full">Select route</label>  */}
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Route" value={route} onChange={e => setRoute(e.target.value)} />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                {/* <label htmlFor="" className="bg-transparent border-0 outline-none font-sans text-xs md:text-xl text-secondary-50 h-5 w-full">Plate</label>  */}
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
                                {/* <label htmlFor="" className="bg-transparent border-0 outline-none font-sans text-xs md:text-xl text-secondary-50 h-5 w-full">Bus name</label>  */}
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Bus Type" value={busName} onChange={e => setbusName(e.target.value)} />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                {/* <label htmlFor="" className="bg-transparent border-0 outline-none font-sans text-xs md:text-xl text-secondary-50 h-5 w-full">Select route</label>  */}
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Route" value={route} onChange={e => setRoute(e.target.value)} />
                                </div>
                            </div>
                            <div className="input my-3 h-9 ">
                                {/* <label htmlFor="" className="bg-transparent border-0 outline-none font-sans text-xs md:text-xl text-secondary-50 h-5 w-full">Plate</label>  */}
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
                        <h2 className="md:ml-12 text-secondary-500 mt-3 mb-6 text-xs md:text-sm">do you want to remove this bus?</h2>
                        <div className="w-full flex justify-between">
                            <InfoButton name={`Cancel`} onclick={(e) => deleteBusModel(e.preventDefault())} styles='py-2 md:w-1/3 bg-primary-200 hover:bg-primary-100 font-sans text-sm text-white-600' />
                            <Primary name={`Remove`} styles=' bg-danger-200 hover:bg-danger-100 text-danger-600 py-2 md:w-1/3' onclick={deleteAssignedBus} />
                        </div>
                    </div>
                </div>
            </div>
            {/* =========================== End:: DeleteBusModel =============================== */}
            <DashboardLayout>

                <div className="w-full" >
                    <div className=" w-full lg:w-1/2 -lg:mb-96 lg:mt-8 md:w-1/2">
                        <div className=" flex justify-between">
                            <Primary name={`Route +`} styles='lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/4 font-sans font-bold bg-primary-400 hover:bg-primary-200 ' />
                            <Primary name={`List`} styles=' lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/4 font-sans font-bold bg-primary-400 hover:bg-primary-200' />
                        </div>
                    </div>
                </div>
                <div className=" lg:-mt-24 w-full h-min  lg:w-7/12 bg-white rounded-md p-4 m-2">
                    <div className="w-full">

                        {/* Start:  Bus content */}

                        <div className="card-header flex items-center justify-between">
                            <div className="card-title">
                                <div className="title mb-3">
                                    <h4 className=' text-primary-500 font-bold text-xs md:text-base' >
                                        Buses
                                    </h4>
                                </div>
                                <div className="sub-title">
                                    <h4 className='text-secondary-200  font-bold text-xs' >
                                        List
                                    </h4>
                                </div>
                            </div>

                            <div className="add-new-record">
                                <Primary name="New Bus" onclick={removeModel} />
                            </div>

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
                                                <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                buses.map(bus => (
                                                    <tr key={bus.id} className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                        <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                            {bus.id}
                                                        </td>
                                                        <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                            <LebalTextButton text='J' type='primary' /> {bus.busType}
                                                        </td>
                                                        <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                            {bus.route}
                                                        </td>
                                                        <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                            {bus.plate}
                                                        </td>
                                                        <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                            <LebalButton type={'primary'} svg={edit} onclick={() => updateBuseModel(bus.id)} />
                                                            <LebalButton type={'danger'} svg={deleteIcon} onclick={() => deleteBusModel(bus.id)} />
                                                            <LebalButton type={'info'} svg={more} onclick={() => getSelectedBus(bus.id)} />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div className="w-full flex items-center justify-center ">
                                        <div className="w-11/12 sm:w-6/12 md:w-6/12 p-1 px-4 shadow flex justify-between mt-3">
                                            <div className="next flex items-center justify-center rounded-md cursor-pointer hover:bg-secondary-100 w-9">
                                                <img src={prev} alt="Phantomm" />
                                            </div>
                                            <div className="flex items-center justify-center rounded-md cursor-pointer bg-primary-600 w-8 text-white">1</div>
                                            <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">2</div>
                                            <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">...</div>
                                            <div className="text-gray-400  hover:flex hover:items-center hover:justify-center hover:rounded-md cursor-pointer hover:bg-primary-400 hover:w-8 hover:text-white">3</div>
                                            <div className="next flex items-center justify-center cursor-pointer rounded-md bg-secondary-100 hover:bg-secondary-200 w-9">
                                                <img src={next} alt="Phantomm" />
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                            }

                        </div>
                        {/* End:  Bus content */}
                    </div>
                </div>
                <div className=" lg:-mt-24 w-full h-min lg:w-4/12 bg-white rounded-md m-2 ">
                    <div className="w-full">
                        {/* =================== Start: Bus Information ==================== */}
                        {loading && (<Profile />)}
                        {!loading && (
                            <div className=" flex flex-col items-center justify-center">
                                <div className="profile ">
                                    <div className="  border border-primary-600 w-20 h-20 rounded-full flex items-center justify-center bg-primary-100">

                                        <img src={busPark} alt="Bus" className="border border-primary-600 w-20 h-20 rounded-full flex items-center justify-center bg-primary-100" />

                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="profiler-name">
                                        <p className=' text-xs font-semibold font-sans md:text-sm text-secondary-300 underline'>Bus Information</p>
                                    </div>
                                </div>
                                {
                                    selectedBus.map(bus => (
                                        <div key={bus.id} className="driver-info w-full flex items-center ml-16 justify-between mt-4 px-6">
                                            <div className="w-5/6">
                                                <div className="title flex flex-row font-sans " >
                                                    <p className='text-primary-600 font-semibold mb-2 text-sm w-full' >Bus Type:</p>
                                                    <p className='text-secondary-200 font-semibold text-xs  w-full'>{bus.busType}</p>
                                                </div>
                                                <div className="title flex flex-row font-sans " >
                                                    <p className='text-primary-600 font-semibold mb-2 text-sm w-full ' >Route:</p>
                                                    <p className='text-secondary-200 font-semibold text-xs  w-full'>{bus.route}</p>
                                                </div>
                                                <div className="title flex flex-row font-sans " >
                                                    <p className='text-primary-600 font-semibold mb-2 text-sm w-3/4 ' >Plate</p>
                                                    <p className='text-secondary-200 font-semibold text-xs mb-2 w-3/4'>{bus.plate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        )}

                        {/* ===================== End: Bus Information ==================== */}
                    </div>
                </div>
            </DashboardLayout>

        </>
    );
}

const mapToState = (state) => {
    return {
        user: state.user,
        buses: state.buses
    }
}

export default connect(mapToState, { createBus, updateBusInfo, deleteBus })(Busesoperat);



