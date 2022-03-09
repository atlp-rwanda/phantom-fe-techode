import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Explore.css'
import search from '../../assets/svgs/search.svg'
import {Map} from '../skeletons/Map/Map'

const Explore = () => {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 5000)

  return (
    <div id="explore" className="flex flex-col w-full flex-wrap py-20 justify-center items-center">
      <div className="">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-600 font-sans ">Explore</h1>
      </div>

      <div className='w-full justify-center items-center mx-auto'>
        <div className="w-full flex justify-center items-center mx-auto my-10">
          <div className="ph-search flex justify-between items-center w-60 md:w-1/2 px-2.5 h-9 md:h-14 border-2 border-gray-200">
          <input type='text' className="w-full h-full bg-transparent outline-none px-2.5" />
         <div><img src={search} /></div>
          </div>
        
        </div>
        <div className="w-full min-h-full" id="map">
          {isLoading && <Map />}
          {!isLoading && <MapContainer center={[-1.985070, 30.031855]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-1.985070, 30.031855]}>
              <Popup>
                Phantom solutions. <br /> Easy movements.
              </Popup>
            </Marker>
          </MapContainer>}
          
        </div>
      </div>
    </div>
  );
};

export default Explore;