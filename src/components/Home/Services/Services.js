import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='Service_Container'>
      <h2 className='Service_Header'>COME AND ENJOY</h2>
      <div className='Service_Container_Wrapper'>
        <div className='Service_Contain1'>
          <div className='Service_Contain1_Hold'>
            <h2 className='Service_Header'>NIGHTLIFE</h2>
            <span className='Service_Text'>Experience Adorned with Opulent Décor.</span>
          </div>
        </div>
        <div className='Service_Contain2'>
          <div className='Service_Contain1_Hold'>
            <h2 className='Service_Header'>DRINKS AND LOUNGE</h2>
            <span className='Service_Text'>Elevating Your Spirit</span>
          </div>
        </div>
        <div className='Service_Contain3'>
          <div className='Service_Contain1_Hold'>
            <h2 className='Service_Header'>DELICIOUS CUISINE</h2>
            <span className='Service_Text'>Food & Savory Delights</span>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/234"
        className="order-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Order Now
      </a>
    </div>
  )
}

export default Services