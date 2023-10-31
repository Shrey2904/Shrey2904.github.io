import './index.scss'
import AnimatedLetters from '../LetterAnimation';
import { useEffect, useState } from 'react';
import {  faPython,  faCss3,  faHtml5,  faJsSquare,  faReact, faSwift } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const About =  () => {

  const[letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}  />
          </h1>
          <p>
            I'm Shrey Tanna, a Computer Science enthusiast on the cusp of completing my Master's degree at the Stevens Institute Of Technology in May 2024. I'm honored to have been awarded the Provost's master's fellowship, recognizing my commitment to academic excellence.
          </p>
          <p>
          Throughout my academic journey, I've delved deep into the world of Machine Learning, mastering its facets, including Deep Learning, Natural Language Processing, and Computer Vision. 
          Whether it's coursework, independent projects, internships, or research endeavors, I've strived to build a robust technical foundation in these domains. 
          My proficiency extends to a variety of programming languages, such as Python, Java, C, and C++, and I'm well-versed in the relevant libraries and tools like TensorFlow and PyTorch.
          
          </p>
          <p>
          I am currently seeking new graduate roles for 2024 in Software Development, Machine Learning, Deep Learning, and NLP, but my versatile skill set also makes me a strong candidate for Data Analyst and Data Scientist roles.
          </p>
          <p>
            If I need to define myself in one sentence that would be a a highly motivated and adaptable professional with a strong track record 
            of delivering innovative solutions, a sports fanatic, and tech-obsessed!
            </p>
        </div>


        <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#FFDE571" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faSwift} color="#EC4D28" />
              </div>
            </div>
          </div>
      </div>
      
      <Loader type='pacman'/>
    </>
  )
}

export default About
