import React, { useEffect, useState } from 'react'

import DashBoardLayout from '../../components/dashBoardLayout/DashBoardLayout';
import { Primary, PermissionButton } from '../../components/buttons/Buttons'
import { LebalButton, LebalTextButton } from '../../components/buttons/LebalButton';
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify'
import { OperatorProfile } from '../../components/skeletons/cards/Profile';
import TableSkeleton from '../../components/skeletons/Tables/TableSkeleton';

import userLabel from '../../assets/svgs/lebals/luser.svg';
import lock from '../../assets/svgs/lebals/lock.svg';
import deleteIcon from '../../assets/svgs/delete.svg';
import edit from '../../assets/svgs/edit.svg';
import add from "../../assets/svgs/lebals/savePrevelage.svg";
import more from '../../assets/svgs/more.svg';
import close from '../../assets/svgs/close.svg';
import prev from '../../assets/svgs/prev.svg';
import next from '../../assets/svgs/next.svg';
import { connect, useSelector, useDispatch } from 'react-redux';
import { assignBus, removeBus } from '../../redux/actions/assignBusAction'
import Pagination from '../../components/pagination/Pagination';


const AssignBuses = (props) => {   
    const dispatch = useDispatch()
    const [assignB , setAssignBus] = useState(false);
    const [loading , setLoading] = useState(true);
    const [bus, setBus] = useState('');
    const[plate, setPlate] = useState('')
    const [driverId, setDriverId] = useState("")
    const { assignBus, removeBus } = props
    const [profileInfo, setProfileInfo] = useState("")

    const [currentPage, setCurrentpage] = useState(1)
    const [postsPerPage] = useState(2)

    /* ======== Start:: removing skeleton ======= */ 
        useEffect(() => {
            setTimeout(() => {
                setLoading(false); 
            } , 2000)
            setProfileInfo(drivers[0])
        } , [])       
    /* ======== End:: removing skeleton ======= */ 

    /* ========== Start::  Getting current state ================== */

        const assignedBus = [
            {
                id: 1,
                busName: "HYUNDAI",
                plateNumber: "DFG0001"
            },
            {
                id: 2,
                busName: "BENZ",
                plateNumber: "DFG0002"
            },
            {
                id: 3,
                busName: "TOYOTA",
                plateNumber: "DFG0003"
            }
        ]
        let count = 0
        let driverCounter = 1;
        let busesCounter = 1;
        const drivers = props.drivers;
        const buses = props.drivers.buses;
    /* ============ End::  Getting current state ================== */
    /* ============ Start::  Getting current driver lis ================== */
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = drivers.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = pageNumber => setCurrentpage(pageNumber)
    
    const {
        type: userType,
      } = useSelector((state) => state.user);
        
    const assignModal = (id) => {
        setDriverId(id)
        let newState = !assignB;
        setAssignBus( newState );
    }
    const assignBusSelect = (name) =>{
        let busPlate = name.split('-')
        setBus(busPlate[0])
        setPlate(busPlate[1])
    }
    const assignBusFunc = (e) =>{
        e.preventDefault(); 
      
        /* =================================== Start:: validation ================================ */ 
            if(bus.trim().length == '') return Notify('You need to assign at least on bus to this driver','error') ;

        /* =================================== End:: validation ================================ */ 
        assignBus({driverId, bus, plate})
        setTimeout( () => {
            assignModal();
        },
         1000
        )
        // sendMail()     
        return Notify('Bus assigned successfully','success') ;              
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
                                    Select a Bus
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
                                        {assignedBus.map((buzz) => (
                                            <option key={buzz.id} value={buzz.busName + `-` + buzz.plateNumber} value={buzz.busName + `-` + buzz.plateNumber}>{buzz.busName + `-` + buzz.plateNumber}</option>
                                        ) )}
                                    </select>
                                </div>                
                            </div>
                            <div className="w-full">
                                <Primary name={`Save`} styles='py-2' />
                            </div>
                        </form>
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
                                            List of drivers
                                        </h4>
                                    </div> 
                                    <div className="sub-title">
                                        <h4 className='text-secondary-200  font-bold text-xs' >
                                            Driver
                                        </h4>
                                    </div> 
                                </div>
                                {userType == "admin" ? (
                                    <div className="add-new-record">
                                        <Primary name="New driver" onclick={assignModal} />
                                    </div>
                                ) : (
                                    ""
                                )}
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
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Driver name</th>
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Email</th>
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2 text-center"  >Action</th>                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentPosts.map((driver) => (
                                                <tr 
                                                key={driver.id} onClick={() => setProfileInfo(currentPosts[count++])}
                                                className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    {driver.id}
                                                    </td>
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        <LebalTextButton text='J' type='primary' /> {driver.driverName}
                                                    </td>
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        {driver.email}
                                                    </td>
                                                    <td className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans h-full'> 
                                                        <div className='buttons h-full flex flex-col md:flex md:flex-row'>
                                                            {/* =================== Start:: only admin to see this =================== */}
                                                            {userType == "admin" ? (
                                                                <>
                                                                    <LebalButton type={'primary'} svg={edit} />
                                                                    <LebalButton type={'danger'} svg={deleteIcon} />
                                                                </>
                                                                ) : (
                                                                    ""
                                                                )}
                                                            {/* =================== End:: only admin to see this =================== */}
                                                            
                                                            {driver.assignedBus.map((bus) => 
                                                                (<PermissionButton key={bus.id} type={'danger'} name={bus.busName + '-' + bus.plateNumber}
                                                                onclick={() => assignModal(driver.id) }/>)
                                                            )}
                                                            <PermissionButton type={'success'} svg={add} name={'Assign Bus'}
                                                            onclick={() => assignModal(driver.id) }/>
                                                        </div>
                                                    </td>
                                                 
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <Pagination 
                                            postsPerPage={postsPerPage}
                                            totalPosts={drivers.length}
                                            paginate={paginate}
                                        />          
                                    </>
                                                                      
                                    )
                                }
                               
                            </div>   
                        {/* End:  Driver content */}                 
                    </div>
                </div>
                <div className=" w-full h-min lg:w-4/12 bg-white rounded-md m-2 py-12">
                    <div className="w-full">
                        {/* =================== Start: Driver profile ==== ================ */}
                        { loading &&( <OperatorProfile />  ) }                       
                        { !loading &&( 
                            <div className=" flex flex-col items-center justify-center">
                                <div className="profile ">
                                    <div className="  border border-primary-600 w-16 h-16 rounded-full flex items-center justify-center bg-primary-100">
                                        <p className='text-primary-600 text-xl font-sans font-bold' >
                                            j
                                        </p>
                                    </div>
                                </div>    
                                <div className="mt-6">
                                    <div className="profiler-name">
                                        <p className=' text-xs font-semibold font-sans md:text-sm text-secondary-300'> {profileInfo.driverName}</p>                                    
                                    </div>
                                </div>   
                                <div className="driver-info w-full flex justify-between mt-4  px-6">
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
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>{profileInfo.telephone}</p>
                                        </div> 
                                        <div className="flex flex-wrap">
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>{profileInfo.email}</p>
                                        </div>                                       
                                    </div>
                                </div>
                                
                                <div className="driver-info w-full flex justify-between mt-4  px-6">
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
                        )}
                            
                        {/* ===================== End: Driver profile ==== ================ */}
                    </div>               
                </div>         
            </DashBoardLayout>
        {/* =========================== End:: Dashboard =============================== */}                    
        </>
    );
}
const mapStateToProps = (state) => {
    return ({
        drivers: state.driverBusAssignment,
        buses: state.buses
    })
}
export default connect(mapStateToProps, {assignBus, removeBus})(AssignBuses)