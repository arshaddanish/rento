import React from 'react'
import './subscriptionCard.scss'

const SubscriptionCard = ({period,price}) => {
  return (
    <div className='subscriptionCard-main'>
        
        <h1>{price}/-</h1>
        <h3>{period}</h3>
        <button>SUBSCRIBE</button>
    </div>
  )
}

export default SubscriptionCard