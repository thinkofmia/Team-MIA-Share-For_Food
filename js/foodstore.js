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
    "<b>Rice:</b> <input type='text' id='rice' value = 0></input>kg<br>"+
    "<b>Vegetables:</b> <input type='text' id='veg' value = 0></input>kg<br>"+
    "<b>Meat:</b> <input type='text' id='meat' value = 0></input>kg<br>"+
    "<b>Soup:</b> <input type='text' id='soup' value = 0></input>kg<br>"
    //Display Submit Button
    document.getElementById("maintext").innerHTML += "<input type='submit' onclick='foodStoreEnd()' '>";
}

//Confirmation of food store submission
foodStoreEnd = function(){
    var foodDelievered = "";
    if (document.getElementById("rice").value>0)
        foodDelievered += "<b>Rice:</b> "+document.getElementById("rice").value+"kg<br>";
    if (document.getElementById("veg").value>0)
        foodDelievered += "<b>Vegetables:</b> "+document.getElementById("veg").value+"kg<br>";
    if (document.getElementById("meat").value>0)
        foodDelievered += "<b>Meat:</b> "+document.getElementById("meat").value+"kg<br>";
    if (document.getElementById("soup").value>0)
        foodDelievered += "<b>Soup:</b> "+document.getElementById("soup").value+"kg<br>";
    document.getElementById("maintext").innerHTML = "<h1>Thank You "+foodStore.selected+" for donating: <br></h1>"+foodDelievered;

}