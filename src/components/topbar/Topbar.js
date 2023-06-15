import React from 'react'
import './Topbar.css'

import { MdLocationPin } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className='topbar' name='top'>
            <div className='topbar-content container'>
                <div className='address bar-box1 top-hide'>
                    <p><span><MdLocationPin /></span> 4120 Cameron Park Dr. Suite 403, Cameron Park, CA 95682</p>
                </div>

                <div className='email bar-box2 top-hide'>
                    <p><span><FiMail /></span> info@cameronparkrehab.com</p>
                </div>

                <div className='number bar-box3'>
                    <p><span><AiOutlinePhone /></span> +1 (323) 402-9939</p>
                </div>

            </div>
      
    </div>
  )
}

export default Topbar
