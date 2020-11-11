import React from 'react';
import BucketContainer from './../bucketContainer/bucketContainer'; 
import recipeContext, { RecipeConsumer } from '../../Context/context';

class DoughHydration extends React.Component {
  static contextType = recipeContext;
  constructor(props, context) {
    super(props, context);
    this.state={tracker:0}
  }


  componentDidUpdate(prevprops)
  {
    if (prevprops.hydration !== this.context.recipe.basehydration)
    {
      let newtracker = this.state.tracker+1;
      this.setState({tracker:newtracker});
    }
  }



  render() {
    return (

      <div>
        <RecipeConsumer>
          { props=>{ return <div>
            
      
        <BucketContainer 
        flourmass={(Math.round(props.flourmass))}
        watermass={(Math.round(props.watermass))}
        saltmass={(Math.round(props.flourmass*0.02))}
        saltwatermass={(Math.round(props.watermass*0.05))}
        autolyseflourmass= {(Math.round(0.8*props.flourmass))}
        autolysewatermass= {(Math.round(0.8*props.watermass))}
        starterflourmass={(Math.round(props.starterflourmass))}
        starterwatermass={(Math.round(props.startermass-props.starterflourmass))}
        startermass={(props.startermass)}
        eggmass={(Math.round(props.eggmass))}
        oilmass={(Math.round(props.oilmass))}
        milkmass={(Math.round(props.milkmass))}
        raisingagenttypeval={(Math.round(props.raisingagenttypeval))}
        freshyeastmass ={(props.freshyeastmass)}
        dryyeastmass={(props.dryyeastmass)}
         />
        <h2>Quantities</h2>
      {props.raisingagenttypeval===0 ? <div>
         <span>Mass of starter is {(Math.round(props.startermass))} g</span><br/>
         <span>Mass of flour in starter is {(Math.round(props.starterflourmass))} g</span><br/>
         <span>Mass of water in starter is {(Math.round(props.startermass-props.starterflourmass))} g</span>
         
        <h2>Remaining mass </h2>
      </div>:<div></div>}


        <span> Flour Type  {(props.flourType)}
        </span><br />
        <span> Using desired total Hydration (including starter hydration) {(props.hydrationpercent+props.hydrationadjust)} (bakers %)
        </span><br />

        <span> Recipe base Hydration  {(props.recipe.basehydration)} (bakers %)
        </span><br />
        {this.props.raisingagenttypeval===0 ? 
        <span> Mass to add to starter {(Math.round(props.doughmass - props.startermass))}g
        </span>
        :
        <span> Out of the Total Mass of  {(Math.round(props.doughmass))}g
        </span>}
        <br />

        <h2>The remaining mass is made up of </h2>
        <span> Total Flour Mass  {(Math.round(props.flourmass))}g
        </span><br />
        <span> Total Water Mass  {(props.watermass)}g
        </span><br />
        {((props.hydration<3) || (props.breadTitle==='pizza'))?<div>

        <span> Salt Mass  {(Math.round(props.flourmass*0.03))}g
        </span>

        </div> :<div>
          <h2>Mix this Autolyse Made up of </h2>
        <span> Flour Mass  {(Math.round(props.flourmass*0.8))}g
        </span><br />
        <span> Water Mass  {(Math.round(props.watermass*0.8))}g
        </span><br />
        <h2>And Mix Leaven Made up of </h2>
        {props.raisingagenttypeval===2 ?         <span>Dry Yeast {(Math.round(props.dryyeastmass))} g plus </span>:
            <span>    {props.raisingagenttypeval===1 ? <span>Fresh Yeast {(Math.round(props.freshyeastmass))} g plus </span>:
        <span>Starter {(Math.round(props.startermass))} g plus </span>}</span>}<br/>
        <span>Additional Flour Mass  {(Math.round(props.flourmass*0.2))}g
        </span><br />
        <span> Water for leaven Mass  {(Math.round(props.watermass*0.15))}g
        </span><br />
        <h2>Also Mix Salt  </h2>
        
        <span>Salt Mass  {(Math.round(props.flourmass*0.02))}g
        </span><br />
        <span> Water to dissolve salt {(Math.round(props.watermass*0.05))}g
        </span><br />

        </div>}
        </div>
      }}
      </RecipeConsumer>

      </div>

    );
  }
}

export default DoughHydration;