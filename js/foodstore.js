var foodStore = [];
var descriptionData, meatData, riceData, vegetableData,timeToCollect, soupData;

//Start Page
pickFoodStorePage = function () {
    hideAllPages();
    //Change button color
    document.getElementById("subtext1").innerHTML = "";
    document.getElementById("buttonFoodStores").style.backgroundColor = "rgb(0, 255, 0)";
    //Select Canteen
    document.getElementById("maintext").innerHTML = "Choose your store: ";
    document.getElementById("maintext").innerHTML += "<select id='selectedSpine'>" +
        "<option value='NorthSpine'>North Spine</option>" +
        "<option value='SouthSpine'>South Spine</option>" +
        "</select><br><br>";
    //Submit Button
    document.getElementById("maintext").innerHTML += "<input type='submit' id='checkButton' onclick='checkStore()' '>";
}

checkStore = function () {
    //Select Store
    var txt = "";
    foodStore.selectedCanteen = document.getElementById("selectedSpine").value;
    if (foodStore.selectedCanteen == "NorthSpine") {
        txt = "<option value='ChickenRice'>Chicken Rice</option>" +
            "<option value='MixedVegetable Rice'>Mixed Vegetable Rice</option>" +
            "<option value='Vegetarian'>Vegetarian</option>";
            
    }
    else {
        txt = "<option value='DuckRice'>Duck Rice</option>" +
            "<option value='NasiBriyani'>Nasi Briyani</option>";
            
    }
    console.log(foodStore.selectedCanteen);
    document.getElementById("subtext1").innerHTML = "Choose your store: <select id='selectedStore'>"+
    txt+"</select><br><br>";
    
    
    //Verification Code
    document.getElementById("maintext").innerHTML += "<b>Verification Passcode:</b> <input type='text' id='verifyCode'></input><br>";
    //Submit Button
    document.getElementById("maintext").innerHTML += "<input type='submit' id='submitButton' onclick='selectStore()' '></form>";
}

selectStore = function () {
    //Set Food Store
    foodStore.selected = document.getElementById("selectedStore").value;
    setFood();
}

const database = firebase.database();
//const usersRef = database.ref('/canteen/'+ foodStore.selectedCanteen + );

//Allows user to select leftover food amount
setFood = function () {
    document.getElementById("subtext1").innerHTML = "";
    //Display Food Store Name
    document.getElementById("maintext").innerHTML = foodStore.selected + "<br>";
    console.log('canteen/' + foodStore.selectedCanteen + '/'+ foodStore.selected);
    firebase.database().ref('canteen/' + foodStore.selectedCanteen + '/'+ foodStore.selected).once('value').then(function(snapshot){
        //descriptionData= snapshot.val().description;
        meatData = snapshot.val().meat;
        riceData = snapshot.val().rice;
        soupData = snapshot.val().soup;
        vegetableData = snapshot.val().vegetable;
        timeToCollect = snapshot.val().timeToCollect;
        //console.log(descriptionData);
        //Display Food Options
        document.getElementById("maintext").innerHTML += "<b>Rice:</b> <input type='text' id='rice' value = "+riceData+"></input>kg<br>" +
        "<b>Vegetable:</b> <input type='text' id='veg' value = "+ vegetableData+"></input>kg<br>" +
        "<b>Meat:</b> <input type='text' id='meat' value = "+ meatData+"></input>kg<br>" +
        "<b>Soup:</b> <input type='text' id='soup' value = "+soupData+"></input>kg<br>" +
        "<b>Time to Collect:</b> <input type='text' id='timeToCollect' value = "+timeToCollect+"></input><br>";

        //Display Submit Button
    document.getElementById("maintext").innerHTML += "<input type='submit' id = 'updateDatabase' onclick='foodStoreEnd()' '>";
    
});
    
}

//Confirmation of food store submission
foodStoreEnd = function () {
    var foodDelievered = "";
    //Check if nothing is donated
    if (document.getElementById("rice").value <= 0 & document.getElementById("veg").value <= 0 & document.getElementById("meat").value <= 0 & document.getElementById("soup").value <= 0) {
        document.getElementById("maintext").innerHTML = "<h1>YOU DIDN'T EVEN DONATE ANYTHING!</h1>";
        //Set Return function
        document.getElementById("maintext").innerHTML += "<input type='submit' value = 'Go Back' onclick='setFood()' '>";
    }

    //Print what is donated
    else {
        
        const newData = {
            meat: document.getElementById("meat").value,
            rice: document.getElementById("rice").value,
            soup: document.getElementById("soup").value,
            vegetable: document.getElementById("veg").value
        };
    
        const updates = {};
        updates['canteen/' + foodStore.selectedCanteen + '/'+ foodStore.selected] = newData;
        console.log(updates);
        database.ref().update(updates);

        
        //Print
        if (document.getElementById("rice").value > 0)
            foodDelievered += "<b>Rice:</b> " + document.getElementById("rice").value + "kg<br>";
        if (document.getElementById("veg").value > 0)
            foodDelievered += "<b>Vegetables:</b> " + document.getElementById("veg").value + "kg<br>";
        if (document.getElementById("meat").value > 0)
            foodDelievered += "<b>Meat:</b> " + document.getElementById("meat").value + "kg<br>";
        if (document.getElementById("soup").value > 0)
            foodDelievered += "<b>Soup:</b> " + document.getElementById("soup").value + "kg<br>";
        document.getElementById("maintext").innerHTML = "<h1>Thank you for donating!<br></h1>" + foodDelievered;
    }
}

