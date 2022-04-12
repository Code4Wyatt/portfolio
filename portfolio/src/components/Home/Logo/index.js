import './index.scss'
import Me from '../../../assets/images/me.png'
import { useEffect, useRef } from 'react'


const Logo = () => {
 
  return (
    <div className="logo-container">
          <img className="solid-logo" src={Me} alt="S" /> 
         
      
    </div>
  )
}

export default Logo
