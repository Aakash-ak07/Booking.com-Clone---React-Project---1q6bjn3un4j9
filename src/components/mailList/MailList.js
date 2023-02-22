import React from 'react'
import './mailList.css';
import { useState } from 'react';

export default function MailList() {
  const [inpVal, setInpVal] = useState({
    email: "",
  });

  const handleSubscripation = () => {
    const { email } = inpVal;
    if (email === "") {
      alert("field can't be empty");
    }
    else if (!email.includes("@")) {
      alert("Please Enter Valid Details");
    }
    else {
      alert("Subscribe Successfully");
    }
  }

  const handleChange = (e) => {
    // e.target.value;
    const { value, name } = e.target;
    setInpVal(() => {
      return {
        inpVal,
        [name]: value
      }
    })
  }

  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder=" Type Your Email Here and get Latest Notification" onChange={handleChange} name='email' />
        <button onClick={handleSubscripation}>Subscribe</button>
      </div>
    </div>
  )
}
