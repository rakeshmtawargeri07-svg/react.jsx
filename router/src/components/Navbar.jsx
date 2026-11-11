import React from 'react'
import  Dashboard from "./components/Dashboard";
import HomePage from './components/HomePage.jsx';
import About from './components/About';
import { Link } from 'react-router-dom';

const Navbar = () => {
return (
    <div>
        <ul>
            <li>
                <Link to='/' className={(isActive) => isActive ? "active-link":""}>Home</Link>
            </li>
            <li>
                <Link to='/about' className={(isActive) => isActive ? "active-link":""}>About</Link>
            </li>
            <li>
                <Link to='/dashboard' className={(isActive) => isActive ? "active-link":""}>Dashboard</Link>
            </li>

        </ul>
    
    </div>
)
}

export default Navbar

