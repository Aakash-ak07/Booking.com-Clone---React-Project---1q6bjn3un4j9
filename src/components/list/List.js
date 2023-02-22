import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './list.css';
import { useNavigate } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
// import MailList from '../mailList/MailList';
// import Footer from '../footer/Footer';
import DataMap from '../HotelList/DataMap';


let searchDate = 0;
let searchMonth = 0;
let searchYear = 0;

function List() {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);
    const [value, setValue] = useState()
    const [place, setPlace] = useState(destination);

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("userDetails")) {
            navigate("/registe");
        }
    });

    const handleHotel = () => {
        setPlace(value);
    }

    searchDate = date[0].endDate.getDate() - date[0].startDate.getDate() + 1;
    console.log(searchDate);

    const handleDestination = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <div><Navbar type="logOut" />
                <Header type="list" />
                <div className="listContainer">
                    <div className="listWrapper">
                        <div className="listSearch">
                            <h1 className="lsTitle">Search</h1>
                            <div className="lsItem">
                                <label>Destination</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleDestination}>
                                    <option value="Choose city">Choose city</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Jaipur">Jaipur</option>
                                    <option value="Jodhpur">Jodhpur</option>
                                    <option value="Banglore">Banglore</option>
                                    <option value="Udaipur">Udaipur</option>
                                </select>
                            </div>
                            <div className="lsItem">
                                <label>Check-in Date</label>
                                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                    date[0].startDate,
                                    "MM/dd/yyyy"
                                )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openDate && (
                                    <DateRange
                                        onChange={(item) => setDate([item.selection])}
                                        minDate={new Date()}
                                        ranges={date}
                                    />
                                )}
                            </div>
                            <div className="lsItem">
                                <label>Options</label>
                                <div className="lsOptions">
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                            Min price <small>per night</small>
                                        </span>
                                        <input type="number" className="lsOptionInput" />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">
                                            Max price <small>per night</small>
                                        </span>
                                        <input type="number" className="lsOptionInput" />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">Adult</span>
                                        <input
                                            type="number"
                                            min={1}
                                            className="lsOptionInput"
                                            placeholder={options.adult}
                                        />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">Children</span>
                                        <input
                                            type="number"
                                            min={0}
                                            className="lsOptionInput"
                                            placeholder={options.children}
                                        />
                                    </div>
                                    <div className="lsOptionItem">
                                        <span className="lsOptionText">Room</span>
                                        <input
                                            type="number"
                                            min={1}
                                            className="lsOptionInput"
                                            placeholder={options.room}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleHotel}>Search</button>
                        </div>
                        <div className="listResult">
                            <DataMap ID="1" location={place} />
                            <DataMap ID="2" location={place} />
                            <DataMap ID="3" location={place} />
                            <DataMap ID="4" location={place} />
                            <DataMap ID="5" location={place} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <MailList /> */}
            <div>
                <br />
                <br />
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default List;
export { searchDate };