import React, { Component } from 'react';

// Components
import Header from './header';
import About from './about';
import Menu from './menu';
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

export default Twozerofiveone;
