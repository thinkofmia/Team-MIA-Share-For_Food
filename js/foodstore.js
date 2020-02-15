var foodStore = [];

//Start Page
pickFoodStorePage = function(){
    hideAllPages();
    //Change button color
    document.getElementById("buttonFoodStores").style.backgroundColor = "rgb(0, 255, 0)";
    //Select Store
    document.getElementById("maintext").innerHTML = "Choose your store: ";
    document.getElementById("maintext").innerHTML += "<select id='selectedStore'>"+
        "<option value='Nicholas Club'>Nicholas Club</option>"+
        "<option value='Anson & Friends'>Anson & Friends</option>"+
        "<option value='Wonder Man'>Wonder Man</option>"+
        "<option value='Captain Singapore'>Captain Singapore</option>"+
        "</select><br><br>";
    //Verification Code
    document.getElementById("maintext").innerHTML +="<b>Verification Passcode:</b> <input type='text' id='verifyCode'></input><br>";
    //Submit Button
    document.getElementById("maintext").innerHTML += "<input type='submit' onclick='setFood()' '></form>";
}

//Allows user to select leftover food amount
setFood = function(){
    foodStore.selected = document.getElementById("selectedStore").value;
    //Display Food Store Name
    document.getElementById("maintext").innerHTML = foodStore.selected+"<br>"+
    //Display Food Options
    "<b>Rice:</b> <input type='text' id='rice'></input>kg<br>"+
    "<b>Vegetables:</b> <input type='text' id='veg'></input>kg<br>"+
    "<b>Meat:</b> <input type='text' id='meat'></input>kg<br>"+
    "<b>Soup:</b> <input type='text' id='soup'></input>kg<br>"
    //Display Submit Button
    document.getElementById("maintext").innerHTML += "<input type='submit' onclick='foodStoreEnd()' '>";
    ;
}

//Confirmation of food store submission
foodStoreEnd = function(){
    document.getElementById("maintext").innerHTML = "<h1>Thank You "+foodStore.selected+"!";
}