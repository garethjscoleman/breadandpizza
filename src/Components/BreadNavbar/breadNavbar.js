import React, { Component } from 'react';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

import './breadNavbar.css';

class BreadNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {navExpanded: true}
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
      }


  handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
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
        <a href="#home">Bread and Pizza</a>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    
    <Navbar.Collapse >
      <Nav 
        onSelect={key => this.handleSelect(key)}
        activeKey={1} >
        <NavDropdown eventKey={3} title="Bread" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Starter</MenuItem>
          <MenuItem eventKey={3.2}>Dough</MenuItem>
          <MenuItem eventKey={3.3}>Proof</MenuItem>
          <MenuItem eventKey={3.4}>Shaping</MenuItem>
          <MenuItem eventKey={3.5}>Second Rise</MenuItem>
          <MenuItem eventKey={3.6}>Baking</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.7}>Rolls</MenuItem>
          <MenuItem eventKey={3.8}>Loaf</MenuItem>
        </NavDropdown>
        <NavItem eventKey={1} href="#pizza">
          Pizza
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
  
  }
}

export default BreadNavbar;