import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import React, { Component } from 'react'

class Carousel extends Component {
  render() {
    return (
      <ImageGallery
        showNav={false}
        autoPlay={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        items={this.props.imgs}
      />
    )
  }
}

export default Carousel
