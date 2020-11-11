import React from 'react';
import {  ControlLabel,  HelpBlock,Modal, Button}  from 'react-bootstrap';
import InputRange from 'react-input-range';

import './quantityAdjuster.css';

class QuantityAdjusters extends React.Component {
    constructor(props, context) {
        super(props, context);
        var showClass = "Hide";
        this.showClass = showClass;
        this.hideOrShow = this.hideOrShow.bind(this);
        this.saveState = this.saveState.bind(this);

    
        this.state = {
          show :false,
        };
    }

    saveState(stateToSave){
        this.setState(stateToSave);
    }


    hideOrShow(){
        this.saveState(state => ({
        show: !state.show
        }));
        this.show = !this.show;
        if(this.show)
        {
        this.showClass = 'Show';
        }
        else
        {
        this.showClass = 'Hide';
        }

    }

  render() {
    return (
        <>
        <i className="fa fa-balance-scale fa-2x" onClick={this.hideOrShow}></i>
        <Modal 
            show={this.state.show} 
            onHide={this.hideOrShow}
            dialogClassName="modal-90w"
            >
        <Modal.Header closeButton  >
            <Modal.Title>Quantity Adjusters</Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <div> 
        { this.props.breadTitle === 'Pizza'  ? (
            <div> 
    
                <ControlLabel>How Many Pizzas do you want &#63;   </ControlLabel>
                <InputRange 
                step={1}
                maxValue={15}
                minValue={1}
                value={this.props.quantity}
                onChange={this.props.handleQuantityChange } 
                />

                <HelpBlock>This has to be a number between 1 and 5000.</HelpBlock>
                <ControlLabel>How big should they be</ControlLabel>
                <InputRange 
                formatLabel={value =>  (value + '"') }
                step={1}
                maxValue={18}
                minValue={7}
                value={this.props.size}
                onChange={this.props.handleSizeChange}
                />
                <HelpBlock>This has to be a number between 7 and 18 inches.</HelpBlock> 
            </ div> 
        ):(
            <div>
                <ControlLabel>How large do you want your loaf&#63;</ControlLabel>
                <InputRange 
                formatLabel={value=>  value + " g " }             
                formatMinLabel={100}
                formatMaxLabel={3000}
                step={50}
                maxValue={3000}
                minValue={100}
                value={this.props.doughMass}
                onChange={this.props.handleDoughMassChange} 
                />

                <HelpBlock>This has to be a number between 1 and 5000.</HelpBlock>
            </div>
        )
        }           

        <div> This is total mass of dough we need {Math.round((this.props.size*this.props.size/81)*this.props.quantity*225)}g
        </div>
        
        <ControlLabel>What Type of Raising Agent do you want to use&#63;</ControlLabel>
        <InputRange 
        formatLabel={value => {if(value===0){return 'Sour Dough';}if(value===1){return 'Fresh Yeast';}return 'Dry Yeast'; }}
        formatMinLabel={'Sour Dough'}
        formatMaxLabel={'Dry Yeast'}
        step={1}
        maxValue={2}
        minValue={0}
        value={this.props.raisingagenttypeval}
        onChange={this.props.handleRaisingAgentChange} 

        />
        <HelpBlock></HelpBlock>
        { this.props.raisingagenttypeval===0 ? 
            <div> 

                <ControlLabel>How Much Starter do you have&#63;</ControlLabel>
                <InputRange 
                formatLabel={value => value + "g"}
                step={Math.round(this.props.doughMass/60)}
                maxValue={Math.round(this.props.doughMass*3/4)}
                minValue={0.00001}
                value={this.props.starterMass}
                onChange={this.props.handleStarterMassChange} 

                />
                <HelpBlock>This has to be a number between 10 and 5000.</HelpBlock>
            </div>
        :
            <div>
            {  this.props.raisingagenttypeval===2 ?
                <div>
                    <ControlLabel>How Much Dry Yeast do you want to use&#63;</ControlLabel>
                    <InputRange 
                    formatLabel={value => value+ "g"}
                    step={0.5}
                    maxValue={Math.round(this.props.doughMass/90)}
                    minValue={0.00001}
                    value={this.props.dryyeastmass}
                    onChange={this.props.handleDryYeastChange} 

                    />
                </div>
            :
                <div> 

                    <HelpBlock>This has to be a number between 10 and 5000.</HelpBlock>
                    <ControlLabel>How Much Fresh Yeast do you want to use&#63;</ControlLabel>
                    <InputRange 
                    formatLabel={value => value + "g"}
                    step={1}
                    maxValue={Math.round(this.props.doughMass/(21))}
                    minValue={0.001}
                    value={this.props.freshyeastmass}
                    onChange={this.props.handleFreshYeastChange} 

                    />
                    <HelpBlock>This has to be a number between 10 and 5000.</HelpBlock>

                </div>
            }
            </div>
        }
             <ControlLabel>How much hydration &#63;</ControlLabel>
             <InputRange 
                formatLabel={value => {if(value<4){return 'Low';}if(value>7){return 'High';}return 'Medium'; }}
                formatMinLabel={' Low Hydration'}
                formatMaxLabel={' High Hydration'}
                step={1}
                maxValue={9}
                minValue={1}
                value={this.props.hydration}
                onChange={this.props.handleChangeHydration} 
           />
           <HelpBlock>This adjusts between -10 and plus 10 percent.</HelpBlock>
        </div>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary" onClick={this.hideOrShow}>Close</Button>
        </Modal.Footer>
        </Modal>
        </>
    )
  }
}
export default QuantityAdjusters;