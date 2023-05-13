import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
      let timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover')
      },3000)
      
      return () =>{
          clearTimeout(timeoutId)
      }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm("007gmail", 
          "template_1az8b3w", refForm.current, "kfZJ-64v9ZwOkhCX-")
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    
  

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a','c', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                I am interested in working opportunities - especially in creating
                your business website. However, if you have any other questions or
                requests, don't hesitate to fill out this simple form and I will get back to you
                within 72 hours.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input 
                                placeholder="Name" 
                                type="text" 
                                name="name" 
                                required />
                            </li>
                            <li className="half">
                                <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                                />
                            </li>
                            <li>
                                <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                                />
                            </li>
                            <li>
                                <textarea
                                placeholder="Message"
                                name="message"
                                required>
                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Jineth Hettiarachchi,
                <br />
                Sri Lanka,
                <br />
                808/1,Sinharamulla,
                <br />
                Kelaniya,WP
                <br />
                11600<br />
                <span>jinethc808@yahoo.com</span>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[6.950304, 79.911874]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[6.950304, 79.911874]}>
                        <Popup>Jineth lives here, let me know if you want to get a coffee ☕ </Popup>
                    </Marker>
                </MapContainer>

            </div>
        <Loader type="pacman" />
        </div>
    </>
    )
}

export default Contact