import React, { Component } from 'react';

import './imageComp.css';

class ImageComp extends React.Component {
  constructor(props) {
    super(props)    
    
  }
  
  render() {
    return (
      <div class='image'>
      <img alt={this.props.imagedescription} src={(this.props.imageUrl)}/>
     
      </div>
    )
  }
 }

 export default ImageComp;