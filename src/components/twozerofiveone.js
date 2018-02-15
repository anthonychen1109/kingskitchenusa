import React from 'react';

// Components
import Header from './header';
import About from './about';

// Images
import header_image from '../static/images/2051.JPG';

const Twozerofiveone = () => {
  return (
    <div>
      <Header headerImage={header_image} />
      <About />
    </div>
  )
}

export default Twozerofiveone;
