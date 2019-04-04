export function doughCalc(temperature,startermass,doughmass,freshyeastmass,dryyeastmass) {


    var timeinMinutes = 0;
    if (temperature<4 || temperature>35 || startermass+freshyeastmass+dryyeastmass<1 || startermass+dryyeastmass+freshyeastmass>5000 || doughmass<1 || doughmass>5000 )
    {
        //hmm something funny going on 
        return 1;
    }
    if (dryyeastmass >0 )
    {
        timeinMinutes = (45)/(1/(Math.pow(2,((35-temperature)/7))*(1+Math.log2(0.5)-Math.log2((dryyeastmass*70)/doughmass))));
    }
    else
    {
        if (freshyeastmass>0){
            timeinMinutes = (45)/(1/(Math.pow(2,((35-temperature)/7))*(1+Math.log2(0.5)-Math.log2((freshyeastmass*10)/doughmass))));

        }
        else
        {
        //timeinMinutes = 45/(Math.pow(2,((35-this.state.temperature)/7))*(1+Math.log2(0.5)-Math.log2(this.state.startermass/this.state.doughmass)));
        timeinMinutes = (45)/(1/(Math.pow(2,((35-temperature)/7))*(1+Math.log2(0.5)-Math.log2(startermass/doughmass))));
        }    
    }
    return Math.round(timeinMinutes);


}

export function  pizzaMass(size,number,pizzatype)
{
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
    var pizzamass = number*thicknessfactor * (size*size/81)*225 ; 
    return pizzamass;

}

export function  bakeTime(type,mass)
{
    var time = 0;
    switch (type) {
        case 'chicago': 
        case 'deeppan': 
            time =10;            
                break;
        case 'pizza':
        case 'napoletana':
        case 'romano': 
            time=7;            
            break;
        case 'roundloaf': 
            time=  ((Math.pow(mass,1/3))/10)*40;            
            break;
        case 'flatloaf': 
            time=((Math.pow(mass,1/3))/5)*40;            
            break;
        case 'ovalloaf': 
            time =((Math.pow(mass,1/3))/7)*40;            
            break;
        case 'smallbuns': 
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
    return 60*1000 * time;
 }