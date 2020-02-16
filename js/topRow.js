//Variables
var organizationNames = [
    {"name":"Food from the Heart", "address":"90 Jurong East Street 13, Singapore 609648", "link":"https://www.foodfromtheheart.sg/"},
    {"name":"TOUCH Community Services", "address":"162 Bukit Merah Central, #05-3545, Singapore 150162", "link":"https://www.touch.org.sg/"},
    {"name":"Adventist Community Services", "address":"130 Joo Seng Rd, #03-01, Singapore 368357", "link":"https://www.communityservices.org.sg/"},
];

var foodStallNames = [
    {"name":"ChickenRice", "address":"North Spine"},
    {"name":"MixedVegetableRice", "address":"North Spine"},
    {"name":"Vegetarian", "address":"North Spine"},
    {"name":"DuckRice", "address":"South Spine"},
    {"name":"NasiBriyani", "address":"South Spine"}
];

//Contact US Page
showContactUsPage = function(){
    hideAllPages();
    document.getElementById("maintext").innerHTML = "<h1>Contact Us</h1>"+
    "<img src='img/MIA.png' alt='MIA logo'><br><br>"+
    "<h2>We welcome any comments, suggestions and feedbacks.</h2>"+
    "Please do drop us an email at shareforfood@mia.com.sg or call us at +65 8765 4321 for any enquiries.";
}


//List of Organization Page
showOrganizationListPage = function(){
    hideAllPages();
    for (var i=0;i<organizationNames.length;i++){
    document.getElementById("maintext").innerHTML += "<div class='store2'><div class='storeImg'>" +
        "<a target='_blank' rel='noopener noreferrer' href = '"+organizationNames[i]["link"]+"'><img src='img/" + organizationNames[i]["name"] + ".png' alt='" + organizationNames[i]["name"] +
        "' width = '250' height ='200'></div><b>" + organizationNames[i]["name"] +"</b><br>Address: "+organizationNames[i]["address"]+"</div></a>";
    }
}

//List of Food Stalls Page
showFoodStallsListPage = function(){
    hideAllPages();
    for (var i=0;i<foodStallNames.length;i++){
        document.getElementById("maintext").innerHTML += "<div class='store'><div class='storeImg'>" +
            "<a target='_blank' rel='noopener noreferrer'><img src='img/" + foodStallNames[i]["name"] + ".jpg' alt='" + foodStallNames[i]["name"] +
             "' width = '250' height ='200'></div><b>" + foodStallNames[i]["name"] +"</b><br>Address: "+foodStallNames[i]["address"]+"</div></a>";
        }
}

//About Us Page
showAboutUsPage = function(){
    hideAllPages();
    document.getElementById("maintext").innerHTML = 
    "<div class= 'centralizeText' id='aboutUsText'>"+
    "<h1>Team MIA</h1>"+
    "<img src='img/MIA.png' alt='MIA logo'><br><br>"+
    "Members of Team MIA: Fre<b>M</b>ont, N<b>I</b>cholas, <b>A</b>nson<br><br>"+
    "<b>MISSION</b><br>"+
    "To Redistribute unsold/excess food to needy people and decrease the amount of Food Waste in Singapore with Share For Food. <br><br>"+
    "<b>VISION</b><br><br>"+
    "We aim to expand Share For Food to national scale and help on Climate Change<br><br>"+
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