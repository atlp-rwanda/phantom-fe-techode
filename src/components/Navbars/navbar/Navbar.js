import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (  
        <div className='flex items-center justify-around bg-slate-200 p-4' >
            <div id='log' className='text-3xl font-bold text-blue-500 font-sans ' >Phantom</div>
            <div>
                <ul>
                    <li><Link to="/" className='text-blue-500 font-semibold' >Home</Link></li>
                    <li><Link to="/logout" className='text-blue-500 font-semibold' >Logout</Link></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;
