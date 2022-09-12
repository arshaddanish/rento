import React from 'react'
import ProfileCard from './ProfileCard'
import './team.scss'
import rishan from '../../assets/images/about/rishan.jpeg'
import analiya from '../../assets/images/about/analiya.jpeg'
import arshad from '../../assets/images/about/arshad.jpg'
import sidharth from '../../assets/images/about/sidharth.jpg'

const Team = () => {
  return (
    <div className="team">
        <h1>Our Team</h1>
        <div className='team-main'>
            <ProfileCard img={analiya} name="Analiya Remdios" />
            <ProfileCard img={arshad} name="Arshad Danish" />
            <ProfileCard img={rishan} name="Rishan K P" />
            <ProfileCard img={sidharth} name="Sidharth A" />
        </div>
    </div>
  )
}

export default Team