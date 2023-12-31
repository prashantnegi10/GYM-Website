import React from 'react'
import './footer.css'
import logo from '../../assets/img/dumble.png'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer" data-aos='fade-up' data-aos-duration='1500'>
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_box">
                        <div className="logo">
                            <div className="logo_img"><img src={logo} alt="" /></div>
                            <h2>FitBody</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate iste culpa deleniti maiores eos veritatis!</p>
                    </div>

                    <div className="footer_box">
                        <h4 className="footer_title">Company</h4>
                        <ul className="footer_links">
                            <li><a href="#">Our Program</a></li>
                            <li><a href="#">Our Plan</a></li>
                            <li><a href="#">Become a member</a></li>
                        </ul>
                    </div>

                    <div className="footer_box">
                        <h4 className="footer_title">Quick Links</h4>
                        <ul className="footer_links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Support Us</a></li>
                        </ul>
                    </div>

                    <div className="footer_box">
                        <h4 className="footer_title">Follow Us</h4>
                        <ul className="footer_links">
                            <li><a href="#"><i class="ri-instagram-fill"></i>Instagram</a></li>
                            <li><a href="#"><i class="ri-twitter-fill"></i>Twitter</a></li>
                            <li><a href="#"><i class="ri-youtube-fill"></i>Youtube</a></li>
                        </ul>
                    </div>
                </div>

                <p className='copyright'>Copyright - {year} developed by Prashant</p>
            </div>
        </footer>
    )
}

export default Footer