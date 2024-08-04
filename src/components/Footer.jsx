import React from 'react'
import { Link } from 'react-router-dom'
import {FaPhone, FaLocationArrow} from "react-icons/fa"
import {MdEmail} from "react-icons/md"


  const Footer = () => {
    


  return (
   <>
   <footer className='container'>
    
    <hr />
    <div className="content">
      <div>
        <img src="/catdog.png" alt="logo" className='logo-img'/>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/appointment"}>Appointment</Link>
          <Link to={"/about"}>About</Link>
        </ul>
      </div>

     
      <div>

      <h4>Contact</h4>
      <div>
      <FaPhone/>
      <span>3656-3673-8675</span>
      </div>
      

      <div>
        <MdEmail/>
        <span>Pawsworld23@gmail.com</span>
      </div>
      <div>
        <FaLocationArrow/>
        <span>123 block-D,Moti-nagar delhi, india</span>
        </div>  
        </div>    
    </div>




   </footer>
   
   
   
   </>
  )
}

export default Footer