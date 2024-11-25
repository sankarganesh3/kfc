import React from 'react'
import './Contents.css'
import image2 from "../images/image2.webp"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image8 from "../images/image8.jpg"
import image9 from "../images/image9.jpg"
import image10 from "../images/image10.svg"
import image11 from "../images/image11.jpg"
import image12 from "../images/image12.jpg"
import image13 from "../images/image13.jpg"
import image14 from "../images/image14.jpg"
import { MdArrowRightAlt } from "react-icons/md";
import Navbar from '../components/Navbar'

const Contents = () => {
  return (
    <div>
      <Navbar/>
        <section class="container2">
<p class="cont2-p">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN <button class="cont2-btn">Start Order</button></p>
</section>
<section>
    <img src={image2} class="img2" alt="img"/>
</section>
<section class="container3">
<div class="container">
<h1 class="cont3-p">BROWSE CATEGORIES</h1>
  <div class="row">
    <div class="col-sm-3">
        <a class="menu-card" href="#">
        <img src={image3} class="card-img-top" alt="..."/>
        <section class="card-body">
            <p class="cont3-p1">INTERNATIONAL BURGER FEST</p>
        </section>
        </a>
    </div>
    <div class="col-sm-3">
    <a class="menu-card" href="#">
            <img src={image4} class="card-img-top" alt="..."/>
        <section class="card-body">
        <p class="cont3-p1">MATCH DAY COMBOS</p>
        </section>
        </a>
    </div>
    <div class="col-sm-3">
    <a class="menu-card" href="#">
            <img src={image5} class="card-img-top" alt="..."/>
        <section class="card-body">
        <p class="cont3-p1">VALUE LUNCH SPECIALS</p>
        </section>
        </a>
    </div>
    <div class="col-sm-3">
    <a class="menu-card" href="#">
            <img src={image6} class="card-img-top" alt="..."/>
        <section class="card-body">
        <p class="cont3-p1">BOX MEALS</p>
        </section>
        </a>
    </div>
  </div>
</div>
</section>
<section class="container4">
<div class="container">
  <div class="row">
    <div class="col-sm-3">
    <a class="menu-card" href="#">
        <img src={image7} class="card-img-top" alt="..."/>
        <section class="card-body">
            <p class="cont3-p1">BURGERS</p>
        </section>
        </a>
    </div>
    <div class="col-sm-3">
    <a class="menu-card" href="#">
            <img src={image8} class="card-img-top" alt="..."/>
        <section class="card-body">
        <p class="cont3-p1">CHICKEN BUCKETS</p>
        </section>
        </a>
    </div>
    <div class="col-sm-3">
    <a class="menu-card" href="#">
            <img src={image9} class="card-img-top" alt="..."/>
        <section class="card-body">
        <p class="cont3-p1">RICE BOWLZ</p>
        </section>
        </a>
    </div>
    <div class="col-sm-3">
    <a class="menu-card2" href="#">
            <img src={image10} class="img3" alt="..."/>
        <section class="card-body">
        <p class="cont3-p3">View All Menu <MdArrowRightAlt /></p>
        </section>
        </a>
    </div>
  </div>
</div>
</section>
<section class="container5">
<div class="container">
  <div class="row pt-5">
    <div class="col-sm-6">
    <p class="cont5-p">EXCLUSIVE OFFERS FOR YOU</p>
    </div>
    <div class="col-sm-6">
      <a href="#" class="cont5-a">View All Deals <MdArrowRightAlt /></a>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-sm-3">
    <div class="card cd1">
  <img src={image11} class="card-img-top" alt="..."/>
  <div class="cd2">
    <h5 class="text1">FREE CHICKEN..</h5>
    <p class="text2">1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.</p>
    <a href="#" class="btn1">Apply offer</a>
  </div>
</div>
    </div>
    <div class="col-sm-3">
    <div class="card cd1">
  <img src={image12} class="card-img-top" alt="..."/>
  <div class="cd2">
    <h5 class="text1">FREE CHICKEN..</h5>
    <p class="text2">1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.</p>
    <a href="#" class="btn1">Apply offer</a>
  </div>
</div>
    </div>
    <div class="col-sm-3">
    <div class="card cd1">
  <img src={image13} class="card-img-top" alt="..."/>
  <div class="cd2">
    <h5 class="text1">FREE CHICKEN..</h5>
    <p class="text2">1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.</p>
    <a href="#" class="btn1">Apply offer</a>
  </div>
</div>
    </div>
    <div class="col-sm-3">
    <div class="card cd1">
  <img src={image14} class="card-img-top" alt="..."/>
  <div class="cd2">
    <h5 class="text1">FREE CHICKEN..</h5>
    <p class="text2">1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.</p>
    <a href="#" class="btn1">Apply offer</a>
  </div>
</div>
    </div>
  </div>
</div>
</section>
</div>
  )
}

export default Contents