import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Profile from '../../assets/images/profile_pic.jpg'
import me1 from '../../assets/images/me1.JPG'
import me2 from '../../assets/images/me2.JPG'
import me3 from '../../assets/images/me3.JPG'

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
        <div className="profile-pic-cont">
          <img
            className="profile-pic"
            src={Profile}
            alt="Profile Pic"
            // make entire image fit
            height="100%"
          />
        </div>

        <div className="photos">
          <div className="photo-cont">
            <img className="photo" src={me1} alt="me1" />
            <img className="photo" src={me2} alt="me2" />
            <img className="photo" src={me3} alt="me3" />
          </div>
        </div>

        <div className="about-text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a final year Engineering Design MEng student at the University
            of Bristol, UK. I'm currently looking for a graduate or junior role.
          </p>
          <p align="LEFT">
            My University and work experience has given me a strong foundation
            in software development, namely robotics, optimisation and machine
            learning / AI. I have a strong interest in mechanical/electronic
            design and creative coding.
          </p>
          <p>
            I'm currently working on a few projects including a pen plotter,
            codes for plotting and this website.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
