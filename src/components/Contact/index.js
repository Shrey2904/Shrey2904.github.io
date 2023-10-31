import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../LetterAnimation'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  //const form = useRef()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  useEffect(() => {
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
    
    return () => {
                clearTimeout(timeoutId)
            }
}, [])

  const sendEmail = (e) => {
    e.preventDefault();

    //MY emailJS service id and all the other variables
    const serviceId = 'service_kjlihwe';
    const templateId = 'template_jy704qx';
    const publicKey = 'J6WcQk1LMYK4X43pG';

    //We will create the same template object as our EmailJS template
    const templateParam ={
        from_name: name,
        from_email: email,
        to_name: 'Shrey Tanna',
        subject: subject,
        message: message,
    };


    emailjs.send(serviceId, templateId, templateParam, publicKey)
    .then((response) => {
        alert('Email sent successfully!', response);
        window.location.reload(false)
        setName();
        setEmail();
        setSubject();
        setMessage();
    })
    .catch((error) => {
        alert('Error Sending the email: ',error);
    });
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am passionate about the exciting opportunities within the fields of Software Development, Machine Learning, and Data Analysis. 
          I am actively seeking distinguished roles in these domains, eager to tackle challenging projects and apply the expertise I've developed 
          throughout my academic and professional journey.</p>
          <p>
          If you believe my skills and aspirations align with your organization's goals, or if you have any questions, I welcome the opportunity to
          engage in a meaningful conversation. I am ready to contribute my expertise to innovative projects and explore new frontiers. Please don't 
          hesitate to reach out through the contact form below for further discussion.
          </p>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" value = {name} onChange={(e) => setName(e.target.value)} required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Shrey Tanna,
          <br />
          United States of America,
          <br />
          1 Castle Point Terrace <br />
          Hoboken, NJ 07030 <br />
          <br />
          <span>shreytanna2904@yahoo.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[40.7448, -74.0256]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.7448, -74.0256]}>
              <Popup>Shrey studies here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
