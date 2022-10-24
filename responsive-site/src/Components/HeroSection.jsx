import React from 'react'
import "./HeroSection.css"
import Button from './UI/Button'

const HeroSection = () => {
    return (
        <div className="home-container">

            <div className="hero-total">

                <div className="hero-content">

                    <h1>ADVENTURE AWAITS</h1>
                    <h3>What are you waiting for?</h3>

                    <div className="hero-button">

                        <Button className="btn" buttonStyle="btn--outline" >
                            GET STARTED
                        </Button>
                        <Button className="btn" buttonStyle="btn--primary">
                            WATCH TRAILER <i class="fa-solid fa-play"></i>
                        </Button>

                    </div>



                </div>


            </div>

        </div>
    )
}

export default HeroSection