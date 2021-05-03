import { faEnvelopeOpen, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Contuct.css'
function Contuct() {
    return (
        <section id='contuct' className='contact-section content'>
           <div className="content-contruct">
            <div className="contactInfo">
                <h3>Contact Info</h3>
                <div className="contactInfoBx">
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Subidpur<br/>Meherpur,Dhaka<br/>Bangladesh</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+8801650193841</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon>
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>sbappyi200@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="formBox">
                <form>
                    <h3>Message Me</h3>
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Your Message"></textarea>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
        </section>
    )
}

export default Contuct
