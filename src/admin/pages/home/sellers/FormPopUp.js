import React from 'react'
import './FormPopUp.scss'

const FormPopUp = ({trigger, setTrigger}) => {
  return (trigger) ? (
    <div className='form-popup-main1'>
        <div className="form-popup">
            <div onClick={()=>setTrigger(false)} className="form-popup-close-btn">
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="form-popup-sub">
                <div className='form-popup-bold'>Name</div><div>: Albin Vargees</div>
                <div className='form-popup-bold'>Username</div><div>: albin007</div>
                <div className='form-popup-bold'>Batch</div><div>: 2011</div>
                <div className='form-popup-bold'>Mobile No.</div><div>: 9876543210</div>
                <div className='form-popup-bold'>Email</div><div>: albinvargees@gmail.com</div>
                <div className='form-popup-bold'>Department</div><div>: Computer Science Engineering</div>
                <div className='form-popup-bold'>Designation</div><div>: CEO</div>
                <div className='form-popup-bold'>Company</div><div>: Google</div>
                <div className='form-popup-bold'>Experience</div><div>: 10+ Years</div>
                <div className='form-popup-bold'>Address line</div><div>: Albin House, Albin Street, Albin City-670001</div>
            </div>
        </div>
    </div>
  ):null
}

export default FormPopUp