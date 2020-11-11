 import React from 'react';
 import {getrecipelist, validateRecipe} from './../../RecipeList/recipelist';
 import StepComp  from './../stepComp/stepComp';
 import recipeContext from './../../Context/context';

 import './stepsContainerComp.css';
 
 class StepContainerComp extends React.Component {
  static contextType = recipeContext;
   constructor(props,context) {
     super(props) 
     this.state ={
       currentStep:{},
       currentStepwithIngredients:{},
       currentstepid:-1,
       recipeid:0,
       recipe:null,
     }

    this.changeStep = this.changeStep.bind(this);
    this.handlechangeStep = this.handlechangeStep.bind(this);
    this.changeRecipe = this.changeRecipe.bind(this);
    
   }

   componentDidUpdate(prevprops) {
    try {
      if (this.props.recipeid !== prevprops.recipeid || this.props.totalMass !== prevprops.totalMass || this.props.starterMass !== prevprops.starterMass )
      {
        var stateToSave = this.state;
        this.recipelist = getrecipelist();
        stateToSave.recipe = this.recipelist[this.props.recipeid];
        this.setState(stateToSave);
        this.changeRecipe(this.props.recipeid)
      }
    }
    catch {
      console.log("Error obtaining validation state  quantitiesAndTimes.js");
    }
}


   componentWillMount()
   {
    try 
    {
      var recipeid =this.state.recipeid;
      if (!!this.props.recipeid){
        recipeid = this.props.recipeid;
      }
      var stateToSave = this.state;
      this.recipelist = getrecipelist();
      stateToSave.recipe = this.recipelist[recipeid];
      this.setState(stateToSave);
      this.changeRecipe(recipeid);
    }
    catch {
      console.log("Error obtaining validation state  quantitiesAndTimes.js");
    }
   }

   changeRecipe(newRecipeID){
     try {
        var doughProps = this.context;
        var stateToSave = this.state;
        this.recipelist = getrecipelist();
        stateToSave.recipe = this.recipelist[this.props.recipeid];
        if ( !!this.recipelist){
          stateToSave.recipe = this.recipelist.find(function(arecipe) {
            return arecipe.recipeid.toString() === newRecipeID.toString();
          });
          stateToSave.recipe.originalinstructions = stateToSave.recipe.instructions;

          stateToSave= this.changeStep(0,stateToSave);
          this.setState(stateToSave);
        }
      }
      catch {
        console.log("Error in componentWillMount  stepsContainerComp.js");
      }
  
    }

  handlechangeStep(i,j) 
    {
      try {
        var thestate = this.state;
        thestate = this.changeStep(j.id, thestate);
        this.setState(thestate);
      }
      catch {
        console.log("Error in changing step  stepsContainerComp.js");
      }
  
    }

   changeStep(newStep, thestate){
     
    thestate.currentstepid = newStep;
    thestate.currentStep = thestate.recipe.originalinstructions.find(function(instruction) {
      return instruction.id.toString() === newStep.toString();
      
    });
    return thestate;
  }


   render() {
    var doughProps = this.context;
    if (!this.state.recipe && !!this.state.recipelist)
     {
       this.changeRecipe(this.state.recipeid);
     }
     var thestate = this.state;
     var therecipe = thestate.recipe;
     doughProps.hydrationpercent = therecipe.basehydration;
     therecipe = validateRecipe(therecipe, doughProps.doughmass,doughProps.startermass, doughProps.hydrationpercent + doughProps.hydrationadjust , doughProps.raisingagenttype); 
     thestate = this.changeStep(thestate.currentstepid,thestate)
     therecipe.ingredients.forEach(function(ingredient) { 
      var regex='{id:'+ ingredient.id +'}' ; thestate.currentStep.description = thestate.currentStep.description.replace(regex,ingredient.quantity + ' ' +ingredient.unit);
     });



     return (
       <div className="steps">
          <div className="stepnums">
            <div className="stepHead"></div>
            {
            (!!therecipe && !!therecipe.instructions) ? 
            therecipe.instructions.map((item,i) => <div key={i} className={"stepnum "+(i===this.state.currentstepid ? 'current' : '')}   
            onClick={(e) => {this.handlechangeStep(e, item) }}
                >{(i+1)} </div>)
              : <div/>
            }
        </div>
        <div className="step">
          <div className="stepdescriptionhead">
          </div>
          <StepComp  step={this.state.currentstepid} steptitle={this.state.currentStep.title} stepdetail={this.state.currentStep.description} temp={this.state.currentStep.temp} />
        </div>
      </div>
     )
    };
  }
 
  export default StepContainerComp;