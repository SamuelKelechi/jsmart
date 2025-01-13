import React from 'react'
import './Events.css'
import { GiPartyPopper } from "react-icons/gi";
import EventImg from '../Assets/event.jpeg'

const Events = () => {
  return (
    <div className='Event_Container'>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='Events_Hero'>
        <GiPartyPopper size={80}/>
        <br/>
        <h1 className='Events_Header'>EVENTS</h1>
        <h4 className='Events_Texts'>SPECIAL EVENTS PREPARED FOR YOU</h4>
      </div>
      <div className='Event_Container_Wrapper'>
          <img  src={EventImg} alt='Event_Image' className='Event_Image_Style'/>
      </div>
    </div>
  )
}

export default Events