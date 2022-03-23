import React from "react";
export const Profile = () => {
    return ( 
        <>
            <div className=" flex flex-col items-center justify-center ">
                <div className="profile ">
                    <div className=" skeleton-box  border w-20 h-20 rounded-full flex items-center justify-center ">
                        <p className='text-secondary-100 text-xl font-sans font-bold' >   
                            A                         
                        </p>
                    </div>
                </div>    
                <div className="mt-6">
                    <div className="profiler-name ">
                        <p className=' text-xs font-semibold font-sans md:text-sm text-secondary-300 skeleton-box w-44 h-3 p-1 '> </p>                                    
                    </div>
                </div>   
                <div className="Operator-info w-full flex justify-between mt-4  px-6">
                <div className="w-5/6">
                        <div className="title flex flex-row justify-between font-sans " >
                            <p className='skeleton-box w-20 h-4 p-1 0 font-semibold mb-2 text-sm  ml-10' ></p>
                            <p className='skeleton-box w-32 h-4 text-secondary-200 font-semibold text-xs'></p>
                        </div>                                     
                    </div>
                </div>
                <div className="Operator-info w-full flex justify-between mt-4  px-6">
                <div className="w-5/6">
                        <div className="title flex flex-row justify-between font-sans " >
                            <p className='skeleton-box w-20 h-4 p-1 0 font-semibold mb-2 text-sm  ml-10' ></p>
                            <p className='skeleton-box w-32 h-4 text-secondary-200 font-semibold text-xs'></p>
                        </div>                                     
                    </div>
                </div>
                <div className="Operator-info w-full flex justify-between mt-4  px-6">
                <div className="w-5/6">
                        <div className="title flex flex-row justify-between font-sans " >
                            <p className='skeleton-box w-20 h-4 p-1 0 font-semibold mb-2 text-sm  ml-10' ></p>
                            <p className='skeleton-box w-32 h-4 text-secondary-200 font-semibold text-xs'></p>
                        </div>                                     
                    </div>
                </div>               
            </div>    
        </>
     );
}

export default Profile;