import React, {useState} from "react";
import imageBus from "../../assets/img/imageBus.png";
import location from "../../assets/img/location.png";
import vector from "../../assets/img/Vector2.png";
import profile_admin from "../../assets/img/profile_admin.png";
// import Notify from "../Notify/Notify";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import LocationMarker from "./LocationMarker";
import { ToastContainer } from "react-toastify";
import AddRoute from "./AddRoute";
import ListRoute from "./ListRoute";
import RouteInfoSkeleton from "./skeletonRoute/RouteInfoSkeleton";
import DashBoardLayout from "../dashBoardLayout/DashBoardLayout";

import './Routemap.css'


function Routes() {
  const [loading, setLoading] = useState(false);
  window.onload=() =>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("loading")

      
    }, 5000);



  }
  const [routeModal, setRouteModal] = useState(false);

  const addRouteModal = () => {

    let newState = !routeModal
    setRouteModal(newState)
}

const [listModal, setListModal] = useState(false);

  const viewListModal = () => {

    let newState = !listModal
    setListModal(newState)
}


const viewList = (e) => {
    e.preventDefault();
    setTimeout(() => {
        viewListModal();
    },
        5000
    )
    return Notify('Route has been add', 'success');

}



const addRoute = (e) => {
    e.preventDefault();
    setTimeout(() => {
        addRouteModal();
    },
        5000
    )
    return Notify('Route has been add', 'success');

}
const [show, setShow] = useState(true);

    
  return (
      <DashBoardLayout>
    <div>
    
      {show &&<div className={`h-screen w-screen bg-modelColor absolute top-0 left-0   ${routeModal === true ? 'block' : 'hidden'}`}>
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


                <AddRoute />

                
            </div>}
         


            <div className={`h-screen w-screen bg-modelColor absolute top-0 left-0  flex items-center justify-center px-4 ${listModal === true ? 'block' : 'hidden'}`}>
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


                <ListRoute />
                </div>

        <div className="p-10  w-screen ">
     
      <div className=" w-full  flex-col h-20  sm:w-2/5 flex justify-between lg:w-1/3  md:flex-row justify-between mb-10">
        <button onClick={addRouteModal}  className="w-32 bg-primary-100 h-8 rounded border border-cyan-2 text-primary-500 font-bold md:w-32 text-center shadow-4xl">
          Route +
        </button>
        <button onClick={viewListModal} className="w-32 bg-primary-100 h-8 rounded border border-cyan-2 text-primary-500  font-bold md:w-32 text-center shadow-4xl">
          List
        </button>
      </div>
      
      {!loading ? <><div className="    flex-row justify-between lg:w-full md:flex-wrap lg:flex-row   md:flex  justify-between">

            <div className="flex h-full md:h-full bg-white w-full mt-3 lg:mr-0  md:flex shadow-2xl md:w-1/3 lg:w-1/5    rounded ">
              <img className="h-full md:w-1/2 md:h-full  " src={imageBus} alt="" />
              <div className="flex md:flex flex-col   justify-center">
                <p className="text-center text-primary-500 font-bold">Bus</p>
                <p className=" text-primary-500 font-semibold text-sm ml-3">
                  Driver: <span className="text-black font-normal">John</span>
                </p>
                <p className=" text-primary-500 font-semibold ml-3 text-sm">
                  Plate: <span className="text-black font-normal">RAE 0000F</span>
                </p>
                <div className="flex items-center justify-center w-full mt-3 md:mt-0 ">
                  <div className="bg-primary-100 rounded w-1/5 h-6 border border-cyan-2 flex items-center justify-center">
                    <img className="mt-2" src={location} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full bg-white w-full mt-3 md:ml-1 md:h-28  lg:w-1/5  md:flex shadow-2xl md:w-1/3 rounded ">
              <img className="h-full md:w-1/2 md:h-full  " src={imageBus} alt="" />


            </div>

            <div className="flex h-full bg-white w-full mt-3  md:h-28   md:flex shadow-2xl lg:w-1/5 md:w-1/3 rounded ">
              <img className="h-full md:w-1/2 md:h-full  " src={imageBus} alt="" />

            </div>

            <div className="flex h-full bg-white w-full mt-3  md:h-28   md:flex shadow-2xl md:w-1/3 lg:w-1/5  rounded ">
              <img className="h-full  " src={imageBus} alt="" />

            </div>







          </div><hr className=" w-full md:w-1/4 h-2 rounded-full mt-3 bg-primary-500" /><div className="flex flex-col  w-full  md:flex md:flex-row  md:justify-between  lg:w-5/6 lg:flex lg:justify-between items-center md:justify-center mt-10">

              <div className=" w-full  flex flex-col items-center justify-center  md:flex flex-col shadow-2xl bg-white rounded md:w-1/3 items-center">
                <div className=" w-full flex-col items-center justify-center">
                  <figure className=" w-1/2 flex-col items-center justify-center ml-20">
                    <img src={profile_admin} alt="" />
                    <figcaption className=" flex justify-center">
                      <p className="text-center ml-20 font-bold mt-3">Nyamiram</p>
                    </figcaption>
                  </figure>
                </div>


                <div className="flex flex-row  w-5/6 items-center ">
                  <figure className="-mt-10">
                    <img src={vector} alt="" />
                  </figure>
                  <div className="flex flex-col mt-5 ml-3 ">
                    <p className="text-sky-500 font-bold">Route information</p>
                    <p>
                      Start: <span>Kn 766 st 4</span>{" "}
                    </p>
                    <p>
                      Finish: <span> Kn 674 st 3</span>
                    </p>
                    <p>
                      Distance: <span> 16 Km</span>{" "}
                    </p>
                    <p>
                      Duration: <span>16 Minutes</span>{" "}
                    </p>

                    <p className="text-sky-500 font-bold mt-3 mb-10">Locate</p>
                  </div>

                </div>


              </div>



              <div className=" h-96 w-full mt-5 shadow-2xl bg-white md:w-3/5  flex justify-center rounded-2xl ">

                <MapContainer center={{ lat: -1.985070, lng: 30.031855 }} zoom={13}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <LocationMarker />
                </MapContainer>


              </div>



            </div></> : <RouteInfoSkeleton /> }
    </div>


   

  


</div>
   
    </DashBoardLayout>
  );
}

export default Routes;
