import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignupForm from './Components/SignUpform/SignupForm';
import LoginForm from './Components/LoginForm/LoginForm';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import FlightDetails from './Components/FlightDetails/FlightDetails';

import { Provider } from 'react-redux';
import { store } from './state/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    {/* <Provider store={store}>
    <App />

    </Provider> */}
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="signup" element={<SignupForm/>}/>
        <Route path="login" element={<LoginForm/>}/>
        <Route path="flightdetails" element={<FlightDetails/>}/>
      </Route>
    </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
