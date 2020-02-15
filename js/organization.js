//Variables
var rice = false;
var veggie = false;
var soup = false;
var meat = false;
var canteen = "";
var store = "";

//Organization Page
becomeOrganizerPage = function(){
    hideAllPages();
    document.getElementById("buttonOrganization").style.backgroundColor = "rgb(0, 255, 0)";
    document.getElementById("maintext").innerHTML = "Choose Location: <br>"+
    "<div class='selectLocation' id='locationNTU' onclick='displayLocation(\"NTU\")'><u>NTU</u></div>"+
    "Will be updated soon...<br><br>";
}

displayLocation = function(location){
    document.getElementById("subtext1").innerHTML = "";
    switch (location){
        case "NTU":
            //Add Food Court 1
            displayCanteens("Food Court 1", "Food Court 1<br>50 Nanyang Avenue Singapore 639798​ <br>Hall 1<br>Daily: 7am to 9pm<br>Stalls: 2 <br>Seating capacity: 305<br>");
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
    canteen = canteenName;
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
                "Availability: <div id='foodAvailability'>V</div>"
                displayIndividualStore(canteen,"Stall "+i,txt);
            }
            break;
    }
}

displayIndividualStore = function(canteenName, stallName,txt){
    document.getElementById("subtext1").innerHTML += "<div class='store'><div class='storeImg'>"+
    "<img src='img/"+canteenName+" "+stallName+".jpg' alt='Stall Img' width='200' height='170' onclick=\"displayFood('"+canteenName+","+stallName+"')\"></div>"+txt+"</div>";
    if (canteenName=="Food Court 1"){
        switch(stallName){
            case "Stall 1":
                document.getElementById("storeDescription").innerHTML = "Burger MASTER";
                document.getElementById("foodType").innerHTML = "Halal";
                break;
            case "Stall 2":
                document.getElementById("storeDescription").innerHTML = "Nicholas Club";
                document.getElementById("foodAvailability").innerHTML = "X";
                break;
        }
    }
}

displayFood = function(canteen,stallName){
    store = stallName;
    //Reset
    rice = false;
    meat = false;
    soup = false;
    veggie = false;

    //Code
    document.getElementById("subtext1").innerHTML = "Expected Food Left: <br>";
    document.getElementById("subtext1").innerHTML +=
    "<form action='/action_page.php'>"+
    "<input type='checkbox' id='riceCheck' name='Rice'>"+
    "<label for='riceCheck'> Rice <br>Estimated Amount: 5kg</label><br><br>"+
    "<input type='checkbox' id='vegCheck' name='Vegetables'>"+
    "<label for='vegeCheck'> Vegetables <br>Estimated Amount: 10kg</label><br><br>"+
    "<input type='checkbox' id='meatCheck' name='Meat'>"+
    "<label for='meatCheck'> Meat <br>Estimated Amount: 7kg</label><br><br>"+
    "<input type='checkbox' id='soupCheck' name='Soup'>"+
    "<label for='soupCheck'> Soup <br>Estimated Amount: 2kg</label><br><br>"+
    "<input type='submit' value='Search' onclick='organizationVerificationPage()'></form>";

}

organizationVerificationPage = function(){
    //Initialization
    rice = document.getElementById("riceCheck").checked;
    veggie = document.getElementById("vegCheck").checked;
    meat = document.getElementById("meatCheck").checked;
    soup = document.getElementById("soupCheck").checked;
    
    //Display Checkout
    document.getElementById("subtext1").innerHTML = "<form action='/action_page.php'>";
    //Display organization input box and verification Passcode
    document.getElementById("subtext1").innerHTML +="<b>Organization:</b> <input type='text' id='organizationName' value='Anson and Friends'></input><br>"+
    "<b>Verification Passcode:</b> <input type='text' id='verifyCode' value='Black Lightning is back'></input><br>";
    //Display food selected
    if (rice)
        document.getElementById("subtext1").innerHTML += "<b>Rice:</b> <input type='text' id='rice'></input>kg<br>";
    if (veggie)
        document.getElementById("subtext1").innerHTML += "<b>Vegetables:</b> <input type='text' id='veg'></input>kg<br>";
    if (meat)
        document.getElementById("subtext1").innerHTML += "<b>Meat:</b> <input type='text' id='meat'></input>kg<br>";
    if (soup)
        document.getElementById("subtext1").innerHTML += "<b>Soup:</b> <input type='text' id='soup'></input>kg<br>";
    //Display Time to collect and remarks
    document.getElementById("subtext1").innerHTML +="<b>Collection Time:</b> <input type='text' id='collectionTime' value='Input time to collect'></input><br>"+
    "<b>Remarks:</b> <input type='text' id='remarks' value='Input remarks'></input><br>";
    document.getElementById("subtext1").innerHTML += "<input type='submit' value='Next' onclick='viewConfirmPage()' '></form>";
}

viewConfirmPage = function(){
    //Var
    var organizationName = document.getElementById("organizationName").value;
    var foodOrdered = "";
    if (rice)
        foodOrdered += "<b>Rice:</b> "+document.getElementById("rice").value+"kg<br>";
    if (veggie)
        foodOrdered += "<b>Vegetables:</b> "+document.getElementById("veg").value+"kg<br>";
    if (meat)
        foodOrdered += "<b>Meat:</b> "+document.getElementById("meat").value+"kg<br>";
    if (soup)
         foodOrdered += "<b>Soup:</b> "+document.getElementById("soup").value+"kg<br>";
    
    //Print Confirmations
    document.getElementById("subtext1").innerHTML = "";
    document.getElementById("maintext").innerHTML = "<div class = 'centralizeText'>"+
    "<h1><u><b>Confirmation Page</u></b></h1>"+
    "Successfully ordered!<br>"+
    "ref# "+Math.random()*100000+"<br>"+
    "Organization: "+organizationName+"<br>"+
    "Food Ordered: <br>"+foodOrdered+
    "At "+canteen+", "+store+"<br>"+
    "<h1>THANK YOU!</h1>";
    

}
