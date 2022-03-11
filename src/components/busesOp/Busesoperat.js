import React, { useState, useEffect } from "react";
import { DangerButton, InfoButton, PermissionButton, Primary } from "../buttons/Buttons";
import { LebalButton, LebalTextButton } from '../../components/buttons/LebalButton'
import { ToastContainer } from "react-toastify";
import Notify from "../../functions/Notify";
import TableSkeleton from "../../components/skeletons/Tables/RemovePermisionSkeleton"
import { Profile } from '../../components/skeletons/cards/Profile';
// import TableSkeleton from '../../components/skeletons/Tables/TableSkeleton';
import DashboardLayout from "../dashBoardLayout/DashboardOperatorLayout";

import deleteIcon from '../../assets/svgs/delete.svg';
import edit from '../../assets/svgs/edit.svg';
import more from '../../assets/svgs/more.svg';
import prev from '../../assets/svgs/prev.svg';
import busPark from '../../assets/Image/busPark.jpg';
import next from '../../assets/svgs/next.svg';
import { useSelector } from 'react-redux';

const Busesoperat = () => {
    const [busModel, setBusModel] = useState(false);
    const [createBusModel, setCreateBusModel] = useState(false);
    const [loading, setLoading] = useState(true);

    
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
    const {
        type: userType,
      } = useSelector((state) => state.user);

    const removeModel = () => {
        let newState = !createBusModel;
        setCreateBusModel(newState);

    }

    const registerDriver = (e) => {
        e.preventDefault();

        /* =================================== Start:: validation ================================ */
        if (busName.trim().length == '') return Notify('Bus Name is required', 'error');
        if (route.trim().length == '') return Notify('Boute is required', 'error');
        if (bus.trim().length == '') return Notify('Plate number is required', 'error');

        /* =================================== End:: validation ================================ */
        setTimeout(() => {
            removeModel();
        },
            5000
        )
        return Notify('New Bus have been added', 'success');

    }





    const deleteBusModel = () => {

        let newState = !busModel
        setBusModel(newState)
    }


    const removePermision = (e) => {
        e.preventDefault();
        setTimeout(() => {
            deleteBusModel();
        },
            5000
        )
        return Notify('Bus has been deleted', 'success');

    }
    return (
        <>
            {/* =========================== Start:: CreateBusModel =============================== */}
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${createBusModel === true ? 'block' : 'hidden'}`}>
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
                            Creating a new bus
                        </h3>
                        {/* <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => removeModel() } >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div> */}
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => registerDriver(e)} action="/drivers" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="input my-3 h-9 ">
                                {/* <label htmlFor="" className="bg-transparent border-0 outline-none font-sans text-xs md:text-xl text-secondary-50 h-5 w-full">Bus name</label>  */}
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="busName" className=" bg-transparent border-0 outline-none px-5 font-sans md:text-sm text-xs h-5 w-4/5" placeholder="Bus Names" value={busName} onChange={e => setbusName(e.target.value)} />
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
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
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
                        <h3 className='font-bold text-sm text-center w-11/12 text-danger-500' >
                            Deleting bus
                        </h3>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <h2 className="md:ml-12 text-secondary-500 mt-3 mb-6 text-xs md:text-sm">do you want to remove this bus?</h2>
                        <form onSubmit={(e) => removePermision(e)} className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="w-full flex justify-between">
                                <InfoButton name={`Cancel`} onclick={(e) => deleteBusModel(e.preventDefault())} styles='py-2 md:w-1/3 bg-primary-200 hover:bg-primary-100 font-sans text-sm text-white-600' />
                                <Primary name={`Remove`} styles=' bg-danger-200 hover:bg-danger-100 text-danger-600 py-2 md:w-1/3' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* =========================== End:: DeleteBusModel =============================== */}
            <DashboardLayout>
                
                    <div className="flex flex-col ml-14 w-2/5 mb-4">
                        <div className="py-2 sp:px-8 mp:px-5 sm:px-10 md:px-8 lg:px-1">
                            <div className=" flex  justify-between">
                                <Primary name={`Route +`} styles='md:w-1/4 font-sans font-bold bg-primary-400 hover:bg-primary-200 ' />
                                <Primary name={`List`} styles='md:w-1/4 font-sans font-bold bg-primary-400 hover:bg-primary-200' />
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-min  lg:w-7/12 bg-white rounded-md p-4 m-2">
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
                                { loading &&( <TableSkeleton />  )
                                }
                                { !loading &&(
                                    <>
                                        <table className="min-w-full border-collapse border-0"  >
                                            <thead>
                                                <tr className="border-b border-b-secondary-100" >
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >#</th>
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Bus Type</th>
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Route</th>
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Plate</th>                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        1
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        <LebalTextButton text='J' type='primary' /> Coester
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        Nyabugogo-remera
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        RAB098B
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        <LebalButton type={'primary'} svg={edit} />
                                                        <LebalButton type={'danger'} svg={deleteIcon} onclick={removePermision}/>
                                                        <LebalButton type={'info'} svg={more} />
                                                    </td>
                                                 
                                                </tr>
                                                <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        2
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        <LebalTextButton text='J' type='primary' /> Min bus
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        Nyamirambo-Downtown
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    RAC778C
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        <LebalButton type={'primary'} svg={edit} />
                                                        <LebalButton type={'danger'} svg={deleteIcon} onclick={removePermision}/>
                                                        <LebalButton type={'info'} svg={more} />
                                                    </td>
                                                </tr>
                                                <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        3
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        <LebalTextButton text='J' type='primary' /> Yutong
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        Nyabugogo-Nyacyonga
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        RAF887B
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        <LebalButton type={'primary'} svg={edit} />
                                                        <LebalButton type={'danger'} svg={deleteIcon} onclick={removePermision}/>
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
                                                                      
                                    )
                                }
                               
                            </div>   
                        {/* End:  Bus content */}                 
                    </div>
                </div>
                <div className=" w-full h-min lg:w-4/12 bg-white rounded-md m-2 py-12">
                    <div className="w-full">
                        {/* =================== Start: Bus Information ==================== */}
                        { loading &&( <Profile />  ) }                       
                        { !loading &&( 
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
                                <div className="driver-info w-full flex items-center ml-16 justify-between mt-4 px-6">
                                    <div className="w-5/6">
                                        <div className="title flex flex-row font-sans " >
                                            <p className='text-primary-600 font-semibold mb-2 text-sm w-full' >Bus Type:</p>
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>Coester</p>
                                        </div>  
                                        <div className="title flex flex-row font-sans " >
                                            <p className='text-primary-600 font-semibold mb-2 text-sm w-full ' >Route:</p>
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>Nyabugogo-Remera</p>
                                        </div> 
                                        <div className="title flex flex-row font-sans " >
                                            <p className='text-primary-600 font-semibold mb-2 text-sm w-3/4 ' >Plate</p>
                                            <p className='text-secondary-200 font-semibold text-xs mb-2 w-3/4'>RAB098B</p>
                                        </div>                                       
                                    </div>
                                </div>
                            </div>   
                        )}
                            
                        {/* ===================== End: Bus Information ==================== */}
                    </div>               
                </div>  
            </DashboardLayout>

        </>
    );
}

export default Busesoperat




