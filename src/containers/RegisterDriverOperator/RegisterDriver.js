import React, { useEffect, useState } from 'react'
import DashBoardLayout from '../../components/dashBoardLayout/DashBoardLayout';
import { InfoButton, Primary } from '../../components/buttons/Buttons.js'
import { LebalButton, LebalTextButton } from '../../components/buttons/LebalButton.js';
import { ToastContainer } from 'react-toastify';
import Notify from '../../functions/Notify'
import { Profile } from '../../components/skeletons/cards/Profile';
import TableSkeleton from '../../components/skeletons/Tables/TableSkeleton';

import userLabel from '../../assets/svgs/lebals/luser.svg';
import lock from '../../assets/svgs/lebals/lock.svg';
import privelege from '../../assets/svgs/lebals/savePrevelage.svg';
import deletePrivelegeIcon from '../../assets/svgs/lebals/deletePrevelage.svg';
import deleteIcon from '../../assets/svgs/delete.svg';
import edit from '../../assets/svgs/edit.svg';
import more from '../../assets/svgs/more.svg';
import close from '../../assets/svgs/close.svg';
import drop from '../../assets/svgs/drop.svg';
import prev from '../../assets/svgs/prev.svg';
import next from '../../assets/svgs/next.svg';
import { connect, useSelector } from 'react-redux';
import { API as axios } from '../../api/index.js';

import { update,fetchUsers } from '../../redux/actions/userActions'
import Pagination from '../../components/pagination/Pagination';

