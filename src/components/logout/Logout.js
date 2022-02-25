import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import SkeletonUpdate from '../skeletons/SkeletonUpdate';
import TextField from '../fields/TextField';
import SkeletonLogout from '../skeletons/SkeletonLogout';
import profileEdit from '../svgs/profile.svg'
import info from '../svgs/info.svg'
import priveleges from "../svgs/priveleges.svg"
import locate from "../svgs/locate.svg"
import setrole from "../svgs/setrole.svg"

const Logout = () => {

    const [profile, setProfile] = useState(null);

    // runs automatically after initial render
    useEffect(() => {
      setTimeout( async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json();
        setProfile(data);
      }, 3000)
    }, [])
  
    return ( 

        <div className="flex flex-col md:flex md:flex-row md:pl-10">
            {profile && (<div className="border border-slate-200 h-full w-full md:h-full md:w-5/6 md:border md:border-slate-200 md:rounded-md md:h-full md:w-2/5 md:mt-10 md:mr-10">
                <section className="flex items-center justify-center">
                    <img className="rounded-full w-1/6 h-1/6 mt-5 hover:opacity-75" src="https://i.picsum.photos/id/188/200/200.jpg?hmac=TipFoTVq-8WOmIswCmTNEcphuYngcdkCBi4YR7Hv6Cw" alt="image" />
                    <img src={profileEdit} className="mt-20 -ml-4" alt="profile" />
                </section>
                <section className="pl-3 pr-3 mt-5">
                    <TextField/>
                </section>
            </div>)}
            {profile && (<div className="border border-slate-200 h-full w-full md:h-full md:w-5/6 mt-0 md:border md:border-slate-200 md:rounded-md md:h-full md:w-1/2 md:mt-10 md:ml-10 md:mr-10">
                <section className="flex items-center justify-center">
                    <img className="rounded-full w-1/5 h-1/5 md:w-1/5 md:h-1/5 mt-2 md:mt-5" src="https://i.picsum.photos/id/188/200/200.jpg?hmac=TipFoTVq-8WOmIswCmTNEcphuYngcdkCBi4YR7Hv6Cw" alt="image" />
                </section>
                <section className="flex flex-col pl-10 pr-10">
                    <span className="flex text-black mt-5 justify-center text-md md:text-2xl mb-5">John Doe</span>
                    <div className="flex flex-row">
                        <div className="mt-5 mr-5">
                            <img src={info} alt="user info" className="w-7 md:w-12"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-blue-400/100 mt-4 text-md md:text-2xl font-sans">User information</span>
                            <span className="text-black mt-1 text-sm md:text-lg">079*****</span>
                            <span className="text-black mt-1 text-sm md:text-lg">Johndoe@email.com</span>
                        </div>
                    </div>
                     
                    <div className="flex flex-row">
                        <div className="mt-5 mr-5">
                            <img src={priveleges} alt="Priveleges" className="w-7 md:w-12"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-blue-400/100 mt-4 text-md md:text-2xl">Previleges</span>
                            <div className="flex flex-row">
                                <span className="text-black mt-1 text-sm md:text-md">Locate bus</span>
                                <img src={locate} alt="Locate bus" className="w-3 h-3 mt-1 ml-9 md:w-4 md:h-5 md:mt-1 md:ml-10"/>
                            </div>
                            <div className="flex flex-row">
                                <span className="text-black mt-1 text-sm md:text-md">Update profile</span>
                                <img src={locate} alt="Update profile" className="w-3 h-3 mt-1 ml-3 md:w-4 md:h-5 md:mt-1 md:ml-4"/>
                            </div>
                            <div className="flex flex-row">
                                <span className="text-black mt-1 text-sm md:text-md">Set new role</span>
                                <img src={setrole} alt="Set new Role" className="w-3 h-3 mt-2 ml-6 md:w-4 md:h-5 md:mt-1 md:ml-6"/>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="flex items-center justify-center rounded-md bg-sky-800 text-white h-8 md:h-11 w-full mt-3 md:mt-5 mb-2 md:mb-4 hover:bg-white hover:text-black border hover:border-slate-200">Logout from this account</Link>
                </section>
            </div>)}
            {!profile && [1].map((n) => <SkeletonUpdate key={n} />)}
            {!profile && [1].map((n) => <SkeletonLogout key={n} />)} 
        </div>
     );
}
 
export default Logout;