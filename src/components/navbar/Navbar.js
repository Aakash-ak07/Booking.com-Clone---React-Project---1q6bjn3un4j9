import React from 'react'
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
import logo from "./logo3.png";

export default function Navbar({ type }) {
    const regis = useNavigate();
    const Lgot = useNavigate();
    const lgIn = useNavigate();
    const checkOt = useNavigate();

    const handleCheckOut = () => {
        checkOt("/checkout");
    }

    const handleRegis = () => {
        regis("/register");
    }

    const handleLogIn = () => {
        lgIn("/Login");
    }

    const handleLogout = () => {
        localStorage.clear("userDetails");
        Lgot("/register");
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                {/* <span className="logo">Welcome to BOOKING.COM</span> */}
                <img src={logo} alt='logo' className='logo' />
                <div className="navItems">
                    {type !== "logOut" ? <>
                        <button className="navButton" onClick={handleRegis}>Register</button>
                        <button className="navButton" onClick={handleLogIn}>Login</button>
                    </>
                        :
                        <>
                            <button className="navButton" onClick={handleLogout}>Logout</button>
                            <button className="navButton" onClick={handleCheckOut}>Checkout</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
