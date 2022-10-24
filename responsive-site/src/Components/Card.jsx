import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import img1 from "../images/img-9.jpg"
import img2 from "../images/img-4.jpg"
import img3 from "../images/img-8.jpg"
import img4 from "../images/img-5.jpg"
import img5 from "../images/img-9.jpg"

const Card = () => {
    return (

        <Fragment>

            <div className="card-header">
                <h3>Check out these Epic Destination</h3>
            </div>

            <div className="card1" >
                <div className="card-item1">
                    <Link to="/products" className="card-img1">
                        <img src={img1} />
                    </Link>
                    <p>Explore the deep waterfall deep inside the Amazon jungle</p>
                </div>

                <div className="card-item1">
                    <Link to="/products" className="card-img1">
                        <img src={img2} />
                    </Link>
                    <p>Explore the deep waterfall deep inside the Amazon jungle</p>
                </div>
            </div>

            <div className="card2">


                <div className="card-item2">
                    <Link to="/services" className="card-img2">
                        <img src={img3} />
                    </Link>
                    <p>Explore the deep waterfall deep inside the Amazon jungle</p>
                </div>

                <div className="card-item2">
                    <Link to="/services" className="card-img2">
                        <img src={img4} />
                    </Link>
                    <p>Explore the deep waterfall deep inside the Amazon jungle</p>
                </div>

                <div className="card-item2">
                    <div className="card-img2">
                        <img src={img5} />
                    </div>
                    <p>Explore the deep waterfall deep inside the Amazon jungle</p>
                </div>

            </div>





        </Fragment>
    )
}

export default Card