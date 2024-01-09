import React, { useState } from 'react'
import './SignupForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

const SignupForm = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators,dispatch);
  let navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.name || !data.email || !data.phone) {
      setStatus(false);
    }
    else {
      setStatus(true);
      const payload = JSON.stringify(data);
      console.log(payload);
      axios.post("http://localhost:8000/signup", data).then((response) => {
        setData({
          name: "",
          email: "",
          phone: "",
          password: ""
        });
        console.log(response.data);
        setStatus(null);
        actions.loggedIn(false);
        navigate('/home');
      })
      .catch((err)=>{
        console.log('error-->' , JSON.stringify(err));
      })
    }
  }

  const handleChange = (event) => {
    let { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Name" required />
          <FaUser classname='icon' />
        </div>
        <div className="input-box">
          <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="email" required />
          <FaUser classname='icon' />
        </div>
        <div className="input-box">
          <input type="tel" name="phone" value={data.phone} onChange={handleChange} placeholder="phone" required />
          <FaLock className='icon' />
        </div>
        <div className="input-box">
          <input type="password" name="password" value={data.password} onChange={handleChange} placeholder="password" required />
          <FaLock className='icon' />
        </div>
        <div className='remeber-forgot'>
          <label><input type='checkbox' />Rememeber Me</label>
          <a href="#">Forget Password ?</a>
        </div>

        <button type="submit">Sign Up</button>

        <div className="register-link">
          <p>Don't have an account ? <a href="#">Register</a></p>

        </div>


        {status === false && <div className="text-error">Enter the details</div>}
        {status === true && <div className="text-success">SignUp Successful</div>}

      </form>
    </div>
  )
}

export default SignupForm