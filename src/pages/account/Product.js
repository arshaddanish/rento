import React from 'react'

const Product = ({image,name, price}) => {
  return (
    <div className='your-product-main'>
        <div className='your-product-image'>
            <img src={image} alt="" />
        </div>
        <div className='your-product-details'>
            <h3>Product Name: {name}</h3>
            <p>Price: {price}/Day</p>
            <p>Listed on: 27/06/2021</p>
        </div>
        
    </div>
  )
}

export default Product