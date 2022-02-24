import React, { useState } from 'react'
import DashBoardLayout from '../../components/dashBoardLayout/DashBoardLayout';
import { TempTable } from '../../components/Table/Table';
import { Primary } from '../../components/buttons/Buttons'
import userLabel from '../../assets/svgs/lebals/luser.svg';
import lock from '../../assets/svgs/lebals/lock.svg';
import privelege from '../../assets/svgs/lebals/savePrevelage.svg';

const RegisterOperator = () => {   
    const columns = [
        {
            Header: "#",
            accessor: "id"
        },
        {
            Header: "Operator name",
            accessor: "Operatorname"
        },
        {
            Header: "Phone",
            accessor: "Telephone"
        }
    
    ];
    const data = [
        {
            "id" : '1',
            "Operatorname" : 'Chris', 
            "Telephone" : 'Jean', 
            
        },
        {
            "id" : '2',
            "Operatorname" : 'Chris', 
            "Telephone" : 'Jean',             
        }
    ];
    return (
        <DashBoardLayout>
            <div className="w-full h-min  lg:w-7/12 bg-white rounded-md p-4 m-2">
                <div className="w-full">
                    {/* Start: registering Operator content */}
                        <div className="card-header flex items-center justify-between">                        
                            <div className="card-title">
                                <div className="title mb-3">
                                    <h4 className=' text-primary-500 font-bold text-xs md:text-base' >
                                        List of operators
                                    </h4>
                                </div> 
                                <div className="sub-title">
                                    <h4 className='text-secondary-200  font-bold text-xs' >
                                        Operators
                                    </h4>
                                </div> 
                            </div>
                            <div className="add-new-record">
                                <Primary name="New Operator" />
                            </div>
                        </div>
                        <div className="mt-3 mb-10">
                            <TempTable columns={columns} datas={data} />
                        </div>   
                    {/* End: registering Operator content */}                 
                </div>
            </div>
            <div className=" w-full h-min lg:w-4/12 bg-white rounded-md m-2 py-4">
                <div className="w-full">
                    {/* Start: Operator profile */}
                        <div className=" flex flex-col items-center justify-center ">
                            <div className="profile ">
                                <div className="  border border-primary-600 w-16 h-16 rounded-full flex items-center justify-center bg-primary-100">
                                    <p className='text-primary-600 text-xl font-sans font-bold' >
                                        j
                                    </p>
                                </div>
                            </div>    
                            <div className="mt-6">
                                <div className="profiler-name">
                                    <p className=' text-xs font-semibold font-sans md:text-sm text-secondary-300'> Sezerano J Chrysostome</p>                                    
                                </div>
                            </div>   
                            <div className="Operator-info w-full flex justify-between mt-4  px-6">
                                <div className="w-1/6 ">
                                    <button className='p-2 md:p-3 border border-primary-600 rounded-md  bg-primary-100' >
                                        <img src={userLabel} alt="Phantom" />                                                                        
                                    </button>
                                </div>
                                <div className="w-5/6">
                                    <div className="title flex flex-wrap font-sans " >
                                        <p className='text-primary-600 font-semibold mb-2 text-sm w-full ' >User information</p>
                                    </div>   
                                    <div className="flex flex-wrap">
                                        <p className='text-secondary-200 font-semibold text-xs  w-full'>250700000000</p>
                                    </div> 
                                    <div className="flex flex-wrap">
                                        <p className='text-secondary-200 font-semibold text-xs  w-full'>email@site.net</p>
                                    </div>                                       
                                </div>
                            </div>
                            <div className="Operator-info w-full flex justify-between mt-4  px-6">
                                <div className="w-1/6 ">
                                    <button className='p-2 md:p-3 border border-primary-600 rounded-md  bg-primary-100' >
                                        <img src={lock} alt="Phantom" />                                                                        
                                    </button>
                                </div>
                                <div className="w-5/6">
                                    <div className="title flex flex-wrap font-sans " >
                                        <p className='text-primary-600 font-semibold mb-2 text-sm w-3/4 ' >Privileges</p>
                                    </div>   
                                    <div className="flex flex-wrap">
                                        <p className='text-secondary-200 font-semibold text-xs md:text-sm w-3/4 mb-2'>Operator</p>
                                    </div> 
                                    <div className="flex flex-wrap">
                                        <p className='font-semibold text-xs  w-2/4 text-success-500 '>Add new privilege</p>
                                        <div className='w-1/3' >                                          
                                            <img src={privelege} alt="Phantom" />                                           
                                        </div>
                                    </div>                                       
                                </div>
                            </div>
                            <div className="Operator-info w-full flex justify-between mt-4  px-6">
                                <div className="w-1/6 ">
                                    <button className='p-2 md:p-3 border border-primary-600 rounded-md  bg-primary-100' >
                                        <img src={lock} alt="Phantom" />                                                                        
                                    </button>
                                </div>
                                <div className="w-5/6">
                                    <div className="title flex flex-wrap font-sans " >
                                        <p className='text-primary-600 font-semibold mb-2 text-sm w-3/4 ' >Route code</p>
                                    </div>   
                                    <div className="flex flex-wrap">
                                        <p className='text-secondary-200 font-semibold text-xs mb-2 w-3/4'>Downtown - Nyamirambo 401</p>
                                    </div> 
                                    <div className="flex flex-wrap">
                                        <p className='font-semibold text-xs  w-3/4 text-success-500 text '>Downtown - Nyamirambo 401</p>
                                        <div className='w-1' >                                          
                                            <div className="bg-success-600 p-1 w-full h-1 rounded-full"></div>                                        
                                        </div>
                                    </div>                                       
                                </div>
                            </div>
                        </div>    
                    {/* Start: Operator Profile */}
                </div>               
            </div>         
        </DashBoardLayout>                   
    );
}
 
export default RegisterOperator;