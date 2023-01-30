import React from 'react'
import '../Styles/Footerr.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footerr() {
    return (
        <div>

            <footer className='bg-success'>
                <div className="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li></li>
                        <li><Link to="/Pages/About">about us</Link></li>
                        <li><Link to="/">our services</Link></li>
                    </ul>
                </div>
                <div>
                    <img src="" alt="logo" />
                </div>
                <div className="footer-col">
                    <h4>Contacter nous</h4>
                    <div className="social-Links">
                        <a href="https://www.facebook.com/profile.php?id=100008452087040"> <FaFacebook size={35} /> </a>
                        <a href="#"> <FaTwitter size={35} /> </a>
                        <a href="https://www.instagram.com/ikramayoub/?hl=fr"> <FaInstagram size={35} /> </a>
                        <a href="https://www.linkedin.com/in/ikram-ayoub-370299228/"> <FaLinkedinIn size={35} /> </a>
                    </div>
                </div>
            </footer>


        </div>
    )
}
