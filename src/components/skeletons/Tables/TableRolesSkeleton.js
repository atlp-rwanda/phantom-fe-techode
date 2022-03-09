import React from "react";

const TableRolesSkeleton = () => {
    return ( 
        <>
            <table className="min-w-full border-collapse border-0"  >
                <thead>
                    <tr className="border-b border-b-secondary-100" >
                        <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2  w-1/12"  >
                            <span className=" skeleton-box w-11/12 p-1 md:p-2 mt-2" > </span>
                        </th>
                        <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2  w-4/12"  >
                            <span className=" skeleton-box w-11/12 p-1 md:p-2 mt-2" > </span>
                        </th>
                        <th className="text-xs  md:text-md md:font-bold text-mainColor  font-sans pt-6 pb-2 w-4/12"  >
                            <span className=" skeleton-box w-8/12 p-1 md:p-2 mt-2" > </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                            <span className=" skeleton-box p-2" > </span>
                        </td>
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                            <span className=" skeleton-box w-10/12 p-2 mt-2" > </span>
                        </td>
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans w-full'>
                            
                            <span className=" skeleton-box w-1/4 rounded-sm p-1 sm:p-2 md:p-3 mr-3" > </span>
                            <span className=" skeleton-box w-1/4 rounded-sm p-1 sm:p-2 md:p-3 mr-12" > </span>
                            <span className=" skeleton-box w-1/8 rounded-sm p-1 sm:p-2 md:p-3 mr-3" > </span>
                        </td>
                    </tr>
                    <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                            <span className=" skeleton-box p-2" > </span>
                        </td>
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                            <span className=" skeleton-box w-10/12 p-2 mt-2" > </span>
                        </td>
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans w-full'>
                            
                            <span className=" skeleton-box w-1/4 rounded-sm p-1 sm:p-2 md:p-3 mr-3" > </span>
                            <span className=" skeleton-box w-1/4 rounded-sm p-1 sm:p-2 md:p-3 mr-12" > </span>
                            <span className=" skeleton-box w-1/8 rounded-sm p-1 sm:p-2 md:p-3 mr-3" > </span>
                        </td>
                    </tr>
                    <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                            <span className=" skeleton-box p-2" > </span>
                        </td>
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                            <span className=" skeleton-box w-10/12 p-2 mt-2" > </span>
                        </td>
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans w-full'>
                            
                            <span className=" skeleton-box w-1/4 rounded-sm p-1 sm:p-2 md:p-3 mr-3" > </span>
                            <span className=" skeleton-box w-1/4 rounded-sm p-1 sm:p-2 md:p-3 mr-12" > </span>
                            <span className=" skeleton-box w-1/8 rounded-sm p-1 sm:p-2 md:p-3 mr-3" > </span>
                        </td>
                    </tr>
                    <tr className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                            <span className=" skeleton-box p-2" > </span>
                        </td>
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                            <span className=" skeleton-box w-10/12 p-2 mt-2" > </span>
                        </td>
                        <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans w-full'>
                            
                            <span className=" skeleton-box w-1/4 rounded-sm p-1 sm:p-2 md:p-3 mr-3" > </span>
                            <span className=" skeleton-box w-1/4 rounded-sm p-1 sm:p-2 md:p-3 mr-12" > </span>
                            <span className=" skeleton-box w-1/8 rounded-sm p-1 sm:p-2 md:p-3 mr-3" > </span>
                        </td>
                    </tr>
                </tbody>
            </table>    
        </>        
     );
}
 
export default TableRolesSkeleton;