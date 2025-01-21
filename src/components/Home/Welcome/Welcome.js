import React from 'react'
import './Welcome.css'
import LeftImage from '../../Assets/1.jpeg'
import RightImage from '../../Assets/option2.jpg'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='Welcome_Container'>
        <div className='Welcome_Container_Wrapper'>
            <img src={LeftImage} alt='Menu_Image' className='Image_Wel'/>
            <div className='Welcome_Center_Contain'>
                <h2 className='Welcome_Heading'>Welcome to J.Smart Lounge</h2>
                <p>At J.Smart Lounge, we pride ourselves on offering a unique blend of fine dining, a relaxing café atmosphere, an energetic nightlife, and a premium lounge experience. <br/><br/> Whether you're here to unwind, connect, or celebrate, our tranquil ambiance, exquisite offerings, and personalized service are designed to leave you refreshed and inspired.</p>
                <Link to='/about' className="read-more-btn">Read More</Link>
            </div>
            <img src={RightImage} alt='Menu_Image' className='Image_Wel'/>
        </div>
    </div>
  )
}

export default Welcome