import React, { Component } from 'react';
import BucketContainer from './../bucketContainer/bucketContainer'; 

class DoughHydration extends React.Component {
  constructor(props, context) {
    super(props, context);


  }
 
  

  render() {
    return (

      <div>

        
      
        <BucketContainer 
        flourmass={(Math.round(this.props.flourmass))}
        watermass={(Math.round(this.props.watermass))}
        saltmass={(Math.round(this.props.flourmass*0.02))}
        saltwatermass={(Math.round(this.props.watermass*0.05))}
        autolyseflourmass= {(Math.round(0.8*this.props.flourmass))}
        autolysewatermass= {(Math.round(0.8*this.props.watermass))}
        starterflourmass={(Math.round(this.props.starterflourmass))}
        starterwatermass={(Math.round(this.props.startermass-this.props.starterflourmass))}
        startermass={(this.props.startermass)}
        eggmass={(Math.round(this.props.eggmass))}
        oilmass={(Math.round(this.props.oilmass))}
        milkmass={(Math.round(this.props.milkmass))}
        raisingagenttypeval={(Math.round(this.props.raisingagenttype))}
        freshyeastmass ={(this.props.freshyeastmass)}
        dryyeastmass={(this.props.dryyeastmass)}
         />
        
        <h2>Quantities</h2>
      {this.props.raisingagenttype===0 ? <div>
         <span>Mass of starter is {(Math.round(this.props.startermass))} g</span><br/>
         <span>Mass of flour in starter is {(Math.round(this.props.starterflourmass))} g</span><br/>
         <span>Mass of water in starter is {(Math.round(this.props.startermass-this.props.starterflourmass))} g</span>
         
        <h3>Remaining mass </h3>
      </div>:<div></div>}


        <span> Flour Type  {(this.props.flourType)}
        </span><br />
        <span> Using Hydration  {(this.props.hydrationpercent+this.props.hydrationadjust)} (bakers %)
        </span><br />
        {this.props.raisingagenttype===0 ? 
        <span> Mass to add to starter {(Math.round(this.props.doughmass - this.props.startermass))}g
        </span>
        :
        <span> Mass  {(Math.round(this.props.doughmass))}g
        </span>}
        <br />
        <h2>Made up of </h2>
        <span> Flour Mass  {(Math.round(this.props.flourmass))}g
        </span><br />
        <span> Water Mass  {(this.props.watermass)}g
        </span><br />
        {((this.props.hydration<3) || (this.props.breadType=='pizza'))?<div>

        <span> Salt Mass  {(Math.round(this.props.flourmass*0.03))}g
        </span>

        </div> :<div>
          <h2>Autolyse Made up of </h2>
        <span> Flour Mass  {(Math.round(this.props.flourmass*0.8))}g
        </span><br />
        <span> Water Mass  {(Math.round(this.props.watermass*0.8))}g
        </span><br />
        <h2>Leaven  Mix Made up of </h2>
        {this.props.raisingagenttype===2 ?         <span>Dry Yeast {(Math.round(this.props.dryyeastmass))} g plus </span>:
            <span>    {this.props.raisingagenttype===1 ? <span>Fresh Yeast {(Math.round(this.props.freshyeastmass))} g plus </span>:
        <span>Starter {(Math.round(this.props.startermass))} g plus </span>}</span>}<br/>
        <span>Additional Flour Mass  {(Math.round(this.props.flourmass*0.2))}g
        </span><br />
        <span> Water for leaven Mass  {(Math.round(this.props.watermass*0.15))}g
        </span><br />
        <h2>Salt  Mix  </h2>
        
        <span>Salt Mass  {(Math.round(this.props.flourmass*0.02))}g
        </span><br />
        <span> Water to dissolve salt {(Math.round(this.props.watermass*0.05))}g
        </span><br />

        </div>}



      </div>

    );
  }
}

export default DoughHydration;