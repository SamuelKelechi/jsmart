import React from 'react';
import './WhatsApp.css'


const WhatsApp = () => {
  return (
    <>

        <a
        href="https://wa.me/2348030520991"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
            <p className='Whatsapp_App'>Need Help?</p>
            <img
              className="whatsapp_img"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              id="whatsapp-icon"
            />
      </a>

    </>
  )
}

export default WhatsApp