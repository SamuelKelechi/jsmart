import React from 'react'
import './Difference.css'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const Difference = () => {
  return (
    <div className='Mandate-Container'>
        <div className='Mandate-Wrapper'>
            <h1 className='Mandate-Header'>OUR PREMIUM LOUNGE MAKES A DIFFERENCE</h1>
            <h2 className='Difference_Typing'>
                <Typewriter
                    options={{
                      strings: ['We are here for the vibes', 'The Beats', 'And the thrills'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
            </h2>
            <Link to='/gallery' className='read-more-btn' style={{marginTop:'30px', color:'white'}}>DISCOVER MORE</Link>
        </div>
    </div>
  )
}


export default Difference