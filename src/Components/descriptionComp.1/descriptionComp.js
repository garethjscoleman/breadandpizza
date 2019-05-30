 import React, { Component } from 'react';

 import './descriptionComp.css';
 
 class DescriptionComp extends React.Component {
   constructor(props) {
     super(props)    
     
   }
   
   render() {
     return (
       <div>
       <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      
       </div>
     )
   }
  }
 
  export default DescriptionComp;