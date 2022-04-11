import './index.scss';
import AnimatedLetters from "../AnimatedLetters";

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15} />
                </h1>
                <p>
            I am a very ambitious Full Stack developer based in Glasgow, Scotland. Living and breathing code, I aspire daily to expand my skills and learn new tools and technologies.
          </p>
          <p align="LEFT">
            A recent Full Stack Development bootcamp graduate at EPICODE, I am trained in the MERN Stack (MongoDB, Express, React, Node.js). My additional skills consist of technologies such as PostgresSQL, Socket.io, TypeScript, Redux and I am currently expanding this to include React Native, Jest and broaden my skills in animation. 
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of an amazing son, travel enthusiast, and tech-obsessed!
          </p>
            </div>
        </div>
    )
}

export default About;