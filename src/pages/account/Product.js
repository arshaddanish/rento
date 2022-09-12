import React from 'react'

const Product = ({image,name, price}) => {
  return (
    <div className="your-product-main">
      <div className='your-product-sub'>
          <div className='your-product-image'>
              <img src={image} alt="" />
          </div>
          <div className='your-product-details'>
              <h3>Product Name: {name}</h3>
              <p>Price: {price}/Day</p>
              <p>Listed on: 27/06/2021</p>
          </div>
      
      </div>
      <div className="your-product-btns">
        <button className='your-product-btn your-product-btn-edit'>EDIT</button>
        <button className='your-product-btn your-product-btn-delete'>DELETE</button>
      </div>
    </div>
  )
}

export default Product