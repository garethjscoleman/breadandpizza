export function timeCalc(temperature, fridgetemperature,startermass,doughmass,freshyeastmass,dryyeastmass, timeinMinutes, mode ,wheatOrRye) {
    var bestrecipe ={
        achievedTime:true,
        temperature:temperature,
        fridgetemperature:fridgetemperature,
        startermass:startermass,
        doughmass:doughmass,
        freshyeastmass:freshyeastmass,
        dryyeastmass:dryyeastmass,
        fridgeroomcoldtime:0,
        fridgeroomwarmtime:0,
        mode:mode,
    }

    try {
        var iattempts = 99; 
        var totSteps = iattempts; 
        var gapToTargetTime = 1000;
        var timeToRise = 1;
        var timeToRiseinfridge = 1;
        var timeToRiseinFridgeandRoom = 1;
        var adjustmentfactor = 1;
        const wheatrise = 45;
        const ryerise = 52;
        var standardrisetime = wheatrise;
        if (wheatOrRye==='Rye')
        {
            standardrisetime = ryerise;
        }
        var newstartermass  = doughmass * Math.pow(2,-timeinMinutes/(standardrisetime*(Math.pow(2,((35-temperature)/7))))) ; 
        var newfridgestartermass = doughmass * Math.pow(2,-timeinMinutes/(standardrisetime*(Math.pow(2,((35-fridgetemperature)/7))))) ;
        var stepsize = (newfridgestartermass - newstartermass) / totSteps;
        var tempdiff = (temperature -fridgetemperature )/7
        var timeratio = Math.pow(2,tempdiff);
        var t1 = 2*timeratio*timeinMinutes/(timeratio+1)
        var t2 = (2*timeinMinutes) - t1
        var newfridgeroommass  = doughmass * Math.pow(2,-t1/(standardrisetime*(Math.pow(2,((35-fridgetemperature)/7))))) ; 

        var returnstartermass = newstartermass;
        //lets give this 20 tries at most
        do 
        {
            var newfridgeandroomstartermass = newfridgestartermass - (stepsize*iattempts);
            timeToRise = doughCalc(bestrecipe.temperature , newstartermass , bestrecipe.doughmass,bestrecipe.freshyeastmass,bestrecipe.dryyeastmass,wheatOrRye)
            timeToRiseinfridge = doughCalc(bestrecipe.fridgetemperature , newfridgestartermass , bestrecipe.doughmass,bestrecipe.freshyeastmass,bestrecipe.dryyeastmass,wheatOrRye)        
            timeToRiseinFridgeandRoom = (doughCalc(bestrecipe.fridgetemperature , newfridgeroommass , bestrecipe.doughmass,bestrecipe.freshyeastmass,bestrecipe.dryyeastmass,wheatOrRye) + doughCalc(bestrecipe.temperature , newfridgeroommass , bestrecipe.doughmass,bestrecipe.freshyeastmass,bestrecipe.dryyeastmass,wheatOrRye))/2;
            iattempts--;
            switch (mode) {
                case 'room':
                    gapToTargetTime = timeToRise -timeinMinutes;
                    bestrecipe.achievedTime = Math.abs(gapToTargetTime)<10 && timeToRise>5;
                    returnstartermass = newstartermass;
                    break;
                case 'fridge':
                    gapToTargetTime = timeToRiseinfridge -timeinMinutes;
                    bestrecipe.achievedTime = Math.abs(timeToRiseinfridge -timeinMinutes )<10 && timeToRiseinfridge>5;
                    returnstartermass = newfridgestartermass;
                    break;
                
                default:
                    gapToTargetTime = timeToRiseinFridgeandRoom -timeinMinutes
                    bestrecipe.achievedTime = Math.abs(timeToRiseinFridgeandRoom -timeinMinutes )<10 && timeToRiseinFridgeandRoom>5;
                    returnstartermass= newfridgeroommass;
                    adjustmentfactor = 1+(gapToTargetTime/(10*timeinMinutes));
                    console.log("target time: " + timeinMinutes)
                    console.log("gap to time: " + gapToTargetTime);
                    console.log("adjustment factor: " + adjustmentfactor);
                    console.log("t1: " + t1);
                    console.log("t2: " + t2);                                
                    console.log("starter mass : " + newfridgeroommass);
                    console.log(iattempts);

                    break;
            }
            
            if (timeToRise >10 && bestrecipe.achievedTime){                
                if (bestrecipe.startermass>0)
                {            
                    bestrecipe.startermass = Math.round(returnstartermass);
                }
                else
                {
                    if (bestrecipe.dryyeastmass>0)
                    {
                        bestrecipe.dryyeastmass = Math.round(returnstartermass/70);
                    }
                    else
                    {
                        bestrecipe.freshyeastmass = Math.round(returnstartermass/10);
                    }
                }
            }

        }
        while (iattempts>0 && Math.abs(gapToTargetTime)>10 && timeToRise !== 1)
    }
    catch {
        console.log("Error in timecalc  doughCalc.js");
    }

    return bestrecipe ;
}

  

