import axios from 'axios'
import React, { useEffect } from 'react'
import './FlightDetails.css'
import { useSelector } from 'react-redux'

const FlightDetails = () => {
    const arrivalCity = useSelector(state=>state.arrivalCity);
    const departureCity = useSelector(state=>state.departureCity);
    console.log(arrivalCity);
    console.log(departureCity);
    const params = {
        departure_city : departureCity,
        arrival_city : arrivalCity
    }
        useEffect(()=>{
            axios.get(`http://localhost:8000/getFlight`,{params})
        .then((res)=>{
            console.log(res.data[0]);
        }).catch((err)=>{
            console.log(err);
        })
    },[])
        

   
    return (
        <div className='wrapper'>
            <form >
                <h1>Flight Details</h1>
            </form>
        </div>
    
  )
}

export default FlightDetails