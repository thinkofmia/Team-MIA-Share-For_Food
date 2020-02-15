//Organization Page
becomeOrganizerPage = function(){
    document.getElementById("maintext").innerHTML = "Choose Location: <br>"+
    "<div class='selectLocation' id='locationNTU' onclick='displayLocation(\"NTU\")'><u>NTU</u></div>"+
    "Will be updated soon...<br><br>";
}

displayLocation = function(location){
    document.getElementById("subtext1").innerHTML = "";
    switch (location){
        case "NTU":
            //Add Food Court 1
            displayCanteens("Food Court 1", "Food Court 1<br>50 Nanyang Avenue Singapore 639798​<br>Hall 1<br>Daily: 7am to 9pm<br>Stalls: 4 | Seating capacity: 305<br>");
           break;
        default:
            document.getElementById("subtext1").innerHTML = "There is no food court here!!";
            break;
    
    }
}

displayCanteens = function(name, txt){
    //Note that name refers store name and txt is the store's flavor text
    document.getElementById("subtext1").innerHTML += "<div class='store'><div class='storeImg'>"+
    "<img src='img/"+name+".jpg' alt='Food Court 1' onclick=\"displayStores('"+name+"')\"></div>"+txt+"</div>";
}

displayStores = function(canteenName){
    document.getElementById("subtext1").innerHTML = 
    "<form action='/action_page.php'>"+
    "<input type='checkbox' id='halalCheck' name='Halal'>"+
    "<label for='halalCheck'> Halal</label><br>"+
    "<input type='checkbox' id='vegCheck' name='Vegetarian'>"+
    "<label for='vegCheck'> Vegetarian</label><br>"+
    "<input type='checkbox' id='allergyCheck' name='Allergies'>"+
    "<label for='allergyCheck'> Allergies</label><br><br>"+
    "<input type='submit' value='Search'></form>";
    var noOfStores = 0; //Number of stores in a canteen
    switch (canteenName){
        case "Food Court 1":
            noOfStores = 2;
            for (var i =1;i<=noOfStores;i++){
                txt = "<div id='storeDescription'>No Description</div>"+
                "Food Type: <div id='foodType'>None</div>"+
                "Availability: <div id='foodAvailability'>✔️</div>"
                displayIndividualStore(canteenName,"Stall "+i,txt);
            }
            break;
    }
}

displayIndividualStore = function(canteenName, stallName,txt){
    document.getElementById("subtext1").innerHTML += "<div class='store'><div class='storeImg'>"+
    "<img src='img/"+canteenName+" "+stallName+".jpg' alt='Stall Img' width='200' height='170' onclick=\"displayFood('"+canteenName+" "+stallName+"')\"></div>"+txt+"</div>";
    if (canteenName=="Food Court 1"){
        switch(stallName){
            case "Stall 1":
                document.getElementById("storeDescription").innerHTML = "Burger MASTER";
                document.getElementById("foodType").innerHTML = "Halal";
                break;
            case "Stall 2":
                document.getElementById("storeDescription").innerHTML = "Nicholas Club";
                document.getElementById("foodAvailability").innerHTML = "❌";
                break;
        }
    }
}