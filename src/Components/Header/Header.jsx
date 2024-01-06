import React from 'react'
import './Header.css'
import { Link , Outlet} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
    <nav style={{background: "transparent",border: "2px solid rgba(255,255,255, .2)",
    backdropFilter: "blur(30px)",
    boxShadow: "0 0 10px rgba(0,0,0, .2)",
    color: "#fff",
    borderRadius: "10px",
    padding: "30px 40px",
    }} className="navbar navbar-default navbar-fixed-top">
        <Link style={{color:"white"}} to="home">SkyCapture</Link>
        <Link style={{color:"White"}} to="signup">SignUp</Link>
        <Link style={{color:"white"}} to="login">Login</Link>
        
    </nav>
    <Outlet/>
    </>
  )
}

export default Header