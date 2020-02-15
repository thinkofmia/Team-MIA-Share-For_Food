//Variables
var rice = false;
var veggie = false;
var soup = false;
var meat = false;
var canteen = "";
var store = "";

//Organization Page
becomeOrganizerPage = function () {
    //Page Effects
    hideAllPages();
    document.getElementById("buttonOrganization").style.backgroundColor = "rgb(0, 255, 0)";
    //Display available locations eg.NTU
    document.getElementById("maintext").innerHTML = "Choose Location: <br>" +
        "<div class='selectLocation' id='locationNTU' onclick='displayLocation(\"NTU\")'><u>NTU</u></div>" +
        "Will be updated soon...<br><br>";
}

//Display the location of the selected Campus
displayLocation = function (location) {
    document.getElementById("subtext1").innerHTML = "";
    switch (location) {
        //NTU Selected
        case "NTU":
            //North Spine
            displayCanteens("North Spine", "North S​​pine Food Court<br>Stalls: 3<br>Seating capacity: 838<br>");
            //South Spine
            displayCanteens("South Spine", "South Spine Food Court<br>Stalls: 2<br>Seating capacity: 830<br>");

            break;
        default:
            document.getElementById("subtext1").innerHTML = "There is no food court here!!";
            break;

    }
}

//Display Canteens in boxes
displayCanteens = function (name, txt) {
    //Note that name refers store name and txt is the store's flavor text
    document.getElementById("subtext1").innerHTML += "<div class='store'><div class='storeImg'>" +
        "<img src='img/" + name + ".jpg' alt='" + name + "' onclick=\"displayStores('" + name + "')\"></div>" + txt + "</div>";
}

//Display Stores in boxes
displayStores = function (canteenName) {
    //Save Selected Canteen Name
    canteen = canteenName;
    //Check boxes for Halal, Veg and Allergies
    document.getElementById("subtext1").innerHTML =
        "<form>"+
        "<input type='checkbox' id='halalCheck' name='Halal'>" +
        "<label for='halalCheck'> Halal</label> " +
        "<input type='checkbox' id='vegCheck' name='Vegetarian'>" +
        "<label for='vegCheck'> Vegetarian</label> " +
        "<input type='checkbox' id='allergyCheck' name='Allergies'>" +
        "<label for='allergyCheck'> Allergies</label> " +
        "<input type='submit' value='Search'></form>";

    var noOfStores = 0; //Number of stores in a canteen

    //Check which Canteen it is
    switch (canteen) {
        //Display Stores in North Spine
        case "North Spine":
            noOfStores = 3;
            displayIndividualStore("Nicholas Club");
            displayIndividualStore("Anson & Friends");
            displayIndividualStore("Morgan J Freemont");
            break;
        //By Default display South Spine
        default:
            noOfStores = 2;
            displayIndividualStore("Wonder Man");
            displayIndividualStore("Captain Singapore");
            break;
    }
}

//Display each store in boxes
displayIndividualStore = function (stallName) {
    //Default txt
    var txt = "<div id='storeDescription" + stallName + "'>No Description</div>" +
        "Food Type: <div id='foodType" + stallName + "'>None</div>" +
        "Availability: <div id='foodAvailability" + stallName + "'>Yes</div>";
    document.getElementById("subtext1").innerHTML += "<div class='store'><div class='storeImg'>" +
        "<img src='img/" + stallName + ".jpg' alt='Stall Img' width='290' height='200' onclick=\"displayFood('" + stallName + "')\"></div>" + txt + "</div>";
    //Check stallName and print accordingly
    switch (stallName) {
        case "Anson & Friends":
            document.getElementById("storeDescription" + stallName).innerHTML = "AAA";
            document.getElementById("foodType" + stallName).innerHTML = "Halal";
            document.getElementById("foodAvailability" + stallName).innerHTML = "Yes";
            break;
        case "Nicholas Club":
            document.getElementById("storeDescription" + stallName).innerHTML = "Nicholas Club";
            document.getElementById("foodType" + stallName).innerHTML = "Non-Halal";
            document.getElementById("foodAvailability" + stallName).innerHTML = "Yes";
            break;
        case "Wonder Man":
            document.getElementById("storeDescription" + stallName).innerHTML = "WW";
            document.getElementById("foodType" + stallName).innerHTML = "Vegetarian";
            document.getElementById("foodAvailability" + stallName).innerHTML = "Yes";
            break;
        case "Captain Singapore":
            document.getElementById("storeDescription" + stallName).innerHTML = "Majulah Ahoy";
            document.getElementById("foodType" + stallName).innerHTML = "Non-Halal";
            document.getElementById("foodAvailability" + stallName).innerHTML = "Yes";
            break;
        case "Morgan J Freemont":
            document.getElementById("storeDescription" + stallName).innerHTML = "Morgan J Freemont";
            document.getElementById("foodType" + stallName).innerHTML = "Non-Halal";
            document.getElementById("foodAvailability" + stallName).innerHTML = "Yes";
            break;
    }
}

