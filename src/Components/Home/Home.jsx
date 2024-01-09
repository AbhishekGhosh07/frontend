import React , {useState} from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

const Home = () => {
  const navigate = useNavigate();
  const [departureAirport, setDepartureAirport] = useState('');
  const [destinationAirport, setDestinationAirport] = useState('');
  const [flightDate, setFlightDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators,dispatch);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { departureAirport, destinationAirport, flightDate, returnDate });
    actions.departureCity(departureAirport);
    actions.arrivalCity(destinationAirport);
    navigate('/flightdetails');
  };

  return (<>
    <h1 style={{color : "white" , textAlign:"center"}}>The Best flight offers from anywhere, to everywhere </h1>
    <div style={{background: "transparent",border: "2px solid rgba(255,255,255, .2)",
    backdropFilter: "blur(30px)",
    boxShadow: "0 0 10px rgba(0,0,0, .2)",
    color: "#fff",
    borderRadius: "10px",
    padding: "30px 40px"}} className="container mt-5">
      <h2 className="mb-4">Flight Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="departureAirport" className="form-label">
            Departure Airport
          </label>
          <input
            type="text"
            className="form-control"
            id="departureAirport"
            value={departureAirport}
            onChange={(e) => setDepartureAirport(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="destinationAirport" className="form-label">
            Destination Airport
          </label>
          <input
            type="text"
            className="form-control"
            id="destinationAirport"
            value={destinationAirport}
            onChange={(e) => setDestinationAirport(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="flightDate" className="form-label">
            Flight Date
          </label>
          <input
            type="date"
            className="form-control"
            id="flightDate"
            value={flightDate}
            onChange={(e) => setFlightDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">
            Return Date
          </label>
          <input
            type="date"
            className="form-control"
            id="returnDate"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </div>
        <button style={{width:"100%",
    height: "45",
    }} type="submit" className="btn btn-primary">
          Search Flights
        </button>
      </form>
    </div>
    </>);
}

export default Home