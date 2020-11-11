import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignInScreen from './Services/firebase/firebase.js';
import BreadNavbar from './Components/BreadNavbar/breadNavbar';
import {getrecipelist} from './RecipeList/recipelist';
import QuantitiesAndTimes from './Components/quantitiesAndTimes/quantitiesAndTimes';
import Starter from './Components/Starter/starter';
import './App.css';
import './input-moment.min.css'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    var recipelist = getrecipelist().sort((a, b) => (a.title > b.title) ? 1 : -1);
    var stitle = 'Bagels';
    var recipeid = 3;
    if (window.location.toString().indexOf('/recipes')>0)
    {
      stitle = decodeURIComponent(window.location.toString().substring(window.location.toString().indexOf('/recipes')+9));
      recipeid =  recipelist.find(function(arec){ return arec.title===stitle}).recipeid;
    }

    this.state = {
      initiallocation: window.location,
      recipe:recipeid,
      location: null,
      recipetitle:stitle
    }

  this.handleRecipeChange = this.handleRecipeChange.bind(this);
  }

  handleRecipeChange( newrecipe, newLocation){
    this.setState({ recipe: newrecipe,location:newLocation});
  }


  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
  
          if (reg.waiting) {
            // a new version is already waiting to take control
            this.newWorker = reg.waiting;
  
            /*
              code omitted: displays a snackbar to the user to manually trigger
              activation of the new SW. This will be done by calling skipWaiting()
              then reloading the page
            */
          }
  
          // handler for updates occuring while the app is running, either actively or in the background
          reg.onupdatefound = () => {
            this.newWorker = reg.installing;
  
            this.newWorker.onstatechange = () => {
              if (this.newWorker.state === 'installed') {
                if (reg.active) {
                  // a version of the SW already has control over the app
  
                  /*
                    same code omitted
                  */
                } else {
                  // very first service worker registration, do nothing
                }
              }
            };
          };
        });
    }
  }

  render() {
    var recipelist = getrecipelist().sort((a, b) => (a.title > b.title) ? 1 : -1);
    var breadrecipes = recipelist.filter(recipe => recipe.type === 'Bread');
    const defaultpath = "/recipes/" + this.state.recipetitle;
    const currentlocation = window.location.href; 
    
    return (
      <Router>
      <div className="App">                
         <BreadNavbar navExpanded='true'    onChangeRecipe={this.handleRecipeChange} />
         <div key={currentlocation}><Route path="/recipes/:recipeid"  component={QuantitiesAndTimes} /></div>
         <Route path="/signin/" component={SignInScreen} />
         <Route path="/Starter/" component={Starter} />
         <Redirect from="/" 
            to={{
              pathname: defaultpath,
              state: {  }
            }}
          />
          ):
         <div className='footer'></div>
      </div>
      </Router>
    );
  }
}

/*         {this.state.location !== undefined && this.state.location === 'signin' &&
         <Redirect from="/" exact to="/recipeid/Bagels" />

<SignInScreen/>
         }
         <QuantitiesAndTimes  recipe={(this.state.recipe)} onChangeRecipe={this.handleRecipeChange} />
*/

export default App;
