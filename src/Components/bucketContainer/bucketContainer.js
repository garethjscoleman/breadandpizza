
import React, { Component } from 'react';
import Bucket from './../bucket/bucket'; 


import './bucketContainer.css';


class BucketContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
 this.state={'view':1,
'clicked':0,
'touched':1
};
 this.scrollBuckets = this.scrollBuckets.bind(this);

  }





  scrollBuckets = function(){
    var stateToSave = this.state;
    stateToSave.view++;
    stateToSave.clicked=2;
    if (stateToSave.view===3 && this.props.raisingagenttypeval!==0){
      stateToSave.view=5;
    }
    if(stateToSave.view>5){
      stateToSave.view=1;
    }
    this.setState(stateToSave);  
  }  

  render() {
    var view = this.state.view;
    var displaystarter = ((view===3 || view===4  ) && this.props.raisingagenttypeval===0);
    if (!displaystarter){

    }
    var freshyeast=0;
    var dryyeast=0;
    var starter=0;
    switch (this.props.raisingagenttypeval)
    {case 0:
      starter=this.props.startermass;
      break;
     case 1:
      freshyeast=this.props.freshyeastmass;
     break;
     case 2:
      dryyeast=this.props.dryyeastmass;
     break;

    }
    return (

    <div className='bucketscontainer'>
    {(view===1) ?
        <div className='bucketcontainermainmix'>
        <Bucket flour={(this.props.flourmass)} 
        water={(this.props.watermass)} 
        starter={(starter)} 
        salt={(this.props.saltmass)} 
        egg={(this.props.eggmass)} 
        oil={(this.props.oilmass)}
        freshyeast={(freshyeast)} 
        dryyeast={(dryyeast)} 
        milk={(this.props.milkmass)}  
        title='Main Mix'/>  
        </div>
        :<div/>}
    {(view===2) ?
        <div className='bucketcontainerautolysemix'>
        <Bucket flour={Math.round(0.8*this.props.autolyseflourmass)}
        water={Math.round(0.8*this.props.autolysewatermass)}
        salt='0'
        egg='0'
        oil='0'
        freshyeast='0' 
        dryyeast='0' 
        milk='0'
        starter='0'
        title='Autolyse Mix' />
        </div>
        : <div/>
    }
    { (displaystarter===true && view===3 ) ?
        <div className='bucketcontainerstartermix'>
        <Bucket flour={(this.props.starterflourmass)}
        water={(this.props.starterwatermass)}
        salt='0'
        egg='0'
        oil='0'
        freshyeast='0' 
        dryyeast='0' 
        milk='0'
        starter='0'
        title='Starter Mix'/>
        </div> :
      <div/>
      }
      {  (displaystarter===true && view===4) ?
        <div className='bucketcontainerleavenmix'>
        <Bucket flour={(Math.round(this.props.flourmass*0.2))}
        water={(Math.round(this.props.watermass*0.15))}
        salt='0'
        egg='0'
        oil='0'
        freshyeast='0'
        dryyeast='0' 
        milk='0'
        starter={(this.props.startermass)}
        title='Leaven Mix'/>
        </div>
        :<div/> }
      {  view===5 ?
        <div className='bucketcontainersaltmix'>
        <Bucket flour='0'
        water={(this.props.saltwatermass)}
        salt={(this.props.saltmass)}
        egg='0'
        oil='0'
        freshyeast='0'
        dryyeast='0' 
        milk='0'
        starter='0'
        title='Salt Mix'/>
        </div>
        :<div/> }
        <div 
        onClick={this.scrollBuckets} 
        className='bucketscroller' >
         <div className="bucketButtons">
         {(view===1) ?
              <div className="circlehighlight" ></div>
:            <div className="circle" ></div>
         }
         {(view===2) ?
              <div className="circlehighlight" ></div>
:            <div className="circle" ></div>}
        {(view===3) ?
              <div className="circlehighlight" ></div>
:            <div className="circle" ></div>}
        {(view===4) ?
            <div className="circlehighlight" ></div>
:            <div className="circle" ></div>}
        {(view===5) ?
            <div className="circlehighlight" ></div>
:            <div className="circle" ></div>}
          </div>
          
        </div>
    </div>
    );
  }
}

export default BucketContainer;