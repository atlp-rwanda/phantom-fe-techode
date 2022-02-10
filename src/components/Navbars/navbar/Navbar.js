import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (  
        <div>
            <div id='log'>Phantom</div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;
