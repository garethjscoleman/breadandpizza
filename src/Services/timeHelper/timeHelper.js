export function NearestTime( aDateTime ) {
    var sOut = "Today at ";
    try {
        var theDateTime = new Date();
        if (typeof(aDateTime)==='undefined')
        {
            theDateTime = Date.now();
        }
        else
        {
            theDateTime = new Date(aDateTime)   ;
        }
        var mins = theDateTime.getMinutes();
        var nicemins = NearestDuration(mins);
        theDateTime.setMinutes(nicemins);  
        if (theDateTime.getDate() !== (new Date(Date.now())).getDate()){
        sOut = (new Intl.DateTimeFormat('default',{month:'short',day:'numeric'}).format(theDateTime)) + " at " ; 
        }
        sOut = sOut + theDateTime.getHours().toString().padStart(2,"0") + ':' + theDateTime.getMinutes().toString().padStart(2,"0");
    }
    catch {
      console.log("Error in nearest Time  timeHelper.js");
    }
        
    return sOut  ;
}
export function NearestDurationFormatted (durationInMins){
    try {

        var hours = Math.round(durationInMins/60);
        var mins = Math.round((durationInMins - (60*hours))/5)*5;
        
        
        if (mins>0) {
            mins = mins.toString().padStart(2,"0")
            if (hours>0)
            {
                return hours + " hours " + mins + " mins";
            }
            else
            {
                return mins + " mins";
            } 
        }
        else
        {
            return hours + " hours ";
        }
    }
    catch {
      console.log("Error in nearest duration formatted  timeHelper.js");
    }
    return "Unknown"

}
export function NearestDuration (durationInMins){
    try {
        if (typeof(durationInMins)==='undefined')
        {
            return 0;
        }
        if (Math.abs(durationInMins)<5){
            return Math.round(durationInMins*2)/2 ;
        }
        if (Math.abs(durationInMins)<10){
            return Math.round(durationInMins);
        }
        if (Math.abs(durationInMins)<90)
        {
            return Math.round(durationInMins/5)*5 ;
        }
        else
        {
            return Math.round(durationInMins/5)*5
        }
    }
    catch {
      console.log("Error in nearest Duration  timeHelper.js");
    }
    return 0;
}