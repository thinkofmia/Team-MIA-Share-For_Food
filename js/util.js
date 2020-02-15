//Get Date-Time
getDateTime = function(){
    var d = new Date();
    document.getElementById("dateTime").innerHTML = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes();
}