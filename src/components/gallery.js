import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

// Components
import GalleryModal from './modal';

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.JPG',
  '5.jpg',
  '6.JPG',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg'
]

class Gallery extends Component {
  render() {
    var masonryOptions = {
      transitionDuration: 0
    };
    const masonry = images.map(item => {
    return (
      <div key={item} className="grid-item">
       <GalleryModal image={require(`../static/images/${item}`)}/>
     </div>
    )
    })
    return (
      <div>
        <div className="gallery-header">
          <div className="header-logo">
            <h1>King's Kitchen</h1>
          </div>
        </div>
        <div id="gallery" className='gallery container'>
          <div>
            <h1>Gallery</h1>
          </div>
          <div>
            <Masonry
              elementType={'div'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}
            >
              {masonry}
          </Masonry>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
