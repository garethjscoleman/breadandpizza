import React from 'react';
import recipeContext from './../../Context/context';
import {getrecipelist, validateRecipe} from './../../RecipeList/recipelist';
import './ingredientList.css';


class IngredientList extends React.Component {
     constructor(props,context) {
     super(props) 
     this.state ={
       recipe:null,
       recipeid:0
     }

    this.changeRecipe = this.changeRecipe.bind(this);
    
   }


   componentDidUpdate(prevprops) {
    try {
      if (this.props.recipeid !== prevprops.recipeid || this.props.totalMass !== prevprops.totalMass || this.props.starterMass !== prevprops.starterMass || this.props.hydrationadjust !== prevprops.hydrationadjust )
      {
        var stateToSave = this.state;
        this.recipelist = getrecipelist();
        stateToSave.recipe = this.recipelist[this.props.recipeid];
        this.changeRecipe(this.props.recipeid)
  
      

      var doughProps = this.context;

      var therecipe = this.state.recipe;
      if (typeof(doughProps) != 'undefined')
      {
        doughProps.hydrationpercent = therecipe.basehydration;
        therecipe = validateRecipe(therecipe, doughProps.doughmass,doughProps.startermass, doughProps.hydrationpercent + doughProps.hydrationadjust, doughProps.raisingagenttype ); 
        this.setState({recipe:therecipe});
      }
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
 catch 
 {
  console.log("Error displaying ingredients ingredientList.js");
 }
}

   changeRecipe(newRecipeID){
      try 
      {
        var stateToSave = this.state;
        this.recipelist = getrecipelist();
        if ( !!this.recipelist){
          stateToSave.recipe = this.recipelist.find(function(arecipe) {
          return arecipe.recipeid.toString() === newRecipeID.toString();
        });
        this.setState(stateToSave);

        }
    }
    catch {
      console.log("Error displaying ingredients ingredientList.js");
    }
   }




  render() {
    const therecipe = this.state.recipe;
    const theingredients = therecipe.ingredients.filter(ingredient => (ingredient.quantity>0));
    
    return (
        <div className="ingredients" recipe={(this.props.recipeid)}>
          <div className="header ingredientRow">
            <div className="quantityHead"><h2>Quantity</h2></div>
            <div className="nameHead"><h2>Ingredient</h2></div>
            <div className="percentageHead"><h2>Bakers Percentage</h2></div>
          </div>
          {
            (!!therecipe && !!theingredients &&
              ( theingredients.map
                (
                  (item,i) =>  
                  (therecipe.leavencomponents.filter(component =>(component.id=== item.id) ).length===0  ?
                    (<div className="ingredientRow" key={i}>
                      <div className='quantity'>{(item.quantity)} g</div>
                      <div className='ingredientName' >{(item.name)} {item.name === 'eggs' && <span> thats about {(Math.round(2*item.quantity/63)/2)} eggs </span> } </div>
                      <div className='ingredientPercentage' >{Math.round(item.ratio).toString().padStart(2,"0")} % </div>                  
                    </div>
                    )
                    :
                    ( this.context.raisingagenttype === 'Sourdough' ?

                    <div className="ingredientRow" key={i}>
                      <div className='quantity'>{(item.quantity)} g</div>
                      <div className='ingredientName' >{(item.name)}  </div>
                      <div className='ingredientPercentage' >0 % </div>
                    </div>
                    :
                    this.context.raisingagenttype === 'Freshyeast' ? 
                      <div className="ingredientRow" key={i}>
                        <div className='quantity'>{(item.quantity/10)} g</div>
                        <div className='ingredientName' >  fresh yeast </div>
                        <div className='ingredientPercentage' >0 % </div>
                      </div>
                      :
                      <div className="ingredientRow" key={i}>
                        <div className='quantity'>{(Math.round(item.quantity/70))} g</div>
                        <div className='ingredientName' >  dry yeast </div>
                        <div className='ingredientPercentage' >0 % </div>
                      </div>

                    )
                  )
                )
              )
            )
          }
      </div>
    )
  }; 
}

IngredientList.contextType = recipeContext;

 export default IngredientList;