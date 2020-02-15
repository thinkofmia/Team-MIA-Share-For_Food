//Special Variables
var lastDisplayText = "";
storeLastDisplayText = function(id){
    lastDisplayText = document.getElementById(id).innerHTML;
}

getLastDisplayText = function(){
    return lastDisplayText;
}
//Contact US Page
showContactUsPage = function(){
    hideAllPages();
    document.getElementById("maintext").innerHTML = "<h1>Contact Us</h1>"+
    "<h2>We welcome any comments, suggestions and feedbacks.</h2>"+
    "Please do drop us an email at shareforfood@mia.com.sg or call us at +65 8765 4321 for any enquiries.";
}

//Home Page
showHomePage = function(){
    hideAllPages();
    //document.getElementById("homePage").style.display = "inline-block";
    document.getElementById("maintext").innerHTML = 
    "<div class = imgWrapper>"+
    "<img src='img/pikaevee.gif' alt='Share for Food Poster' width='400' height='200'>"+
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
    "<div class= 'centralizeText' id='aboutUsText'>"+
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
    document.getElementById("maintext").innerHTML = "";
    document.getElementById("buttonOrganization").style.backgroundColor = "rgb(252, 189, 95)";
    document.getElementById("buttonFoodStores").style.backgroundColor = "rgb(252, 189, 95)";
    //document.getElementById("homePage").style.display = "none";
    //document.getElementById("aboutUsPage").style.display = "none";
    //document.getElementById("organizationListPage").style.display = "none";
}