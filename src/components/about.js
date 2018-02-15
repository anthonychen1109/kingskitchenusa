import React, { Component } from 'react';

// Images
import Img1 from '../static/images/2.jpg';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div id="about" className="about container">
      <div className="about-img" style={{backgroundImage: "url(" + Img1 + ")"}}>
        </div>
        <div className="about-text">
          <h1>About</h1>
          <p>Great authentic Cantonese style comfort food. Made fresh daily with the best ingredients.</p>
          <p>Whether you're with friends, family or by yourself, we have something for everyone at prices you'll love.</p>
        </div>
      </div>
    )
  }
}

export default About;
