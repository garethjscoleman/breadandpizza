import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { getrecipelist } from '../../RecipeList/recipelist';
import { LinkContainer } from 'react-router-bootstrap';
import BreadMenuItem from '../breadMenuitem/breadMenuitem';
import './breadNavbar.css';



class BreadNavbar extends Component 
{

  constructor(props) {
    super(props);
    this.state = {
      navExpanded: true,
      recipe: props.recipe

    }
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
    var recipelist = getrecipelist().sort((a, b) => (a.title > b.title) ? 1 : -1);
    this.recipelist=recipelist;
    var breadTypes = [];
    var pizzaTypes = [];

    var breadrecipes = recipelist.filter(recipe => recipe.type === 'Bread');
    var pizzarecipes = recipelist.filter(recipe => recipe.type === 'Pizza');
    breadrecipes.forEach (function(recipe)  
    {
      var navItem = {
        breadTitle : recipe.title,
        recipeid : recipe.recipeid,
        navigation : '4.' + recipe.recipeid,
        type: recipe.type

      }
      breadTypes.push(navItem);
    });
    this.breadTypes=breadTypes;
    pizzarecipes.forEach (function(recipe)  
    {
      var navItem = {
        breadTitle : recipe.title,
        recipeid : recipe.recipeid,
        navigation : '5.' + recipe.recipeid,
        type: recipe.type

      }
      pizzaTypes.push(navItem);
    });
    this.pizzaTypes=pizzaTypes;


  }



  
  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  closeNav() {
    this.setState({ navExpanded: false });
  }

  render() {
    const breads = this.breadTypes;

    const pizzas = this.pizzaTypes;
    return (

      <Navbar collapseOnSelect  >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Bread and Pizza </a>
          </Navbar.Brand>
          
          <Navbar.Toggle/>
        </Navbar.Header>
        
        <Navbar.Collapse >
          <Nav 
            activeKey={1} >
            <NavDropdown key={3} eventKey={3} title="Bread" id="basic-nav-dropdown">
              <LinkContainer onSelect={this.closeNav} to="/Starter" key={"Starter"} >
                <MenuItem   key={"-"+(this.props.navigation)} eventKey={3.1} >Starter</MenuItem>
              </LinkContainer>
              <MenuItem key={3.2} eventKey={3.2} href="#Round%20Loaf">Dough</MenuItem>
              <MenuItem key={3.3} eventKey={3.3} href="#Round%20Loaf">Proof</MenuItem>
              <MenuItem key={3.4} eventKey={3.4} href="#Round%20Loaf">Shaping- baguette</MenuItem>
              <MenuItem key={3.5} eventKey={3.5} href="#Round%20Loaf">Second Rise</MenuItem>
              <MenuItem key={3.6} eventKey={3.6} href="#Round%20Loaf">Baking</MenuItem>
              <MenuItem key={3.0001} divider />
              {
                breads.map((item,i) => <BreadMenuItem key={"s--"+(item.navigation)} onSelected={this.closeNav} placeToGo={"/recipes/"+item.breadTitle} navigation={item.navigation} breadTitle={item.breadTitle} /> )
               }
              
            </NavDropdown>
            <NavDropdown key={5} eventKey={5} title="Pizza" id="basic-nav-dropdown">
            {
              pizzas.map((item,i) =>  <BreadMenuItem key={"---"+(item.navigation)} onSelected={this.closeNav}  placeToGo={"/recipes/"+ item.breadTitle} navigation={item.navigation} breadTitle={item.breadTitle}  />  )
            }

            </NavDropdown>
            <LinkContainer to="/Signin">
            <NavItem eventKey={0} href="/Signin">
              Sign in
            </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );  
  }
}

export default BreadNavbar;