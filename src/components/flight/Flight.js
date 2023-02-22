import { useState, useEffect  } from "react";
import './flight.css';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faPlane
} from "@fortawesome/free-solid-svg-icons";
import MailList from '../mailList/MailList';
// import Footer from '../footer/Footer';


export default function Flight(setDestination) {

    const [timeFlight, setTimeFlight] = useState("none");
    const [initialFlight, setinitialFlight] = useState("block");
    const [time, setTime] = useState(10);


    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("userDetails")) {
            navigate("/register");
        }
    });

    const handelFlight = () => {

        setTimeFlight("block");
        setinitialFlight("none");

    }

    const handelTime = (event) => {
        setTime(event.target.value);
    }

    return (
        <div className="firstMain">
            <Navbar type="logOut" />
            <Header type="list" />
            <div className="mainFlight">
                <div className="headContaint ">
                    <h2 className="headindText ">Compare and book flights with ease</h2>
                    <h4 className="headindText ">Discover your next dream destination</h4>
                </div>
                <div className="btnContainer">
                    <div className="form-check mx-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Round-trip
                        </label>
                    </div>
                    <div className="form-check mx-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            One-way
                        </label>
                    </div>
                    <div className="form-check mx-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Multi-city
                        </label>
                    </div> <div className="form-check mx-3">
                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                            <option value="1">Economy</option>
                            <option value="1">Premium</option>
                            <option value="2">Business</option>
                            <option value="3">First-class</option>
                        </select>
                    </div>
                </div>
                <div className="calender mt-4">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPlane} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="From"
                            className="headerSearchInput"
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPlane} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="To"
                            className="headerSearchInput"
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <input
                            type="date"
                            className="headerSearchInput"
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handelFlight}>Search</button>
                    </div>
                </div>
                <div className="check">
                    <input type="checkbox" className="checkBox" />
                    <span className="mx-3 mt-3">Direct flight only</span>
                </div>
            </div>
            <div className="mainTwo" style={{ "display": `${initialFlight}` }}>
                <div className="midFlight">
                    <div className="midFlightContainer">
                        <h3>Popular flights near you</h3>
                        <h6>Find deals on domestic and international flights</h6>
                    </div>
                    <div className="midFlightContainer">
                        <h3>Trending cities</h3>
                        <h6>Book flights to a destination popular with travelers from India</h6>
                    </div>
                </div>
                <div className="lastFlight">
                    <div className="midFlightContainerOne">
                        <h4>Huge selection</h4>
                        <h6>Easily compare thousands of flights, all in one place</h6>
                    </div>
                    <div className="midFlightContainerOne">
                        <h4>No hiden fees</h4>
                        <h6>Always Know exactly what you are paying for</h6>
                    </div>
                    <div className="midFlightContainerOne">
                        <h4>More flexibility</h4>
                        <h6>Keep your dates open with flexible ticket options</h6>
                    </div>
                </div>
                <div className="midFlightTwo">
                    <div className="innerMidContainer">
                        <h3>Fly worldWide with Booking.com</h3>
                        <h5>Flights from wherver you are to want to go</h5>
                        <br />
                        <span className="country mx-3">Asia</span>
                        <span className="country mx-3">Europe</span>
                        <span className="country mx-3">North-America</span>
                        <span className="country mx-3">South-America</span>
                    </div>
                </div>
                <h4 className="mt-5 question">Frequently asked question ?</h4><hr /><br />
                <div className="cardContainer">
                    <div className="fq mx-5 my-5">
                        <h4>How do I find the cheapest flights on Booking.com?</h4>
                        <h6>You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors like when you're booking and want to travel.</h6>
                    </div>
                    <div className="fq mx-5 my-5">
                        <h4>How far in advance can I book a flight?</h4>
                        <h6>You can book a flight up to one year before your departure date.</h6>
                    </div>
                    <div className="fq mx-5 my-5">
                        <h4>Do flights get cheaper closer to departure?</h4>
                        <h6>Generally, flight prices are more likely to increase the closer you get to your flight date.</h6>
                    </div>
                    <div className="fq mx-5 my-5">
                        <h4>How do I find the cheapest flights on Booking.com?</h4>
                        <h6>You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors like when you're booking and want to travel.</h6>
                    </div>
                    <div className="fq mx-5 my-5">
                        <h4>What is a flexible ticket?</h4>
                        <h6>A flexible ticket allows you to change your flight with the same airline by only paying the fare and tax difference. It can only be used for one confirmed change. You can add the flexible ticket when booking your flight.</h6>
                    </div>
                    <div className="fq mx-5 my-5">
                        <h4>Does Booking.com charge credit card fees?</h4>
                        <h6>No, we don't charge any credit card fees. You can always see exactly what you’re paying for in the price breakdown when reviewing your booking..</h6>
                    </div>
                </div>
            </div>
            <div className="mainThree" style={{ "display": `${timeFlight}` }}>
                <div className="timeWrapper">
                    <div className="filterWrapper mt-4">
                        <h4>Filters</h4>
                        <h6>Showing Results</h6>

                    </div>
                    <div className="filterWrapper mt-4">
                        <h4>Stops</h4>
                        <input type="radio" className="checkBox" />
                        <span className="time mx-3">1 Stop Max</span>
                    </div>
                    <div className="filterWrapper mt-4">
                        <h4>Duration</h4>
                        <h6>Maximum travel time : {time} hr</h6>
                        <input type="range" onChange={handelTime} className="form-range" min="0" max="60" id="customRange2 step=" />
                    </div>
                    <div className="filterWrapper">
                        <h4 className="mt-5">Flight Times</h4>
                        <div className="flightSchdule mt-4">
                            <h6 className="head my-3">Outbound Flight</h6>
                            <h6 className="overLine">Departs from chaudhray charan Singh InterNation Airport</h6>
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 my-2">ALL</span>
                            <br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 my-2">12:00 AM - 05:59 AM</span>
                            <br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 my-2">06:00 AM - 11:59 AM</span>
                            <br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 my-2">12:00 PM - 05:59 PM</span>
                            <br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 my-2">06:00 PM - 11:59 PM</span>
                            <br />
                        </div>
                        <div className="flightSchdule mt-4">
                            <h6 className="overLine">Arrival to jaipur International Airport</h6>
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 mt-5">ALL</span> <br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 mt-5">12:00 AM - 05:59 AM</span> <br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 mt-5">06:00 AM - 11:59 AM</span> <br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 mt-5">12:00 PM - 05:59 PM</span> <br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 mt-5">06:00 PM - 11:59 PM</span> <br />
                        </div>
                        <div className="flightSchdule mt-4">
                            <h6 className="overLine">Airlines</h6>
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 my-5">All</span><br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 my-5">Air India</span><br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 my-5">Indigo</span><br />
                            <input type="checkbox" className="checkBox" />
                            <span className="time mx-4 my-5">Vistara</span><br />
                        </div>
                    </div>
                </div>
            </div>
            <MailList />
            {/* <div className="footerFlight">
                <Footer />
            </div> */}

        </div>
    )
}
