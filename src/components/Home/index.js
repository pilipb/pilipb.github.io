import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','P', 'h', 'i', 'l',' ', 'B', 'l', 'e', 'c', 'h', 'e', 'r']
  const jobArray = [
    'a',
    'n',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    'i',
    'n', 
    'g',
    ' ',
    'S',
    't',
    'u',
    'd',
    'e',
    'n',
    't', 
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Optimisation / AI / Robotics</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* insert background for homepage here */}
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
