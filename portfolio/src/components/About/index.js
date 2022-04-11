import { useEffect, useState } from 'react'
import {
  faAngular,
  faNode,
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
      
    }, 3000)
  }, [])
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a very ambitious Full Stack developer based in Glasgow, Scotland.
          Living and breathing code, I am always working to expand my skills and
          learn new tools and technologies.
        </p>
        <p align="LEFT">
          A recent Full Stack Development bootcamp graduate at EPICODE, I am
          trained in the MERN Stack (MongoDB, Express, React, Node.js). My
          additional skills consist of technologies such as PostgresSQL,
          Socket.io, TypeScript, Redux and I am currently expanding this to
          include React Native, Jest and broaden my skills in animation.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of an amazing son, travel enthusiast, and
          tech-obsessed!
        </p>
      </div>
     <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNode} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faSass} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
      </>
  )
}

export default About