export function doughCalc(temperature,startermass,doughmass,freshyeastmass,dryyeastmass ,wheatOrRye) {
    var timeinMinutes = 0;
    try {
        const wheatrise = 45;
        const ryerise = 60;
        var standardrisetime = wheatrise;
        if (wheatOrRye==='Rye')
        {
            standardrisetime = ryerise;
        }

        if (temperature<4 || temperature>35 || startermass+freshyeastmass+dryyeastmass<0 || startermass+dryyeastmass+freshyeastmass>5000 || doughmass<1 || doughmass>5000 )
        {
            //hmm something funny going on 
            return 1;
        }
        if (dryyeastmass >0 )
        {
            timeinMinutes = (standardrisetime*Math.pow(2,((35-temperature)/7))*(Math.log2(doughmass/(dryyeastmass*70))));
        }
        else
        {
            if (freshyeastmass>0){
                timeinMinutes = (standardrisetime* Math.pow(2,((35-temperature)/7))*(Math.log2(doughmass/(freshyeastmass*10))));

            }
            else
            {
            //timeinMinutes = 45/(Math.pow(2,((35-this.state.temperature)/7))*(1+Math.log2(0.5)-Math.log2(this.state.startermass/this.state.doughmass)));
            timeinMinutes = (standardrisetime*Math.pow(2,((35-temperature)/7))*(Math.log2(doughmass/startermass)));
            }    
        }
    }
    catch {
        console.log("Error in doughCalc  doughCalc.js");
    }

    return timeinMinutes;


}

export function  pizzaMass(size,number,pizzatype)
{
    var pizzamass=100;
    try{    
        var thicknessfactor = 1;
        switch (pizzatype) {
            case 'chicago': 
            case 'deeppan': 
                thicknessfactor= 2;            
                    break;
            case 'napoletana':
            case 'romano': 
                thicknessfactor= 1;            
                break;
        
            default:
                thicknessfactor= 1;
                break;
        }
        //A 9 inch pizza with thin base (romano?)  should be made from 225g dough
        pizzamass = number*thicknessfactor * (size*size/81)*225 ; 
    }
    catch {
        console.log("Error in pizzamass  doughCalc.js");
    }

    return pizzamass;

}

export function  bakeTime(type,mass)
{
    var time = 0;
    try{    
        switch (type) {
            case 'chicago': 
            case 'deeppan': 
                time =10;            
                    break;
            case 'Pizza':
            case 'napoletana':
            case 'romano': 
                time=7;            
                break;
            case 'Round Loaf': 
                time=  ((Math.pow(mass,1/3))/10)*40;            
                break;
            case 'flatloaf': 
                time=((Math.pow(mass,1/3))/5)*40;            
                break;
            case 'ovalloaf': 
                time =((Math.pow(mass,1/3))/7)*40;            
                break;
            case 'Rolls': 
                time= 15;            
                break;
                case 'baguette': 
                time= 15;            
                break;
            case 'largebuns': 
                time= 20;            
                break;
            default:
                time= 30;
                break;
        }
    }
    catch {
        console.log("Error in baketime  doughCalc.js");
    }

    return 60*1000 * time;
 }