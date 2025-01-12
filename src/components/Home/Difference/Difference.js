import React from 'react'
import './Difference.css'
import Typewriter from 'typewriter-effect';

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
            <button className='read-more-btn' style={{marginTop:'30px'}}>DISCOVER MORE</button>
        </div>
    </div>
  )
}


export default Difference