const RegisterDriver = (props) => {   
    const { users, fetchUsers } = props
    const [addDriver , setAddDriver] = useState(false);
    const [deleteDriver , setDeleteDriver] = useState(false)
    const [loading , setLoading] = useState(true);
    const [firstname , setFirsname] = useState('');
    const [lastname , setLastname] = useState('');
    const [username , setUsername] = useState('');
    const [telephone , setTelephone ] = useState('');
    const [email , setEmail] = useState('');
    const [first, setFirst] = useState('');
    const[fullname, setFullname] = useState('');
    const [id, setId] = useState(null);
    const [updateDriver , setUpdateDriver] = useState(false);
    const [currentPage, setCurrentpage] = useState(1)
    const [postsPerPage] = useState(10)

    const getUsers = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`/users`);
          const { data } = response.data;
          const drivers = data.users.filter((driver) => {
             
          if(driver.isDeleted === false &&  driver.userType.toLowerCase() === "driver"){
                  return driver
              }
            })
          await fetchUsers(drivers)
          setLoading(false);
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

      const removeDriver = async () => {
        setLoading(true);
        try{
            await axios.delete(`/users/${id}`);
            setLoading(false)
            setTimeout(() => {
                removeDeleteModel()
            }, 1000)
            getUsers()
          } catch(e) {
            setLoading(false);
            Notify(`${e.response.data.message}`, "error");
          }   
      }

    /* ======== Start:: removing skeleton ======= */ 
        useEffect(async () => {
            await getUsers()
            setLoading(false); 
        } , [])       
    /* ======== End:: removing skeleton ======= */ 
    const {
        type: userType,
      } = useSelector((state) => state.user);
    let driverCounter = 1
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentpage(pageNumber)
    
    const removeModel = () => {
        let newState = !addDriver;
        setAddDriver( newState );
        
    }
    const removeUpdateModel = (id) => {
        const singleUser = users.filter(user => user.id === id)
        singleUser.map(user => {
            let fname = user.fullname.split(' ')[0];
            let lname = user.fullname.split(' ')[1];
            setFirsname(fname)
            setLastname(lname)
            setUsername(user.username)
            setTelephone(user.telephone)
            setEmail(user.email)
        })
        setId(id)
        let newState = !updateDriver;
        setUpdateDriver( newState );
    }
    const removeMore = (id) => {
        const singleUser = users.filter(user => user.id === id)
        singleUser.map(user => {
            let f = user.fullname.charAt(0).toUpperCase()
            setFullname(user.fullname)
            setFirst(f)
            setTelephone(user.telephone)
            setEmail(user.email)
        })
    }
    const removeDeleteModel = (id) => {
        setId(id)
        let newState = !deleteDriver;
        setDeleteDriver( newState );
        const singleUser = users.filter(user => user.id === id)
        singleUser.map(user => {
            setFullname(user.fullname)
        })
    }

    

    const registerDriver = async (e) =>{
        e.preventDefault(); 
      
        /* =================================== Start:: validation ================================ */ 
            if(firstname.trim().length == '') return Notify('First name field should not be empty', 'error' ) ;
            if(lastname.trim().length == '') return Notify('Last name field should not be empty', 'error' ) ;
            if(telephone.trim().length == '') return Notify('Please provide Telphone number', 'error' ) ;
            if(email.trim().length == '') return Notify('Email field required', 'error') ;
            if(username.trim().length == '') return Notify('Username field should not be empty','error') ;

            let isValidEmail = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
            if(isValidEmail) return Notify('Invalid email address', 'error' ) ;
        /* =================================== End:: validation ================================ */ 
        try {
            await axios.post(`/users`, {
                firstname,
                lastname,
                username,
                telephone,
                userType: "driver",
                email
            });
            
            setFirsname('');
            setLastname('');
            setUsername('');
            setTelephone('');
            setEmail('');

            setTimeout( () => {
                removeModel();
            },
             1000
            )
            getUsers()
            return Notify('New driver have been added','success');
        } catch(error) {
            console.log(error)
            const errors = error.response.data.message || error.message;
            Notify(errors, 'error')
        }
              
    }
    const updateDriverFunc = async (e) =>{
        e.preventDefault(); 
        
        /* =================================== Start:: validation ================================ */ 
            if(firstname.trim().length == '') return Notify('First name field should not be empty', 'error' ) ;
            if(lastname.trim().length == '') return Notify('Last name field should not be empty', 'error' ) ;
            if(telephone.trim().length == '') return Notify('Please provide Telphone number', 'error' ) ;
            if(email.trim().length == '') return Notify('Email field required', 'error') ;
            if(username.trim().length == '') return Notify('Username field should not be empty','error') ;

            let isValidEmail = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
            if(isValidEmail) return Notify('Invalid email address', 'error' ) ;
        /* =================================== End:: validation ================================ */ 
        try {
            await axios.put(`/users/${id}`, {
                firstname,
                lastname,
                username,
                telephone,
                email
            });
            
            setFirsname('');
            setLastname('');
            setUsername('');
            setTelephone('');
            setEmail('');

            setTimeout( () => {
                removeUpdateModel();
            },
            1000
            )
            getUsers()
            return Notify('New driver have been updated','success');
        } catch(error) {
            console.log(error)
            const errors = error.response.data.message || error.message;
            Notify(errors, 'error')
        }
              
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
            <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${ addDriver === true ? 'block' : 'hidden' }`}> 
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <h3 className='font-bold text-sm text-center w-11/12' >
                            Adding new driver
                        </h3>
                        <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => removeModel() } >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => registerDriver(e)} action="/drivers" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="firstname" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="First name" value={ firstname } onChange={ e => setFirsname(e.target.value) } />                                   
                                </div>                
                            </div>  
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="lastname" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" value={ lastname } placeholder="Last name" onChange={ e => setLastname(e.target.value) }  />
                                </div>                
                            </div>  
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="username" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" value={ username } placeholder="User name" onChange={ e => setUsername(e.target.value) }  />
                                </div>                
                            </div> 
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="email" name="email" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Email" value={email} onChange={ e => setEmail(e.target.value) } />                                   
                                </div>                
                            </div>   
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="telphone" name="tel" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Telephone" value={telephone} onChange={ e => setTelephone(e.target.value) } />                                   
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
        {/* =========================== Start:: Update Model =============================== */}        
        <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${ updateDriver === true ? 'block' : 'hidden' }`}>
                <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
                    <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                        <h3 className='font-bold text-sm text-center w-11/12' >
                            Update driver
                        </h3>
                        <div className="close-icon w-1/12 cursor-pointer float-right" onClick={() => removeUpdateModel() } >
                            <img src={close} alt="Phantom" className='float-right' />
                        </div>
                        <hr className=' bg-secondary-150 border my-3 w-full' />
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => updateDriverFunc(e)} action="/drivers" className=' sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12' >
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="firstname" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="First name" value={ firstname } onChange={ e => setFirsname(e.target.value) } />                                   
                                </div>                
                            </div>  
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="lastname" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" value={ lastname } placeholder="Last name" onChange={ e => setLastname(e.target.value) }  />
                                </div>                
                            </div>  
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="text" name="username" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" value={ username } placeholder="User name" onChange={ e => setUsername(e.target.value) }  />
                                </div>                
                            </div> 
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="email" name="email" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Email" value={email} onChange={ e => setEmail(e.target.value) } disabled/>                                   
                                </div>                
                            </div>   
                            <div className="input my-3 h-9 "> 
                                <div className="grouped-input bg-secondary-40 flex items-center  h-full w-full rounded-md">
                                    <input type="telphone" name="tel" className=" bg-transparent border-0 outline-none px-5 font-sans text-xs text-secondary-50 h-5 w-4/5" placeholder="Telephone" value={telephone} onChange={ e => setTelephone(e.target.value) } />                                   
                                </div>                
                            </div>  
                            
                            <div className="w-full">
                                <Primary name={`Update`} styles='py-2' />
                            </div>
                        </form>
                    </div>
                </div>           
            </div>
        {/* =========================== Start:: Update Model =============================== */} 
        <div className={`h-screen w-screen bg-modelColor absolute flex items-center justify-center px-4 ${
                deleteDriver === true ? "block" : "hidden"
                }`}
                >        
            <div className="bg-white w-full  mp:w-8/12  md:w-6/12  xl:w-4/12 2xl:w-3/12 rounded-lg p-4 pb-8">
            <div className="card-title w-full text-mainColor flex  flex-wrap justify-center items-center  ">
                <h3 className="font-bold text-sm text-center w-11/12 text-danger-500">
                Removing Driver
                </h3>
                <hr className=" bg-secondary-150 border my-3 w-full" />
            </div>
            <div className="card-body">
                <h2 className="md:ml-12 text-secondary-500 mt-3 mb-6 text-xs md:text-sm">
                Are you sure you want to Delete this Driver   <span className="text-mainColor">{fullname}</span>
                </h2>
                <div
                className=" sp:px-8 mp:px-5 sm:px-10  md:px-8 lg:px-12"
                >
                <div className="w-full flex justify-between">
                    <InfoButton
                    name={`Cancel`}
                    onclick={(e) => setDeleteDriver(false)}
                    styles="py-2 md:w-1/3 w-1/2 bg-primary-200 hover:bg-primary-100 text-primary-500"
                    />
                    <Primary onclick={() =>{
                    removeDriver()
                    }} name={`Remove`} styles="bg-danger-200 hover:bg-danger-100 py-2 text-danger-500 md:w-1/3 w-1/2" />
                </div>
                </div>
            </div>
        </div>
        </div>
        {/* =========================== End:: DElete Modal =============================== */}  
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
                                        <Primary name="New driver" onclick={removeModel} />
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
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Phone</th>
                                                    <th className="text-xs  md:text-md md:font-bold text-mainColor font-sans pt-6 pb-2"  >Action</th>                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentUsers.map((user) => (
                                                <tr key={driverCounter} className="h-16 text-right border-b border-b-secondary-100 cursor-pointer hover:bg-gray-100">
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        {driverCounter++}
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    {user.fullname}
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                        {user.telephone}
                                                    </td>
                                                    <td  className='text-secondary-200 font-sans text-xs text-center md:text-sm md:font-sans'>
                                                    {/* =================== Start:: only admin to see this =================== */}
                                                      {userType == 'admin' ? (
                                                          <>
                                                               <LebalButton type={'primary'} svg={edit} onclick={() => {removeUpdateModel(user.id)}}/>
                                                               <LebalButton type={'danger'} svg={deleteIcon} onclick={() => {removeDeleteModel(user.id)}}/>
                                                          </>
                                                        ) : (
                                                            ""
                                                        )}
                                                    {/* =================== End:: only admin to see this =================== */}
                                                        <LebalButton type={'info'} svg={more} onclick={() => {removeMore(user.id)}}/>
                                                    </td>
                                                 
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <Pagination 
                                            postsPerPage={postsPerPage}
                                            totalPosts={users.length}
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
                        { loading &&( <Profile />  ) }                       
                        { !loading &&( 
                            <div className=" flex flex-col items-center justify-center">
                                <div className="profile ">
                                    <div className="  border border-primary-600 w-16 h-16 rounded-full flex items-center justify-center bg-primary-100">
                                        <p className='text-primary-600 text-xl font-sans font-bold' >
                                            {first || 'X'}
                                        </p>
                                    </div>
                                </div>    
                                <div className="mt-6">
                                    <div className="profiler-name">
                                        <p className=' text-xs font-semibold font-sans md:text-sm text-secondary-300'>{fullname || 'xxxxxxxxxxxxxxxx'}</p>                                    
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
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>{telephone || '070000000'}</p>
                                        </div> 
                                        <div className="flex flex-wrap">
                                            <p className='text-secondary-200 font-semibold text-xs  w-full'>{email || 'email@example.com'}</p>
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
                                            <p className='text-primary-600 font-semibold mb-2 text-sm w-3/4 ' >Privileges</p>
                                        </div>   
                                        <div className="flex flex-wrap">
                                            <p className='text-secondary-200 font-semibold text-xs md:text-sm w-3/4 mb-2'>Driver</p>
                                            <div className="w-1/4">
                                                {userType == "admin" ? (
                                                    <img src={deletePrivelegeIcon} alt="phantom"  className="hidden"/>
                                                ) : (
                                                    ""
                                                )}                                                   
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
const mapToState = (state) => {
    return {
      user: state.user,
      users: state.users
    }
   }
 
export default connect(mapToState, {fetchUsers})(RegisterDriver);