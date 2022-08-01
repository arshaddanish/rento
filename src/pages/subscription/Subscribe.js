import React from 'react'
import './subscribe.scss'
import SubscriptionCard from './SubscriptionCard'

const Subscribe = () => {
  return (
    <div className='subscribe-main'>
        <div className="subscribe-sub">
            <SubscriptionCard period="Monthly" price="499"/>
            <SubscriptionCard period="Quarterly" price="799"/>
            <SubscriptionCard period="Yearly" price="999"/>
        </div>
    </div>
  )
}

export default Subscribe