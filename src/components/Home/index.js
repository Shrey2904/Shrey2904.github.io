import Initial from '../../assets/images/initial.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../LetterAnimation';
import './index.scss';
import Loader from 'react-loaders';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    const namearr = ['h', 'r', 'e', 'y', ' ', 'T', 'a', 'n', 'n', 'a']
    const jobarr = ['S','o','f','t','w','a','r','e', ' ', 'D','e','v','e','l','o','p','e','r']

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return(
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>e</span>
                        <span className={`${letterClass} _13`}>l</span>
                        <span className={`${letterClass} _14`}>l</span>
                        <span className={`${letterClass} _15`}>o,</span>

                    <br/>
                    <span className={`${letterClass} _16`}>I</span>
                    <span className={`${letterClass} _17`}>'m</span>

                    <img src={Initial} alt='Software Developer'/>
                    <AnimatedLetters letterClass={letterClass} strArray={namearr} idx={18} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobarr} idx={27} />
                    </h1>
                    <h2>Python Expert / ML & AI Enthusiast / Tech Aficionado</h2>
                    <Link to='/contact' className='button'>Connect With Me</Link>
                    <Link to='https://drive.google.com/file/d/1hh6tTbETzWioOBjiq6jMjAVG9v9UT8RG/view?usp=sharing' className='button-res'>Resume</Link>
                    <Link to='https://www.linkedin.com/in/shrey2904' className='button-linkedIn'>LinkedIn</Link>
                    <Link to='https://github.com/Shrey2904' className='button-github'>GitHub</Link>
                </div>

            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home