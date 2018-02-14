import React from 'react';

// Images
import Img1 from '../static/images/92.JPG';
import Img2 from '../static/images/2051.JPG';
import Img3 from '../static/images/5223.JPG';
import Img4 from '../static/images/6005.JPG';

const Home = () => {
  return (
    <div className="home">
      <div className="home-top">
        <div className="store" style={{backgroundImage: "url(" + Img1 + ")"}}>
          <a href="/92 E Broadway">
          <div className="overlay">
            <div>
              <h1>92 E. Broadway</h1>
            </div>
          </div>
        </a>
        </div>
        <div className="store" style={{backgroundImage: "url(" + Img2 + ")"}}>
          <a href="/2051 86 St">
          <div className="overlay">
            <div>
              <h1>2051 86 St.</h1>
            </div>
          </div>
          </a>
        </div>
        <div className="store" style={{backgroundImage: "url(" + Img3 + ")"}}>
          <a href="/5223 8th Ave">
          <div className="overlay">
            <div>
              <h1>5223 8th Ave.</h1>
            </div>
          </div>
        </a>
        </div>
        <div className="store" style={{backgroundImage: "url(" + Img4 + ")"}}>
          <a href="/6005 Ft Hamilton">
          <div className="overlay">
            <div>
              <h1>6005 Ft. Hamilton Parkway</h1>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Home;
