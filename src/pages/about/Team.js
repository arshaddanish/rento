import React from 'react'
import ProfileCard from './ProfileCard'
import './team.scss'
import person from '../../assets/images/about/person.png'
import sidharth from '../../assets/images/about/sidharth.jpg'

const Team = () => {
  return (
    <div className="team">
        <h1>Our Team</h1>
        <div className='team-main'>
            <ProfileCard img={person} name="Analiya Remdios" />
            <ProfileCard img={person} name="Arshad Danish" />
            <ProfileCard img={person} name="Rishan K P" />
            <ProfileCard img={sidharth} name="Sidharth A" />
        </div>
    </div>
  )
}

export default Team