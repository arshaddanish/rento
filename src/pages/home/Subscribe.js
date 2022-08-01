import React from 'react'
import './home.scss'
import { useNavigate } from "react-router-dom"

const Subscribe = () => {
  const navigate = useNavigate();
  const navigateToSubscription = () => {
    navigate('/subscribe');
  }
  return (
    <div className='home-subscribe'>
        <div>
          <img src={require("../../assets/images/subscribe/rent.png")} alt="" />
        </div>
        <div>
          <h1>List your rental. Screen tenants.<br />Sign a lease. Get paid.</h1>
          <div className='home-subscribe-btn'><button onClick={navigateToSubscription}>SUBSCRIBE NOW</button></div>
        </div>
    </div>
  )
}

export default Subscribe