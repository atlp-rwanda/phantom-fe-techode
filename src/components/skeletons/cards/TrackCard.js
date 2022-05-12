import { Icon } from "@iconify/react";
import React  from "react"

let view = [];

const renderSkeleton = () => {
    for (let index = 0; index < 6; index++) {
        view.push(
            <div className="w-full sm:w-3/12 md:w-4/12 lg:w-3/12 2xl:w-2/12 z-20">           
                <div className="text-white font-sans font-semibold p-2" >
                    <div className="w-full skeleton-box h-32 bg-gray-200 rounded-md">
                        <div className="route-info flex flex-wrap">
                            <div className="icon py-4 w-4/12">
                                <div className="w-full flex items-center justify-center">
                                    <div className="h-12 w-12 rounded-full skeleton-box bg-gray-300 flex items-center justify-center">                                   
                                    </div>                        
                                </div>
                            </div>
                            <div className="information py-4 w-8/12">
                                <div className="heading">
                                    <div className='flex items-center' >
                                        <div className='p-1  h-1 w-1 rounded-full mr-1 skeleton-box bg-gray-300' ></div> 
                                        <span className="skeleton-box bg-gray-300 w-20 p-2" > </span> 
                                    </div>
                                </div>
                                <div className="body mt-2">
                                    <div className="flex items-center">
                                        <span className="iconify text-gray-300 mr-1" data-icon="fa-solid:route"></span>
                                        <span className='mr-2 skeleton-box bg-gray-300 p-1' ></span>
                                        <span className="skeleton-box bg-gray-300 w-20 p-2"></span>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                        <div className="expand h-full skeleton-box bg-gray-300 rounded-b-md flex flex-wrap items-center cursor-pointer">
                            <div className="w-4/12 text-center font-sans" >
                                <span>
                                </span>
                            </div>                       
                        </div>
                    </div>               
                </div> 
            </div>
        )
    }
}

const TrackCard = () =>{
    renderSkeleton()    
    return(         
        view.map( (skeleton , index) => <skeleton key={index+7} /> )        
    )
}

export default TrackCard;