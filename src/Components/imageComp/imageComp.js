import React from 'react';

import './imageComp.css';

class ImageComp extends React.Component {
  
  render() {
    return (
      <div className='image'>
        <img alt={this.props.imagedescription} src={'/images'+(this.props.imageUrl)}/>   
      </div>
    )
  }
 }

 export default ImageComp;