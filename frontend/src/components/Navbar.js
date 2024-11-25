import React from 'react'
import './Navbar.css'
import image from "../images/image.svg"
import image1 from "../images/image1.svg"
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <section className="cont">
        <section class="container1">
            <p class="cont1-p">Allow location access for local store menu and promos <button class="cont-btn">Set Location</button></p>
        </section>
        <nav class="navbar navbar-expand-lg nav1">
  <div class="container">
    <a class="navbar-brand img1" href="#"><img src={image} alt="img"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav nav-li">
        <li class="nav-item">
          <a class="nav1-li" href="#"><Link to="/menu">Menu</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav1-li" href="#">Deals</a>
        </li>
      </ul>
    </div>
    <p class="nav2-li"><IoPersonCircleOutline class="icon1" /> Sign In</p>
    <p class="nav3-li">0</p>
    <img src={image1} class="nav4-li" alt="img"/>
  </div>
</nav>
</section>
    </div>
  )
}

export default Navbar
