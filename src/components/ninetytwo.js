import React from 'react';

// Components
import Header from './header';
import About from './about';
import Carousel from './carousel';
import Menu from './menu';
import Contact from './contact';

// Images
import header_image from '../static/images/92.JPG';

const NinetyTwo = () => {
  return (
    <div>
      <Header headerImage={header_image} />
      <About />
      <Carousel />
      <Menu />
      <Contact />
    </div>
  )
}

export default NinetyTwo;
