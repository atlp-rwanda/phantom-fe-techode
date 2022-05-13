import React, { useEffect, useState } from 'react'

import DashBoardLayout from '../../components/dashBoardLayout/DashBoardLayout';
import { Primary, PermissionButton, InfoButton } from '../../components/buttons/Buttons.js'
import { LebalButton, LebalTextButton } from '../../components/buttons/LebalButton.js';
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify'
import TableSkeleton from '../../components/skeletons/Tables/TableSkeleton';
import deletePermissionSVG from "../../assets/svgs/deletePermission.svg";

import deleteIcon from '../../assets/svgs/delete.svg';
import add from "../../assets/svgs/lebals/savePrevelage.svg";
import close from '../../assets/svgs/close.svg';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchRoutes } from "../../redux/actions/RoutesAction"
import { fetchBuses } from "../../redux/actions/busAction"
import { assignRoute, removeRoute } from '../../redux/actions/assignRouteAction'
import Pagination from '../../components/pagination/Pagination';
import Route from '../../components/route/Route';
import { API as axios } from "../../api/index"
import { set } from 'react-hook-form';

const assignRouteBus = async (plateNumber,routeCode, setLoading) => {
    setLoading(true);
    try {
      const response = await axios.post(`/assign/bus-to-route/${plateNumber}/${routeCode}`, {}
      );
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

const AssignBuses = (props) => {   
    const [assignB , setAssignBus] = useState(false);
    const [loading , setLoading] = useState(true);
    const [routeId, setRouteId] = useState('');
    const [busId, setBusId] = useState("")
    const [buseId, setBuseId] = useState("")
    const [routeName, setRouteName] = useState("")
    const { assignRoute, removeRoute, fetchRoutes, fetchBuses } = props
    const [profileInfo, setProfileInfo] = useState("")
    const [clearRouteModal, setClearRouteModal] = useState(false)
    const [currentPage, setCurrentpage] = useState(1)
    const [postsPerPage] = useState(2)
    const [type, setType] = useState("")
    const [plate, setPlate] = useState("")
    const [route, setRoute] = useState(false)
    const getRoutes = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`/routes`);
          setLoading(false);
          fetchRoutes(response.data.data.routes);
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
    const getBuses = async () => {
    setLoading(true);
    try {
        const response = await axios.get(`/buses`);
        setLoading(false);
        fetchBuses(response.data.data.buses);
        
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
    
    useEffect(async () => {
    setLoading(false)
    await getRoutes()
    await getBuses()
} , [])       

const removeRouteOnBus = async (plateNumber, setLoading) => {
    setLoading(true);
    try {
      const response = await axios.put(`/assign/bus-to-route/${plateNumber}`,{});
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
    /* ========== Start::  Getting current state ================== */
        let count = 0

        const buses = props.buses;
        const assignBusRoute = props.assignBusRoute
        const routes = props.routes;
    /* ============ End::  Getting current state ================== */
    /* ============ Start::  Getting current driver lis ================== */
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = buses.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentpage(pageNumber)
    const assignModal = (id, type, plate) => {
        setBusId(id)
        setType(type)
        setPlate(plate)
        let newState = !assignB;
        setAssignBus( newState );
    }
    const deleteModal = (bus, route, name) => {
        let deleteState = !clearRouteModal
        setClearRouteModal(deleteState)
        setBuseId(bus)
        setRouteId(route)
        setRouteName(name)
    }
    const assignBusSelect = (name) =>{
        setRouteName(name)
    }
    const deleteRoute = async () =>{
        setLoading(false)
        await removeRouteOnBus(routeName, setLoading)
        getBuses()
        deleteModal()
    }
    const assignBusFunc = async (e) =>{
        e.preventDefault(); 
        let code = routeName.split('*')
      
        /* =================================== Start:: validation ================================ */ 
            if(routeName.trim().length == '') return Notify('You need to assign at least on bus to this route','error') ;

        /* =================================== End:: validation ================================ */ 
        setLoading(false)
        await assignRouteBus(plate,code[0],setLoading)
        getBuses()
        assignModal()
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

        {/* =========================== Start:: Model =============================== */}        
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${ assignB === true ? 'block' : 'hidden' }`}>
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-body">
                        <form onSubmit={(e) => assignBusFunc(e)} action="/drivers" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                                <h3 className="font-bold text-sm text-center w-11/12">
                                    Select a Route
                                </h3>
                                <div
                                className="close-icon w-1/12 cursor-pointer float-right"
                                onClick={() => assignModal()}
                                >
                                <img src={close} alt="Phantom" className="float-right" />
                                </div>
                                <hr className=" bg-secondary-150 border my-3 w-full" />
                            </div>
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <select id="" name="search" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-full" placeholder="Asign a bus" onChange={ e => assignBusSelect( e.target.value ) }>
                                        {routes.map((buzz, index) => (
                                            <option key={index} value={buzz.code+'*'+buzz.name}>{buzz.name + ' ' + buzz.code}</option>
                                        ) )}
                                    </select>
                                </div>                
                            </div>
                            <div className="w-full">
                                <Primary name={`Save`} styles='py-2'  />
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
        {/* =========================== Start:: Model =============================== */}

        {/* =========================== Start:: Model =============================== */}        
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${ clearRouteModal === true ? 'block' : 'hidden' }`}>
                    <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                        <div className="card-body">
                        <h2 className="md:ml-12 text-secondary-500 mt-3 mb-6 text-xs md:text-sm">
                        Are you sure you want to remove this Route   <span className="text-mainColor">{routeName}</span>
                        </h2>
                        <div
                        className=" sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12"
                        >
                        <div className="w-full flex justify-between">
                            <InfoButton
                            name={`Cancel`}
                            onclick={(e) => deleteModal()}
                            styles="py-2 md:w-1/3 w-1/2 bg-primary-200 hover:bg-primary-100 text-primary-500"
                            />
                            <Primary onclick={() =>
                            deleteRoute()
                            } name={`Remove`} styles="bg-danger-200 hover:bg-danger-100 py-2 text-danger-500 md:w-1/3 w-1/2" />
                        </div>
                    </div>
                    </div>
                </div>                
            </div>
        {/* =========================== Start:: Model =============================== */}    

        {/* =========================== End:: Dashboard =============================== */}  
            <DashBoardLayout>  
                <div className="w-full h-min  lg:w-7/12 bg-white rounded-md p-4 m-2">
                    <div className="w-full">
                        {/* Start:  Driver content */}
                            <div className="card-header flex items-center justify-between">                        
                                <div className="card-title">
                                    <div className="title mb-3">
                                        <h4 className=' text-primary-500 font-bold text-xs md:text-base' >
                                            Assign Bus to a Route
                                        </h4>
                                    </div> 
                                </div>
                            </div>
                            <div className="mt-3 mb-10"> 
                                { loading &&( <TableSkeleton />  )
                                }
                                { !loading && currentPosts.length && (
                                    <>
                                        <table className="min-w-full border-collapse border-0"  >
                                            <thead>
                                                <tr className="border-b border-b-secondary-100" >
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >#</th>
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Bus name</th>
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Plate Number</th>
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-4 pb-2 text-left"  >Assigned Route</th>                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                            
                                                {currentPosts.map((bus, index) => (
                                                <tr 
                                                key={bus.id} onClick={() => setProfileInfo(currentPosts[count++])}
                                                className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    {bus.id}
                                                    </td>
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                     {bus.bustype}
                                                    </td>
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        {bus.platenumber}
                                                    </td>
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans h-full'> 
                                                        <div className='buttons h-full flex flex-col md:flex md:flex-row'>
                                                            {bus.routeId && (
                                                                <PermissionButton  svg={deletePermissionSVG} key={index} type={'danger'} name={bus.route.name}
                                                                onclick={() => deleteModal(bus.id, bus.route.id, bus.platenumber)}/>)
                                                            }
                                                            <PermissionButton type={'success'} svg={add} name={'Assign Route'}
                                                            onclick={() => assignModal(bus.id, bus.bustype,bus.platenumber) }/>
                                                            {/* =================== Start:: only admin to see this =================== */}
                                                            
                                                            {/* =================== End:: only admin to see this =================== */}
                                                        </div>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <Pagination 
                                            postsPerPage={postsPerPage}
                                            totalPosts={buses.length}
                                            paginate={paginate}
                                        />          
                                    </>
                                                                      
                                    )
                                }
                               
                            </div>   
                        {/* End:  Driver content */}                 
                    </div>
                </div>
                <div className="w-full h-min lg:w-4/12 bg-white rounded-md m-2 px-4 pt-4">
          <div className="w-full">
            <div className="card-header flex justify-between">
              <div className="card-title">
                <div className="title mb-3">
                  <h4 className=" text-primary-500 font-bold text-xs md:text-base">
                    List of Routes
                  </h4>
                </div>
              </div>
            </div>
            <Route loading={loading} setLoading={setLoading} />
          </div>
        </div>        
            </DashBoardLayout>
        {/* =========================== End:: Dashboard =============================== */}                    
        </>
    );
}
const mapStateToProps = (state) => {
    return ({
        buses: state.buses,
        assignBusRoute: state.assignBusRoute,
        routes: state.routes,
    })
}
export default connect(mapStateToProps, {assignRoute, removeRoute, fetchRoutes, fetchBuses })(AssignBuses)
