//Get Date-Time
getDateTime = function(){
    var d = new Date();
    var min = d.getMinutes();
    //Check if Minutes is in 1 digit
    if (min<10)minStr = "0"+min+":";
    else minStr = min+":";
    if (d.getSeconds()<10)minStr +="0"+d.getSeconds();
    else minStr +=d.getSeconds();
    document.getElementById("dateTime").innerHTML = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" "+d.getHours()+":"+minStr;

    //Set TimeOut and loop
    setTimeout(getDateTime, 1000);
}

