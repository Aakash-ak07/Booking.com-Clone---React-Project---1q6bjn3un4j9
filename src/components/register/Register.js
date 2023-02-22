import React from 'react'
import Navbar from '../navbar/Navbar'
import './register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register({ type }) {
    const navigate = useNavigate();
    const [inpVal, setInpVal] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [confirmName, setConfirmName] = useState({

        email: "",
        password: ""
    });

    console.log(inpVal);
    const [data, setData] = useState([]);

    // logIn validation
    const handelLog = (event) => {
        event.preventDefault();
        const { email, password } = confirmName;
        const getUserDetails = localStorage.getItem("userDetails");
        console.log(getUserDetails);

        if (email === "") {
            alert("email field is required");
        }
        else if (!email.includes("@")) {
            alert("pls enter valid email Id")
        }
        else if (password.length < 7) {
            alert("password length must be atleast 8 digit");
        }
        else {
            if (getUserDetails && getUserDetails.length) {
                const userData = JSON.parse(getUserDetails);

                const userLog = userData.filter((el) => {
                    return el.email === email && el.password === password
                });

                console.log(userLog);
                if (userLog.length === 0) {
                    alert("Invalid Details");
                }
                else {
                    console.log("user login successfully");
                    navigate("/Home")
                }
            }
        }
    }

    // validation during user register
    const handelRegister = (event) => {
        event.preventDefault();
        const { name, email, password } = inpVal;
        console.log(password.length);

        if (name === "") {
            alert("name field is required");
        }
        else if (email === "") {
            alert("email field is required");
        }
        else if (!email.includes("@")) {
            alert("pls enter valid email Id")
        }
        else if (password.length < 7) {

            alert("password length must be atleast 8 digit");
        }
        else {
            alert("signIn successfully");
            localStorage.setItem("userDetails", JSON.stringify([...data, inpVal]));
            navigate("/");
        }
    }

    const getData = (e) => {
        console.log(e.target.value);
        const { value, name } = e.target;
        if (type === "list") {
            setInpVal(() => {
                return {
                    ...inpVal,
                    [name]: value
                }
            })
        }

        if (type !== "list") {
            setConfirmName(() => {
                return {
                    ...confirmName,
                    [name]: value
                }
            })
        }
    }

    return (
        <>
            <Navbar />
            <form>
                <div className='mainContainer'>
                    <div className="middleContainer">
                        {type === "list" ?
                            <h2 className="Heading">SignUp</h2>
                            :
                            <h2 className="Heading">Enter your Email and Password</h2>
                        }
                        {type === "list" ? <div className="childContainer">
                            <label htmlFor="name" className="label">Name:</label>
                            <br />
                            <input type="text" className="inputContainer" id='name' onChange={getData} name="name" required />

                        </div>
                            :
                            <></>
                        }
                        <div className="childContainer">
                            <label htmlFor="log" className="label">Email Id:</label>
                            <br />
                            <input type="email" className="inputContainer" id='log' onChange={getData} name="email" required />
                        </div>
                        <div className="childContainer">
                            <label htmlFor="password" className="label">Password:</label>
                            <br />
                            <input type="password" id='password' onChange={getData} name="password" className="inputContainer" required />
                        </div>
                        {type === "list" ?
                            <div className="childContainer">
                                <button className="btn" onClick={handelRegister}>SignIn</button>
                            </div>
                            :
                            <div className="childContainer">
                                <button className="btn" onClick={handelLog} >LogIn</button>
                            </div>
                        }
                    </div>
                    {type === "list" ? <div className="card text-center" style={{ "width": "18rem" }}>
                        <p>By signing in or creating  an account, you agree with our <span style={{ "color": "blue" }}> Term & Conditions </span> and <span style={{ "color": "blue" }}>Privacy Statement</span></p>
                    </div>
                        :
                        <></>
                    }
                    <div className="card text-center" style={{ "width": "18rem" }}>
                        <p>All rights reserved. Copyright 2023 <span style={{ "color": "blue" }}> BOOKING.COM</span> </p>
                    </div>
                </div>
            </form>
        </>
    )
}
