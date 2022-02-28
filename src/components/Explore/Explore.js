import React from "react";
import map from "../../assets/images/map.jpeg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Explore.css'
import search from '../../assets/svgs/search.svg'

const Explore = () => {
  return (
    <div className="flex flex-col w-full flex-wrap py-20 justify-center items-center">
      <div className="">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-500 font-sans ">Explore</h1>
      </div>

      <div className='w-full justify-center items-center mx-auto'>
        <div className="w-full flex justify-center items-center mx-auto my-10">
          <div className="ph-search flex justify-between items-center w-60 md:w-1/2 px-2.5 h-9 md:h-14">
          <input type='text' className="bg-red-200 w-full h-full bg-transparent outline-none px-2.5" />
         <div><img src={search} /></div>
          </div>
        
        </div>
        <div className="w-full" id="map">
          {/* <img src={map} /> */}
          {/* 1.9567° S, 30.0636° E */}
          <MapContainer center={[-1.985070, 30.031855]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-1.985070, 30.031855]}>
              <Popup>
                Phantom solutions. <br /> Easy movements.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Explore;
