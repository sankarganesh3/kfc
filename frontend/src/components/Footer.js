import React from 'react'
import './Footer.css'
import image15 from '../images/image15.svg'
import image16 from '../images/image16.svg'
import image17 from '../images/image17.svg'
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div>
        <section class="container6">
        <div class="container">
            <div class="row">
                <div class="col-lg-1">
                    <img class="img15" src={image15} />
                </div>
                <div class="col-xl-6">
                    <div class="row">
                    <div class="col-lg-3">
                        <ul>
                            <li>KFC India</li>
                            <li>About KFC</li>
                            <li>KFC Care</li>
                            <li>Careers</li>
                            <li>Our Golden Past</li>
                            <li>Responsible Disclosure</li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                    <ul>
                            <li>Legal</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                            <li>Caution Notice</li>
                       </ul>
                    </div>
                    <div class="col-lg-3">
                        <ul>
                            <li>KFC Food</li>
                            <li>Menu</li>
                            <li>Order Lookup</li>
                            <li>Gift Card</li>
                            <li>Nutrition & Allergen</li>
                        </ul>
                    </div>
                    <div class="col-lg-3">
                    <ul>
                            <li>Support</li>
                            <li>Get Help</li>
                            <li>Contact Us</li>
                            <li>KFC Feedback</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>    
                    </div>
                </div>
                <div class="col-xl-2">
                    <a href="#"><MdLocationPin /> Find a KFC</a>
                </div>
                <div class="col-lg-3">
                    <div class="row">
                        <div class="col">
                        <img  src={image16} />
                        </div>
                        <div class="col">
                        <img  src={image17} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Footer