import React, { Component } from 'react';

// Components
import Header from './header';
import About from './about';
import Menu from './menu';
import Gallery from './gallery';
import Contact from './contact';

// Images
import header_image from '../static/images/92.JPG';

const add1 = "92 East Broadway";
const add2 = "New York, NY 10002";
const mon = "7:00 AM to 10:30 PM";
const tues = "7:00 AM to 10:30 PM";
const wed = "7:00 AM to 10:30 PM";
const thurs = "7:00 AM to 10:30 PM";
const fri = "7:00 AM to 10:30 PM";
const sat = "7:00 AM to 10:30 PM";
const sunday = "7:00 AM to 10:30 PM";
const phone = "212-966-7288";

class NinetyTwo extends Component {
  render() {
    return (
      <div>
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

export default NinetyTwo;
