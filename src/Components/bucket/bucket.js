import React, { Component } from 'react';
import './bucket.css';

class Bucket extends React.Component {
  constructor(props, context) {
    super(props, context);
 
    this.display = this.display.bind(this);

  }
 
  

 
  

 
  
 
  display = function(percent){
    if (percent>0)
    {
      return 'block';
    }
    return 'none';
  }

  render() {
    var height = 60;
    var totalmass =     1.05*(Math.round(this.props.milk) + 
    Math.round(this.props.water) + 
    Math.round(this.props.flour) + 
    Math.round(this.props.egg) +
    Math.round(this.props.oil) +  
    Math.round(this.props.dryyeast) +  
    Math.round(this.props.freshyeast) +  
    Math.round(this.props.salt) + 
    Math.round(this.props.starter));
    var starter =   Math.round(height*this.props.starter / totalmass)
    var flour =   Math.round(height*this.props.flour / totalmass)
    var egg =   Math.round(height*this.props.egg / totalmass)
    var water =   Math.round(height*this.props.water / totalmass)
    var oil =   Math.round(height*this.props.oil / totalmass)
    var salt =   Math.round(height*this.props.salt / totalmass)
    var milk =   Math.round(height*this.props.milk / totalmass)
    var dryyeast =   Math.round(height*this.props.dryyeast / totalmass)
    var freshyeast =   Math.round(height*this.props.freshyeast / totalmass)
    
   


   var heightorwidth = 'vh'

    var fillerStyle = {
      'height': 5 + heightorwidth,
    };
    var starterStyle = {
      'height': starter + heightorwidth,
      'display': this.display(starter),
    };
    var eggStyle = {
      'height': egg + heightorwidth,
      'display': (this.display(egg))
    };
    var waterStyle = {
      'height': (water-10) + heightorwidth,
      'display': (this.display(water))
    };
    var flourStyle = {
      'height': flour + heightorwidth,
      'display': (this.display(flour))
    };
    var saltStyle = {
      'height': (5+salt) + heightorwidth,
      'display': (this.display(salt))
    };
    var milkStyle = {
      'height': milk + heightorwidth,
      'display': (this.display(milk))
    };
    var oilStyle = {
      'height': oil + heightorwidth,
      'display': (this.display(oil))
    };
    var freshyeastStyle = {
      'height': (5+freshyeast) + heightorwidth,
      'display': (this.display(freshyeast))
    };
    var dryyeastStyle = {
      'height': (5+dryyeast) + heightorwidth,
      'display': (this.display(dryyeast))
    };

    return (
        <div className='bucketcontainer'>
            <div className='filler' style={fillerStyle}><span>{(this.props.title)}</span></div>
            <div className='starter' style={starterStyle} >{(this.props.starter)}g starter</div>
            <div className='flour' style={flourStyle}>{(this.props.flour)} g flour</div>
            <div className='water' style={waterStyle}>{(this.props.water)} g water</div>
            <div className='milk' style={milkStyle}>{(this.props.milk)} g milk</div>
            <div className='egg' style={eggStyle}>{(this.props.egg)} g egg</div>
            <div className='oil' style={oilStyle}>{(this.props.oil)}g oil</div>
            <div className='freshyeast' style={freshyeastStyle}>{(this.props.freshyeast)}g fresh yeast</div>
            <div className='dryyeast' style={dryyeastStyle}>{(this.props.dryyeast)}g dry yeast</div>
            <div className='salt' style={saltStyle}>{(this.props.salt)}g salt </div>
        </div>
    );
  }
}

export default Bucket;