(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a(250)},121:function(e,t,a){},123:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},124:function(e,t,a){},246:function(e,t,a){},248:function(e,t,a){},250:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),i=a.n(s),o=(a(121),a(15)),l=a(16),h=a(18),u=a(17),c=a(19),d=a(7),m=(a(123),a(149)),p=a(256),f=a(257),g=a(259),b=a(163),v=a(184),y=a(258),E=a(251),T=(a(124),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).state={navExpanded:!0,breadType:e.breadType},a.setNavExpanded=a.setNavExpanded.bind(Object(d.a)(Object(d.a)(a))),a.closeNav=a.closeNav.bind(Object(d.a)(Object(d.a)(a))),a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"handleSelect",value:function(e){var t="roundloaf";switch(e){case 3.1:case 3.2:case 3.3:t="roundloaf";break;case 3.4:t="baguette";break;case 3.5:t="roundloaf";break;case 1:t="pizza";break;default:t="roundloaf"}this.setState({breadType:t}),this.props.onChangeBreadType(t)}},{key:"setNavExpanded",value:function(e){this.setState({navExpanded:e})}},{key:"closeNav",value:function(){this.setState({navExpanded:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(g.a,{collapseOnSelect:!0},r.a.createElement(g.a.Header,null,r.a.createElement(g.a.Brand,null,r.a.createElement("a",{href:"#home"},"Bread and Pizza - ",this.state.breadType)),r.a.createElement(g.a.Toggle,null)),r.a.createElement(g.a.Collapse,null,r.a.createElement(b.a,{onSelect:function(t){return e.handleSelect(t)},activeKey:1},r.a.createElement(y.a,{eventKey:3,title:"Bread",id:"basic-nav-dropdown"},r.a.createElement(E.a,{eventKey:3.1},"Starter"),r.a.createElement(E.a,{eventKey:3.2},"Dough"),r.a.createElement(E.a,{eventKey:3.3},"Proof"),r.a.createElement(E.a,{eventKey:3.4},"Shaping- baguette"),r.a.createElement(E.a,{eventKey:3.5},"Second Rise"),r.a.createElement(E.a,{eventKey:3.6},"Baking"),r.a.createElement(E.a,{divider:!0}),r.a.createElement(E.a,{eventKey:3.7},"Rolls"),r.a.createElement(E.a,{eventKey:3.8},"Loaf")),r.a.createElement(v.a,{eventKey:1,href:"#pizza"},"Pizza"))))}}]),t}(n.Component)),w=a(253),k=a(254),C=a(255),M=a(115),O=a(252),S=a(260),j=function(e){function t(e,a){var n;Object(o.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e,a))).updateHydration=n.updateHydration.bind(Object(d.a)(Object(d.a)(n))),n.updateHydrationRate=n.updateHydrationRate.bind(Object(d.a)(Object(d.a)(n)));return n.state={flourType:"DovesWhiteBread",hydration:67,watermass:61,flourmass:89,starterflourmass:0},n.updateHydrationRate(),n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"updateHydrationRate",value:function(){var e=this.state;switch(this.props.breadType){case"pizza":e.flourType="Type00Pasta",e.hydration=68;break;case"baguette":e.flourType="FrenchT65_mixed_with_DovesWhiteBread",e.hydration=72+5*(this.props.hydration-3);break;default:e.flourType="DovesWhiteBread",e.hydration=70+5*(this.props.hydration-3)}this.setState(e),this.updateHydration()}},{key:"updateHydration",value:function(){var e=this.state,t=this.props.doughmass-this.props.startermass;e.watermass=Math.round(t*e.hydration/(100+e.hydration)),e.flourmass=t-e.watermass,e.starterflourmass=this.props.startermass-Math.round(this.props.startermass*e.hydration/(100+e.hydration)),this.setState(e)}},{key:"componentDidMount",value:function(){this.updateHydrationRate()}},{key:"componentDidUpdate",value:function(e){this.props.breadType===e.breadType&&this.props.hydration===e.hydration||this.updateHydrationRate(),this.props.doughmass===e.doughmass&&this.props.startermass===e.startermass||this.updateHydration()}},{key:"handleChange",value:function(e){this.updateHydration()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Quantities"),r.a.createElement("span",null,"Mass of starter is ",Math.round(this.props.startermass)," g"),r.a.createElement("br",null),r.a.createElement("span",null,"Mass of flour in starter is ",Math.round(this.state.starterflourmass)," g"),r.a.createElement("br",null),r.a.createElement("span",null,"Mass of water in starter is ",Math.round(this.props.startermass-this.state.starterflourmass)," g"),r.a.createElement("h3",null,"Remaining mass "),r.a.createElement("span",null," Flour Type  ",this.state.flourType),r.a.createElement("br",null),r.a.createElement("span",null," Using Hydration  ",this.state.hydration," (bakers %)"),r.a.createElement("br",null),r.a.createElement("span",null," Mass to add to starter ",Math.round(this.props.doughmass-this.props.startermass),"g"),r.a.createElement("br",null),r.a.createElement("h2",null,"Made up of "),r.a.createElement("span",null," Flour Mass  ",Math.round(this.state.flourmass),"g"),r.a.createElement("br",null),r.a.createElement("span",null," Water Mass  ",this.state.watermass,"g"),r.a.createElement("br",null),this.props.hydration<3||"pizza"==this.props.breadType?r.a.createElement("div",null,r.a.createElement("span",null," Salt Mass  ",Math.round(.02*this.state.flourmass),"g")):r.a.createElement("div",null,r.a.createElement("h2",null,"Autolyse Made up of "),r.a.createElement("span",null," Flour Mass  ",Math.round(.8*this.state.flourmass),"g"),r.a.createElement("br",null),r.a.createElement("span",null," Water Mass  ",Math.round(.8*this.state.watermass),"g"),r.a.createElement("br",null),r.a.createElement("h2",null,"Leaven  Mix Made up of "),r.a.createElement("span",null,"Starter ",Math.round(this.props.startermass)," g plus "),r.a.createElement("br",null),r.a.createElement("span",null,"Additional Flour Mass  ",Math.round(.2*this.state.flourmass),"g"),r.a.createElement("br",null),r.a.createElement("span",null," Water for leaven Mass  ",Math.round(.15*this.state.watermass),"g"),r.a.createElement("br",null),r.a.createElement("h2",null,"Salt  Mix  "),r.a.createElement("span",null,"Salt Mass  ",Math.round(.02*this.state.flourmass),"g"),r.a.createElement("br",null),r.a.createElement("span",null," Water to dissolve salt ",Math.round(.05*this.state.watermass),"g"),r.a.createElement("br",null)))}}]),t}(r.a.Component),D=function(e){function t(e,a){return Object(o.a)(this,t),Object(h.a)(this,Object(u.a)(t).call(this,e,a))}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Approx ",Math.round(this.props.baketime[0]/6e4)," minutes for ",this.props.breadType," of this size ",r.a.createElement("br",null),"Time of ",this.props.location[0]," rise is:  ",this.props.time[0]," mins.(that is about ",Math.round(this.props.time[0]/6)/10," hours )",r.a.createElement("br",null),this.props.location.length>1?r.a.createElement("div",null,"Time of ",this.props.location[1]," rise is:  ",this.props.time[1]," mins.(that is about ",Math.round(this.props.time[1]/6)/10," hours )",r.a.createElement("br",null)):r.a.createElement("span",null),"Start at ",this.props.interfere[0],"  in ",this.props.location[0],this.props.time.length>1?r.a.createElement("span",null,r.a.createElement("br",null)," , then move to  ",this.props.location[1]," at ",this.props.interfere[1],"   "):r.a.createElement("span",null," ")," ",r.a.createElement("br",null),"Do a shape around ",this.props.interfere[1]," to achieve the desired rise  ",this.props.title,r.a.createElement("br",null))}}]),t}(r.a.Component),z=function(e){function t(e,a){var n;Object(o.a)(this,t);(n=Object(h.a)(this,Object(u.a)(t).call(this,e,a))).handleSelect=n.handleSelect.bind(Object(d.a)(Object(d.a)(n))),n.ensureDisplayOnNav=n.ensureDisplayOnNav.bind(Object(d.a)(Object(d.a)(n))),n.state={key:1};n.props.doughProps;return n.breadType=n.props.breadType,n.baketime=[n.props.baketime],n.handleSelect(1),n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"handleSelect",value:function(e){this.setState({key:e}),this.ensureDisplayOnNav(e)}},{key:"ensureDisplayOnNav",value:function(e){switch(e){case 2:this.title="In Fridge",this.time=[this.props.infridge],this.interfere=[this.props.fridgestart,this.props.fridgeshape],this.location=["fridge"];break;case 3:this.title="In Room, then Fridge",this.time=[this.props.inroom,this.props.infridge],this.interfere=[this.props.roomplusfridgestart,this.props.roomplusfridgeshape],this.location=["room","fridge"];break;case 4:this.title="In Fridge, then Room",this.time=[this.props.infridge,this.props.inroom],this.interfere=[this.props.fridgeplusroomstart,this.props.fridgeplusroomshape],this.location=["fridge","room"];break;case 1:default:this.title="In Room",this.time=[this.props.inroom],this.interfere=[this.props.roomstart,this.props.roomshape],this.location=["room"]}}},{key:"render",value:function(){return this.breadType=this.props.breadType,this.baketime=[this.props.baketime],this.ensureDisplayOnNav(this.state.key),r.a.createElement("div",null,r.a.createElement("h2",null,"Rise and Baking Time"),r.a.createElement(O.a,{activeKey:this.state.key,onSelect:this.handleSelect,id:"controlled-tab-example"},r.a.createElement(S.a,{eventKey:1,title:"In Room"},r.a.createElement(D,{start:this.start,title:this.title,baketime:this.baketime,time:this.time,interfere:this.interfere,breadType:this.breadType,location:this.location})),r.a.createElement(S.a,{eventKey:4,title:"Fridge, then Room "},r.a.createElement(D,{start:this.start,title:this.title,baketime:this.baketime,time:this.time,interfere:this.interfere,breadType:this.breadType,location:this.location}),"            "),r.a.createElement(S.a,{eventKey:3,title:"Room, then Fridge "},r.a.createElement(D,{start:this.start,title:this.title,baketime:this.baketime,time:this.time,interfere:this.interfere,breadType:this.breadType,location:this.location}),"          "),r.a.createElement(S.a,{eventKey:2,title:"In Fridge"},r.a.createElement(D,{start:this.start,title:this.title,baketime:this.baketime,time:this.time,interfere:this.interfere,breadType:this.breadType,location:this.location}),"          ")),r.a.createElement(j,{hydration:this.props.hydration,key:this.props.breadType,breadType:this.props.breadType,doughmass:this.props.doughmass,startermass:this.props.startermass}))}}]),t}(r.a.Component);function x(e,t,a){var n;return e<4||e>35||t<1||t>5e3||a<1||a>5e3?1:(n=45/(1/(Math.pow(2,(35-e)/7)*(1+Math.log2(.5)-Math.log2(t/a)))),Math.round(n))}var R=a(38),H=a.n(R),L=a(29),N=a.n(L),W=(a(244),function(e){function t(e,a){var n;Object(o.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e,a))).calcTimeToRise=function(e){e.breadType=this.props.breadType;e.proofingtimes;var t=x(e.temperature,e.startermass,e.doughmass),a=x(e.fridgetemperature,e.startermass,e.doughmass);e.proofingtimes.inroom=t,e.proofingtimes.infridge=a,e.timeToRise=t+a;try{e.desiredDateTime=Date.parse(e.desiredDate+" "+e.desiredTime)}catch(n){e.desiredDateTime=0}return isNaN(e.desiredDateTime)?e.desiredDateTime=0:(e.baketime=function(e,t){var a=0;switch(e){case"chicago":case"deeppan":a=10;break;case"pizza":case"napoletana":case"romano":a=7;break;case"roundloaf":a=Math.pow(t,1/3)/10*40;break;case"flatloaf":a=Math.pow(t,1/3)/5*40;break;case"ovalloaf":a=Math.pow(t,1/3)/7*40;break;case"smallbuns":case"baguette":a=15;break;case"largebuns":a=20;break;default:a=30}return 6e4*a}(e.breadType,e.doughmass),e.roomstart=new Date(e.desiredDateTime-e.baketime-2*e.proofingtimes.inroom*6e4).toLocaleString(),e.roomshape=new Date(e.desiredDateTime-e.baketime-6e4*e.proofingtimes.inroom).toLocaleString(),e.fridgestart=new Date(e.desiredDateTime-e.baketime-2*e.proofingtimes.infridge*6e4).toLocaleString(),e.fridgeshape=new Date(e.desiredDateTime-e.baketime-6e4*e.proofingtimes.infridge).toLocaleString(),e.roomplusfridgestart=new Date(e.desiredDateTime-e.baketime-6e4*(e.proofingtimes.infridge+e.proofingtimes.inroom)).toLocaleString(),e.roomplusfridgeshape=new Date(e.desiredDateTime-e.baketime-6e4*e.proofingtimes.infridge).toLocaleString(),e.fridgeplusroomstart=e.roomplusfridgestart,e.fridgeplusroomshape=new Date(e.desiredDateTime-e.baketime-6e4*e.proofingtimes.inroom).toLocaleString()),e},n.getValidationState=function(){var e=this.state.quantity;if(e<1)return"error";if(e>5e3)return"error";var t=this.state.size;if(t<1)return"error";if(t>5e3)return"error";var a=this.state.temperature;if(a<1)return"error";if(a>35)return"error";var n=this.state.fridgetemperature;if(n<1)return"error";if(n>35)return"error";var r=this.state.startermass;if(r<1)return"error";if(r>5e4)return"error";var s=this.state.doughmass;return s<1?"error":s>5e4?"error":"success"};n.showClass="Hide",n.handleChange=n.handleChange.bind(Object(d.a)(Object(d.a)(n))),n.handleHydrationChange=n.handleHydrationChange.bind(Object(d.a)(Object(d.a)(n))),n.handleSizeChange=n.handleSizeChange.bind(Object(d.a)(Object(d.a)(n))),n.handleWantedTimeChange=n.handleWantedTimeChange.bind(Object(d.a)(Object(d.a)(n))),n.handleWantedDateChange=n.handleWantedDateChange.bind(Object(d.a)(Object(d.a)(n))),n.handleFridgeChange=n.handleFridgeChange.bind(Object(d.a)(Object(d.a)(n))),n.handleTempChange=n.handleTempChange.bind(Object(d.a)(Object(d.a)(n))),n.setDesiredStartTime=n.setDesiredStartTime.bind(Object(d.a)(Object(d.a)(n))),n.handleStarterChange=n.handleStarterChange.bind(Object(d.a)(Object(d.a)(n))),n.handleMassChange=n.handleMassChange.bind(Object(d.a)(Object(d.a)(n))),n.handleMomentChange=n.handleMomentChange.bind(Object(d.a)(Object(d.a)(n))),n.saveState=n.saveState.bind(Object(d.a)(Object(d.a)(n))),n.hideOrShow=n.hideOrShow.bind(Object(d.a)(Object(d.a)(n))),n.state={show:!0,breadType:e.breadType,baketime:0,quantity:1,size:9,temperature:17,fridgetemperature:5,hydration:2,startermass:100,doughmass:250,moment:H()(),desiredDate:"1999-12-31",desiredTime:"23:59",desiredDateTime:0,roomstart:0,fridgestart:0,roomplusfridgestart:0,roomplusfridgeshape:0,fridgeplusroomstart:0,fridgeplusroomshape:0,proofingtimes:{inroom:0,infridge:0},timeToRise:0};var r=localStorage.getItem("doughProps");if(r){var s=JSON.parse(r);n.state=s}return n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"saveState",value:function(e){this.setState(e),localStorage.setItem("doughProps",JSON.stringify(e))}},{key:"hideOrShow",value:function(){this.saveState(function(e){return{show:!e.show}}),this.show=!this.show,this.show?this.showClass="Show":this.showClass="Hide"}},{key:"componentDidMount",value:function(){var e=new Date;e.setHours(e.getHours()+6);var t=this.state;t=this.setDesiredStartTime(e,t),t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"setDesiredStartTime",value:function(e,t){var a=e.getDate(),n=e.getMonth()+1,r=e.getFullYear(),s=e.getHours(),i=e.getMinutes();a<10&&(a="0"+a),n<10&&(n="0"+n),s<10&&(s="0"+s),i<10&&(i="0"+i);var o=r+"-"+n+"-"+a,l=s+":"+i;return t.desiredDate=o,t.desiredTime=l,t}},{key:"handleMomentChange",value:function(e){var t=this.state;console.log(e.format("DD-MM-YYYY")),this.setDesiredStartTime(e.toDate(),t),this.saveState(t)}},{key:"handleChangesToDoughRiseTime",value:function(e){var t;if((t="pizza"===e.breadType?function(e,t,a){var n=1;switch(a){case"chicago":case"deeppan":n=2;break;case"napoletana":case"romano":default:n=1}return t*n*(e*e/81)*225}(e.size,e.quantity,"napoletana"):e.doughmass)>1){if(e.doughmass=t,e.startermass>.5*t){var a=.5*t;a>1&&(e.startermass=a)}e=this.calcTimeToRise(e)}return e}},{key:"handleChange",value:function(e){var t=this.state;t.quantity=e,t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"handleHydrationChange",value:function(e){var t=this.state;t.hydration=e,t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"handleSizeChange",value:function(e){var t=this.state;t.size=e,t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"handleMassChange",value:function(e){var t=this.state;t.size=9,t.quantity=e/225,t.doughmass=e,t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"handleStarterChange",value:function(e){var t=this.state;t.startermass=e,t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"handleWantedTimeChange",value:function(e){var t=this.state;t.desiredTime=e.target.value,t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"handleWantedDateChange",value:function(e){var t=this.state;t.desiredDate=e.target.value,t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"handleFridgeChange",value:function(e){var t=this.state;t.fridgetemperature=e,t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"handleTempChange",value:function(e){var t=this.state;t.temperature=e,t=this.handleChangesToDoughRiseTime(t),this.saveState(t)}},{key:"componentDidUpdate",value:function(e){var t=this.props.breadType,a=this.state;t!==e.breadType&&(a=this.handleChangesToDoughRiseTime(a),this.saveState(a))}},{key:"render",value:function(){var e=this,t=this.props.breadType;this.state;return r.a.createElement("div",null,r.a.createElement("form",{className:"form"}),r.a.createElement("form",{className:"form"},r.a.createElement(w.a,{controlId:"formPizzaQantities",validationState:this.getValidationState()},"pizza"===t?r.a.createElement("div",null,r.a.createElement(k.a,null,"How Many Pizza's do you want?  ","pizza"===this.state.breadType),r.a.createElement(N.a,{formatMinLabel:function(e){return" Min ".concat(e," ")},formatMaxLabel:function(e){return" Max ".concat(e," ")},step:1,maxValue:15,minValue:1,value:this.state.quantity,onChange:function(t){e.handleChange(t)},onChangeComplete:function(e){return console.log(e)}}),r.a.createElement(C.a,null,"This has to be a number between 1 and 5000."),r.a.createElement(k.a,null,"How big should they be"),r.a.createElement(N.a,{formatMinLabel:function(e){return" Min ".concat(e," ")},formatMaxLabel:function(e){return" Max ".concat(e," ")},step:1,maxValue:18,minValue:7,value:this.state.size,onChange:function(t){e.handleSizeChange(t)},onChangeComplete:function(e){return console.log(e)}}),r.a.createElement(C.a,null,"This has to be a number between 7 and 18 inches.")):r.a.createElement("div",null,r.a.createElement(k.a,null,"How large do you want your loaf?"),r.a.createElement(N.a,{formatLabel:function(e){return"".concat(e," g")},formatMinLabel:function(e){return"Min ".concat(e," g")},formatMaxLabel:function(e){return"Max ".concat(e," g")},step:50,maxValue:3e3,minValue:250,value:this.state.doughmass,onChange:function(t){e.handleMassChange(t)},onChangeComplete:function(e){return console.log(e)}}),r.a.createElement(C.a,null,"This has to be a number between 1 and 5000.")),r.a.createElement("div",null," This is total mass of dough we need ",Math.round(this.state.size*this.state.size/81*this.state.quantity*225),"g"),r.a.createElement(k.a,null,"How Much Starter do you have?"),r.a.createElement(N.a,{formatMinLabel:function(e){return" Min ".concat(e," g")},formatMaxLabel:function(e){return" Max ".concat(e," g")},step:Math.round(this.state.doughmass/60),maxValue:Math.round(this.state.doughmass/2),minValue:0,value:this.state.startermass,onChange:function(t){e.handleStarterChange(t)},onChangeComplete:function(e){return console.log(e)}}),r.a.createElement(C.a,null,"This has to be a number between 10 and 5000."),r.a.createElement("div",null,r.a.createElement(k.a,null,"How much hydration ?"),r.a.createElement(N.a,{formatLabel:function(e){return e<3?"Low":e>4?"High":"Medium"},formatMinLabel:function(e){return" Low Hydration"},formatMaxLabel:function(e){return" High Hydration"},step:1,maxValue:5,minValue:1,value:this.state.hydration,onChange:function(t){e.handleHydrationChange(t)},onChangeComplete:function(e){return console.log(e)}}),r.a.createElement(C.a,null,"This has to be a number between 1 and 3."),r.a.createElement("div",{onTouchStart:this.hideOrShow},r.a.createElement("h4",null,this.state.show?r.a.createElement("span",null," + Enter the desired time"):r.a.createElement("span",null," - Close time entry"))),r.a.createElement("div",{className:this.showClass},r.a.createElement(k.a,null,"Which day do you want it"),r.a.createElement("div",{className:"wrapper medium"},r.a.createElement(M.BigInputMoment,{moment:H()(this.state.moment),showSeconds:!1,onChange:function(t){var a=e.state;a.moment=t,e.saveState(a),e.handleMomentChange(t)},locale:"en"})))),r.a.createElement(k.a,null,"How warm is the room?"),r.a.createElement(N.a,{formatMinLabel:function(e){return" Min ".concat(e," g")},formatMaxLabel:function(e){return" Max ".concat(e," g")},step:1,maxValue:35,minValue:0,value:this.state.temperature,onChange:function(t){e.handleTempChange(t)},onChangeComplete:function(e){return console.log(e)}}),r.a.createElement(C.a,null,"This has to be a number between 4 and 35."),r.a.createElement(k.a,null,"How cold is the fridge?"),r.a.createElement(N.a,{formatMinLabel:function(e){return" Min ".concat(e," g")},formatMaxLabel:function(e){return" Max ".concat(e," g")},step:1,maxValue:35,minValue:0,value:this.state.fridgetemperature,onChange:function(t){e.handleFridgeChange(t)},onChangeComplete:function(e){return console.log(e)}}),r.a.createElement(C.a,null,"This has to be a number between 4 and 35.")),r.a.createElement(z,{hydration:this.state.hydration,fridgeplusroomshape:this.state.fridgeplusroomshape,roomplusfridgeshape:this.state.roomplusfridgeshape,doughmass:this.state.doughmass,startermass:this.state.startermass,baketime:this.state.baketime,breadType:this.state.breadType,infridge:this.state.proofingtimes.infridge,fridgestart:this.state.fridgestart,fridgeshape:this.state.fridgeshape,roomshape:this.state.roomshape,roomstart:this.state.roomstart,inroom:this.state.proofingtimes.inroom,roomplusfridgestart:this.state.roomplusfridgestart,fridgeplusroomstart:this.state.fridgeplusroomstart})))}}]),t}(r.a.Component)),B=(a(246),a(248),function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(h.a)(this,Object(u.a)(t).call(this,e,a))).state={breadType:"pizza"},n.handleBreadtype=n.handleBreadtype.bind(Object(d.a)(Object(d.a)(n))),n}return Object(c.a)(t,e),Object(l.a)(t,[{key:"handleBreadtype",value:function(e){this.setState({breadType:e})}},{key:"render",value:function(){var e=r.a.createElement(m.a,null,r.a.createElement(p.a,{className:"show-grid"},r.a.createElement(f.a,{xs:12,md:8}),r.a.createElement(f.a,{xs:6,md:4})),r.a.createElement(p.a,{className:"show-grid"},r.a.createElement(f.a,{md:6,mdPush:6}),r.a.createElement(f.a,{md:6,mdPull:6})));return r.a.createElement("div",{className:"App"},r.a.createElement(T,{navExpanded:"true",breadType:this.state.breadType,onChangeBreadType:this.handleBreadtype}),this.state.breadType,r.a.createElement(W,{breadType:this.state.breadType}),e)}}]),t}(n.Component)),F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/breadandpizza/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/breadandpizza/build","/service-worker.js");F?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):K(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):K(t,e)})}}()}},[[116,2,1]]]);
//# sourceMappingURL=main.064ec250.chunk.js.map