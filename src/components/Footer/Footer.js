import React from 'react'
import './Footer.css'
import Logo from '../Assets/logo1.png'
import { FaInstagramSquare, FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareThreads } from "react-icons/fa6";

let date = new Date().getFullYear();

const Footer = () => {
  return (
    <div className='Footer-Container'>
        <div className='Footer-Akanbi-Hold'>
            <img src={Logo} className='Footer-Logo'/>
            <div className='Social-Connect-Hold'> <b>FOLLOW US</b> 
                <span className='Social-Connect'>
                    <a href='https://www.instagram.com/jsmart_lounge?igsh=MWhqcnVyZ2V3NTh1aw==' target='_blank'>  
                        <FaInstagramSquare color='white' size={20}/>
                    </a> 

                    <a href='https://www.facebook.com/share/1F1BTPZ4T1/' target='_blank'> 
                        <FaFacebook color='white' size={20}/>
                    </a>

                    <a href='https://x.com/jsmartente79561?t=GMUxua-1rKR5Cfs04zDmUQ&s=09' target='_blank'>  
                        <FaTwitterSquare color='white' size={20}/>
                    </a> 

                    <a href='https://www.tiktok.com/@j.smart_lounge?_t=ZM-8t2XS182u9e&_r=1' target='_blank'>  
                        <AiFillTikTok color='white' size={20}/>
                    </a> 

                    <a href='https://www.threads.net/@j.smart_lounge' target='_blank'>  
                        <FaSquareThreads color='white' size={20}/>
                    </a> 

                    <a href='https://www.youtube.com/@j.smart_lounge' target='_blank'>  
                        <FaYoutube color='white' size={25}/>
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