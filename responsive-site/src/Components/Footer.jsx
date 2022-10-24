import Button from './UI/Button'
import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="subscribe1">
                <div className="sub-text1"> <p>Join the Adventure newletter to receive our best vacation deals</p> </div>
                <div className="sub-text2"> <p>You can unsubscribe at any time</p> </div>
                <form action="">
                    <input type="text" />
                    <Button className="btnn" buttonStyle="btn--outline" buttonSize="btn--medium">Subscribe</Button>
                </form>
            </div>

            <div className="details">

                <ul className='about'>
                    <li><h3>About Us</h3></li>
                    <li>How it works</li>
                    <li>Testimonials</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Terms of Service</li>
                </ul>

                <ul className='contact'>
                    <li><h3>Contact Us</h3></li>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>Destinations</li>
                    <li>Sponsorships</li>

                </ul>

                <ul className='Video'>
                    <li><h3>Videos</h3></li>
                    <li>Submit Video</li>
                    <li>Ambassador</li>
                    <li>Agency</li>
                    <li>Influencer</li>

                </ul>

                <ul className='about'>
                    <li><h3>Social Media</h3></li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Twitter</li>

                </ul>


            </div>

            <div className="minor">
                <div className='trvl-logo'><p>TRVL <i className='fab fa-typo3 ' /></p></div>
                <div className='trvl-txt'><p>TRVL c 2020</p></div>
                <div className="trvl-sm">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>


                </div>
            </div>
        </footer>
    )
}

export default Footer