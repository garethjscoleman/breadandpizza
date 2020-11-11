import React from 'react';
import './bucket.css';


class Bucket extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.display = this.display.bind(this);


  }
 
 
  display = function(percent){
    try 
    {
      if (percent>0)
      {
        return 'block';
      }
    }
    catch{
      console.log("Error in display - bucket.js")
    }
    return 'none';
  }

  render() 
  {
    var height = 60;
    var totalmass = 4000;
    var starter = 0;
    var flour = 0;
    var egg = 0;
    var water = 0;
    var oil = 0;
    var salt = 0;
    var milk = 0;
    var dryyeast = 0;
    var freshyeast = 0;
    var heightorwidth = 'vh'
    var fillerStyle , starterStyle ,eggStyle, waterStyle, flourStyle , saltStyle,milkStyle, oilStyle, freshyeastStyle , dryyeastStyle ;
    const defaultStyle= {
      'height': '5 vh',
      'display': 'none'
    };
    fillerStyle = defaultStyle;
    starterStyle = defaultStyle;
    eggStyle = defaultStyle;
    waterStyle = defaultStyle;
    flourStyle = defaultStyle ;
    saltStyle = defaultStyle;
    milkStyle = defaultStyle;
    oilStyle = defaultStyle ;
    freshyeastStyle = defaultStyle;
    dryyeastStyle = defaultStyle;

    try 
    {
      totalmass =  1.05*(Math.round(0+this.props.milk) + 
      Math.round(0+this.props.water) + 
      Math.round(0+this.props.flour) + 
      Math.round(0+this.props.egg) +
      Math.round(0+this.props.oil) +  
      Math.round(0+this.props.dryyeast) +  
      Math.round(0+this.props.freshyeast) +  
      Math.round(0+this.props.salt) + 
      Math.round(0+this.props.starter));
      starter =   Math.round(height*this.props.starter / totalmass);
      flour =   Math.round(height*this.props.flour / totalmass);
      egg =   Math.round(height*this.props.egg / totalmass);
      water =   Math.round(height*this.props.water / totalmass);
      oil =   Math.round(height*this.props.oil / totalmass);
      salt =   Math.round(height*this.props.salt / totalmass);
      milk =   Math.round(height*this.props.milk / totalmass);
      dryyeast =   Math.round(height*this.props.dryyeast / totalmass);
      freshyeast =   Math.round(height*this.props.freshyeast / totalmass);

      fillerStyle = {
        'height': 5 + heightorwidth,
      };
      starterStyle = {
        'height': starter + heightorwidth,
        'display': this.display(starter),
      };
      eggStyle = {
        'height': egg + heightorwidth,
        'display': (this.display(egg))
      };
      waterStyle = {
        'height': Math.round(0.9*water) + heightorwidth,
        'display': (this.display(water))
      };
      flourStyle = {
        'height': Math.round(0.9*flour) + heightorwidth,
        'display': (this.display(flour))
      };
      saltStyle = {
        'height': (5+salt) + heightorwidth,
        'display': (this.display(salt))
      };
      milkStyle = {
        'height': milk + heightorwidth,
        'display': (this.display(milk))
      };
      oilStyle = {
        'height': oil + heightorwidth,
        'display': (this.display(oil))
      };
      freshyeastStyle = {
        'height': (5+freshyeast) + heightorwidth,
        'display': (this.display(freshyeast))
      };
      dryyeastStyle = {
        'height': (5+dryyeast) + heightorwidth,
        'display': (this.display(dryyeast))
      };
    }
    catch
    {
      console.log("Error in bucket ingredient display bucket.js")
    }

    return (
      <div className='bucketcontainer'>
          <div className='filler' style={fillerStyle}><span>{(this.props.title)}</span></div>
          <div className='starter' style={starterStyle} >{(this.props.starter)} g starter</div>
          <div className='flour' style={flourStyle}>{(this.props.flour)} g flour</div>
          <div className='water' style={waterStyle}>{(this.props.water)} g water</div>
          <div className='milk' style={milkStyle}>{(this.props.milk)} g milk</div>
          <div className='egg' style={eggStyle}>{(this.props.egg)} g egg</div>
          <div className='oil' style={oilStyle}>{(this.props.oil)} g oil</div>
          <div className='freshyeast' style={freshyeastStyle}>{(this.props.freshyeast)} g fresh yeast</div>
          <div className='dryyeast' style={dryyeastStyle}>{(this.props.dryyeast)} g dry yeast</div>
          <div className='salt' style={saltStyle}>{(this.props.salt)} g salt</div>
      </div>
    );
  }
}

export default Bucket;