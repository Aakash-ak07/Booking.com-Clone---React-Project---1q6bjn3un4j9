import React from 'react'
import './checkout.css';
import { searchDate } from '../list/List';

export default function CheckOut() {
    const RoomNo = Math.floor(Math.random() * (401 - 101)) + 101;
    const GSTCharge = Math.floor((searchDate * 1200) * 0.18);

    let totalRoomCharge = searchDate * 1200 + GSTCharge;
    let SubCharge = searchDate == 0 ? 0 : totalRoomCharge;

    return (
        <form >
            <div className="main">
                <div className="midContainer">
                    <span className="head">CheckOut</span>
                    <span className="rupees">Rs</span>
                    <div className="innerContainer">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Room No:
                                <span class="badge bg-primary rounded-pill">{RoomNo}</span>
                            </li>
                            <hr />
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Room charge per day:
                                <span class="badge bg-primary">1200</span>
                            </li>
                            <hr />
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                No of days:
                                <span class="badge bg-primary ">{searchDate}</span>
                            </li>
                            <hr />
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Total room charge:
                                <span class="badge bg-primary">{searchDate * 1200}</span>
                            </li>
                            <hr />
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                18% GST charge:
                                <span class="badge bg-primary">{GSTCharge}</span>
                            </li>
                            <hr /><hr />
                            <li class="list-group-item d-flex justify-content-between align-items-center text">
                                Total payment:
                                <span class="badge bg-primary bill">{SubCharge}</span>
                            </li>
                        </ul>
                    </div>
                    <br />
                    <h2 className="payment">Payment Information</h2><hr />
                    <div className="lowerContainer">
                        <label htmlFor="" className="nameCard">Name on card:</label>
                        <br />
                        <input type="text" className="nameEnter" />
                    </div>
                    <div className="lowerContainer">
                        <label htmlFor="" className="nameCard">Card number:</label>
                        <br />
                        <input type="text" className="nameEnter" />
                    </div>
                    <div className="lowerContainer">
                        <label htmlFor="" className="nameCard">Expires on:</label>
                        <br />
                        <select className="nameEnter">
                            <option>January</option>
                            <option>february</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>august</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                        <input type="text" maxLength="4" className="nameEnter" placeholder='year' />
                        <br />
                        <br />
                        <div className="lowerContainer-2">
                            <label htmlFor="" className="nameCard">CVV number:</label>
                            <br />
                            <input type="password" className="nameEnter" />
                            <br />
                            <br />
                            <button className="btnn my-3">Pay Securely</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
