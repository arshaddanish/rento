import React from 'react'
import Product from './Product'
import car from '../../assets/images/profile/car.jpg'
import toolbox from '../../assets/images/profile/toolbox.jpg'


const YourProducts = () => {
  return (
    <div className='your-product'>
        <Product image={car} name={"Fortuner"} price={"2500"} />
        <Product image={toolbox} name={"Tool Box"} price={"250"} />
    </div>
  )
}

export default YourProducts