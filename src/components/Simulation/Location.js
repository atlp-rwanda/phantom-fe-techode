import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify';
import BusTrack from "../../functions/BusTrack";
import RanderMyLocation from "../../functions/RanderMyLocation"
import RoutingMachine from "../../functions/RoutingMachine"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { iconBus,iconStoppedBus,iconOnBoardBus } from "../icons/Icons"
import { update,setProfile } from "../../redux/actions/userActions";
import {Map} from '../skeletons/Map/Map'
import location from '../../assets/svgs/locationInfo.svg';
import { Primary } from '../buttons/Buttons';
import { Icon } from '@iconify/react';
import checkAuth from '../../functions/checkAuth';
import handleUserAction from '../../functions/handelUserAction';
import socket from '../../config/socket';
import { useHistory, useLocation } from 'react-router-dom';
import { addCoordinate } from '../../redux/actions/routeDetailActons'
import close from "../../assets/svgs/close.svg";
import { selectRoute } from '../../redux/actions/selectedRouteAction';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import fetchAllRoute from '../../functions/fetchAllRoute';
import search from '../../assets/svgs/search.svg';
import fetchAllBuses from '../../functions/fetchAllBuses';
import getMyLocation from '../../functions/getMyLocation';


const provider = new OpenStreetMapProvider();
const Location = ( props ) => {
    const history = useHistory();
    const location = useLocation();
    const { showModelStart , selectedRoute ,addCoordinate , selectRoute} = props;
    const [ buses , setBuses ] = useState([]);
    const [ loading ,setLoading ] = useState(true);
    const [ showModel , setShowModel ] = useState(false);
    const [ showBusRouteModel , setShowBusRouteModel ] = useState(false);
    const [ activeAction , setActiveAction ] = useState("/tracking");
    const [ origin, setOrigin ] = useState({});
    const [ destination, setDestination ] = useState({});
    const [ searchValue, setSearchValue ] = useState("");
    const [ orginSuggestion , setOriginSugestion ] = useState([]);
    const [ destinationSuggestion , setDestinationSugestion ] = useState([]);
    const [ originRouteNotFound , setOriginRouteNotFound ] = useState("");
    const [ destinationRouteNotFound , setDestinationRouteNotFound ] = useState("");
    const [ loadingMap, setLoadingMap ] = useState(true);
    const [ suggestion , setSugestion ] = useState([]);
    const [ routeNotFound , setRouteNotFound ] = useState(null);
    const [ routes , setRoutes ] = useState([])
    const [ allBuses , setAllBuses ] = useState([])
    const [ showAllBusesModel , setShowAllBusesModel ] = useState(false)

    /* ===================== start:: place from and place after a search pop up ===================== */
    const [ placeFrom , setPlaceFrom ] = useState({ lat: 0 , lng: 0}); 
    const [ placeTo , setPlaceTo ] = useState({ lat: 0 , lng: 0 }); 
    const [ originQuery , setOriginQuery ] = useState(""); 
    const [ destinationQuery , setDestinationQuery ] = useState(""); 
    /* ===================== end:: place from and place after a search pop up ===================== */

    const [ isSearchingOrigin , setIsSearchingOrigin ] = useState(false);
    const [ isSearchingDestination , setIsSearchingDestination] = useState(false);
  

    useEffect(async () => {
        let origin = JSON.parse(localStorage.getItem("origin"));
        let destination = JSON.parse(localStorage.getItem("destination"));
        setOrigin(origin);
        getMyLocation(setOrigin);
        setDestination(destination);
        setLoading(false);
        setLoadingMap(false);
        /* ===================== Start: listening to a socket ======================= */
        socket.on("location_update",(data) =>{
            var newBus = data.bus;
            if(selectedRoute.routeId != 0 && selectedRoute.routecode != 0){
                newBus = data.bus.filter(busInfo => busInfo.routecode == selectedRoute.routecode)       
            }
            setBuses(newBus);
        })
        /* ======================== End: listening to a socket ======================= */
    },[loading,selectedRoute])

    useEffect( async () => {
        const allRoutes = await fetchAllRoute();
        setRoutes([...allRoutes]);
        const allBuses = await fetchAllBuses();
        setAllBuses([...allBuses]);
    },[])

    useEffect( async () => {
       
        if(selectedRoute.routeId == 0){                  
           const buses = await handleUserAction(setBuses); 
           setBuses(buses)  
        }
        else{
            let newBus = buses.filter(busInfo => busInfo.routecode == selectedRoute.routecode);
            if(newBus.length == 0){
                Notify("Seems like no buses was found route","info");                
            }
            setBuses(newBus)
        }
        
    },[selectedRoute])

    useEffect( async () => {
       let newBus = [];
       if(selectedRoute.from.length == 0 && buses.length == 0){        
            await handleUserAction(setBuses); 
       }
    },[buses])

    const proccessing = (setFoundStatus,setValue,find,setIsearching =null) => {
        setFoundStatus(true);
        setIsearching != null ?  setIsearching(true) : ""
        if(find != null){
          let position = {
              lat:0,
              lng:0
          };
          provider
          .search({ query: `rwanda ${find}` })
          .then(function (result) {       
            if (result.length != 0) {
              setFoundStatus(false)           
              let place = {...position};
              place.lat = result[0].bounds[0][0];
              place.lng =  result[0].bounds[0][1];
              setValue(place)
            } else {
              setFoundStatus(true);
            
              let place = {...position};
              place.lat = 0;
              place.lng = 0;
              setValue(place);
            }
          })
          .catch((error) => {
            
            setFoundStatus(true)
          });
        }
    }

    return (
        <>
 
            {/* =========== Start:: ToastContainer =========== */}
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
                className={`z-50`}
            />
            {/* =========== End:: ToastContainer ================= */}

            {/* ===================================== Start:: Start Model ================================ */}        
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 z-40 ${ showModel === true ? 'block' : 'hidden' }`}>
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => setShowModel(false)} >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div>
                    </div>
                    <div className="card-body"> 
                        <form className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" value={originQuery} name="origin" className={`bg-transparent border-0 outline-none px-5 font-sans text-xs h-5 w-4/5   ${originRouteNotFound == false ? "text-success-600" : originRouteNotFound == true ? " text-danger-500 " : "text-secondary-50" } `} placeholder="Origin" 
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            setOriginQuery(value);
                                            setOriginRouteNotFound(true)
                                            if(value.trim().length > 4){
                                                proccessing(setOriginRouteNotFound,setPlaceFrom,value,setIsSearchingOrigin);                                               
                                            }
                                            else{
                                                Notify("Origin should not be empty ");
                                            }                                          
                                        }}
                                    />  
                                    <div className="w-1/5 flex justify-center">
                                        {originRouteNotFound == false || originQuery.trim().length == 0 || isSearchingOrigin == false ? (<img src={search} alt="phantom"  />): originRouteNotFound == true ?  (<i className="fa fa-spinner fa-spin fa-1x fa-fw text-mainColor "></i> )  : (<img src={search} alt="phantom"  />)   }
                                                                
                                    </div>                                  
                                </div>                
                            </div>
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="destination" value={destinationQuery} className={` bg-transparent border-0 outline-none px-5 font-sans text-xs  h-5 w-4/5  ${destinationRouteNotFound == false ? "text-success-600" : destinationRouteNotFound == true ? " text-danger-500 " : "text-secondary-50" }  `} placeholder="Destination"   onChange={(e) => {
                                        let value = e.target.value;
                                        setDestinationQuery(value)
                                        setDestinationRouteNotFound(true)
                                        if(value.trim().length > 4){
                                            proccessing(setDestinationRouteNotFound,setPlaceTo,value,setIsSearchingDestination);                                            
                                        }
                                        else{
                                            Notify("Destination should not be empty ");
                                        }   
                                    }}/>  
                                     <div className="w-1/5 flex justify-center">
                                        {destinationRouteNotFound == false || destinationQuery.trim().length == 0 || isSearchingDestination == false ? (<img src={search} alt="phantom"  />): destinationRouteNotFound == true ?  (<i className="fa fa-spinner fa-spin fa-1x fa-fw text-mainColor "></i> )  : (<img src={search} alt="phantom"  />)   }
                                                                
                                    </div>                                      
                                </div>                
                            </div> 
                            <div className="text-center">
                                <span className='text-sm w-11/12 text-primary-400 cursor-pointer mb-2' onClick={() => {
                                setActiveAction("/trackingBuses");
                                setShowModel(false);    
                                setShowBusRouteModel(true)                                                             
                                }}>
                                    You can browse from our routes by cliking here!
                                </span>  
                            </div>                                                                                        
                            <div className="w-full my-2">
                                <Primary name={`Track`} styles='py-2' onclick={
                                    (e) => {
                                        e.preventDefault();
                                        setLoadingMap(true)
                                        if(placeFrom.lat == 0 ){
                                            setLoadingMap(false)
                                            return Notify(`Origin(${originQuery}) has not been found.`,"error")
                                        }
                                        else if(placeTo.lat == 0 ){
                                            setLoadingMap(false)
                                            return Notify(`Destination(${destinationQuery}) has not been found. `,"error")
                                        }
                                        else{
                                            selectRoute({from:[placeFrom.lat,placeFrom.lng],to:[placeTo.lat,placeTo.lng],routeId:0,routecode:0});
                                            setTimeout(() => {
                                                setShowModel(false)                                                
                                                setOriginQuery("");
                                                setDestinationQuery("");
                                                setLoadingMap(false)
                                            },500)                                            
                                        }
                                    }
                                } />
                            </div>
                        </form>
                    </div>
                </div>                
            </div>

            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 z-40 ${ showBusRouteModel === true ? 'block' : 'hidden' }`}>
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => setShowBusRouteModel(false)} >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div>
                    </div>
                    <div className="card-body"> 
                        <form className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="py-6 flex items-center flex-wrap relative ">
                                <div className="w-full search-input h-12 flex items-center"> 
                                    <div className="grouped-input bg-secondary-40 flex items-center shadow h-full w-full rounded-md">
                                        <input autoComplete="off" type="text" name="search" className={`h-full bg-transparent border-0 outline-none px-5 font-sans font-normal ${routeNotFound == false ? "text-success-600" : routeNotFound == true ? " text-danger-500 " : "text-secondary-50" } w-4/5`} placeholder="Search a routes..." value={searchValue} onChange={(e) => {
                                            setSearchValue(e.target.value);
                                            if(searchValue.trim().length > 3){
                                                setLoadingMap(true);
                                                const regex = new RegExp(`^${searchValue}`, 'i');
                                                setSugestion(routes.sort().filter(value => regex.test(value.name)));
                                            }                            
                                        }}/>                          
                                        <div className="w-1/5 flex justify-center">
                                            <img src={search} alt="phantom"  />                        
                                        </div>                    
                                    </div>                
                                </div>   
                                <div className={`w-full bg-secondary-40 absolute top-16 rounded-md  ${ searchValue.trim().length > 4 ?  "" : "hidden" }`}>
                                    <div className="flex flex-col ">
                                    {
                                        suggestion.length == 0 && searchValue.trim().length >  4 && (                                    
                                            <div className=" item1 flex items-center my-2 cursor-pointer hover:bg-gray-300 max-w-full p-2" onClick={() => {
                                            Notify("Route not found","error");
                                            }}>
                                                <div className={`h-9 w-9 rounded-full bg-danger-500 flex items-center justify-center  cursor-pointer`}  onClick={() => {}}>
                                                    <Icon icon="akar-icons:location" color={` white `} width="19" height="19" />    
                                                </div>
                                                <div className=" text-danger-500 ml-3 hover:text-danger-300">There is no such route found!</div>
                                            </div>                                    
                                        )
                                    }       

                                    {
                                        suggestion.map(value => {
                                        return(
                                            <div key={value.id} className=" item1 flex items-center my-2 cursor-pointer hover:bg-gray-300 max-w-full p-2" onClick={() => {
                                                let from = value.startLocation.split(",");
                                                let to =  value.endLocation.split(",");
                                                selectRoute({from,to,routeId:value.id,routecode:value.code});
                                                setLoadingMap(false);
                                                setShowBusRouteModel(false);
                                                setSearchValue("");
                                            }}>
                                            <div className={`h-9 w-9 rounded-full bg-mainColor  flex items-center justify-center  cursor-pointer`}  onClick={() => {}}>
                                                <Icon icon="akar-icons:location" color={` white `} width="19" height="19" />    
                                            </div>
                                            <div className=" text-active ml-3 hover:text-primary-300  "> { value.name } </div>
                                            </div>
                                        )
                                        })
                                    }                      
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>                
            </div>

            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 z-40 ${ showAllBusesModel === true ? 'block' : 'hidden' }`}>
                <div className="bg-white w-full  mp:w-8/12  md:w-full  xl:w-4/5 2xl:w-4/5 rounded-lg p-4 pb-8  ">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <div className="close-icon w-1/12 cursor-pointer float-right mb-6" onClick={() => setShowAllBusesModel(false)} >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div>
                    </div>
                    <div className="card-body max-h-96 overflow-y-auto px-6 "> 
                        <div className="py-6 flex items-center flex-wrap relative ">
                            <div className="w-full "> 
                                <table className="min-w-full border-collapse border-0 min-h-full overflow-y-auto"  >
                                    <thead>
                                        <tr className="border-b border-b-secondary-100" >
                                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >#</th>
                                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Plate number</th>
                                            <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Bustype</th>                                                   
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allBuses.map((value,index) => {
                                                return(
                                                    <tr key={index} className="border-b border-b-secondary-100 text-center " >
                                                        <td className="text-xs  md:text-md md:font-bold text-secondary-200 font-sans pt-6 pb-2"  >{ index+1 }</td>
                                                        <td className="text-xs  md:text-md md:font-bold text-secondary-200 font-sans pt-6 pb-2"  >{ value.platenumber }</td>
                                                        <td className="text-xs  md:text-md md:font-bold text-secondary-200 font-sans pt-6 pb-2"  >{ value.bustype }</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>          
                            </div> 
                        </div>
                    </div>
                </div>                
            </div>
            {/* ====================================== End:: Start Model =============================== */}  

            {/* ==================== Start:: Contents ========================================== */}
            <div className='w-full rounded-md h-full relative  '>      
               
               {/* ================ Start: Location button ===============  */}
                 <div className={`location-btn absolute left-1 h-5/6 bottom-0 flex flex-col items-center justify-center ${ showModel == true || showBusRouteModel == true || showAllBusesModel == true ? " hidden " : "" } `} >
                    <div className="sidbar-container bg-white rounded-full shadow-lg">
                        <div className={`h-12 w-12 rounded-full ${ activeAction == "/tracking" ? "bg-mainColor" : "bg-gray-200" }   shadow-lg hover:bg-gray-300 flex items-center justify-center  cursor-pointer mb-2`} onClick={() => {
                            setActiveAction("/tracking")
                            setShowModel(true);
                        }}>
                            <i className={`fa-solid fa-bars ${ activeAction == "/tracking" ? "text-gray-50" : "text-mainColor" }  h-6 w-6 flex items-center justify-center text-base`}></i>
                        </div> 
                        
                        <div className={`h-12 w-12 rounded-full ${ activeAction == "/trackingBuses" ? "bg-mainColor" : "bg-gray-200" } hover:bg-gray-300 flex items-center justify-center  cursor-pointer mb-2`}  onClick={() => {
                             setActiveAction("/trackingBuses");
                             setShowBusRouteModel(true)                     
                        }}>
                            <Icon icon="ant-design:search-outlined" color={`${ activeAction == "/trackingBuses" ? "white" : "#1CA0E3" } `} width="20" height="20"  />
                        </div>
                        
                        <div className={`h-12 w-12 rounded-full  ${ activeAction == "/listbuses" ? "bg-mainColor" : "bg-gray-200" }  flex items-center justify-center  cursor-pointer mb-2 `} onClick={() =>{
                            setActiveAction("/listbuses");
                            setShowAllBusesModel(true)
                        }}>
                            <Icon icon="ic:sharp-directions-bus-filled" color={`${ activeAction == "/listbuses" ? "white" : "#1CA0E3" } `} width="25" height="25" />
                        </div>  

                        <div className="h-12 w-12 rounded-full  bg-gray-200  shadow-lg hover:bg-gray-300 flex items-center justify-center  cursor-pointer " onClick={() => history.push("/")}>
                            <Icon icon="dashicons:admin-home" color="#1CA0E3" width="25" height="25" />
                        </div>
                    </div>
                </div>                
                {/* ================== End: Location button ===============  */}
               
                {/* ==================== Start:: Bus similation ================================ */}
            
                <div className=" h-screen simulation -mt-20 ">               
                    <div className={`w-full h-full top-0 `} id="map">
                        {loading && <Map />}
                        {!loading && 
                            <MapContainer center={[origin.lat, origin.lng]} zoom={10} scrollWheelZoom={true}  >
                                <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                    {
                                        buses.map( (bus , index) => {
                                            let location = JSON.parse(bus.currentLocation);
                                            let busFromTo = bus.routename !=  null ?  bus.routename.split("-") : "" ;
                                            return(
                                                <BusTrack key={index} icon={bus.status == "stopped" ? iconStoppedBus : bus.status == "on board" ? iconOnBoardBus : iconBus } data={{latitude:location.latitude , longitude: location.longitude}} >
                                                    <Popup  className="w-55">
                                                        <div >
                                                            <i className="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >{busFromTo[0]}</span>  
                                                        </div>  
                                                        <div >
                                                            <i className="fa fa-road text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >{busFromTo[1]}</span>  
                                                        </div>  
                                                        <div >
                                                            <i className="fa fa-location-arrow text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >{bus.status}</span>  
                                                        </div>    
                                                        <div >
                                                            <i className="fa fa-user text-mainColor"></i> <span className="text-gray-400 ml-2 text-sm" >{bus.passengers}</span>  
                                                        </div> 
                                                        <div >
                                                            Seats <span className={`${bus.passengers == 90 ? "text-danger-400" : "text-success-400"} ml-2 text-sm `} >{ bus.passengers == 90 ? "Not available" : "Available" } </span>  
                                                        </div>                                                       
                                                        <div >
                                                            <i className="fa fa-car text-mainColor "></i> <span className="text-gray-400 ml-2 text-sm " >{bus.platenumber}</span>  
                                                        </div>  
                                                        <div >
                                                            <i className="fa-solid fa-id-card text-mainColor "></i> <span className="text-mainColor ml-2 text-sm cursor-pointer "  onClick={() => console.log(bus) }  >{bus.fullname}</span>  
                                                        </div>                  
                                                           
                                                    </Popup>
                                                </BusTrack>
                                            )
                                        })
                                    }  

                                    {
                                        !loadingMap && (
                                            <>
                                                <RoutingMachine from={selectedRoute.from} to={selectedRoute.to} setCoordinate={addCoordinate}/>
                                                <RanderMyLocation />  
                                            </>
                                        )
                                    }          
                                    
                            </MapContainer>
                        }                         
                    </div>   
                </div>        
                {/* ==================== End:: Bus similation ================================== */}        
                 
            </div>    
            {/* ==================== End:: Contents ========================================== */}    
        </>
    )
}

const mapStateTo = (state) =>{
    return {
        user: state.user,
        activeBus: state.activeBus,
        selectedRoute: state.selectedRoute
    }
}
export default connect( mapStateTo , { update ,addCoordinate,selectRoute})(Location);