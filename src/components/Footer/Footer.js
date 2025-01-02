import React from 'react'
import './Footer.css'
import Logo from '../Assets/logo1.png'
import Facebook from "../Assets/facebook.png";
import Instagram from "../Assets/instagram.png";
import Twitter from "../Assets/twitter.png";
import Youtube from "../Assets/youtube.png";

let date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='Footer-Container'>
        <div className='Footer-Akanbi-Hold'>
            <img src={Logo} className='Footer-Logo'/>
            <div className='Social-Connect-Hold'> <b>FOLLOW US</b> 
                <span className='Social-Connect'>
                                    <a href='' target='_blank'>  
                                        <img className='Social-Icon-Each2' src={Instagram} alt='Instagram' />
                                    </a> 

                                    <a href='' target='_blank'> 
                                        <img className='Social-Icon-Each1' src={Facebook} alt='Facebook' />
                                    </a>

                                    <a href='' target='_blank'>  
                                        <img className='Social-Icon-Each3' src={Twitter} alt='Twitter' />
                                    </a> 

                                    <a href='' target='_blank'>  
                                        <img className='Social-Icon-Each4'  src={Youtube} alt='Youtube' />
                                    </a> 
                </span> 
            </div>
        </div>
        <div className='Footer-Reserved'>
            <span>Developed with <a href="https://dev-samuel-kelechi.web.app/" target="blank" style={{textDecoration:"none", color:"red", fontWeight:'bolder'}}>Love</a> 🚀 | © {date} All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer