import React from 'react'
import './Navbar2.css'
import image from '../images/image.svg'
import image1 from '../images/image1.svg'
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Navbar2 = () => {
  return (
    <div>
        <section className="contn2">
        <nav class="navbar navbar-expand-lg navn1">
  <div class="container">
    <a class="navbar-brand img1" href="#"><Link to='/'><img src={image} alt="img"/></Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navn-li">
        <li class="nav-item">
          <a class="navn1-li" href="/menu">Menu</a>
        </li>
        <li class="nav-item">
          <a class="navn1-li" href="#">Deals</a>
        </li>
      </ul>
    </div>
    <p class="navn2-li"><IoPersonCircleOutline class="iconn1" /> Sign In</p>
    <p class="navn3-li">0</p>
    <img src={image1} class="navn4-li" alt="img"/>
  </div>
</nav>
</section>
    </div>
  )
}

export default Navbar2