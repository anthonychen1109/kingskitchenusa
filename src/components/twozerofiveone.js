import React, { Component } from 'react';

// Components
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Menu from './menu2/menu';
import Gallery from './gallery';
import Contact from './contact';

// Images
import header_image from '../static/images/2051.JPG';

const add1 = "2051 86th Street";
const add2 = "Brooklyn, NY 11214";
const mon = "7:30 AM to 10:00 PM";
const tues = "7:30 AM to 10:00 PM";
const wed = "7:30 AM to 10:00 PM";
const thurs = "7:30 AM to 10:00 PM";
const fri = "7:30 AM to 11:00 PM";
const sat = "7:30 AM to 11:00 PM";
const sunday = "7:30 AM to 10:30 PM";
const phone = "718-373-1188";

class Twozerofiveone extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.dropDownMenu = this.dropDownMenu.bind(this);
    this.toTop = this.toTop.bind(this);
  }

  toTop() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
     window.requestAnimationFrame(this.toTop);
     window.scrollTo (0,currentScroll - (currentScroll/5));
    }
  }

  dropDownMenu() {
    let x = document.getElementById('dropDownClick');
    if (x.className === 'navbar-list') {
      x.className = ' responsive animated fadeInDown';
    } else {
      x.className = 'navbar-list';
    }
  }
  render() {
    return (
      <div>
        <button
          className="up-btn btn btn-secdonary"
          onClick={this.toTop}
          >
            &#9650;
        </button>
        <nav className="fixed-navbar">
          <ul id="dropDownClick" className="navbar-list">
            <li><a href="#menu">Menu</a></li>
            <li><a href="">Online Order</a></li>
            <li className="nav-logo"><a href="/">King's Kitchen</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="dropDownIcon">
              <a
                href="javascript:void(0)"
                onClick={this.dropDownMenu}
                >
                &#9776;
              </a>
            </li>
          </ul>
        </nav>
        <Navbar />
        <Header headerImage={header_image} />
        <About />
        <Menu />
        <Gallery />
          <Contact
            add1={add1}
            add2={add2}
            mon={mon}
            tues={tues}
            wed={wed}
            thurs={thurs}
            fri={fri}
            sat={sat}
            sunday={sunday}
            phone={phone}/>
      </div>
    )
  }
}

export default Twozerofiveone;
