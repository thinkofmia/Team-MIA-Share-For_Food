//Special Variables
var lastDisplayText = "";
storeLastDisplayText = function(id){
    lastDisplayText = document.getElementById(id).innerHTML;
}
//Hallo Anson
getLastDisplayText = function(){
    return lastDisplayText;
}

//Home Page
showHomePage = function(){
    hideAllPages();
    document.getElementById("maintext").innerHTML = 
    "<div class = imgWrapper>"+
    "<img src='img/pikaevee.gif' alt='Share for Food Poster' width='400' height='200'>"+
    "</div>";

}

//Hide all Pages
hideAllPages = function(){
    document.getElementById("subtext1").innerHTML = "";
    document.getElementById("maintext").innerHTML = "";
    document.getElementById("buttonOrganization").style.backgroundColor = "rgb(252, 189, 95)";
    document.getElementById("buttonFoodStores").style.backgroundColor = "rgb(252, 189, 95)";
}