 import React, { Component } from 'react';

 import './adjustersComp.css';
 
 class AdjustersComp extends React.Component {
   constructor(props) {
     super(props)    
     
   }
   
   render() {
     return (
       <div>
       <h1>{this.props.time}</h1>
        <h2>{this.props.difficulty}</h2>
        <h2>{this.props.servings}</h2>
      
       </div>
     )
   }
  }
 
  export default AdjustersComp;