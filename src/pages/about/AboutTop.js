import React from 'react'
import './aboutTop.scss'
import about from '../../assets/images/about/about.png'

const AboutTop = () => {
  return (
    <div className='about-main'>
      <div className='about-left-img'>
        <img src={about} alt="" />
      </div>
      <div className='about-right-para'>
        <p>About Company</p>
        <h1>The Leading Rental Marketplace</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla deserunt fuga ullam quia quisquam, ut doloremque quaerat placeat et, nobis reiciendis debitis illum. Dolore impedit exercitationem officia facere consequatur incidunt! Saepe laborum consequuntur accusantium unde, ut molestiae animi veritatis dolor aspernatur fugiat ducimus incidunt corporis voluptate facere eligendi inventore? Placeat non delectus, tenetur ut fuga est, omnis sit velit perspiciatis necessitatibus, deserunt explicabo laboriosam corrupti atque facere ex quia? Distinctio eaque provident asperiores! Enim reiciendis perferendis exercitationem temporibus architecto aut id, nobis commodi eveniet! Numquam, ipsam reiciendis harum fugiat possimus, omnis, delectus voluptatibus facere quod fuga voluptate consequatur dolore.</p>
      </div>
    </div>
  )
}

export default AboutTop