//Display Food available in each store
displayFood = function (stallName) {
    //save the visited store
    store = stallName;
    //Reset global variables
    rice = false;
    meat = false;
    soup = false;
    veggie = false;

    //Display Left Over Food Available in check boxes
    document.getElementById("subtext1").innerHTML = "Expected Food Left: <br>";
    document.getElementById("subtext1").innerHTML +=
        //Display Rice
        "<input type='checkbox' id='riceCheck' name='Rice'>" +
        "<label for='riceCheck'> Rice <br>Estimated Amount: 5kg</label><br><br>" +
        //Display Vegetables
        "<input type='checkbox' id='vegCheck' name='Vegetables'>" +
        "<label for='vegeCheck'> Vegetables <br>Estimated Amount: 10kg</label><br><br>" +
        //Display Meat
        "<input type='checkbox' id='meatCheck' name='Meat'>" +
        "<label for='meatCheck'> Meat <br>Estimated Amount: 7kg</label><br><br>" +
        //Display Soup
        "<input type='checkbox' id='soupCheck' name='Soup'>" +
        "<label for='soupCheck'> Soup <br>Estimated Amount: 2kg</label><br><br>" +
        //The ones that are checked will be available for input later
        "<input type='submit' value='Search' onclick='organizationVerificationPage()'>";

}

organizationVerificationPage = function () {
    //Initialization
    //Check which variables are checked
    rice = document.getElementById("riceCheck").checked;
    veggie = document.getElementById("vegCheck").checked;
    meat = document.getElementById("meatCheck").checked;
    soup = document.getElementById("soupCheck").checked;

    //Display Checkout
    document.getElementById("subtext1").innerHTML = "<form action='/action_page.php'>";
    //Display organization input box and verification Passcode
    document.getElementById("subtext1").innerHTML += "<b>Organization:</b> <input type='text' id='organizationName' value='Anson and Friends'></input><br>" +
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
    document.getElementById("subtext1").innerHTML += "<b>Collection Time:</b> <input type='text' id='collectionTime' value='Input time to collect'></input><br>" +
        "<b>Remarks:</b> <input type='text' id='remarks' value='Input remarks'></input><br>";
    document.getElementById("subtext1").innerHTML += "<input type='submit' value='Next' onclick='viewConfirmPage()' '></form>";
}

viewConfirmPage = function () {
    //Remember Organization Name
    var organizationName = document.getElementById("organizationName").value;
    //Create list of food submitted
    var foodOrdered = "";
    if (rice)
        foodOrdered += "<b>Rice:</b> " + document.getElementById("rice").value + "kg<br>";
    if (veggie)
        foodOrdered += "<b>Vegetables:</b> " + document.getElementById("veg").value + "kg<br>";
    if (meat)
        foodOrdered += "<b>Meat:</b> " + document.getElementById("meat").value + "kg<br>";
    if (soup)
        foodOrdered += "<b>Soup:</b> " + document.getElementById("soup").value + "kg<br>";

    //Print Confirmations Page
    document.getElementById("subtext1").innerHTML = "";
    document.getElementById("maintext").innerHTML = "<div class = 'centralizeText'>" +
        "<h1><u><b>Confirmation Page</u></b></h1>" +
        "Successfully ordered!<br>" +
        "ref# " + Math.random() * 100000 + "<br>" +
        "Organization: " + organizationName + "<br>" +
        "Food Ordered: <br>" + foodOrdered +
        "At " + canteen + ", " + store + "<br>" +
        "<h1>THANK YOU!</h1>";


}
