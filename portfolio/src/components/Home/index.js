import './index.scss'
import LogoTitle from "../../assets/images/logo-p.png"
import AnimatedLetters from "../AnimatedLetters"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Logo from "./Logo"
import UnisonPreview from "../../assets/images/unisonpreview.png"
import ScotHostsPreview from "../../assets/images/scothostspreview.png"
import NetflixPreview from "../../assets/images/net.jpg"
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'u', 'l']
    const jobArray = ['F', 'u', 'l', 'l', '', 'S', 't', 'a', 'c', 'k', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

      useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
   <>
     <div className="container home-page">
         <div className="text-zone">
             <h1>Hi, <br /> I'm
                 <img src={LogoTitle} alt="developer" />
                 <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            
             <br />
                   <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} />
             </h1>
             <h2>Glasgow, Scotland</h2>
             <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
     <Logo />
     <div className="recent-projects projects-zone">
       <h1>Recent Projects</h1>
       <div className="row">
         <div className="column">
           <div className="project-card">
             <img src={UnisonPreview} alt="Unison Preview" className="preview-image" />
             <div className="inner-card">
               <h2>Unison</h2>
               <p>Full stack social media app, made to help connect musicians and allow a one-stop-shop sharing platform for musical content. Currently working on the chat features.</p>
               <p>Technologies Used: React, Redux, Express, Node.JS, MongoDB, Cloudinary, Socket.io, JWTAuth</p>
             </div>
           </div>
         </div>
         <div className="column">
              <div className="project-card">
             <img src={ScotHostsPreview} alt="ScotHosts.org Preview" className="preview-image" />
             <div className="inner-card">
               <h2>ScotHosts</h2>
               <p>ScotHosts.org, charity project for an organisation specialising in the relocation of Ukranian refugees to Scotland.</p>
               <p>Technologies Used: React</p>
             </div>
           
           </div>
         </div>
         <div className="column">
              <div className="project-card">
             <img src={NetflixPreview} alt="Unison Preview" className="preview-image" />
             <div className="inner-card">
               <h2>Netflix</h2>
               <p>Full Stack Netflix Clone</p>
               <p>Technologies Used: React, Redux, Express, Node.JS, MongoDB, Cloudinary, JWTAuth</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   <Loader type="pacman" />
   </>
 )
}

export default Home;