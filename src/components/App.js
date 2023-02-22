import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './list/List';
import Hotel from './hotel/Hotel';
import Register from './register/Register';
import LogIn from './login/LogIn';
import CheckOut from './checkout/CheckOut';
import Flight from './flight/Flight';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register type="list" />}></Route>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotel_id" element={<Hotel />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/flight" element={<Flight />}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
