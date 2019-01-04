import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Clearfix } from 'react-bootstrap';
import BreadNavbar from './Components/BreadNavbar/breadNavbar';
import QuantitiesAndTimes from './Components/quanitiesAndTimes/quantitiesAndTimes';
import './App.css';

class App extends Component {

  render() {

  const dummySentences = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  Donec hendrerit tempor tellus.\
    Donec pretium posuere tellus.\
    Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.\
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\
    Nulla posuere.\
    Donec vitae dolor.\
    Nullam tristique diam non turpis.\
    Cras placerat accumsan nulla.\
    Nullam rutrum.\
    Nam vestibulum accumsan nisl.';
    
    
  const gridInstance = (

    <Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
    </Col>
    <Col xs={6} md={4}>
    </Col>
  </Row>

 

  
  <Row className="show-grid">
    <Col md={6} mdPush={6}>
    </Col>
    <Col md={6} mdPull={6}>
    </Col>
  </Row>
  </Grid>);



  
    return (
      <div className="App">
         <BreadNavbar navExpanded='true'/>
         <QuantitiesAndTimes/>
        {gridInstance}
      </div>
    );
  }
}

export default App;
