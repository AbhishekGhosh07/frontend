import axios from 'axios'
import React, { useEffect } from 'react'
import './FlightDetails.css'

const FlightDetails = () => {
        useEffect(()=>{
            axios.get('http://localhost:8000/getFlight?departure_city=delhI&arrival_city=MumBai')
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