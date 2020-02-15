//Special Variables
var lastDisplayText = "";
storeLastDisplayText = function(id){
    lastDisplayText = document.getElementById(id).innerHTML;
}

getLastDisplayText = function(){
    return lastDisplayText;
}

//Home Page
showHomePage = function(){
    hideAllPages();
    //document.getElementById("homePage").style.display = "inline-block";
    document.getElementById("maintext").innerHTML = 
    "<div class = imgWrapper>"+
    "<img src='img/Evee.jpg' alt='Share for Food Poster' width='200' height='200'>"+
    "</div>";

}

//List of Organization Page
showOrganizationListPage = function(){
    hideAllPages();
    //document.getElementById("homePage").style.display = "inline-block";
    document.getElementById("maintext").innerHTML = 
    "<div class = imgWrapper>"+
    "<img src='img/charmander.jpg' alt='Share for Food Poster'>"+
    "</div>";
}

//About Us Page
showAboutUsPage = function(){
    hideAllPages();
    //document.getElementById("aboutUsPage").style.display = "inline-block";
    document.getElementById("maintext").innerHTML = 
    "<div id='aboutUsText'>"+
    "<h1>Team MIA</h1>"+
    "Members of Team MIA: Fremont, Anson, Nicholas<br><br>"+
    "<b> Formal problem statement </b><br>"+
    "<b> Definition of the target</b><br>"+
    "Climate change is a change in the common weather found in a location, which can be measured as a difference in how much rain a place usually gets in a year or a change in a location's normal temperature for a month or season. "+
    "Leftover food is defined as consumables that remain unused or unconsumed.<br><br>"+
    "<b>Brief Description</b><br><br>"+
    "In 2018, the total food wastage generated is up to 763,100 tonnes in Singapore. Food waste accounts for about 10 per cent of the total waste generated in Singapore and those that are disposed of go the waste-to-energy plants for incineration.<br><br>"+
    "Our submission aims to reduce the amount of food wastage in NTU canteens/restaurants by collecting leftover food and distributing them accordingly to the relevant needy people organizations.<br><br>"+
    "<b>Outline of the approach</b><br>"+
    "Collection of the left out food from canteen/restaurant stalls<br>"+
    "- Gather a list of stalls involved in the project<br>"+
    "- Setup daily routine of collecting leftover food by their opening hours<br>"+
    "- Check-in system for leftover food<br><br>"+
    
    "<b>Sharing to the needy people organizations</b><br>"+ 
    "- Alias with the organizations for the food collection<br>"+
    "- Include expiry dates for the collected food<br>"+
    "</div>";
    ;
}

//Hide all Pages (Not needed)
hideAllPages = function(){
    document.getElementById("subtext1").innerHTML = "";
    //document.getElementById("homePage").style.display = "none";
    //document.getElementById("aboutUsPage").style.display = "none";
    //document.getElementById("organizationListPage").style.display = "none";
}