import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact-main'>
        <div className="contact-sub">
            <div className='contact-sub-left'>
                <p>Contact Us</p>
                <h1>Leave Us a Message</h1>
                <p className='contact-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporeum dicant partem scripserit, doctus appetere interpretaris.</p>
                <div className='contact-icons'>
                    <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.pinterest.com/"><i className="fa-brands fa-pinterest"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
            <div>
                <form action="">
                    <div className='contact-inputs'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                        <TextField id="outlined-basic" label="Subject" variant="outlined" />
                    </div>
                    <div>
                        <TextField style={{border: 'none', outline: 'none'}} rows={8} fullWidth multiline id="outlined-basic" label="Write Comment" variant="outlined" />
                        <Button primary style={{width: '250px', height: '60px', marginTop: '1rem',backgroundColor: '#0096FF'}} variant="contained">Submit Comment</Button>
                    </div>
                    
                </form>

            </div>
        </div>
    </div>
  )
}

export default Contact