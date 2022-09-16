import React from 'react'
import './FormPopUp.scss'

const FormPopUp = ({trigger, setTrigger}) => {
  return (trigger) ? (
    <div className='form-popup-main'>
        <div className="form-popup">
            <div onClick={()=>setTrigger(false)} className="form-popup-close-btn">
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="form-popup-sub">
                <div className='form-popup-bold'>Name</div><div>: Albin Vargees</div>
                <div className='form-popup-bold'>Email</div><div>: albin007</div>
                <div className='form-popup-bold'>Phone No.</div><div>: 2011</div>
                <div className='form-popup-bold'>Mobile No.</div><div>: 9876543210</div>
                <div className='form-popup-bold'>Address</div><div>: albinvargees@gmail.com</div>
                <div className='form-popup-bold'>Date of Birth</div><div>: Computer Science Engineering</div>
                <div className='form-popup-bold'>Aadhaar</div><div className='aadhaar-img'>: CEO</div>
            </div>
        </div>
    </div>
  ):null
}

export default FormPopUp