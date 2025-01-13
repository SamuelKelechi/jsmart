import React from 'react'
import { GiKnifeFork } from "react-icons/gi";
import './Menu.css'

const Menu = () => {
  return (
    <div className='Menu_Container'>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='Menu_Hero'>
                <GiKnifeFork size={80}/>
                <br/>
                <h1 className='Menu_Header'>OUR MENU</h1>
                <h4 className='Menu_Texts'>ORDER & TASTE</h4>
        </div>
        <div className='Menu_Container_Wrapper'>
            LOADING...
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

export default Menu