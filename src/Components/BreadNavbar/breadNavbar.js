import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

import './breadNavbar.css';

class BreadNavbar extends Component 
{

  constructor(props) {
    super(props);
    this.state = {
      navExpanded: true,
      breadType: props.breadType
    }
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {

    
  }

  handleSelect(selectedKey) {
    var newBreadType ='roundloaf';
    var location = 'bread';
    switch (selectedKey) {
      case 3.1 :
      case 3.2 :
        newBreadType ='roundloaf'
        break;
      case 3.3 :
        newBreadType ='roundloaf'
        break;
      case 3.4 :
      newBreadType ='baguette'
      break;

      case 3.5 :
        newBreadType ='roundloaf'
        break;
      case 1 :
        newBreadType ='pizza'
        break;
      case 0:
        location = 'signin';
        break;
      default:
        newBreadType ='roundloaf';
    }
    this.setState({breadType:newBreadType});
    this.props.onChangeBreadType(newBreadType);  
    this.props.onChangeLocation(location); 
  }
  
  setNavExpanded(expanded) {
    this.setState({ navExpanded: expanded });
  }

  closeNav() {
    this.setState({ navExpanded: false });
  }

  render() {

    return (

      <Navbar collapseOnSelect  >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Bread and Pizza - {(this.state.breadType)}</a>
          </Navbar.Brand>
          
          <Navbar.Toggle/>
        </Navbar.Header>
        
        <Navbar.Collapse >
          <Nav 
            onSelect={key => this.handleSelect(key)}
            activeKey={1} >
            <NavDropdown eventKey={3} title="Bread" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="#bread">Starter</MenuItem>
              <MenuItem eventKey={3.2} href="#bread">Dough</MenuItem>
              <MenuItem eventKey={3.3} href="#bread">Proof</MenuItem>
              <MenuItem eventKey={3.4} href="#bread">Shaping- baguette</MenuItem>
              <MenuItem eventKey={3.5} href="#bread">Second Rise</MenuItem>
              <MenuItem eventKey={3.6} href="#bread">Baking</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.7} href="#bread">Rolls</MenuItem>
              <MenuItem eventKey={3.8} href="#bread">Round Loaf</MenuItem>
              <MenuItem eventKey={3.9} href="#Bagels">Bagels</MenuItem>
              <MenuItem eventKey={3.10} href="#Wholewhea">Whole-Wheat Boule</MenuItem>
              <MenuItem eventKey={3.11} href="#Baguette">Baguette</MenuItem>
              <MenuItem eventKey={3.12} href="#Ciabatta">Ciabatta</MenuItem>
              <MenuItem eventKey={3.13} href="#Focaccia">Focaccia</MenuItem>
              <MenuItem eventKey={3.14} href="#Bannock">Bannock</MenuItem>
              <MenuItem eventKey={3.14} href="#Black">Black Bread</MenuItem>
              <MenuItem eventKey={3.15} href="#Borodinksy">Borodinksy</MenuItem>
              <MenuItem eventKey={3.16} href="#Boule">Boule</MenuItem>
              <MenuItem eventKey={3.17} href="#Brioche">Brioche</MenuItem>
              <MenuItem eventKey={3.18} href="#Chapati">Chapati</MenuItem>
              <MenuItem eventKey={3.19} href="#Cottage">Cottage Loaf</MenuItem>
              <MenuItem eventKey={3.20} href="#Fougasse">Fougasse</MenuItem>
              <MenuItem eventKey={3.21} href="#Milk">Milk Loaf</MenuItem>
              <MenuItem eventKey={3.22} href="#Paratha">Paratha</MenuItem>
              <MenuItem eventKey={3.23} href="#Pistolet">Pistolet</MenuItem>
              <MenuItem eventKey={3.24} href="#Pitta">Pitta</MenuItem>
              <MenuItem eventKey={3.24} href="#Pretzel">Pretzel</MenuItem>
              <MenuItem eventKey={3.25} href="#Teacake">Teacake</MenuItem>
              <MenuItem eventKey={3.26} href="#Tortilla">Tortilla</MenuItem>
              <MenuItem eventKey={3.27} href="#Flat">Flat</MenuItem>
              
            </NavDropdown>
            <NavItem eventKey={1} href="#pizza">
              Pizza
            </NavItem>
            <NavItem eventKey={0} href="#pizza">
              Sign in
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );  
  }
}

export default BreadNavbar;