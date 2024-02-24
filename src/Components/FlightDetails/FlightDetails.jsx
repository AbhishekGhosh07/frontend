import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './FlightDetails.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FlightDetails = () => {
    let navigate = useNavigate();
    const arrivalCity = useSelector(state=>state.arrivalCity);
    const departureCity = useSelector(state=>state.departureCity);
    const loggedIn = useSelector(state=>state.permission);
    const [flights,setFlights] = useState([]);
    console.log(arrivalCity);
    console.log(departureCity);
    const params = {
        departure_city : departureCity,
        arrival_city : arrivalCity
    }
        useEffect(()=>{
            axios.get(`http://localhost:8000/getFlight`,{params})
        .then((res)=>{
            console.log(res.data);
            setFlights(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
        
    const bookFlight =(event)=>{
        event.preventDefault();
        if(loggedIn){
            navigate('/login');
        }

    }

   
    return (
        <div className='wrapper'>
            <h1>List of flights from {departureCity} to {arrivalCity}</h1>
            <table style={{ width: "60%" }} className="table">
                <thead className="thead-light">
                    <tr>
                        
                        <th>Flight Number</th>
                        <th>Flight Name</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => {
                        return (
                            <tr key={flight.id}>
                                <td>{flight.flight_number}</td>
                                <td>{flight.flight_company}</td>
                                <td>{flight.departure_city}</td>
                                <td>{flight.arrival_city}</td>
                                <td><button onClick={bookFlight}>Book Flight</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    
  )
}

export default FlightDetails